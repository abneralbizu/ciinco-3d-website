// CIIN Co. 3D: entry point.
import {
  ACESFilmicToneMapping, Clock, HalfFloatType, LinearMipmapLinearFilter, LoadingManager, Matrix4,
  NoColorSpace, PerspectiveCamera, Ray, Scene, SRGBColorSpace, TextureLoader, Vector2, Vector3,
  WebGLRenderer, WebGLRenderTarget, Plane,
} from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { buildWorld } from './world.js';
import { sampleJourney, CHAPTERS } from './journey.js';
import { unproject, altitudeM, P } from './geo.js';
import { initUI, setLoader, finishLoading, reducedMotion } from './ui.js';
import { finalPass, sanitizePass } from './shaders.js';

const html = document.documentElement;
html.classList.add('js');
const bus = {};
const { chapters } = initUI(bus);
const params = new URLSearchParams(location.search);

function webglOK() {
  try { return !!document.createElement('canvas').getContext('webgl2'); } catch (e) { return false; }
}
const shortSide = Math.min(screen.width, screen.height);
const quality = {
  low: params.has('low') || shortSide < 700 || (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4,
};
const maxDPR = quality.low ? 1.5 : 1.75;

// ---------------------------------------------------------------------------
// Scroll -> chapter progress
// ---------------------------------------------------------------------------
let anchors = [];
let pinnedP = null; // ?p=2 pins the camera on a chapter (for reviewing one scene)
function computeAnchors() {
  const vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  anchors = chapters.map((c, i) => {
    if (i === 0) return 0;
    const r = c.getBoundingClientRect();
    return Math.min(max, Math.max(0, r.top + window.scrollY + r.height / 2 - vh / 2));
  });
  for (let i = 1; i < anchors.length; i++) anchors[i] = Math.max(anchors[i], anchors[i - 1] + 1);
}
bus.anchorFor = (i) => anchors[i] ?? 0;
function progressFromScroll() {
  if (pinnedP !== null) return pinnedP;
  const y = window.scrollY;
  if (!anchors.length || y <= anchors[0]) return 0;
  for (let i = 0; i < anchors.length - 1; i++) if (y < anchors[i + 1]) return i + (y - anchors[i]) / (anchors[i + 1] - anchors[i]);
  return anchors.length - 1;
}

function startScrollOnly() {
  computeAnchors();
  window.addEventListener('resize', computeAnchors);
  const tick = () => { const p = progressFromScroll(); bus.setProgress(p, Math.round(p), null); requestAnimationFrame(tick); };
  tick();
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
async function boot() {
  const canvas = document.getElementById('cosmos');
  const renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  let dpr = Math.min(window.devicePixelRatio || 1, maxDPR);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = SRGBColorSpace;
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.05, 50000);

  // ---- Data + textures ---------------------------------------------------------
  let done = 0;
  const total = 3;
  const bump = () => setLoader((++done / total) * 0.85);
  const manager = new LoadingManager();
  const loader = new TextureLoader(manager);
  const mapTex = await new Promise((res) => {
    const t = loader.load(`assets/textures/${quality.low ? 'map-2k' : 'map'}.webp`, () => { bump(); res(t); }, undefined, () => { bump(); res(t); });
    t.colorSpace = NoColorSpace;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.minFilter = LinearMipmapLinearFilter;
  });
  const getJSON = (u) => fetch(u).then((r) => r.json()).then((j) => { bump(); return j; });
  const [nyc, map] = await Promise.all([getJSON('assets/data/nyc.json'), getJSON('assets/data/map.json')]);

  const world = buildWorld(scene, { map: mapTex }, { nyc, map }, quality);
  if (params.has('debug')) console.info('stats', JSON.stringify({ nycBuildings: world.nycBuildings.count, homes: world.homeCount, ...world.stats }));

  // ---- Post-processing ---------------------------------------------------------
  const rt = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: quality.low ? 0 : 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(dpr);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new ShaderPass(sanitizePass));
  const bloom = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.42, 0.35, 1.05);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const final = new ShaderPass(finalPass);
  composer.addPass(final);
  world.uPixelRatio.value = dpr;

  // ---- Labels ----------------------------------------------------------------
  const labelRoot = document.getElementById('labels');
  const mkLabel = (cls, htmlStr) => {
    const el = document.createElement('div');
    el.className = `label ${cls}`;
    el.innerHTML = htmlStr;
    labelRoot.appendChild(el);
    return el;
  };
  const officeLabels = world.offices.map((o) => ({ o, el: mkLabel('label-office', `<span class="dot"></span><span class="stem"></span><span class="txt"><b>${o.name}</b><small>${o.sub}</small></span>`) }));
  const typeLabels = world.typeTargets.map((t) => ({ t, el: mkLabel('label-type', `<span class="dot"></span><span>${t.name}</span>`) }));
  const nodeNames = Array.from(document.querySelectorAll('#consulting li')).map((li) => li.textContent.trim());
  const floorLabels = nodeNames.map((name, i) => ({ i, el: mkLabel('label-node', `<span class="num">${String(i + 1).padStart(2, '0')}</span><span class="name">${name}</span>`) }));

  let hotType = -1, hotNode = -1, hotOffice = null;
  bus.hotType = (i) => { hotType = i; bus.markType(i); };
  bus.hotNode = (i) => { hotNode = i; bus.markNode(i); };
  bus.hotOffice = (id) => { hotOffice = id; bus.markOffice(id); };

  // ---- Pointer -------------------------------------------------------------
  const pointer = { x: 0, y: 0, sx: -100, sy: -100, px: -100, py: -100, inside: false, overUI: true };
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

  // ---- Resize --------------------------------------------------------------
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

  // ---- State ---------------------------------------------------------------
  const clock = new Clock();
  const frame = { pos: new Vector3(), look: new Vector3(), ox: 0, oy: 0, fov: 40, flight: 0 };
  // ?cam=lat,lon,altM,lookLat,lookLon,lookAltM places the camera anywhere (for tuning scenes).
  const debugCam = params.has('cam') ? (() => { const v = params.get('cam').split(',').map(Number); return [P(v[0], v[1], v[2]), P(v[3], v[4], v[5])]; })() : null;
  if (params.has('p')) pinnedP = Math.min(CHAPTERS - 1, Math.max(0, parseFloat(params.get('p')) || 0));
  let p = progressFromScroll();
  let pSmooth = p;
  let introT = reducedMotion.matches || pinnedP !== null ? 1 : 0;
  let started = false;
  const tmp = new Vector3(), tmp2 = new Vector3(), inv = new Matrix4();
  const ray = new Ray();
  const ground = new Plane(new Vector3(0, 1, 0), 0);
  const parallax = new Vector2();
  const perf = { frames: 0, acc: 0, checked: 0 };
  let running = true;
  let lastUI = 0;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { clock.getDelta(); requestAnimationFrame(loop); }
  });

  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const weight = (c) => Math.max(0, 1 - Math.abs(pSmooth - c) * 1.6);
  const W = () => window.innerWidth, H = () => window.innerHeight;

  function screenOf(v) {
    tmp.copy(v).project(camera);
    return { x: (tmp.x * 0.5 + 0.5) * W(), y: (-tmp.y * 0.5 + 0.5) * H(), on: tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1 };
  }
  function placeLabel(el, v, show, dx = 0, dy = 0) {
    const s = screenOf(v);
    const visible = show && s.on;
    el.classList.toggle('is-on', visible);
    if (visible) el.style.transform = `translate3d(${(s.x + dx).toFixed(1)}px, ${(s.y + dy).toFixed(1)}px, 0) translate(-3px, -50%)`;
  }
  const fmtLat = (v) => `${Math.abs(v).toFixed(4)}° ${v >= 0 ? 'N' : 'S'}`;
  const fmtLon = (v) => `${Math.abs(v).toFixed(4)}° ${v >= 0 ? 'E' : 'W'}`;
  const fmtAlt = (m) => (m >= 10000 ? `${Math.round(m / 1000).toLocaleString('en-US')} km` : `${Math.round(m).toLocaleString('en-US')} m`);

  // ---- Loop ------------------------------------------------------------------
  function loop() {
    if (!running) return;
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    world.uTime.value = time;
    final.uniforms.uTime.value = reducedMotion.matches ? 0 : time;

    p = progressFromScroll();
    const snap = pinnedP !== null;
    const kk = reducedMotion.matches ? 12 : 3.0;
    pSmooth += (p - pSmooth) * (1 - Math.exp(-dt * kk));
    if (Math.abs(p - pSmooth) < 1e-4 || snap) pSmooth = p;
    if (started && introT < 1) introT = Math.min(1, introT + dt / 4.5);
    const intro = 1 - Math.pow(1 - introT, 3);

    // camera
    const aspect = W() / H();
    sampleJourney(pSmooth, aspect, frame);
    if (debugCam) { frame.pos.copy(debugCam[0]); frame.look.copy(debugCam[1]); frame.ox = 0; frame.oy = 0; }
    if (intro < 1) {
      // opening: descend out of the clouds toward the harbour
      const back = 1 - intro;
      frame.pos.y *= 1 + back * 14;
      frame.pos.z += back * 40;
    }
    if (!reducedMotion.matches && finePointer) {
      parallax.x += (pointer.x - parallax.x) * (1 - Math.exp(-dt * 2.5));
      parallax.y += (pointer.y - parallax.y) * (1 - Math.exp(-dt * 2.5));
    }
    camera.position.copy(frame.pos);
    camera.lookAt(frame.look);
    const dist = frame.pos.distanceTo(frame.look);
    tmp.set(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(parallax.x * dist * 0.02);
    tmp2.set(0, 1, 0).applyQuaternion(camera.quaternion).multiplyScalar(parallax.y * dist * 0.012);
    camera.position.add(tmp).add(tmp2);
    camera.position.y = Math.max(camera.position.y, 0.08);
    camera.lookAt(frame.look);
    const alt = camera.position.y;
    camera.fov = frame.fov;
    camera.near = Math.max(0.02, alt * 0.01);
    camera.far = Math.max(4000, alt * 60);
    camera.setViewOffset(W(), H(), -frame.ox * W(), frame.oy * H(), W(), H());
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // haze, clouds, map lights by altitude
    world.fog.density.value = 1 / Math.max(260, alt * 5);
    world.fog.detail.value = 1 - smooth(140, 700, alt);
    world.clouds.uniforms.uOpacity.value = 0.42 * smooth(110, 600, alt) * (1 - smooth(25000, 40000, alt)) + 0.5 * frame.flight * smooth(60, 200, alt);
    world.map.uniforms.uLights.value = 0.6 + 0.6 * smooth(50, 3000, alt);

    // offices: beams and rings that stay readable from street level to orbit
    world.offices.forEach((o) => {
      const d = camera.position.distanceTo(o.pos);
      o.beam.scale.set(Math.max(0.12, d * 0.0035), Math.max(8, d * 0.45), Math.max(0.12, d * 0.0035));
      o.ring.scale.setScalar(Math.max(0.8, d * 0.06));
      const on = Math.max(weight(1), weight(7) * (o.id === 'orlando' ? 1 : 0), weight(2) * (o.id === 'new-york' ? 1 : 0), weight(3) * (o.id === 'orlando' ? 1 : 0), 0.12);
      o.beamMat.uniforms.uIntensity.value = 1.2 * on * (0.35 + 0.65 * smooth(4, 60, d)) * (hotOffice === o.id ? 1.8 : 1);
      o.ringMat.uniforms.uOn.value = on;
    });
    // flight arc
    world.arc.uniforms.uOn.value = Math.max(smooth(0.4, 1, pSmooth) * (1 - smooth(1.4, 2.0, pSmooth)), frame.flight * (pSmooth > 2 && pSmooth < 3 ? 1 : 0));
    world.arc.uniforms.uDraw.value += ((pSmooth > 0.6 ? 1.02 : 0) - world.arc.uniforms.uDraw.value) * (snap ? 1 : 1 - Math.exp(-dt * 1.2));

    // billboards face the camera
    world.billboards.forEach((b) => b.quaternion.copy(camera.quaternion));
    if (world.fountain) world.fountain.material.uniforms.uColor.value.setHSL((time * 0.03) % 1, 0.6, 0.6);

    // commercial: highlighted building
    const nb = world.nycBuildings.uniforms;
    nb.uHot.value = hotType;
    nb.uHotOn.value += ((hotType >= 0 ? 1 : 0) - nb.uHotOn.value) * 0.15;
    const wC = weight(2);
    typeLabels.forEach((t, i) => {
      t.el.classList.toggle('is-hot', hotType === i);
      tmp2.copy(t.t.local).add(world.nyc.center);
      placeLabel(t.el, tmp2.clone(), wC > 0.55 && aspect > 0.9);
    });

    // advisory tower floors
    const tw = world.tower;
    const drawTarget = smooth(3.3, 3.95, pSmooth) * (1 - smooth(5.3, 5.9, pSmooth));
    tw.uniforms.uDraw.value += (drawTarget * 1.08 - tw.uniforms.uDraw.value) * (snap ? 1 : 1 - Math.exp(-dt * 1.6));
    tw.uniforms.uHot.value = hotNode;
    const wA = weight(4);
    floorLabels.forEach((fl) => {
      fl.el.classList.toggle('is-hot', hotNode === fl.i);
      tmp2.copy(tw.floorLocal(fl.i)).add(world.orl.center);
      const show = wA > 0.55 && (aspect > 0.9 || hotNode === fl.i) && tw.uniforms.uDraw.value > fl.i / 15 + 0.05;
      placeLabel(fl.el, tmp2.clone(), show, 26, 0);
    });

    // listings: parcels light up under the cursor
    const pm = world.parcels.uniforms;
    pm.uOn.value += (smooth(5.4, 6.0, pSmooth) * (1 - smooth(6.6, 7.0, pSmooth)) - pm.uOn.value) * (snap ? 1 : 0.08);
    let pOn = 0;
    if (finePointer && pointer.inside && !pointer.overUI && pm.uOn.value > 0.2) {
      tmp.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
      ray.set(camera.position, tmp);
      if (ray.intersectPlane(ground, tmp2)) {
        pOn = 1;
        if (pm.uPointerOn.value < 0.05) pm.uPointer.value.copy(tmp2);
        pm.uPointer.value.lerp(tmp2, 0.2);
      }
    }
    pm.uPointerOn.value += (pOn - pm.uPointerOn.value) * 0.08;

    // office labels
    officeLabels.forEach((ol) => {
      ol.el.classList.toggle('is-hot', hotOffice === ol.o.id);
      const show = weight(1) > 0.5 || (ol.o.id === 'new-york' && weight(2) > 0.55) || (ol.o.id === 'orlando' && (weight(7) > 0.55 || weight(3) > 0.55));
      placeLabel(ol.el, ol.o.pos, show);
    });

    // hover over the cities on the map
    worldHit = null;
    if (finePointer && pointer.inside && !pointer.overUI && weight(1) > 0.5) {
      for (const h of world.hit) {
        const s = screenOf(h.center);
        if (s.on && Math.hypot(s.x - pointer.px, s.y - pointer.py) < 70) worldHit = h;
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

    if (time - lastUI > 0.1) {
      lastUI = time;
      const ll = unproject(camera.position.x, camera.position.z);
      bus.setProgress(p, Math.round(p), `${fmtLat(ll.lat)} · ${fmtLon(ll.lon)} · ALT ${fmtAlt(altitudeM(alt, ll.lat))}`);
    }

    if (started && perf.checked < 3) {
      perf.frames++; perf.acc += dt;
      if (perf.frames >= 90) {
        const avg = perf.acc / perf.frames;
        perf.frames = 0; perf.acc = 0; perf.checked++;
        if (avg > 1 / 42 && dpr > 0.8) { dpr = Math.max(0.75, dpr - 0.35); resize(); } else if (avg > 1 / 28 && bloom.enabled) bloom.enabled = false;
      }
    }
  }

  setLoader(0.92);
  try { renderer.compile(scene, camera); } catch (e) { /* not fatal */ }
  requestAnimationFrame(loop);
  setTimeout(() => {
    setLoader(1);
    started = true;
    finishLoading();
    chapters[0].classList.add('is-in');
    bus.startReveals();
  }, 300);
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
  boot().catch((err) => {
    // If anything in the 3D scene fails, keep the page fully usable.
    console.error(err);
    html.classList.add('no-webgl');
    finishLoading();
    bus.startReveals();
    startScrollOnly();
  });
}
