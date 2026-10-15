// Builds New York, Orlando and the East Coast between them.
// Geography is real where it matters (shorelines, the Manhattan grid, bridges, Lake Eola,
// the offices, the main roads); buildings and homes are generated from that frame.
import {
  AdditiveBlending, BackSide, BoxGeometry, BufferAttribute, BufferGeometry, Color, CylinderGeometry, DoubleSide,
  Float32BufferAttribute, Group, IcosahedronGeometry, InstancedBufferAttribute, InstancedMesh, Matrix4, Mesh,
  LineSegments, MeshBasicMaterial, Object3D, PlaneGeometry, Points, Quaternion, RingGeometry, ShaderMaterial,
  Shape, ShapeGeometry, SphereGeometry, TubeGeometry, CatmullRomCurve3, Vector2, Vector3,
} from 'three';
import * as S from './shaders.js';
import { P, k, grid, AVENUES, PLACES } from './geo.js';

export const PROPERTY_TYPES = ['Office', 'Retail', 'Industrial', 'Multifamily', 'Hospitality', 'Healthcare',
  'Mixed use', 'Land development', 'Storage', 'Restaurants', 'Churches', 'Special purpose'];

// Deterministic randomness: the same cities on every visit.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = (r) => Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r());
const distM = (la1, lo1, la2, lo2) => {
  const x = (lo2 - lo1) * 111320 * Math.cos(((la1 + la2) / 2) * Math.PI / 180);
  const y = (la2 - la1) * 110570;
  return Math.hypot(x, y);
};

function mat(def, uniforms, extra = {}) {
  return new ShaderMaterial({ vertexShader: def.vertexShader, fragmentShader: def.fragmentShader, uniforms, ...extra });
}
const additive = { transparent: true, blending: AdditiveBlending, depthWrite: false };
const flat = () => ({ depthWrite: false, depthTest: true, transparent: true }); // ground layers are drawn in order and fade out high up

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
class BoxBatch {
  constructor() { this.items = []; }
  add(x, z, w, d, h, rotY, seed, style = 0, id = -1, y0 = 0) { this.items.push([x, z, w, d, h, rotY, seed, style, id, y0]); }
  mesh(material) {
    const n = this.items.length;
    const geo = new BoxGeometry(1, 1, 1);
    const inst = new InstancedMesh(geo, material, Math.max(1, n));
    const seeds = new Float32Array(n), ids = new Float32Array(n), styles = new Float32Array(n);
    const o = new Object3D();
    this.items.forEach(([x, z, w, d, h, rotY, seed, style, id, y0], i) => {
      o.position.set(x, y0 + h / 2, z);
      o.rotation.set(0, rotY, 0);
      o.scale.set(w, h, d);
      o.updateMatrix();
      inst.setMatrixAt(i, o.matrix);
      seeds[i] = seed; ids[i] = id; styles[i] = style;
    });
    inst.count = n;
    geo.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
    geo.setAttribute('aId', new InstancedBufferAttribute(ids, 1));
    geo.setAttribute('aStyle', new InstancedBufferAttribute(styles, 1));
    inst.frustumCulled = false;
    return inst;
  }
}

/** Raster mask of polygons (local x/z) for fast "is this on land / on Manhattan?" tests. */
function makeMask(layers, half, size = 2048) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.fillStyle = '#000';
  g.fillRect(0, 0, size, size);
  const tx = (x) => ((x + half) / (2 * half)) * size;
  for (const { polys, color } of layers) {
    g.fillStyle = color;
    for (const rings of polys) {
      g.beginPath();
      for (const ring of rings) {
        ring.forEach(([x, z], i) => (i ? g.lineTo(tx(x), tx(z)) : g.moveTo(tx(x), tx(z))));
        g.closePath();
      }
      g.fill('evenodd');
    }
  }
  const data = g.getImageData(0, 0, size, size).data;
  return (x, z) => {
    const i = Math.floor(tx(x)), j = Math.floor(tx(z));
    if (i < 0 || j < 0 || i >= size || j >= size) return [0, 0, 0];
    const o = (j * size + i) * 4;
    return [data[o], data[o + 1], data[o + 2]];
  };
}

// Ground-shader districts: none by default (far away); Orlando fills them in.
function districtUniforms() {
  return {
    uAlignA: { value: [1e9, 1e9, 1, 0] }, uAlignAS: { value: [100, 100] },
    uAlignB: { value: [1e9, 1e9, 1, 0] }, uAlignBS: { value: [100, 100] }, uAlignBO: { value: [0, 0] },
    uHoods: { value: Array.from({ length: 8 }, () => new Vector3(1e9, 1e9, 1)) },
  };
}

function shapeMesh(rings, material, y = 0) {
  const [outer, ...holes] = rings;
  const s = new Shape(outer.map(([x, z]) => new Vector2(x, -z)));
  holes.forEach((h) => s.holes.push(new Shape(h.map(([x, z]) => new Vector2(x, -z)))));
  const geo = new ShapeGeometry(s);
  geo.rotateX(-Math.PI / 2);
  const m = new Mesh(geo, material);
  m.position.y = y;
  m.frustumCulled = false;
  return m;
}

/** Flat glowing strip following a polyline (local coordinates), u along, v across. */
function ribbonGeometry(points, width, yLift = 0.02) {
  const pos = [], uv = [], idx = [];
  let total = 0;
  const lens = [0];
  for (let i = 1; i < points.length; i++) { total += points[i].distanceTo(points[i - 1]); lens.push(total); }
  points.forEach((p, i) => {
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    const dir = new Vector3().subVectors(b, a).setY(0).normalize();
    const side = new Vector3(-dir.z, 0, dir.x).multiplyScalar(width / 2);
    pos.push(p.x + side.x, p.y + yLift, p.z + side.z, p.x - side.x, p.y + yLift, p.z - side.z);
    const u = lens[i] / total;
    uv.push(u, 0, u, 1);
    if (i) { const o = (i - 1) * 2; idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
  });
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

/** Points that travel along segments (cars) or sit still (bridge lights). */
function trafficPoints(segments, uniforms) {
  const n = segments.length;
  const a = new Float32Array(n * 3), b = new Float32Array(n * 3), ph = new Float32Array(n), sp = new Float32Array(n), col = new Float32Array(n * 3);
  segments.forEach(([p, q, phase, speed, c], i) => {
    a.set([p.x, p.y, p.z], i * 3); b.set([q.x, q.y, q.z], i * 3); ph[i] = phase; sp[i] = speed; col.set([c.r, c.g, c.b], i * 3);
  });
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(a, 3));
  g.setAttribute('aEnd', new BufferAttribute(b, 3));
  g.setAttribute('aPhase', new BufferAttribute(ph, 1));
  g.setAttribute('aSpeed', new BufferAttribute(sp, 1));
  g.setAttribute('aColor', new BufferAttribute(col, 3));
  const p = new Points(g, mat(S.traffic, uniforms, additive));
  p.frustumCulled = false;
  return p;
}

// ---------------------------------------------------------------------------
// World
// ---------------------------------------------------------------------------
export function buildWorld(scene, tex, data, quality) {
  const low = quality.low;
  const uTime = { value: 0 };
  const uPixelRatio = { value: 1 };
  const fog = {
    cool: { value: new Color(0.020, 0.026, 0.07) },
    warm: { value: new Color(0.30, 0.12, 0.06) },
    sun: { value: new Vector3(-0.9, -0.02, 0.36).normalize() },
    density: { value: 1 / 400 },
    detail: { value: 1 },
  };
  const uZenith = { value: new Color(0.006, 0.010, 0.040) };
  const F = S.fogUniforms(fog);
  const world = { uTime, uPixelRatio, fog, uZenith, hit: [] };

  // ---- Sky ----------------------------------------------------------------
  {
    const m = mat(S.sky, {
      uSunDir: fog.sun, uZenith, uHorizon: { value: new Color(0.018, 0.022, 0.075) }, uGlow: { value: new Color(0.95, 0.36, 0.14) }, uTime,
    }, { side: BackSide, depthWrite: false });
    const sky = new Mesh(new SphereGeometry(10, 48, 24), m);
    sky.renderOrder = -20;
    sky.frustumCulled = false;
    scene.add(sky);
  }

  // ---- East Coast night map --------------------------------------------------
  {
    const b = data.map;
    const nw = P(b.latMax, b.lonMin), se = P(b.latMin, b.lonMax);
    const geo = new PlaneGeometry(se.x - nw.x, se.z - nw.z);
    geo.rotateX(-Math.PI / 2);
    const m = mat(S.map, { uMap: { value: tex.map }, uTime, uLights: { value: 1 }, uBounds: { value: [b.lonMin, b.lonMax, b.latMin, b.latMax] }, ...F }, flat());
    const mesh = new Mesh(geo, m);
    mesh.position.set((nw.x + se.x) / 2, -0.6, (nw.z + se.z) / 2);
    mesh.renderOrder = -10;
    mesh.frustumCulled = false;
    scene.add(mesh);
    world.map = m;
  }

  // =========================================================================
  // NEW YORK
  // =========================================================================
  const kN = k(40.73);
  const upmN = kN / 100; // scene units per metre in New York
  const CN = P(PLACES.nyc.lat, PLACES.nyc.lon);
  const nyc = new Group();
  nyc.position.copy(CN);
  scene.add(nyc);
  const L = (lat, lon, altM = 0) => P(lat, lon, altM).sub(CN);
  const toLocal = (ring) => ring.map(([lon, lat]) => { const v = L(lat, lon); return [v.x, v.z]; });

  // Ground: water first, then land, then the park, all flat and drawn in order.
  {
    const wm = mat(S.water, { uTime, uUnitsPerM: { value: upmN }, uZenith, ...F }, flat());
    const water = new Mesh(new PlaneGeometry(1, 1), wm);
    water.geometry.rotateX(-Math.PI / 2);
    water.scale.set(900, 1, 900);
    water.position.y = -0.3;
    water.renderOrder = -9;
    water.frustumCulled = false;
    nyc.add(water);
  }
  const groundMat = (mode, density, color) => mat(S.ground, {
    uMode: { value: mode }, uGridInv: { value: new Float32Array(4) }, uGridOrigin: { value: new Vector2() },
    uUnitsPerM: { value: upmN }, uStreetCol: { value: new Color(color) }, uDensity: { value: density }, uTime, ...districtUniforms(), ...F,
  }, flat());
  // Grid frame for Manhattan (avenue/street -> scene) and its inverse for the shader.
  const g0 = L(...grid(0, 59)), gA = L(...grid(1, 59)).sub(g0), gS = L(...grid(0, 60)).sub(g0);
  const det = gA.x * gS.z - gS.x * gA.z;
  const inv = [gS.z / det, -gA.z / det, -gS.x / det, gA.x / det]; // column-major mat2
  const gridToLocal = (a, s) => new Vector3(g0.x + gA.x * a + gS.x * (s - 59), 0, g0.z + gA.z * a + gS.z * (s - 59));
  const localToGrid = (x, z) => {
    const dx = x - g0.x, dz = z - g0.z;
    return [inv[0] * dx + inv[2] * dz, inv[1] * dx + inv[3] * dz + 59];
  };
  const gridAngle = Math.atan2(-gA.z, gA.x); // rotation that aligns a box's x axis with the avenues' cross direction
  world.nycGrid = { gridToLocal, localToGrid };

  const landLayers = [];
  const manhattanPolys = [];
  for (const [name, polys] of Object.entries(data.nyc)) {
    if (name.startsWith('_')) continue;
    const isMan = name === 'Manhattan';
    const m = isMan ? groundMat(1, 1, '#d9e3ff') : groundMat(0, name === 'Brooklyn' || name === 'Queens' ? 1 : 0.7, '#ffb36b');
    if (isMan) {
      m.uniforms.uGridInv.value.set(inv);
      m.uniforms.uGridOrigin.value.set(CN.x + g0.x, CN.z + g0.z);
    }
    const rings = polys.map((p) => [toLocal(p.outer), ...p.holes.map(toLocal)]);
    rings.forEach((r) => { const mesh = shapeMesh(r, m, -0.2); mesh.renderOrder = -8; nyc.add(mesh); });
    landLayers.push({ polys: rings, color: isMan ? '#ffff00' : '#ff0000' });
    if (isMan) manhattanPolys.push(...rings);
  }
  // Central Park and the Reservoir
  const parkCorners = [gridToLocal(0, 59.6), gridToLocal(3, 59.6), gridToLocal(3, 110), gridToLocal(0, 110)].map((v) => [v.x, v.z]);
  {
    const pm = groundMat(2, 1, '#ffd9a0');
    const park = shapeMesh([parkCorners], pm, -0.15);
    park.renderOrder = -7;
    nyc.add(park);
    const res = [];
    for (let i = 0; i < 40; i++) {
      const t = (i / 40) * Math.PI * 2;
      const v = gridToLocal(1.55 + Math.cos(t) * 1.05, 91.2 + Math.sin(t) * 5.0);
      res.push([v.x, v.z]);
    }
    const rm = mat(S.water, { uTime, uUnitsPerM: { value: upmN }, uZenith, ...F }, flat());
    const reservoir = shapeMesh([res], rm, -0.1);
    reservoir.renderOrder = -6;
    nyc.add(reservoir);
  }
  const HALF_N = 500; // mask covers +-50 km
  const nycMask = makeMask([...landLayers.filter((l) => l.color === '#ff0000'), ...landLayers.filter((l) => l.color === '#ffff00')], HALF_N, low ? 2048 : 3072);
  const onLand = (x, z) => nycMask(x, z)[0] > 128;
  const onManhattan = (x, z) => nycMask(x, z)[1] > 128;

  // ---- Manhattan buildings -------------------------------------------------
  const nycBoxes = new BoxBatch();
  const r = rng(1811);
  const reserved = [];
  const isReserved = (x, z, rad) => reserved.some(([rx, rz, rr]) => Math.hypot(x - rx, z - rz) < rr + rad);
  const nycHeight = (lat, lon, s) => {
    let h = 16 + r() * 22;
    const mid = Math.exp(-((distM(lat, lon, 40.7565, -73.9815) / 1150) ** 2));
    const fidi = Math.exp(-((distM(lat, lon, 40.7078, -74.0095) / 640) ** 2));
    const hy = Math.exp(-((distM(lat, lon, 40.7535, -74.0015) / 330) ** 2));
    const uptown = Math.exp(-(((s - 84) / 28) ** 2)) * (s > 59 ? 1 : 0);
    const lognorm = Math.exp(gauss(r) * 0.45);
    h += mid * 135 * lognorm + fidi * 120 * lognorm + hy * 150 * lognorm + uptown * 30 * r();
    if (s > 110) h *= 0.7;
    return Math.min(h, 330);
  };
  const addTower = (lat, lon, w, d, h, style = 1, id = -1, rot = gridAngle, extra = []) => {
    const v = L(lat, lon);
    const kk = upmN;
    nycBoxes.add(v.x, v.z, w * kk, d * kk, h * kk, rot, r(), style, id);
    let y = h;
    for (const [ww, dd, hh] of extra) { nycBoxes.add(v.x, v.z, ww * kk, dd * kk, hh * kk, rot, r(), style, id, y * kk); y += hh; }
    reserved.push([v.x, v.z, Math.max(w, d) * kk * 0.8]);
    return v.clone().setY(y * kk);
  };
  // Landmark silhouettes (generic massing at their real addresses).
  addTower(40.7484, -73.9857, 130, 60, 320, 0, -1, gridAngle, [[60, 40, 60], [12, 12, 63]]); // Empire State-style stepped tower + mast
  addTower(40.7130, -74.0132, 62, 62, 417, 1, -1, gridAngle + 0.785, [[6, 6, 124]]);         // One World Trade Center-style tower + spire
  addTower(40.7516, -73.9755, 45, 45, 275, 0, -1, gridAngle, [[25, 25, 30], [6, 6, 14]]);     // Chrysler-style crown
  addTower(40.7660, -73.9810, 45, 30, 472, 1);                                                  // Central Park Tower
  addTower(40.7615, -73.9718, 28, 28, 426, 1);                                                  // 432 Park
  addTower(40.7649, -73.9775, 18, 40, 435, 1);                                                  // 111 W 57th
  addTower(40.7656, -73.9790, 40, 30, 306, 1);                                                  // One57
  addTower(40.7540, -74.0010, 60, 45, 387, 1);                                                  // 30 Hudson Yards
  addTower(40.7545, -74.0025, 45, 40, 308, 1);                                                  // 35 Hudson Yards
  addTower(40.7531, -73.9790, 50, 50, 427, 1);                                                  // One Vanderbilt
  addTower(40.7553, -73.9845, 45, 40, 366, 1);                                                  // Bank of America Tower
  addTower(40.7593, -73.9800, 40, 30, 259, 0);                                                  // 30 Rock
  addTower(40.7116, -74.0112, 50, 50, 298, 1);                                                  // 3 WTC
  addTower(40.7104, -74.0108, 50, 50, 297, 1);                                                  // 4 WTC
  addTower(40.7069, -74.0089, 40, 35, 283, 0);                                                  // 40 Wall St
  addTower(40.6923, -73.9853, 40, 40, 325, 1, -1, 0);                                           // Brooklyn Tower

  // Property types (Commercial chapter): one representative building each, around Midtown.
  const typeSpots = [
    ['Office', 1.6, 47.5, 55, 40, 240, 1], ['Retail', -0.15, 55.5, 60, 30, 34, 0], ['Industrial', 6.35, 27.5, 120, 60, 18, 0],
    ['Multifamily', 3.5, 64.5, 50, 35, 128, 0], ['Hospitality', 2.35, 45.5, 45, 40, 190, 1], ['Healthcare', -2.95, 31.5, 90, 60, 92, 0],
    ['Mixed use', 5.6, 37.5, 55, 50, 262, 1], ['Land development', 6.1, 41.5, 110, 55, 2, 0], ['Storage', 6.0, 21.5, 70, 50, 36, 0],
    ['Restaurants', 1.7, 12.5, 30, 22, 14, 0], ['Churches', 4.3, 71.5, 25, 45, 28, 0], ['Special purpose', 6.35, 35.5, 140, 60, 34, 0],
  ];
  world.typeTargets = typeSpots.map(([name, a, s, w, d, h, style], i) => {
    const v = gridToLocal(a, s);
    const kk = upmN;
    nycBoxes.add(v.x, v.z, w * kk, d * kk, h * kk, gridAngle, r(), style, i);
    if (name === 'Churches') nycBoxes.add(v.x, v.z + 0.12, 7 * kk, 7 * kk, 46 * kk, gridAngle, r(), 0, i, 28 * kk);
    reserved.push([v.x, v.z, Math.max(w, d) * kk * 0.7]);
    return { name, local: v.clone().setY((name === 'Churches' ? 74 : h) * kk + 0.05) };
  });

  // The 1811 grid: blocks between avenues and streets, cut into lots.
  const lenA = gA.length(), lenS = gS.length();
  const ux = gA.clone().normalize(), uz = gS.clone().normalize();
  const lotTarget = low ? 42 : 28;
  for (let i = 0; i < AVENUES.length - 1; i++) {
    const a0 = AVENUES[i].a, a1 = AVENUES[i + 1].a;
    for (let s = 1; s < 220; s++) {
      if (a0 >= 0 && a1 <= 3 && s >= 59 && s < 110) continue; // Central Park
      const blockA = (a1 - a0) * lenA, blockS = lenS;
      const insetA = 15 * upmN, insetS = 10 * upmN;
      const nA = Math.max(1, Math.round((blockA - 2 * insetA) / (lotTarget * upmN)));
      const c0 = gridToLocal(a0, s);
      const [lat, lon] = grid((a0 + a1) / 2, s + 0.5);
      const hBlock = nycHeight(lat, lon, s);
      const towerBlock = hBlock > 150 && r() < 0.55;
      const rows = towerBlock ? 1 : 2;
      const cols = towerBlock ? Math.max(1, Math.round(nA / 3)) : nA;
      for (let ia = 0; ia < cols; ia++) {
        for (let is = 0; is < rows; is++) {
          const fa = insetA + (blockA - 2 * insetA) * (ia + 0.5) / cols;
          const fs = insetS + (blockS - 2 * insetS) * (is + 0.5) / rows;
          const x = c0.x + ux.x * fa + uz.x * fs, z = c0.z + ux.z * fa + uz.z * fs;
          if (!onManhattan(x, z) || isReserved(x, z, 0.1)) continue;
          if (r() < 0.06) continue; // the odd plaza or open lot
          const w = ((blockA - 2 * insetA) / cols) * (0.86 + r() * 0.1);
          const d = ((blockS - 2 * insetS) / rows) * (0.84 + r() * 0.12);
          let h = towerBlock ? hBlock * (0.8 + r() * 0.5) : nycHeight(lat, lon, s) * (0.6 + r() * 0.5);
          h = Math.max(10, h) * upmN;
          nycBoxes.add(x, z, w, d, h, gridAngle, r(), h / upmN > 140 ? 1 : 0);
        }
      }
    }
  }
  // Below Houston St and the West Village: the older, irregular street pattern.
  {
    const step = (low ? 55 : 42) * upmN;
    const fidi0 = L(40.7000, -74.0200), fidi1 = L(40.7420, -73.9700);
    for (let x = fidi0.x; x < fidi1.x; x += step) {
      for (let z = fidi1.z; z < fidi0.z; z += step) {
        const [a, s] = localToGrid(x, z);
        const irregular = s < 1.5 || (s < 14 && a > 1.0);
        if (!irregular || !onManhattan(x, z) || isReserved(x, z, step * 0.5)) continue;
        const cell = Math.floor(x / (5 * upmN * 100)) * 31 + Math.floor(z / (5 * upmN * 100));
        const rot = gridAngle + ((Math.sin(cell * 12.9898) * 43758.5453) % 1) * 0.9;
        const ll = { lat: 40.735 + (-(z) / (110570 * upmN)), lon: -73.99 + x / (111320 * Math.cos(40.73 * Math.PI / 180) * upmN) };
        const h = nycHeight(ll.lat, ll.lon, 0) * (0.5 + r() * 0.6);
        if (r() < 0.12) continue;
        nycBoxes.add(x + (r() - 0.5) * step * 0.3, z + (r() - 0.5) * step * 0.3, step * (0.6 + r() * 0.3), step * (0.6 + r() * 0.3), Math.max(9, h) * upmN, rot, r(), h > 140 ? 1 : 0);
      }
    }
  }
  // Brooklyn, Queens, the Bronx and New Jersey: lower, with tower clusters.
  {
    const clusters = [[40.6925, -73.9870, 520, 160], [40.7465, -73.9440, 520, 140], [40.7180, -74.0360, 600, 170], [40.7450, -74.0290, 400, 60]];
    const step = (low ? 120 : 85) * upmN;
    const R0 = (low ? 7000 : 9500) * upmN;
    const c = L(40.73, -73.975);
    for (let x = c.x - R0; x < c.x + R0; x += step) {
      for (let z = c.z - R0; z < c.z + R0; z += step) {
        if (Math.hypot(x - c.x, z - c.z) > R0) continue;
        if (onManhattan(x, z) || !onLand(x, z) || r() < 0.38) continue;
        const ll = { lat: PLACES.nyc.lat - z / (110570 * upmN) * 1, lon: PLACES.nyc.lon + x / (111320 * Math.cos(40.73 * Math.PI / 180) * upmN) };
        let h = 9 + r() * 14;
        for (const [la, lo, rad, hh] of clusters) h += hh * Math.exp(-((distM(ll.lat, ll.lon, la, lo) / rad) ** 2)) * Math.exp(gauss(r) * 0.4);
        const rot = Math.floor(x / (6 * step)) * 0.37 + Math.floor(z / (6 * step)) * 0.21;
        nycBoxes.add(x + (r() - 0.5) * step * 0.3, z + (r() - 0.5) * step * 0.3, step * (0.45 + r() * 0.3), step * (0.45 + r() * 0.35), h * upmN, rot, r(), h > 120 ? 1 : 0);
      }
    }
  }
  const bUniforms = { uTime, uUnitsPerM: { value: upmN }, uHot: { value: -1 }, uHotOn: { value: 0 }, uZenith, ...F };
  const nycBuildings = nycBoxes.mesh(mat(S.buildings, bUniforms));
  nyc.add(nycBuildings);
  world.nycBuildings = { mesh: nycBuildings, uniforms: bUniforms, count: nycBoxes.items.length };

  // ---- Bridges ---------------------------------------------------------------
  {
    const bridges = [
      [40.7118, -74.0005, 40.7022, -73.9893, 40, 84, '#ffe6c4'],   // Brooklyn Bridge
      [40.7153, -73.9938, 40.6993, -73.9858, 41, 101, '#d6e2ff'],  // Manhattan Bridge
      [40.7172, -73.9832, 40.7108, -73.9600, 41, 102, '#ffe6c4'],  // Williamsburg Bridge
      [40.7604, -73.9615, 40.7506, -73.9405, 40, 106, '#d6e2ff'],  // Queensboro Bridge
      [40.8500, -73.9445, 40.8540, -73.9650, 65, 184, '#e8eeff'],  // George Washington Bridge
      [40.6112, -74.0330, 40.6017, -74.0573, 69, 211, '#e8eeff'],  // Verrazzano-Narrows Bridge
    ];
    const decks = [], lights = [], cars = [];
    const towerMat = new MeshBasicMaterial({ color: new Color(0.03, 0.035, 0.05) });
    for (const [la1, lo1, la2, lo2, deckM, towerM, col] of bridges) {
      const A = L(la1, lo1, deckM), B = L(la2, lo2, deckM);
      const deck = new Mesh(ribbonGeometry([A, B], 26 * upmN, 0), mat(S.ribbon, { uColor: { value: new Color(col) }, uIntensity: { value: 0.9 }, uTime, uDash: { value: 0 }, uDraw: { value: 1 }, uFogOn: { value: 1 }, ...F }, additive));
      deck.frustumCulled = false;
      nyc.add(deck);
      const t1 = A.clone().lerp(B, 0.24), t2 = A.clone().lerp(B, 0.76);
      for (const t of [t1, t2]) {
        const tw = new Mesh(new BoxGeometry(10 * upmN, towerM * upmN, 16 * upmN), towerMat);
        tw.position.set(t.x, (towerM * upmN) / 2, t.z);
        tw.rotation.y = Math.atan2(B.x - A.x, B.z - A.z);
        nyc.add(tw);
      }
      // necklace lights along the main cable
      const top = (towerM - deckM) * upmN;
      const n = low ? 24 : 44;
      const c = new Color(col).multiplyScalar(2.2);
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const p = t1.clone().lerp(t2, t);
        p.y += top * (1 - 4 * t * (1 - t)) * 0.92 + 0.05;
        lights.push([p, p, 0, 0, c]);
      }
      for (const [p0, p1] of [[A, t1], [t2, B]]) {
        for (let i = 0; i <= 10; i++) { const p = p0.clone().lerp(p1, i / 10); p.y += top * (p0 === A ? i / 10 : 1 - i / 10) * 0.9; lights.push([p, p, 0, 0, c]); }
      }
      for (let i = 0; i < (low ? 14 : 30); i++) {
        const fwd = i % 2 === 0;
        cars.push([fwd ? A : B, fwd ? B : A, Math.random(), 0.02 + Math.random() * 0.02, fwd ? new Color(2.2, 2.0, 1.7) : new Color(2.2, 0.2, 0.1)]);
      }
    }
    nyc.add(trafficPoints(lights, { uTime, uPixelRatio, uSize: { value: 18 }, ...F }));
    nyc.add(trafficPoints(cars, { uTime, uPixelRatio, uSize: { value: 22 }, ...F }));
  }

  // ---- Manhattan traffic along the avenues and major cross streets ----------
  {
    const cars = [];
    const white = new Color(2.0, 1.85, 1.6), red = new Color(2.4, 0.18, 0.08);
    const per = low ? 6 : 12;
    AVENUES.forEach(({ a }, i) => {
      if (a < -3.6) return;
      const north = i % 2 === 0;
      for (let s0 = 1; s0 < 200; s0 += 20) {
        const A = gridToLocal(a, s0), B = gridToLocal(a, s0 + 20);
        if (!onManhattan(A.x, A.z) || !onManhattan(B.x, B.z)) continue;
        if (a > 0 && a < 3 && s0 + 20 > 59 && s0 < 110) continue;
        A.y = B.y = 0.02;
        for (let c = 0; c < per; c++) cars.push([north ? A : B, north ? B : A, Math.random(), 0.03 + Math.random() * 0.03, north ? white : red]);
      }
    });
    for (const s of [14, 23, 34, 42, 57, 72, 79, 86, 96, 116, 125]) {
      for (let i = 0; i < AVENUES.length - 1; i++) {
        const A = gridToLocal(AVENUES[i].a, s), B = gridToLocal(AVENUES[i + 1].a, s);
        if (!onManhattan(A.x, A.z) || !onManhattan(B.x, B.z)) continue;
        A.y = B.y = 0.02;
        for (let c = 0; c < 3; c++) { const e = c % 2 === 0; cars.push([e ? A : B, e ? B : A, Math.random(), 0.06 + Math.random() * 0.05, e ? white : red]); }
      }
    }
    nyc.add(trafficPoints(cars, { uTime, uPixelRatio, uSize: { value: 16 }, ...F }));
  }

  // Liberty Island torch
  {
    const v = L(40.6892, -74.0445, 93);
    const g = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uColor: { value: new Color(1, 0.8, 0.45) }, uIntensity: { value: 2.5 } }, additive));
    g.position.copy(v);
    g.scale.setScalar(60 * upmN);
    nyc.add(g);
    world.billboards = [g];
  }

  // =========================================================================
  // ORLANDO
  // =========================================================================
  const kO = k(28.6);
  const upmO = kO / 100;
  const CO = P(28.60, -81.32);
  const orl = new Group();
  orl.position.copy(CO);
  scene.add(orl);
  const LO = (lat, lon, altM = 0) => P(lat, lon, altM).sub(CO);
  const ro = rng(1875);

  // Ground: a wide disc of streets and neighbourhoods.
  {
    const gm = mat(S.ground, {
      uMode: { value: 0 }, uGridInv: { value: new Float32Array(4) }, uGridOrigin: { value: new Vector2() },
      uUnitsPerM: { value: upmO }, uStreetCol: { value: new Color('#ffad5c') }, uDensity: { value: 1 }, uTime, ...districtUniforms(), ...F,
    }, flat());
    world.orlGround = gm;
    const g = new Mesh(new RingGeometry(0, 1, 96), gm);
    g.geometry.rotateX(-Math.PI / 2);
    g.scale.setScalar(380);
    g.position.y = -0.2;
    g.renderOrder = -8;
    g.frustumCulled = false;
    orl.add(g);
  }
  // Lakes: real ones by name and position, plus the many small ones Orlando is known for.
  const lakes = [
    ['Lake Eola', 28.5434, -81.3725, 165, 150, 0], ['Lake Lucerne', 28.5335, -81.3795, 170, 110, 0.3], ['Lake Cherokee', 28.5310, -81.3685, 120, 90, 0],
    ['Lake Davis', 28.5293, -81.3737, 130, 110, 0.2], ['Lake Ivanhoe', 28.5665, -81.3780, 280, 620, 0.15], ['Lake Highland', 28.5600, -81.3690, 150, 130, 0],
    ['Lake Dot', 28.5520, -81.3850, 100, 90, 0], ['Lake Adair', 28.5650, -81.3990, 260, 300, 0], ['Lake Concord', 28.5640, -81.3925, 150, 120, 0],
    ['Lake Underhill', 28.5340, -81.3330, 700, 380, 0.2], ['Lake Baldwin', 28.5690, -81.3220, 420, 360, 0], ['Lake Virginia', 28.5915, -81.3420, 620, 520, 0.4],
    ['Lake Maitland', 28.6250, -81.3550, 900, 800, 0.2], ['Lake Killarney', 28.6030, -81.3750, 520, 420, 0], ['Lake Howell', 28.6280, -81.2900, 600, 700, 0.3],
    ['Red Bug Lake', 28.6480, -81.2660, 260, 200, 0.5], ['Lake Jesup', 28.7220, -81.2350, 7200, 2500, 0.28], ['Lake Fairview', 28.5900, -81.4050, 700, 600, 0],
    ['Lake Rowena', 28.5640, -81.3620, 180, 160, 0], ['Lake Barton', 28.5900, -81.3200, 300, 250, 0.3], ['Lake Burkett', 28.6100, -81.2750, 400, 280, 0.6],
  ];
  const lakeList = lakes.map(([name, lat, lon, rx, rz, rot]) => { const v = LO(lat, lon); return { name, x: v.x, z: v.z, rx: rx * upmO, rz: rz * upmO, rot }; });
  for (let i = 0; i < (low ? 70 : 140); i++) {
    const lat = 28.40 + ro() * 0.42, lon = -81.52 + ro() * 0.36;
    const v = LO(lat, lon);
    const rx = (60 + Math.pow(ro(), 2) * 420) * upmO;
    if (lakeList.some((l) => Math.hypot(l.x - v.x, l.z - v.z) < l.rx + rx + 0.5)) continue;
    if (distM(lat, lon, 28.5415, -81.379) < 900) continue;
    lakeList.push({ name: '', x: v.x, z: v.z, rx, rz: rx * (0.6 + ro() * 0.6), rot: ro() * 3 });
  }
  const inLake = (x, z, m = 0) => lakeList.some((l) => {
    const dx = x - l.x, dz = z - l.z, c = Math.cos(l.rot), s = Math.sin(l.rot);
    const u = (dx * c - dz * s) / (l.rx + m), w = (dx * s + dz * c) / (l.rz + m);
    return u * u + w * w < 1;
  });
  {
    const lm = mat(S.water, { uTime, uUnitsPerM: { value: upmO }, uZenith, ...F }, flat());
    for (const l of lakeList) {
      const pts = [];
      const n = 40, seed = ro() * 10;
      for (let i = 0; i < n; i++) {
        const t = (i / n) * Math.PI * 2;
        const wob = 1 + 0.08 * Math.sin(t * 3 + seed) + 0.05 * Math.sin(t * 5 + seed * 2);
        const u = Math.cos(t) * l.rx * wob, w = Math.sin(t) * l.rz * wob;
        const c = Math.cos(l.rot), s = Math.sin(l.rot);
        pts.push([l.x + u * c + w * s, l.z - u * s + w * c]);
      }
      const m = shapeMesh([pts], lm, -0.15);
      m.renderOrder = -7;
      orl.add(m);
    }
  }
  // Roads: I-4 and the arterials around the Winter Springs office.
  const roads = [
    ['I-4', 46, [[28.430, -81.470], [28.475, -81.432], [28.507, -81.400], [28.528, -81.390], [28.546, -81.3855], [28.570, -81.377], [28.600, -81.367], [28.640, -81.354], [28.668, -81.343], [28.700, -81.330], [28.735, -81.318]]],
    ['SR 408', 36, [[28.537, -81.480], [28.537, -81.420], [28.5405, -81.392], [28.5395, -81.360], [28.537, -81.320], [28.530, -81.270], [28.528, -81.210]]],
    ['SR 436', 28, [[28.460, -81.307], [28.520, -81.309], [28.560, -81.310], [28.600, -81.318], [28.640, -81.330], [28.668, -81.340], [28.700, -81.355]]],
    ['SR 417', 34, [[28.500, -81.200], [28.560, -81.220], [28.620, -81.240], [28.680, -81.270], [28.720, -81.290]]],
    ['Red Bug Lake Rd', 22, [[28.6555, -81.330], [28.6545, -81.300], [28.6555, -81.262], [28.6560, -81.225]]],
    ['Tuskawilla Rd', 20, [[28.620, -81.2605], [28.6555, -81.2605], [28.690, -81.2560], [28.704, -81.254]]],
    ['SR 434', 24, [[28.697, -81.360], [28.6985, -81.300], [28.6960, -81.250], [28.690, -81.200]]],
    ['Orange Ave', 18, [[28.500, -81.3790], [28.5410, -81.3790], [28.580, -81.3780]]],
  ];
  const roadSegs = [];
  {
    const cars = [];
    const white = new Color(2.0, 1.85, 1.6), red = new Color(2.4, 0.18, 0.08);
    for (const [, widthM, pts] of roads) {
      const pl = pts.map(([la, lo]) => LO(la, lo));
      const curve = new CatmullRomCurve3(pl);
      const smooth = curve.getPoints(pl.length * 12);
      const m = new Mesh(ribbonGeometry(smooth, widthM * upmO, 0.03), mat(S.ribbon, { uColor: { value: new Color('#ffb066') }, uIntensity: { value: widthM > 30 ? 1.1 : 0.7 }, uTime, uDash: { value: 0 }, uDraw: { value: 1 }, uFogOn: { value: 1 }, ...F }, additive));
      m.frustumCulled = false;
      orl.add(m);
      for (let i = 1; i < smooth.length; i++) {
        roadSegs.push([smooth[i - 1], smooth[i]]);
        if (i % 2 === 0) {
          const A = smooth[i - 2].clone().setY(0.05), B = smooth[i].clone().setY(0.05);
          const n = widthM > 30 ? (low ? 2 : 4) : 1;
          for (let c = 0; c < n; c++) { const f = c % 2 === 0; cars.push([f ? A : B, f ? B : A, Math.random(), 0.15 + Math.random() * 0.15, f ? white : red]); }
        }
      }
    }
    orl.add(trafficPoints(cars, { uTime, uPixelRatio, uSize: { value: 16 }, ...F }));
  }
  const nearRoad = (x, z, m) => roadSegs.some(([a, b]) => {
    const abx = b.x - a.x, abz = b.z - a.z;
    const t = Math.max(0, Math.min(1, ((x - a.x) * abx + (z - a.z) * abz) / (abx * abx + abz * abz)));
    return Math.hypot(x - a.x - abx * t, z - a.z - abz * t) < m;
  });

  // Downtown Orlando
  const orlBoxes = new BoxBatch();
  {
    const core = LO(28.5415, -81.3795);
    const step = 60 * upmO;
    world.downtownGrid = { origin: core.clone().add(new Vector3(-30 * upmO, 0, -30 * upmO)), block: 120 };
    for (let x = core.x - 16 * step; x < core.x + 16 * step; x += step) {
      for (let z = core.z - 16 * step; z < core.z + 16 * step; z += step) {
        const d = Math.hypot(x - core.x, z - core.z) / upmO;
        if (d > 1300 || inLake(x, z, 25 * upmO) || nearRoad(x, z, 30 * upmO) || ro() < 0.3) continue;
        const towerish = Math.exp(-((d / 420) ** 2));
        let h = 8 + ro() * 18 + towerish * 120 * Math.exp(gauss(ro) * 0.45);
        h = Math.min(h, 140);
        orlBoxes.add(x + (ro() - 0.5) * step * 0.08, z + (ro() - 0.5) * step * 0.08, step * (0.55 + ro() * 0.25), step * (0.55 + ro() * 0.25), h * upmO, 0, ro(), h > 70 ? 1 : 0);
      }
    }
  }
  // Advisory tower: 15 glass floors on the west shore of Lake Eola, one per service.
  {
    const base = LO(28.5446, -81.3770);
    const n = 15, floorH = 12 * upmO, gap = 1.6 * upmO;
    const geo = new BoxGeometry(1, 1, 1);
    const fm = mat(S.floors, { uHot: { value: -1 }, uDraw: { value: 0 }, uTime, uCount: { value: n }, uZenith, ...F }, { transparent: false });
    const inst = new InstancedMesh(geo, fm, n);
    const ids = new Float32Array(n);
    const o = new Object3D();
    for (let i = 0; i < n; i++) {
      const taper = 1 - i * 0.012;
      o.position.set(base.x, 6 * upmO + i * (floorH + gap) + floorH / 2, base.z);
      o.rotation.set(0, 0.35 + i * 0.012, 0);
      o.scale.set(44 * upmO * taper, floorH, 30 * upmO * taper);
      o.updateMatrix();
      inst.setMatrixAt(i, o.matrix);
      ids[i] = i;
    }
    geo.setAttribute('aFloor', new InstancedBufferAttribute(ids, 1));
    inst.frustumCulled = false;
    orl.add(inst);
    world.tower = { uniforms: fm.uniforms, floorLocal: (i) => base.clone().setY(6 * upmO + i * (floorH + gap) + floorH / 2), base, n };
  }
  // Lake Eola fountain
  {
    const v = LO(28.5432, -81.3727, 12);
    const g = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uColor: { value: new Color(0.6, 0.8, 1.0) }, uIntensity: { value: 1.1 } }, additive));
    g.position.copy(v);
    g.scale.setScalar(40 * upmO);
    orl.add(g);
    world.billboards.push(g);
    world.fountain = g;
  }

  // Neighbourhoods: homes facing lamp-lit streets, backyard pools, trees.
  const houseList = [], poolList = [], treeList = [];
  const parcelLines = [];
  const streetQuads = []; // [x0, z0, x1, z1, widthUnits]
  const addHome = (x, z, w, d, h, rot, backX, backZ, lotW) => {
    houseList.push([x, z, w, d, h, rot, ro()]);
    if (ro() < 0.28) poolList.push([x + backX * 0.55, z + backZ * 0.55, 8 * upmO, 4.5 * upmO, rot, ro()]);
    if (ro() < 0.6) treeList.push([x + backX * 0.95 + (ro() - 0.5) * lotW * 0.6, z + backZ * 0.95 + (ro() - 0.5) * lotW * 0.6, (5 + ro() * 5) * upmO, ro()]);
    if (ro() < 0.25) treeList.push([x - backX * 0.75 + (ro() - 0.5) * lotW * 0.6, z - backZ * 0.75 + (ro() - 0.5) * lotW * 0.6, (4 + ro() * 3) * upmO, ro()]);
  };
  const hoods = [
    [28.6555, -81.2605, low ? 1300 : 1900, low ? 0.55 : 0.8], // Winter Springs, around the office
    [28.6380, -81.2900, low ? 700 : 1100, 0.6],
    [28.6720, -81.2330, low ? 600 : 1000, 0.55],
    [28.5650, -81.3920, low ? 600 : 900, 0.6],  // College Park
    [28.5240, -81.3620, low ? 500 : 800, 0.55],
  ];
  {
    const lotW = 22 * upmO, lotD = 34 * upmO, gapM = 14 * upmO;
    const band = lotD * 2 + gapM;          // street, two rows of homes back to back, next street
    const cell = band * 4;
    for (const [lat, lon, radM, density] of hoods) {
      const c = LO(lat, lon);
      const R0 = radM * upmO;
      for (let cx = c.x - R0; cx < c.x + R0; cx += cell) {
        for (let cz = c.z - R0; cz < c.z + R0; cz += cell) {
          if (Math.hypot(cx - c.x, cz - c.z) > R0 - cell * 0.3) continue;
          const ang = (ro() - 0.5) * 0.8;
          const ca = Math.cos(ang), sa = Math.sin(ang);
          const W2 = (lx, lz) => [cx + lx * ca - lz * sa, cz + lx * sa + lz * ca];
          // streets: one per band edge across the cell, plus the two cell sides
          for (let rI = 0; rI <= 4; rI++) {
            const lz = -cell / 2 + rI * band;
            const [x0, z0] = W2(-cell / 2, lz), [x1, z1] = W2(cell / 2, lz);
            streetQuads.push([x0, z0, x1, z1, 9 * upmO]);
          }
          for (const lx of [-cell / 2, cell / 2]) {
            const [x0, z0] = W2(lx, -cell / 2), [x1, z1] = W2(lx, cell / 2);
            streetQuads.push([x0, z0, x1, z1, 9 * upmO]);
          }
          const cols = Math.floor((cell - 2 * 10 * upmO) / lotW);
          for (let rI = 0; rI < 4; rI++) {
            for (let cI = 0; cI < cols; cI++) {
              for (const side of [-1, 1]) {
                if (ro() > density) continue;
                const lx = -cell / 2 + 10 * upmO + (cI + 0.5) * lotW;
                const mid = -cell / 2 + rI * band + band / 2;          // where the backyards meet
                const lz = mid + side * (lotD / 2 + 2 * upmO);
                const [x, z] = W2(lx, lz);
                if (inLake(x, z, 16 * upmO) || nearRoad(x, z, 24 * upmO)) continue;
                const back = W2(lx, mid);
                addHome(x, z, (11 + ro() * 5) * upmO, (9 + ro() * 4) * upmO, (ro() < 0.3 ? 7.5 : 4.6) * upmO, -ang, back[0] - x, back[1] - z, lotW);
              }
            }
          }
        }
      }
    }
    // Colonialtown, the Listings chapter: a north-south plat of blocks and lots, one home per lot.
    const pc = LO(28.5560, -81.3560);
    const bw = 130 * upmO, bh = 210 * upmO, span = 1040 * upmO;
    const x0 = pc.x - span, z0 = pc.z - span;
    for (let x = x0; x <= pc.x + span + 1e-6; x += bw) parcelLines.push([new Vector3(x, 0.06, z0), new Vector3(x, 0.06, pc.z + span)]);
    for (let z = z0; z <= pc.z + span + 1e-6; z += bh) parcelLines.push([new Vector3(x0, 0.06, z), new Vector3(pc.x + span, 0.06, z)]);
    for (let x = x0; x < pc.x + span - 1e-6; x += bw) {
      for (let z = z0; z < pc.z + span - 1e-6; z += bh) {
        parcelLines.push([new Vector3(x + bw / 2, 0.06, z + 8 * upmO), new Vector3(x + bw / 2, 0.06, z + bh - 8 * upmO)]);
        const n = 6 + Math.floor(ro() * 3);
        for (let i = 1; i < n; i++) parcelLines.push([new Vector3(x + 8 * upmO, 0.06, z + (bh * i) / n), new Vector3(x + bw - 8 * upmO, 0.06, z + (bh * i) / n)]);
        for (let col = 0; col < 2; col++) {
          for (let i = 0; i < n; i++) {
            const cxL = x + bw * (col === 0 ? 0.27 : 0.73), czL = z + (bh * (i + 0.5)) / n;
            if (inLake(cxL, czL, 12 * upmO) || ro() < 0.08) continue;
            const backX = (x + bw / 2 - cxL) * 0.9;
            addHome(cxL, czL, (bw / 2) * 0.42, (bh / n) * 0.6, (ro() < 0.3 ? 7.5 : 4.6) * upmO, 0, backX, 0, (bh / n));
          }
        }
      }
    }
    world.parcelCenter = pc;
    world.parcelGrid = { origin: new Vector3(x0, 0, z0), bw: 130, bh: 210, span: 1040 };
  }
  // Streets for the neighbourhoods, split into short pieces so none run across a lake.
  {
    const pos = [], uv = [];
    const lampM = 32;
    for (const [x0, z0, x1, z1, w] of streetQuads) {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const n = Math.max(1, Math.round(len / (40 * upmO)));
      const dx = (x1 - x0) / len, dz = (z1 - z0) / len;
      const sx = -dz * w / 2, sz = dx * w / 2;
      for (let i = 0; i < n; i++) {
        const ax = x0 + (x1 - x0) * (i / n), az = z0 + (z1 - z0) * (i / n);
        const bx = x0 + (x1 - x0) * ((i + 1) / n), bz = z0 + (z1 - z0) * ((i + 1) / n);
        if (inLake((ax + bx) / 2, (az + bz) / 2, 4 * upmO)) continue;
        const ua = (len * (i / n)) / upmO / lampM, ub = (len * ((i + 1) / n)) / upmO / lampM;
        pos.push(ax + sx, 0.03, az + sz, ax - sx, 0.03, az - sz, bx + sx, 0.03, bz + sz, ax - sx, 0.03, az - sz, bx - sx, 0.03, bz - sz, bx + sx, 0.03, bz + sz);
        uv.push(ua, 0, ua, 1, ub, 0, ua, 1, ub, 1, ub, 0);
      }
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    const m = new Mesh(g, mat(S.street, { uColor: { value: new Color('#ffb56b') }, ...F }, additive));
    m.frustumCulled = false;
    orl.add(m);
  }
  // Ground shader: where the hand-placed districts are, so its own streets step aside.
  {
    const gu = world.orlGround.uniforms;
    const toM = (v) => [(v.x + CO.x) / upmO, (v.z + CO.z) / upmO];
    const dg = world.downtownGrid;
    gu.uAlignA.value = [...toM(dg.origin), 1500, 0];
    gu.uAlignAS.value = [dg.block, dg.block];
    const pg = world.parcelGrid;
    const pcM = toM(world.parcelCenter);
    gu.uAlignB.value = [pcM[0], pcM[1], pg.span, 0];
    gu.uAlignBS.value = [pg.bw, pg.bh];
    gu.uAlignBO.value = toM(pg.origin);
    hoods.forEach(([lat, lon, radM], i) => { const v = LO(lat, lon); const [mx, mz] = toM(v); gu.uHoods.value[i].set(mx, mz, radM); });
  }
  // Lakeshore lights: a soft ring around each named lake.
  {
    const pos = [], uv = [];
    for (const l of lakeList) {
      if (!l.name) continue;
      const n = 48;
      const circ = Math.PI * (l.rx + l.rz) / upmO;
      const w = 10 * upmO;
      for (let i = 0; i < n; i++) {
        const pt = (t, r) => { const u = Math.cos(t) * (l.rx + r), v2 = Math.sin(t) * (l.rz + r); const c = Math.cos(l.rot), s2 = Math.sin(l.rot); return [l.x + u * c + v2 * s2, l.z - u * s2 + v2 * c]; };
        const t0 = (i / n) * Math.PI * 2, t1 = ((i + 1) / n) * Math.PI * 2;
        const [ax, az] = pt(t0, 6 * upmO), [bx, bz] = pt(t1, 6 * upmO), [cx2, cz2] = pt(t0, 6 * upmO + w), [dx, dz] = pt(t1, 6 * upmO + w);
        const ua = (circ * i) / n / 26, ub = (circ * (i + 1)) / n / 26;
        pos.push(ax, 0.04, az, cx2, 0.04, cz2, bx, 0.04, bz, cx2, 0.04, cz2, dx, 0.04, dz, bx, 0.04, bz);
        uv.push(ua, 0, ua, 1, ub, 0, ua, 1, ub, 1, ub, 0);
      }
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    const m = new Mesh(g, mat(S.street, { uColor: { value: new Color('#ffd6a0') }, ...F }, additive));
    m.frustumCulled = false;
    orl.add(m);
  }
  // Homes geometry: a box body with a gable roof (roof triangles carry uv.y = 2).
  {
    const body = new BoxGeometry(1, 1, 1).toNonIndexed();
    body.translate(0, 0.5, 0);
    const bp = body.attributes.position.array, bn = body.attributes.normal.array;
    const roofP = [
      -0.55, 1, -0.55, 0.55, 1, -0.55, 0, 1.55, -0.55,  0.55, 1, 0.55, -0.55, 1, 0.55, 0, 1.55, 0.55,
      -0.55, 1, -0.55, 0, 1.55, -0.55, 0, 1.55, 0.55,  -0.55, 1, -0.55, 0, 1.55, 0.55, -0.55, 1, 0.55,
      0.55, 1, -0.55, 0.55, 1, 0.55, 0, 1.55, 0.55,  0.55, 1, -0.55, 0, 1.55, 0.55, 0, 1.55, -0.55,
    ];
    const pos = new Float32Array(bp.length + roofP.length);
    pos.set(bp); pos.set(roofP, bp.length);
    const uv = new Float32Array((pos.length / 3) * 2);
    for (let i = bp.length / 3; i < pos.length / 3; i++) uv[i * 2 + 1] = 2;
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('uv', new BufferAttribute(uv, 2));
    g.computeVertexNormals();
    const nHouse = houseList.length;
    const hm = mat(S.houses, { uTime, uZenith, ...F });
    const inst = new InstancedMesh(g, hm, Math.max(1, nHouse));
    const seeds = new Float32Array(nHouse);
    const o = new Object3D();
    houseList.forEach(([x, z, w, d, h, rot, seed], i) => {
      o.position.set(x, 0, z); o.rotation.set(0, rot, 0); o.scale.set(w, h, d); o.updateMatrix();
      inst.setMatrixAt(i, o.matrix); seeds[i] = seed;
    });
    g.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
    inst.frustumCulled = false;
    orl.add(inst);

    const pg = new PlaneGeometry(1, 1); pg.rotateX(-Math.PI / 2);
    const pinst = new InstancedMesh(pg, mat(S.pools, { uTime, ...F }), Math.max(1, poolList.length));
    const pseeds = new Float32Array(poolList.length);
    poolList.forEach(([x, z, w, d, rot, seed], i) => { o.position.set(x, 0.02, z); o.rotation.set(0, rot, 0); o.scale.set(w, 1, d); o.updateMatrix(); pinst.setMatrixAt(i, o.matrix); pseeds[i] = seed; });
    pg.setAttribute('aSeed', new InstancedBufferAttribute(pseeds, 1));
    pinst.frustumCulled = false;
    orl.add(pinst);

    const tg = new IcosahedronGeometry(1, 0);
    const tinst = new InstancedMesh(tg, mat(S.trees, { uZenith, ...F }), Math.max(1, treeList.length));
    const tseeds = new Float32Array(treeList.length);
    treeList.forEach(([x, z, rad, seed], i) => { o.position.set(x, rad * 0.9, z); o.rotation.set(seed * 3, seed * 7, 0); o.scale.set(rad, rad * 0.85, rad); o.updateMatrix(); tinst.setMatrixAt(i, o.matrix); tseeds[i] = seed; });
    tg.setAttribute('aSeed', new InstancedBufferAttribute(tseeds, 1));
    tinst.frustumCulled = false;
    orl.add(tinst);
    world.homeCount = nHouse;
  }
  const orlUniforms = { uTime, uUnitsPerM: { value: upmO }, uHot: { value: -1 }, uHotOn: { value: 0 }, uZenith, ...F };
  orl.add(orlBoxes.mesh(mat(S.buildings, orlUniforms)));

  // Parcel lines (Listings)
  {
    const pos = new Float32Array(parcelLines.length * 6);
    parcelLines.forEach(([a, b], i) => pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6));
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    const pm = new ShaderMaterial({
      vertexShader: `varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,
      fragmentShader: `uniform float uOn; uniform vec3 uPointer; uniform float uPointerOn; uniform vec3 uCenter; uniform float uSpan; varying vec3 vP;
        void main(){ float d = length(vP.xz - uPointer.xz); float near = exp(-d*d/(uSpan*uSpan*0.012)) * uPointerOn;
          float edge = 1.0 - smoothstep(0.6, 1.0, length(vP.xz - uCenter.xz) / uSpan);
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (1.3 + near * 2.5);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,
      uniforms: { uOn: { value: 0 }, uPointer: { value: new Vector3(1e6, 0, 1e6) }, uPointerOn: { value: 0 }, uCenter: { value: new Vector3().copy(world.parcelCenter).add(CO) }, uSpan: { value: 1100 * upmO } },
      ...additive,
    });
    const lines = new LineSegments(g, pm);
    lines.frustumCulled = false;
    orl.add(lines);
    world.parcels = pm;
  }

  // =========================================================================
  // Offices, beams, the flight arc, clouds
  // =========================================================================
  const officeWorld = (pl, alt = 0) => P(pl.lat, pl.lon, alt);
  world.offices = [PLACES.nyOffice, PLACES.orlandoOffice].map((pl, i) => {
    const pos = officeWorld(pl);
    const ringMat = mat(S.pinRing, { uTime, uOn: { value: 1 }, uColor: { value: new Color(1, 0.8, 0.5) } }, { ...additive, side: DoubleSide });
    const ring = new Mesh(new PlaneGeometry(1, 1), ringMat);
    ring.geometry.rotateX(-Math.PI / 2);
    ring.position.copy(pos).setY(pos.y + 0.06);
    ring.frustumCulled = false;
    scene.add(ring);
    const bm = mat(S.beam, { uColor: { value: new Color(1, 0.78, 0.45) }, uIntensity: { value: 1.4 }, uTime }, { ...additive, side: DoubleSide });
    const beam = new Mesh(new CylinderGeometry(1, 1, 1, 24, 1, true), bm);
    beam.geometry.translate(0, 0.5, 0);
    beam.position.copy(pos);
    beam.frustumCulled = false;
    scene.add(beam);
    world.hit.push({ center: pos, r: 0, chapter: i === 0 ? 2 : 3, label: i === 0 ? 'New York · Commercial' : 'Florida · Commercial & residential', place: pl });
    return { ...pl, id: i === 0 ? 'new-york' : 'orlando', pos, ring, beam, ringMat, beamMat: bm };
  });
  {
    const a = world.offices[0].pos, b = world.offices[1].pos;
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const t = i / 64;
      const p = a.clone().lerp(b, t);
      p.y = Math.sin(Math.PI * t) * 2600 + 2;
      pts.push(p);
    }
    const tube = new TubeGeometry(new CatmullRomCurve3(pts), 200, 40, 8, false);
    const am = new ShaderMaterial({
      vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `uniform float uTime; uniform float uDraw; uniform float uOn; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(abs(dot(normalize(vN), V)), 1.5);
          float d = fract(vUv.x * 9.0 - uTime * 0.25); float dash = 0.35 + 1.5 * smoothstep(0.82, 1.0, d);
          float shown = step(vUv.x, uDraw);
          gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * core * dash * shown * uOn * 1.4, 1.0); }`,
      uniforms: { uTime, uDraw: { value: 0 }, uOn: { value: 0 } },
      ...additive,
    });
    const arc = new Mesh(tube, am);
    arc.frustumCulled = false;
    scene.add(arc);
    world.arc = am;
  }
  {
    const cm = mat(S.clouds, { uTime, uOpacity: { value: 0 }, uZenith, ...F }, { transparent: true, depthWrite: false });
    const g = new PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    const c = new Mesh(g, cm);
    c.scale.set(80000, 1, 80000);
    c.position.set((CN.x + CO.x) / 2, 95, (CN.z + CO.z) / 2);
    c.renderOrder = 5;
    c.frustumCulled = false;
    scene.add(c);
    world.clouds = cm;
  }

  world.stats = { orlBuildings: orlBoxes.items.length, trees: treeList.length, pools: poolList.length, streets: streetQuads.length, lakes: lakeList.length };
  world.nyc = { group: nyc, upm: upmN, L, center: CN };
  world.orl = { group: orl, upm: upmO, L: LO, center: CO };
  return world;
}
