// Photographed cities: Google Photorealistic 3D Tiles for New York and Orlando, placed into
// the same Mercator scene as the night map, so every office, label and camera keyframe still
// lines up. Only used when a Google Maps key is configured; otherwise the generated cities stay.
import { Matrix4, Raycaster, ShaderMaterial, Sphere, Vector3 } from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { TilesRenderer, WGS84_ELLIPSOID } from '3d-tiles-renderer';
import { GoogleCloudAuthPlugin, GLTFExtensionsPlugin, TileCompressionPlugin } from '3d-tiles-renderer/plugins';
import { P, R } from './geo.js';
import * as S from './shaders.js';

const RAD = Math.PI / 180;

// Each city has its own frame. Heights in the tiles are above the WGS84 ellipsoid; the frame
// origin sits at local mean sea level in New York (the geoid is ~32.6 m below the ellipsoid
// there) and about 20 m above sea level in Orlando, where the generated city's ground was.
const CITIES = {
  nyc: { lat: 40.72, lon: -73.99, h: -32.6, radiusM: 16000 },
  orl: { lat: 28.60, lon: -81.32, h: -9.5, radiusM: 30000 },
};

/** Scene matrix for a city: ECEF metres -> east/north/up -> scene units (x east, y up, z south). */
function cityFrame(c) {
  const enu = WGS84_ELLIPSOID.getEastNorthUpFrame(c.lat * RAD, c.lon * RAD, c.h, new Matrix4());
  const toEnu = enu.clone().invert();
  const axes = new Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
  // Mercator scale at this latitude: scene units per metre (east-west and north-south agree to ~0.3%)
  const s = (R * RAD) / (111320 * Math.cos(c.lat * RAD));
  const scale = new Matrix4().makeScale(s, s, s);
  const at = P(c.lat, c.lon);
  const move = new Matrix4().makeTranslation(at.x, 0, at.z);
  const ecefCenter = new Vector3().setFromMatrixPosition(enu);
  return { matrix: move.multiply(scale).multiply(axes).multiply(toEnu), center: at, upm: s, ecefCenter };
}

export function createRealCities({ key, scene, camera, renderer, world }) {
  const tiles = new TilesRenderer();
  const auth = new GoogleCloudAuthPlugin({ apiToken: key, autoRefreshToken: true });
  tiles.registerPlugin(auth);
  const draco = new DRACOLoader().setDecoderPath('assets/draco/');
  tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: draco }));
  tiles.registerPlugin(new TileCompressionPlugin());
  // Only the city we are in: tiles outside a sphere around it are never requested.
  const mask = {
    name: 'CITY_MASK',
    sphere: new Sphere(new Vector3(), 1),
    calculateTileViewError(tile, target) {
      if (tile.engineData.boundingVolume.intersectsSphere(this.sphere)) return false;
      target.inView = false;
      return true;
    },
  };
  tiles.registerPlugin(mask);
  tiles.errorTarget = window.matchMedia('(max-width: 860px)').matches ? 28 : 20;
  tiles.setCamera(camera);
  tiles.setResolutionFromRenderer(camera, renderer);
  tiles.group.matrixAutoUpdate = false;
  scene.add(tiles.group);

  const frames = { nyc: cityFrame(CITIES.nyc), orl: cityFrame(CITIES.orl) };
  const uniforms = {
    uFade: { value: 0 }, uCenter: { value: new Vector3() }, uRadius: { value: 1 },
    uExposure: { value: 0.62 }, uSat: { value: 1.05 }, ...S.fogUniforms(world.fog),
  };
  let city = null;
  function useCity(id) {
    if (city === id) return;
    city = id;
    const f = frames[id];
    tiles.group.matrix.copy(f.matrix);
    tiles.group.matrixWorldNeedsUpdate = true;
    tiles.group.updateMatrixWorld(true);
    mask.sphere.center.copy(f.ecefCenter);
    mask.sphere.radius = CITIES[id].radiusM;
    uniforms.uCenter.value.copy(f.center);
    uniforms.uRadius.value = CITIES[id].radiusM * f.upm;
  }
  useCity('nyc');

  // Every loaded tile gets the graded material (the original is disposed by the renderer).
  tiles.addEventListener('load-model', ({ scene: model, tile }) => {
    model.traverse((o) => {
      if (!o.isMesh) return;
      const m = new ShaderMaterial({
        vertexShader: S.tiles.vertexShader,
        fragmentShader: S.tiles.fragmentShader,
        uniforms: { ...uniforms, map: { value: o.material.map } },
      });
      tile.engineData.materials.push(m);
      o.material = m;
    });
  });

  // Ready once the first city tiles arrive; on any failure the generated cities come back.
  const state = { ok: false, failed: false, loaded: 0 };
  tiles.addEventListener('load-model', () => { state.loaded++; if (!state.ok && !state.failed) { state.ok = true; setGenerated(false); } });
  tiles.addEventListener('load-error', (e) => {
    if (!state.ok && (e.tile == null || e.tile === tiles.root)) { state.failed = true; setGenerated(true); }
    console.warn('3D tiles:', e.error || e);
  });

  // Hide the generated city (but keep the advisory tower, the parcel overlay and the harbour water).
  function setGenerated(on) {
    for (const g of [world.nyc.group, world.orl.group]) {
      g.children.forEach((c) => { if (!c.userData.keep && c !== world.nycWater) c.visible = on; });
    }
    if (world.nycWater) world.nycWater.position.y = on ? -0.3 : 0.5 * frames.nyc.upm;   // real sea level
    world.reflect.uMirrorY.value = on ? 0 : 0.5 * frames.nyc.upm;
    world.realCities = !on;
  }

  // Ground height under a point (for the office beams), from the loaded tiles.
  const ray = new Raycaster();
  ray.firstHitOnly = true;
  const hits = [];
  function groundAt(x, z) {
    ray.set(new Vector3(x, 30, z), new Vector3(0, -1, 0));
    hits.length = 0;
    tiles.raycast(ray, hits);
    return hits.length ? hits[0].point.y : null;
  }

  // Credits: Google's logo text and the data providers of the tiles on screen.
  const credit = document.getElementById('map-credit');
  const creditText = credit ? credit.querySelector('.mc-data') : null;
  let creditAt = 0;
  const attributions = [];

  return {
    tiles,
    get active() { return state.ok && !state.failed; },
    update(alt, time) {
      // which city: whichever centre the camera is over
      const dn = camera.position.distanceTo(frames.nyc.center), dor = camera.position.distanceTo(frames.orl.center);
      useCity(dn < dor ? 'nyc' : 'orl');
      // photographed city from street level up to ~25 km, then the night map takes over
      const fade = 1 - Math.min(1, Math.max(0, (alt - 120) / 180));
      uniforms.uFade.value = fade;
      tiles.group.visible = fade > 0.01 && !state.failed;
      world.sky.uniforms.uDay.value = state.ok ? fade : 0;
      if (fade > 0.01 && !state.failed) {
        tiles.setResolutionFromRenderer(camera, renderer);
        tiles.update();
      }
      if (credit && time - creditAt > 1) {
        creditAt = time;
        const show = state.ok && fade > 0.2 && tiles.visibleTiles.size > 0;
        credit.hidden = !show;
        if (show) {
          attributions.length = 0;
          tiles.getAttributions(attributions);
          const txt = attributions.filter((a) => a.type === 'string').map((a) => a.value).join(' ');
          if (creditText.textContent !== txt) creditText.textContent = txt;
        }
      }
    },
    groundAt,
    resize() { tiles.setResolutionFromRenderer(camera, renderer); },
  };
}

