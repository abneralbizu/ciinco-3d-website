// Photographed mode: the camera flies over Google's Photorealistic 3D Tiles of the whole
// Earth, nothing else drawn but the sky behind it. The frame is re-anchored under the camera
// every frame (x east, y up, z south, metres), so numbers stay small and "up" is always +y.
// Used only when a Google Maps key is configured; if Google fails, main.js falls back to the
// drawn cities.
import { BackSide, Color, Matrix4, Mesh, PerspectiveCamera, Scene, ShaderMaterial, SphereGeometry, Vector3 } from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { TilesRenderer, WGS84_ELLIPSOID } from '3d-tiles-renderer';
import { GoogleCloudAuthPlugin, GLTFExtensionsPlugin, TileCompressionPlugin } from '3d-tiles-renderer/plugins';
import { BASE } from './i18n.js';

const RAD = Math.PI / 180;
// Keyframe altitudes are metres above the ground the drawn cities stood on; heights in the
// tiles are above the WGS84 ellipsoid (the geoid is ~33 m below it in New York, ~29 m in Orlando,
// where the ground is ~20 m above sea level).
// Mean sea level above the ellipsoid (geoid height): about -32.6 m in New York, -29 m in Orlando.
const geoid = (lat) => -29.0 + (-32.6 + 29.0) * Math.min(1, Math.max(0, (lat - 28.5) / (40.7 - 28.5)));
const base = (lat) => {
  const t = Math.min(1, Math.max(0, (lat - 28.5) / (40.7 - 28.5)));
  return -9.5 + (-32.6 + 9.5) * t;
};

// Daylight, as Google photographed it: a clear sky and aerial haze toward the horizon.
// Colours are linear; the page renders this mode without tone mapping so the photos keep
// their true colour.
const SKY = {
  vertexShader: /* glsl */ `
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
      gl_Position = p.xyww;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uHorizon;
    uniform vec3 uZenith;
    uniform vec3 uSun;
    uniform vec3 uGlow;
    uniform float uSpace;
    varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir);
      float h = d.y;
      vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
      col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.08, h));
      // golden hour: a warm band along the horizon, strongest toward the low sun
      vec2 a = normalize(d.xz + 1e-5), b = normalize(uSun.xz + 1e-5);
      float toward = max(dot(a, b), 0.0);
      col += uGlow * exp(-max(h, 0.0) * 7.0) * (0.25 + 0.9 * pow(toward, 3.0));
      float s = max(dot(d, uSun), 0.0);
      col += vec3(1.0, 0.8, 0.55) * (pow(s, 800.0) * 3.0 + pow(s, 16.0) * 0.15);
      // from orbit: black space above a thin blue limb
      vec3 space = mix(vec3(0.0, 0.0, 0.004), uHorizon * 0.5, exp(-max(h + 0.15, 0.0) * 12.0));
      col = mix(col, space, uSpace);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const TILE = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D map;
    uniform float uFade;
    uniform float uDensity;
    uniform vec3 uHaze;
    uniform vec3 uWater;
    uniform vec3 uSkyRefl;
    uniform float uSea;
    uniform float uWaterOn;
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vec3 c = texture2D(map, vUv).rgb;
      // Open water: Google stitches the harbour from tiles of slightly different colour, which
      // shows as a patchwork of light and dark blocks. Flat, sea-level, bluish surfaces get one
      // even water colour with a sky reflection toward the horizon instead. (Land, piers, boats
      // and buildings stand above sea level and keep their photographs.)
      vec3 N = normalize(cross(dFdx(vP), dFdy(vP)));
      float up = abs(N.y);
      float seaY = vP.y + dot(vP.xz, vP.xz) / (2.0 * 6371000.0) - uSea;   // height above sea level (Earth's curve removed)
      float blue = smoothstep(-0.01, 0.03, c.b - c.r);
      float water = smoothstep(4.0, 1.5, abs(seaY)) * smoothstep(0.985, 0.998, up) * blue;
      water = max(water, smoothstep(0.3, -0.6, seaY));             // anything below the surface (tile seams, skirts) is under water
      // inland lakes (Orlando): flat, dark and bluish in Google's photos, at any height
      float lum0 = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float lake = smoothstep(0.990, 0.998, up) * smoothstep(0.008, 0.025, c.b - c.r) * smoothstep(0.11, 0.05, lum0);
      water = max(water, lake);
      water *= uWaterOn;                                            // only close up (coarse tiles from high up have no reliable height)
      vec3 V = normalize(cameraPosition - vP);
      float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 4.0);
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 sea = mix(uWater, uSkyRefl, fres * 0.55) * (0.88 + 0.24 * clamp(lum / 0.12, 0.4, 1.4));
      c = mix(c, sea, water);
      // late-afternoon grade to sit with the site's dark palette: a touch darker and warmer,
      // shadows cooler, and the contrast aerial photographs lose
      float l2 = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c *= mix(vec3(0.86, 0.9, 1.0), vec3(1.06, 0.97, 0.86), smoothstep(0.02, 0.35, l2)) * 0.9;
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.35);
      float dist = length(vP - cameraPosition);
      float f = 1.0 - exp(-dist * uDensity);
      c = mix(c, uHaze, clamp(f, 0.0, 0.75));                // aerial perspective
      c = mix(uHaze, c, uFade);
      gl_FragColor = vec4(c, 1.0);
    }
  `,
};

const lin = (hex) => new Color(hex);   // three converts sRGB hex to linear

export function createEarth({ key, renderer }) {
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1e5);

  const tiles = new TilesRenderer();
  tiles.registerPlugin(new GoogleCloudAuthPlugin({ apiToken: key, autoRefreshToken: true }));
  const draco = new DRACOLoader().setDecoderPath(`${BASE}assets/draco/`);
  tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: draco }));
  tiles.registerPlugin(new TileCompressionPlugin());
  const phone = window.matchMedia('(max-width: 860px)').matches;
  const setDetail = () => { tiles.errorTarget = (phone ? 12 : 7) * Math.sqrt(Math.max(1, renderer.getPixelRatio())); };
  setDetail();
  tiles.downloadQueue.maxJobsPerOrigin = phone ? 10 : 16;
  tiles.parseQueue.maxJobs = phone ? 4 : 8;
  tiles.lruCache.maxBytesSize = (phone ? 0.35 : 0.7) * 1024 ** 3;
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  tiles.setCamera(camera);
  tiles.setResolutionFromRenderer(camera, renderer);
  tiles.group.matrixAutoUpdate = false;
  scene.add(tiles.group);

  const sun = new Vector3(-0.75, 0.1, 0.65).normalize();     // low in the south-west
  const horizon = lin('#c9a99a'), zenith = lin('#1c2b4a'), glow = lin('#ff9a5c');
  const sky = new ShaderMaterial({
    ...SKY, side: BackSide, depthWrite: false,
    uniforms: { uHorizon: { value: horizon }, uZenith: { value: zenith }, uSun: { value: sun }, uGlow: { value: glow }, uSpace: { value: 0 } },
  });
  const skyMesh = new Mesh(new SphereGeometry(10, 48, 24), sky);
  skyMesh.renderOrder = -20;
  skyMesh.frustumCulled = false;
  scene.add(skyMesh);

  const uniforms = {
    uFade: { value: 0 }, uDensity: { value: 1 / 55000 }, uHaze: { value: horizon.clone().multiplyScalar(0.85) },
    uWater: { value: lin('#1f6185') }, uSkyRefl: { value: lin('#8fb8d6') }, uSea: { value: 0 }, uWaterOn: { value: 1 },
  };
  tiles.addEventListener('load-model', ({ scene: model, tile }) => {
    model.traverse((o) => {
      if (!o.isMesh) return;
      const tex = o.material.map;
      if (tex) { tex.anisotropy = aniso; tex.needsUpdate = true; }
      const m = new ShaderMaterial({ ...TILE, uniforms: { ...uniforms, map: { value: tex } } });
      tile.engineData.materials.push(m);
      o.material = m;
    });
  });

  // Loading: the first view comes out of the haze as its tiles arrive; after that Google's own
  // coarse-to-fine refinement is all there is (like Google Earth).
  const state = { ok: false, failed: false, loaded: 0, ready: false };
  let reveal = 0, hold = 0, since = 0, lastT = 0;
  tiles.addEventListener('load-model', () => { state.loaded++; if (!state.failed) state.ok = true; });
  tiles.addEventListener('load-error', (e) => {
    if (!state.ok && (e.tile == null || e.tile === tiles.root)) state.failed = true;
    console.warn('3D tiles:', e.error || e);
  });

  // camera-anchored frame
  const axes = new Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
  const enu = new Matrix4(), toLocal = new Matrix4(), v = new Vector3();
  function toFrame(g, outPos, outLook) {
    const [lat, lon] = g.pos;
    WGS84_ELLIPSOID.getEastNorthUpFrame(lat * RAD, lon * RAD, base(lat), enu);
    toLocal.copy(axes).multiply(enu.invert());
    tiles.group.matrix.copy(toLocal);
    uniforms.uSea.value = geoid(lat) - base(lat);   // sea level in this frame (inland, well below the ground)
    tiles.group.updateMatrixWorld();   // also refreshes the inverse the tiles renderer uses
    WGS84_ELLIPSOID.getCartographicToPosition(g.pos[0] * RAD, g.pos[1] * RAD, g.pos[2] + base(g.pos[0]), v);
    outPos.copy(v.applyMatrix4(toLocal));
    WGS84_ELLIPSOID.getCartographicToPosition(g.look[0] * RAD, g.look[1] * RAD, g.look[2] + base(g.look[0]), v);
    outLook.copy(v.applyMatrix4(toLocal));
    if (g.pull !== 1) outPos.sub(outLook).multiplyScalar(g.pull).add(outLook);
  }

  const credit = document.getElementById('map-credit');
  const creditText = credit ? credit.querySelector('.mc-data') : null;
  let creditAt = 0;
  const attributions = [];

  if (new URLSearchParams(location.search).has('debug')) window.__earth = { tiles, state };

  return {
    scene, camera, tiles, toFrame,
    get failed() { return state.failed; },
    get busy() { return !state.ready; },
    /** alt: camera height in metres. */
    update(alt, time) {
      const dt = Math.min(0.1, Math.max(0, time - lastT));
      lastT = time;
      tiles.setResolutionFromRenderer(camera, renderer);
      tiles.update();
      if (!state.ready && state.ok) {
        if (!since) since = time;
        const st = tiles.stats;
        const pending = st.queued + st.downloading + st.parsing;
        hold = state.loaded >= 30 && pending <= 0.1 * (state.loaded + pending) ? hold + dt : 0;
        if (hold > 0.5 || time - since > 25) state.ready = true;
      }
      const st = tiles.stats;
      const pending = st.queued + st.downloading + st.parsing;
      const target = state.ready ? 1 : Math.min(0.7, 0.25 + 0.6 * (state.loaded / Math.max(1, state.loaded + pending)));
      reveal += (target - reveal) * Math.min(1, dt * (state.ready ? 1.6 : 0.8));
      uniforms.uFade.value = reveal * reveal * (3 - 2 * reveal);
      // haze thins with height; from orbit the sky turns to space
      const space = Math.min(1, Math.max(0, (alt - 40000) / 260000));
      sky.uniforms.uSpace.value = space * space * (3 - 2 * space);
      uniforms.uDensity.value = 1 / Math.max(55000, alt * 9);
      uniforms.uWaterOn.value = 1 - Math.min(1, Math.max(0, (alt - 3000) / 5000));

      if (credit && time - creditAt > 1) {
        creditAt = time;
        const show = state.ok && tiles.visibleTiles.size > 0;
        credit.hidden = !show;
        if (show) {
          attributions.length = 0;
          tiles.getAttributions(attributions);
          const txt = attributions.filter((a) => a.type === 'string').map((a) => a.value).join(' ');
          if (creditText.textContent !== txt) creditText.textContent = txt;
        }
      }
    },
    resize() { camera.aspect = window.innerWidth / window.innerHeight; setDetail(); tiles.setResolutionFromRenderer(camera, renderer); },
  };
}
