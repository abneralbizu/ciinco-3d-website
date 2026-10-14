// CIIN Co. Cosmos: entry point.
import {
  ACESFilmicToneMapping, Clock, HalfFloatType, LinearFilter, LinearMipmapLinearFilter, LoadingManager, Matrix4,
  NoColorSpace, PerspectiveCamera, Quaternion, Ray, RepeatWrapping, Scene, SRGBColorSpace,
  TextureLoader, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget,
} from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { buildWorld, LAYOUT } from './world.js';
import { sampleJourney, CHAPTERS, KEYFRAMES } from './journey.js';
import { initUI, setLoader, finishLoading, reducedMotion } from './ui.js';
import { finalPass } from './shaders.js';

const html = document.documentElement;
html.classList.add('js');
const bus = {};
const { chapters } = initUI(bus);

// ---------------------------------------------------------------------------
// Capability & quality
// ---------------------------------------------------------------------------
function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch (e) { return false; }
}
const params = new URLSearchParams(location.search);
const shortSide = Math.min(screen.width, screen.height);
const quality = {
  low: params.has('low') || shortSide < 700 || (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4,
};
const maxDPR = quality.low ? 1.5 : 1.75;


function startScrollOnly() {
  // Still keep nav/system map in sync without the 3D scene.
  const tick = () => { const p = progressFromScroll(); bus.setProgress(p, Math.round(p), null); requestAnimationFrame(tick); };
  computeAnchors();
  window.addEventListener('resize', computeAnchors);
  tick();
}

// ---------------------------------------------------------------------------
// Scroll → chapter progress
// ---------------------------------------------------------------------------
let anchors = [];
function computeAnchors() {
  const vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  anchors = chapters.map((c, i) => {
    if (i === 0) return 0;
    const r = c.getBoundingClientRect();
    const top = r.top + window.scrollY;
    return Math.min(max, Math.max(0, top + r.height / 2 - vh / 2));
  });
  // keep strictly increasing
  for (let i = 1; i < anchors.length; i++) anchors[i] = Math.max(anchors[i], anchors[i - 1] + 1);
}
bus.anchorFor = (i) => anchors[i] ?? 0;
let pinnedP = null; // debug: ?p=2.0 pins the camera to a chapter
function progressFromScroll() {
  if (pinnedP !== null) return pinnedP;
  const y = window.scrollY;
  if (y <= anchors[0]) return 0;
  for (let i = 0; i < anchors.length - 1; i++) {
    if (y < anchors[i + 1]) return i + (y - anchors[i]) / (anchors[i + 1] - anchors[i]);
  }
  return anchors.length - 1;
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
function boot() {
  const canvas = document.getElementById('cosmos');
  const renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  let dpr = Math.min(window.devicePixelRatio || 1, maxDPR);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const camera = new PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 12000);

  // ---- Textures ------------------------------------------------------------
  const manager = new LoadingManager();
  let loadFrac = 0;
  manager.onProgress = (_, loaded, total) => { loadFrac = loaded / total; setLoader(loadFrac * 0.92); };
  const loader = new TextureLoader(manager);
  const T = 'assets/textures/';
  const big = !quality.low;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const load = (file, { srgb = true, repeat = false } = {}) => {
    const t = loader.load(T + file);
    t.colorSpace = srgb ? SRGBColorSpace : NoColorSpace;
    t.anisotropy = Math.min(8, maxAniso);
    t.minFilter = LinearMipmapLinearFilter;
    if (repeat) t.wrapS = RepeatWrapping;
    return t;
  };
  const noMip = (t) => { t.generateMipmaps = false; t.minFilter = LinearFilter; return t; };
  const tex = {
    sky: noMip(load(big ? 'skybox.webp' : 'skybox-2k.webp')),
    earthDay: load(big ? 'earth-day.webp' : 'earth-day-2k.webp'),
    earthMasks: load(big ? 'earth-masks.webp' : 'earth-masks-2k.webp', { srgb: false }),
    earthClouds: load('earth-clouds.webp', { srgb: false, repeat: true }),
    gas: load('gas-giant.webp', { repeat: true }),
    ring: load('ring.png'),
    haven: load('haven.webp'),
    havenClouds: load('haven-clouds.webp', { srgb: false, repeat: true }),
    moon: load('moon.webp'),
    sun: load('sun.png'),
    glow: load('glow.png'),
    ghost: load('ghost.png'),
  };

  const world = buildWorld(scene, tex, quality);
  world.ghosts.forEach((g) => scene.add(g.mesh));

  // ---- Post-processing -------------------------------------------------
  const rt = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: quality.low ? 0 : 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(dpr);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.62, 0.5, 1.0);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const final = new ShaderPass(finalPass);
  composer.addPass(final);
  world.uPixelRatio.value = dpr;

  // ---- Labels (HTML projected onto the scene) ---------------------------
  const labelRoot = document.getElementById('labels');
  const mkLabel = (cls, htmlStr) => {
    const el = document.createElement('div');
    el.className = `label ${cls}`;
    el.innerHTML = htmlStr;
    labelRoot.appendChild(el);
    return el;
  };
  const officeLabels = world.pins.map((p) => ({
    pin: p,
    el: mkLabel('label-office', `<span class="dot"></span><span class="stem"></span><span class="txt"><b>${p.name}</b><small>${p.sub}</small></span>`),
  }));
  const typeLabels = world.beacons.map((b) => ({ b, el: mkLabel('label-type', `<span class="dot"></span><span>${b.name}</span>`) }));
  const nodeNames = Array.from(document.querySelectorAll('#consulting li')).map((li) => li.textContent.trim());
  const nodeLabels = world.constellation.nodes.map((n, i) => ({ n, el: mkLabel('label-node', `<span class="num">${String(i + 1).padStart(2, '0')}</span><span class="name">${nodeNames[i] || ''}</span>`) }));

  let hotType = -1, hotNode = -1, hotOffice = null;
  bus.hotType = (i) => { hotType = i; bus.markType(i); };
  bus.hotNode = (i) => { hotNode = i; bus.markNode(i); };
  bus.hotOffice = (id) => { hotOffice = id; bus.markOffice(id); };

  // ---- Pointer ------------------------------------------------------------
  const pointer = { x: 0, y: 0, sx: 0, sy: 0, px: -100, py: -100, inside: false, overUI: true };
  const cursor = document.getElementById('cursor');
  const cursorLabel = document.getElementById('cursor-label');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (finePointer) document.body.classList.add('has-cursor');
  const UI_SEL = 'a, button, input, select, textarea, label, summary, [role="button"], iframe';
  const TEXT_SEL = 'p, h1, h2, h3, li, dt, dd, address, form, .agent, .chips, legend, .offices';
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    pointer.px = e.clientX; pointer.py = e.clientY;
    pointer.inside = true;
    const t = e.target instanceof Element ? e.target : null;
    const overLink = !!(t && t.closest(UI_SEL));
    pointer.overUI = overLink || !!(t && t.closest(TEXT_SEL)) || !!(t && t.closest('.site-header, .system-map, .site-footer'));
    cursor.classList.toggle('is-link', overLink);
  }, { passive: true });
  document.addEventListener('pointerleave', () => { pointer.inside = false; });
  let worldHit = null;
  window.addEventListener('click', (e) => {
    if (!worldHit || pointer.overUI) return;
    const t = e.target instanceof Element ? e.target : null;
    if (t && t.closest(UI_SEL)) return;
    bus.goToChapter(worldHit.chapter);
  });

  // ---- Resize ------------------------------------------------------------
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(dpr);
    composer.setSize(w, h);
    world.uPixelRatio.value = dpr;
    computeAnchors();
  }
  window.addEventListener('resize', resize);
  new ResizeObserver(() => computeAnchors()).observe(document.querySelector('main'));
  if (document.fonts) document.fonts.ready.then(computeAnchors);
  computeAnchors();

  // ---- State --------------------------------------------------------------
  const clock = new Clock();
  const frame = { pos: new Vector3(), look: new Vector3(), ox: 0, oy: 0, fov: 42, leg: 0 };
  let p = progressFromScroll();
  let pSmooth = p;
  let introT = reducedMotion.matches ? 1 : 0;
  let started = false;
  const camPrev = new Vector3();
  const vel = new Vector3();
  const tmp = new Vector3(), tmp2 = new Vector3(), tmpQ = new Quaternion(), inv = new Matrix4();
  const ray = new Ray();
  const sunA = new Vector3(0.36, -0.04, -0.93).normalize();   // just below the limb (intro)
  const sunB = new Vector3(0.36, 0.27, -0.9).normalize();  // sunrise
  const sunC = new Vector3(-0.88, 0.28, 0.42).normalize(); // over the Americas
  const parallax = new Vector2();
  let perf = { frames: 0, acc: 0, checked: 0 };
  let running = true;
  let lastUI = 0;

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { clock.getDelta(); requestAnimationFrame(loop); }
  });

  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const weight = (c) => Math.max(0, 1 - Math.abs(pSmooth - c) * 1.6);

  function projectLabel(el, worldPos, on, dx = 0, dy = 0) {
    tmp.copy(worldPos).project(camera);
    const visible = on && tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1;
    el.classList.toggle('is-on', visible);
    if (!visible) return;
    const x = (tmp.x * 0.5 + 0.5) * window.innerWidth + dx;
    const y = (-tmp.y * 0.5 + 0.5) * window.innerHeight + dy;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-3px, -50%)`;
  }
  // Is worldPos hidden behind a sphere (center, r) from the camera?
  function occluded(worldPos, center, r) {
    tmp2.copy(worldPos).sub(camera.position);
    const dist = tmp2.length();
    tmp2.divideScalar(dist);
    ray.set(camera.position, tmp2);
    const hit = ray.intersectSphere({ center, radius: r }, tmp);
    return !!hit && camera.position.distanceTo(tmp) < dist - 0.01;
  }

  // ---- Loop --------------------------------------------------------------
  function loop() {
    if (!running) return;
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    world.uTime.value = time;
    final.uniforms.uTime.value = reducedMotion.matches ? 0 : time;

    // progress
    p = progressFromScroll();
    const snap = pinnedP !== null;
    const k = reducedMotion.matches ? 12 : 3.4;
    pSmooth += (p - pSmooth) * (1 - Math.exp(-dt * k));
    if (Math.abs(p - pSmooth) < 1e-4 || pinnedP !== null) pSmooth = p;
    if (started && introT < 1) introT = Math.min(1, introT + dt / 4.2);
    const intro = 1 - Math.pow(1 - introT, 3);

    // camera
    const aspect = window.innerWidth / window.innerHeight;
    sampleJourney(pSmooth, aspect, frame);
    if (intro < 1) {
      // opening dolly: drift in from deep space toward the sunrise
      const back = 1 - intro;
      frame.pos.add(tmp.set(0, -6 * back, 46 * back));
    }
    if (!reducedMotion.matches && finePointer) {
      parallax.x += (pointer.x - parallax.x) * (1 - Math.exp(-dt * 2.5));
      parallax.y += (pointer.y - parallax.y) * (1 - Math.exp(-dt * 2.5));
    }
    camera.position.copy(frame.pos);
    camera.lookAt(frame.look);
    const dist = frame.pos.distanceTo(frame.look);
    tmp.set(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(parallax.x * dist * 0.025);
    tmp2.set(0, 1, 0).applyQuaternion(camera.quaternion).multiplyScalar(parallax.y * dist * 0.018);
    camera.position.add(tmp).add(tmp2);
    camera.lookAt(frame.look);
    camera.fov = frame.fov;
    const W = window.innerWidth, H = window.innerHeight;
    camera.setViewOffset(W, H, -frame.ox * W, frame.oy * H, W, H);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // velocity → warp streaks
    vel.copy(camera.position).sub(camPrev).divideScalar(Math.max(dt, 1e-3));
    camPrev.copy(camera.position);
    const speed = vel.length();
    const warpOn = reducedMotion.matches ? 0 : smooth(60, 520, speed);
    world.warp.uniforms.uVel.value.copy(vel).multiplyScalar(0.05);
    world.warp.uniforms.uStrength.value += (warpOn * 0.9 - world.warp.uniforms.uStrength.value) * 0.15;

    // Earth & sun
    const sunRise = smooth(0, 1, pSmooth);
    world.earthSun.copy(sunA).lerp(sunB, intro).lerp(sunC, sunRise).normalize();
    world.earth.group.rotation.y = 0.06 * Math.sin(time * 0.05) - 0.05;
    world.moon.position.set(Math.cos(time * 0.02 + 2.2) * 44, 9 + Math.sin(time * 0.02) * 4, Math.sin(time * 0.02 + 2.2) * 44);
    world.sun.position.copy(camera.position).addScaledVector(world.earthSun, 2600);
    world.sun.quaternion.copy(camera.quaternion);
    world.sunGlow.position.copy(camera.position).addScaledVector(world.earthSun, 2700);
    world.sunGlow.quaternion.copy(camera.quaternion);
    const sunFade = 1 - smooth(0.55, 1.1, pSmooth);
    world.sun.material.uniforms.uIntensity.value = 4.5 * sunFade;
    world.sunGlow.material.uniforms.uIntensity.value = 0.45 * sunFade;
    world.pins.forEach((pin) => { pin.mat.uniforms.uOn.value = weight(1) * (hotOffice === pin.id ? 1.8 : 1); });

    // lens flare
    {
      tmp.copy(world.sun.position).project(camera);
      const onScreen = tmp.z < 1 && Math.abs(tmp.x) < 1.3 && Math.abs(tmp.y) < 1.3;
      ray.set(camera.position, world.earthSun);
      const e = LAYOUT.earth;
      const oc = tmp2.copy(e.pos).sub(camera.position);
      const tca = oc.dot(world.earthSun);
      const d = Math.sqrt(Math.max(0, oc.lengthSq() - tca * tca));
      const vis = (tca > 0 ? smooth(e.r * 1.0, e.r * 1.09, d) : 1) * (onScreen ? 1 : 0) * sunFade;
      const sx = tmp.x, sy = tmp.y;
      const halfH = Math.tan((camera.fov * Math.PI) / 360) * 10;
      for (const g of world.ghosts) {
        const gx = sx - 2 * sx * g.t, gy = sy - 2 * sy * g.t;
        tmp.set(gx, gy, 0.5).unproject(camera).sub(camera.position).normalize();
        g.mesh.position.copy(camera.position).addScaledVector(tmp, 10);
        g.mesh.quaternion.copy(camera.quaternion);
        g.mesh.scale.setScalar(g.s * halfH * 2);
        g.mesh.material.uniforms.uIntensity.value = vis * g.k;
      }
    }

    // Commercial station
    world.station.rotateZ(dt * 0.008);
    const wC = weight(2);
    typeLabels.forEach((t, i) => {
      tmp.copy(t.b.local);
      world.station.localToWorld(tmp);
      const wp = tmp.clone();
      const hidden = occluded(wp, world.giant.center, world.giant.r * 1.02);
      t.el.classList.toggle('is-hot', hotType === i);
      projectLabel(t.el, wp, wC > 0.55 && !hidden && aspect > 0.9);
    });

    // Haven moons
    {
      const h = world.haven;
      const a1 = time * 0.05, a2 = -time * 0.08 + 1.3;
      h.moons[0].position.set(h.center.x + Math.cos(a1) * 40, h.center.y + Math.sin(a1) * 9, h.center.z + Math.sin(a1) * 40);
      h.moons[1].position.set(h.center.x + Math.cos(a2) * 31, h.center.y + 6 + Math.sin(a2) * 4, h.center.z + Math.sin(a2) * 31);
      h.planet.rotation.y += dt * 0.006;
    }

    // Constellation
    {
      const c = world.constellation;
      const target = smooth(3.25, 3.95, pSmooth) * (1 - smooth(4.55, 5.0, pSmooth));
      c.uDraw.value += (target * 1.05 - c.uDraw.value) * (snap ? 1 : 1 - Math.exp(-dt * 2.2));
      c.group.visible = c.uDraw.value > 0.001;
      c.uHot.value = hotNode;
      c.group.rotation.y = Math.sin(time * 0.04) * 0.15 + parallax.x * 0.04;
      const wA = weight(4);
      nodeLabels.forEach((nl, i) => {
        tmp.copy(nl.n);
        c.group.localToWorld(tmp);
        nl.el.classList.toggle('is-hot', hotNode === i);
        const show = wA > 0.55 && (aspect > 0.9 ? true : hotNode === i);
        projectLabel(nl.el, tmp.clone(), show && c.uDraw.value > (i / 15) + 0.05, 10, 0);
      });
    }

    // Galaxy
    {
      const g = world.galaxy;
      g.uReveal.value += (smooth(4.1, 4.9, pSmooth) - g.uReveal.value) * (snap ? 1 : 1 - Math.exp(-dt * 1.5));
      g.core.material.uniforms.uIntensity.value = 1.1 * g.uReveal.value;
      g.group.visible = pSmooth > 3.2;
      g.core.quaternion.copy(g.group.quaternion).invert().multiply(camera.quaternion);
      // cursor gravity well
      let on = 0;
      if (pointer.inside && !pointer.overUI && pSmooth > 4.5 && finePointer) {
        tmp.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
        inv.copy(g.group.matrixWorld).invert();
        const o = tmp2.copy(camera.position).applyMatrix4(inv);
        const dir = tmp.transformDirection(inv);
        if (Math.abs(dir.y) > 1e-3) {
          const t = -o.y / dir.y;
          if (t > 0) {
            const hx = o.x + dir.x * t, hz = o.z + dir.z * t;
            if (hx * hx + hz * hz < g.R * g.R * 1.3) {
              on = 1;
              const P = g.uPointer.value;
              if (g.uPointerOn.value < 0.05) P.set(hx, 0, hz);
              P.x += (hx - P.x) * 0.12; P.z += (hz - P.z) * 0.12;
            }
          }
        }
      }
      g.uPointerOn.value += (on - g.uPointerOn.value) * 0.06;
    }

    // Sky: dim slightly behind the contact form
    world.sky.position.copy(camera.position);
    world.sky.material.uniforms.uIntensity.value = 1.0 - 0.25 * smooth(6.2, 7, pSmooth);

    // Office labels
    officeLabels.forEach((o) => {
      tmp.copy(o.pin.local);
      world.earth.group.localToWorld(tmp);
      const wp = tmp.clone();
      const n = wp.clone().sub(LAYOUT.earth.pos).normalize();
      const facing = n.dot(tmp2.copy(camera.position).sub(wp).normalize()) > 0.15;
      o.el.classList.toggle('is-hot', hotOffice === o.pin.id);
      projectLabel(o.el, wp, weight(1) > 0.5 && facing, 0, 0);
    });

    // Hover over worlds
    worldHit = null;
    if (finePointer && pointer.inside && !pointer.overUI) {
      tmp.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
      ray.set(camera.position, tmp);
      let best = Infinity;
      for (const h of world.hit) {
        if (ray.intersectSphere({ center: h.center, radius: h.r }, tmp2)) {
          const d = camera.position.distanceTo(tmp2);
          const pxSize = (h.r / d) * (H / (2 * Math.tan((camera.fov * Math.PI) / 360)));
          if (d < best && pxSize > 26 && Math.abs(pSmooth - h.chapter) > 0.35) { best = d; worldHit = h; }
        }
      }
    }
    if (finePointer) {
      pointer.sx += (pointer.px - pointer.sx) * 0.25;
      pointer.sy += (pointer.py - pointer.sy) * 0.25;
      cursor.style.transform = `translate3d(${pointer.sx.toFixed(1)}px, ${pointer.sy.toFixed(1)}px, 0)`;
      cursor.classList.toggle('is-world', !!worldHit);
      cursor.classList.toggle('is-hidden', !pointer.inside);
      if (worldHit && cursorLabel.textContent !== worldHit.label) cursorLabel.textContent = worldHit.label;
    }

    composer.render(dt);

    // page chrome (throttled)
    if (time - lastUI > 0.08) {
      lastUI = time;
      bus.setProgress(p, Math.round(p), camera.position);
    }

    // adaptive quality: watch the first seconds of flight and step down if needed
    if (started && perf.checked < 3) {
      perf.frames++; perf.acc += dt;
      if (perf.frames >= 90) {
        const avg = perf.acc / perf.frames;
        perf.frames = 0; perf.acc = 0; perf.checked++;
        if (avg > 1 / 42 && dpr > 0.8) {
          dpr = Math.max(0.75, dpr - 0.35);
          resize();
        } else if (avg > 1 / 28 && bloom.enabled) {
          bloom.enabled = false;
        }
      }
    }
  }

  // ---- Start once textures are in ----------------------------------------
  const startAll = () => {
    if (started) return;
    setLoader(1);
    // compile shaders behind the loader so the first frames are smooth
    try { renderer.compile(scene, camera); } catch (e) { /* not fatal */ }
    started = true;
    setTimeout(() => {
      finishLoading();
      chapters[0].classList.add('is-in');
      bus.startReveals();
    }, 350);
  };
  manager.onLoad = startAll;
  manager.onError = () => { /* a missing texture should not block the site */ };
  setTimeout(startAll, 12000); // never keep visitors waiting on a slow network
  requestAnimationFrame(loop);

  if (params.has('p')) {
    const fixed = parseFloat(params.get('p'));
    pinnedP = Math.min(CHAPTERS - 1, Math.max(0, fixed || 0));
    introT = 1;
  }
}

// ---------------------------------------------------------------------------
// Go
// ---------------------------------------------------------------------------
if (!webglOK()) {
  html.classList.add('no-webgl');
  finishLoading();
  bus.startReveals();
  startScrollOnly();
} else {
  boot();
}
