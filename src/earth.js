// Photographed mode: the camera flies over Google's Photorealistic 3D Tiles of the whole
// Earth, nothing else drawn but the sky behind it. The frame is re-anchored under the camera
// every frame (x east, y up, z south, metres), so numbers stay small and "up" is always +y.
// Used only when a Google Maps key is configured; if Google fails, main.js falls back to the
// drawn cities.
import { Matrix4, Mesh, PerspectiveCamera, Scene, ShaderMaterial, SphereGeometry, Vector3 } from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { TilesRenderer, WGS84_ELLIPSOID } from '3d-tiles-renderer';
import { GoogleCloudAuthPlugin, GLTFExtensionsPlugin, TileCompressionPlugin } from '3d-tiles-renderer/plugins';
import * as S from './shaders.js';

const RAD = Math.PI / 180;
// Keyframe altitudes are metres above the ground the drawn cities stood on; heights in the
// tiles are above the WGS84 ellipsoid (the geoid is ~33 m below it in New York, ~29 m in Orlando,
// where the ground is ~20 m above sea level).
const base = (lat) => {
  const t = Math.min(1, Math.max(0, (lat - 28.5) / (40.7 - 28.5)));
  return -9.5 + (-32.6 + 9.5) * t;
};

export function createEarth({ key, renderer, sky, fog }) {
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1e5);

  const tiles = new TilesRenderer();
  tiles.registerPlugin(new GoogleCloudAuthPlugin({ apiToken: key, autoRefreshToken: true }));
  const draco = new DRACOLoader().setDecoderPath('assets/draco/');
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

  // the sky (shared with the drawn scene): photographed dusk sky, stars from high up
  const skyMesh = new Mesh(new SphereGeometry(10, 48, 24), sky);
  skyMesh.renderOrder = -20;
  skyMesh.frustumCulled = false;
  scene.add(skyMesh);

  const uniforms = { uFade: { value: 0 }, uExposure: { value: 0.86 }, uSat: { value: 0.96 }, ...S.fogUniforms(fog) };
  tiles.addEventListener('load-model', ({ scene: model, tile }) => {
    model.traverse((o) => {
      if (!o.isMesh) return;
      const tex = o.material.map;
      if (tex) { tex.anisotropy = aniso; tex.needsUpdate = true; }
      const m = new ShaderMaterial({ vertexShader: S.tiles.vertexShader, fragmentShader: S.tiles.fragmentShader, uniforms: { ...uniforms, map: { value: tex } } });
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
      // sky: golden hour near the ground, night and stars from orbit
      sky.uniforms.uDay.value = 1 - Math.min(1, Math.max(0, (alt - 30000) / 370000));

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
