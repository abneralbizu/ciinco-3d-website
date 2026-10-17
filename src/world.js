// Builds New York, Orlando and the East Coast between them.
// Geography is real where it matters (shorelines, the Manhattan grid, bridges, Lake Eola,
// the offices, the main roads); buildings and homes are generated from that frame.
import {
  AdditiveBlending, BackSide, BoxGeometry, BufferAttribute, BufferGeometry, Color, CylinderGeometry, DoubleSide,
  Float32BufferAttribute, Group, IcosahedronGeometry, InstancedBufferAttribute, InstancedMesh, Matrix4, Mesh,
  LineSegments, MeshBasicMaterial, Object3D, PlaneGeometry, Points, Quaternion, RingGeometry, ShaderMaterial,
  Shape, ShapeGeometry, SphereGeometry, TubeGeometry, ExtrudeGeometry, CatmullRomCurve3, Vector2, Vector3,
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

/**
 * One building as real massing: a podium with the tower set back above it (sometimes twice),
 * a mechanical penthouse on the roof, or a plain block with rooftop plant. Heights in units.
 * style: 0 masonry, 1 glass, 3 Florida stucco/concrete. Returns the roof top (units) and footprint.
 */
function massing(B, r, x, z, w, d, h, rot, style, upm, id = -1, tanks = null) {
  const hm = h / upm;
  const seed = r();
  const c = Math.cos(rot), sn = Math.sin(rot);
  const at = (ox, oz) => [x + ox * c + oz * sn, z - ox * sn + oz * c];
  let fw = w, fd = d;
  if (hm > 105 && r() < 0.85) {
    const podH = Math.min(hm * 0.28, 16 + r() * 22);
    B.add(x, z, w, d, podH * upm, rot, seed, style === 1 && r() < 0.5 ? (B.florida ? 3 : 0) : style, id);
    let y = podH;
    const f1 = 0.6 + r() * 0.22;
    if (r() < 0.45) {
      const h1 = (hm - podH) * (0.55 + r() * 0.2);
      B.add(x, z, w * f1, d * f1, h1 * upm, rot, seed, style, id, y * upm);
      y += h1;
      const f2 = f1 * (0.68 + r() * 0.15);
      B.add(x, z, w * f2, d * f2, (hm - y) * upm, rot, seed, style, id, y * upm);
      fw = w * f2; fd = d * f2;
    } else {
      B.add(x, z, w * f1, d * f1, (hm - y) * upm, rot, seed, style, id, y * upm);
      fw = w * f1; fd = d * f1;
    }
    B.add(x, z, fw * 0.5, fd * 0.5, (5 + r() * 7) * upm, rot, seed, 2, id, h);
    return;
  }
  B.add(x, z, w, d, h, rot, seed, style, id);
  if (hm > 40 && hm <= 105 && r() < 0.3) {
    // a few set-back top floors
    const t = (6 + r() * 10) * upm;
    B.add(x, z, w * 0.78, d * 0.78, t, rot, seed, style, id, h);
    h += t; fw = w * 0.78; fd = d * 0.78;
  }
  if (hm > 14) {
    const [px, pz] = at((r() - 0.5) * fw * 0.3, (r() - 0.5) * fd * 0.3);
    if (r() < (hm > 30 ? 0.55 : 0.25)) B.add(px, pz, fw * (0.14 + r() * 0.12), fd * (0.16 + r() * 0.12), (2.5 + r() * 2.5) * upm, rot, seed, 2, id, h);
    if (tanks && style === 0 && hm < 95 && r() < 0.4) {
      const [tx, tz] = at((r() - 0.5) * fw * 0.6, (r() - 0.5) * fd * 0.6);
      tanks.push([tx, tz, h, (5 + r() * 2.5) * upm, r()]);
    }
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

/** Lamp-lit promenade following a closed ring (local x/z): quads for the street shader. */
function edgeLightsGeometry(rings, widthU, spacingU, y = 0.04) {
  const pos = [], uv = [];
  for (const ring of rings) {
    let acc = 0;
    for (let i = 0; i < ring.length; i++) {
      const [ax, az] = ring[i], [bx, bz] = ring[(i + 1) % ring.length];
      const len = Math.hypot(bx - ax, bz - az);
      if (len < 1e-6) continue;
      const nx = -(bz - az) / len * widthU / 2, nz = (bx - ax) / len * widthU / 2;
      const ua = acc / spacingU, ub = (acc + len) / spacingU;
      pos.push(ax + nx, y, az + nz, ax - nx, y, az - nz, bx + nx, y, bz + nz, ax - nx, y, az - nz, bx - nx, y, bz - nz, bx + nx, y, bz + nz);
      uv.push(ua, 0, ua, 1, ub, 0, ua, 1, ub, 1, ub, 0);
      acc += len;
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
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
  const world = { uTime, uPixelRatio, fog, uZenith, hit: [], waterMeshes: [] };
  // Shared by every water surface: the mirrored scene, rendered each frame in main.js.
  const reflectU = { uReflect: { value: null }, uReflectMat: { value: new Matrix4() }, uReflectOn: { value: 0 }, uMirrorY: { value: 0 } };
  world.reflect = reflectU;

  // ---- Sky ----------------------------------------------------------------
  {
    const m = mat(S.sky, {
      uSunDir: fog.sun, uZenith, uHorizon: { value: new Color(0.018, 0.022, 0.075) }, uGlow: { value: new Color(0.95, 0.36, 0.14) }, uTime, uDay: { value: 0 }, uPhoto: { value: tex.sky }, uPhotoOn: { value: tex.sky ? 1 : 0 },
    }, { side: BackSide, depthWrite: false });
    world.sky = m;
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
    const wm = mat(S.water, { uTime, uUnitsPerM: { value: upmN }, uZenith, ...reflectU, ...F }, flat());
    const water = new Mesh(new PlaneGeometry(1, 1), wm);
    world.waterMeshes.push(water);
    water.geometry.rotateX(-Math.PI / 2);
    water.scale.set(900, 1, 900);
    water.position.y = -0.3;
    water.renderOrder = -9;
    water.frustumCulled = false;
    nyc.add(water);
    world.nycWater = water;
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
  const parkIslands = [];
  for (const [name, polys0] of Object.entries(data.nyc)) {
    if (name.startsWith('_')) continue;
    const isMan = name === 'Manhattan';
    // Liberty, Ellis and Governors Islands (and the small piers off the Battery) are parkland.
    const southOf = (p) => Math.max(...p.outer.map(([, la]) => la)) < 40.7045;
    const polys = isMan ? polys0.filter((p) => !southOf(p)) : polys0;
    if (isMan) parkIslands.push(...polys0.filter(southOf).map((p) => [toLocal(p.outer), ...p.holes.map(toLocal)]));
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
  {
    const im = groundMat(2, 1, '#ffd9a0');
    parkIslands.forEach((rings) => { const mesh = shapeMesh(rings, im, -0.16); mesh.renderOrder = -7; nyc.add(mesh); });
    // seawall promenades, lamp-lit
    const lamps = [];
    const lc = new Color(1.6, 1.3, 0.9);
    for (const [ring] of parkIslands) {
      let acc = 0;
      for (let i = 0; i < ring.length; i++) {
        const [ax, az] = ring[i], [bx, bz] = ring[(i + 1) % ring.length];
        const len = Math.hypot(bx - ax, bz - az);
        for (let d = (25 * upmN - acc % (25 * upmN)); d < len; d += 25 * upmN) {
          const p = new Vector3(ax + (bx - ax) * d / len, 0.05, az + (bz - az) * d / len);
          lamps.push([p, p, 0, 0, lc]);
        }
        acc += len;
      }
    }
    nyc.add(trafficPoints(lamps, { uTime, uPixelRatio, uSize: { value: 10 }, ...F }));
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
    const rm = mat(S.water, { uTime, uUnitsPerM: { value: upmN }, uZenith, ...reflectU, ...F }, flat());
    const reservoir = shapeMesh([res], rm, -0.1);
    world.waterMeshes.push(reservoir);
    reservoir.renderOrder = -6;
    nyc.add(reservoir);
  }
  const HALF_N = 500; // mask covers +-50 km
  const nycMask = makeMask([...landLayers.filter((l) => l.color === '#ff0000'), ...landLayers.filter((l) => l.color === '#ffff00')], HALF_N, low ? 2048 : 3072);
  const onLand = (x, z) => nycMask(x, z)[0] > 128;
  const onManhattan = (x, z) => nycMask(x, z)[1] > 128;

  // ---- Manhattan buildings -------------------------------------------------
  const nycBoxes = new BoxBatch();
  const tanks = [];
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
          massing(nycBoxes, r, x, z, w, d, h, gridAngle, h / upmN > 140 ? (r() < 0.8 ? 1 : 0) : (r() < 0.08 ? 1 : 0), upmN, -1, tanks);
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
        massing(nycBoxes, r, x + (r() - 0.5) * step * 0.3, z + (r() - 0.5) * step * 0.3, step * (0.6 + r() * 0.3), step * (0.6 + r() * 0.3), Math.max(9, h) * upmN, rot, h > 140 ? 1 : 0, upmN, -1, tanks);
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
        massing(nycBoxes, r, x + (r() - 0.5) * step * 0.3, z + (r() - 0.5) * step * 0.3, step * (0.45 + r() * 0.3), step * (0.45 + r() * 0.35), h * upmN, rot, h > 120 ? 1 : 0, upmN, -1, h < 60 ? tanks : null);
      }
    }
  }
  const facades = { uBrick: { value: tex.brick }, uGlass: { value: tex.glass }, uFacadeOn: { value: tex.brick && tex.glass ? 1 : 0 } };
  const bUniforms = { uTime, uUnitsPerM: { value: upmN }, uHot: { value: -1 }, uHotOn: { value: 0 }, uZenith, ...facades, ...F };
  const nycBuildings = nycBoxes.mesh(mat(S.buildings, bUniforms));
  nyc.add(nycBuildings);
  // Rooftop water tanks: wooden barrels on steel stands, the New York signature.
  {
    const tank = new CylinderGeometry(0.5, 0.5, 0.9, 10, 1, false).toNonIndexed();
    tank.translate(0, 0.95, 0);
    const cap = new CylinderGeometry(0.0, 0.56, 0.38, 10, 1, true).toNonIndexed();
    cap.translate(0, 1.59, 0);
    const legs = new BoxGeometry(0.8, 0.5, 0.8).toNonIndexed();
    legs.translate(0, 0.25, 0);
    const parts = [tank, cap, legs];
    const n = parts.reduce((a, g) => a + g.attributes.position.count, 0);
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), part = new Float32Array(n);
    let o = 0;
    parts.forEach((g, i) => { pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); part.fill(i, o, o + g.attributes.position.count); o += g.attributes.position.count; });
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(pos, 3));
    geo.setAttribute('normal', new BufferAttribute(nor, 3));
    geo.setAttribute('aPart', new BufferAttribute(part, 1));
    const inst = new InstancedMesh(geo, mat(S.tanks, { uUnitsPerM: { value: upmN }, uZenith, ...F }), Math.max(1, tanks.length));
    const ob = new Object3D();
    tanks.forEach(([x, z, y, sz, sd], i) => { ob.position.set(x, y, z); ob.rotation.set(0, sd * 6, 0); ob.scale.set(sz, sz * 1.15, sz); ob.updateMatrix(); inst.setMatrixAt(i, ob.matrix); });
    inst.count = tanks.length;
    inst.frustumCulled = false;
    nyc.add(inst);
  }
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

  // Statue of Liberty on Liberty Island: star-shaped fort, granite pedestal, the copper
  // figure with crown and raised torch, floodlit from below as she is at night.
  {
    const base = L(40.6892, -74.0445);
    const statue = new Group();
    statue.position.copy(base);
    statue.scale.setScalar(upmN);                    // build in metres
    statue.rotation.y = -Math.PI * 0.72;             // facing the harbour entrance (south-east)
    const lit = (color, rim) => new ShaderMaterial({
      vertexShader: `varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){ vY = position.y; vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `uniform vec3 uColor; uniform vec3 uRim; uniform float uTop;
        ${S.FOG_CHUNK}
        varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){
          vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vP);
          float flood = 0.55 + 0.45 * max(dot(N, normalize(vec3(0.2, 0.55, 0.0) + V * 0.8)), 0.0);   // floodlights from the island
          float fall = 1.0 - 0.35 * clamp(vY / uTop, 0.0, 1.0);
          float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
          vec3 col = uColor * flood * fall + uRim * rim * 0.8;
          gl_FragColor = vec4(applyFog(col, vP), 1.0);
        }`,
      uniforms: { uColor: { value: new Color(...color) }, uRim: { value: new Color(...rim) }, uTop: { value: 93 }, ...F },
    });
    const copper = lit([0.30, 0.68, 0.58], [0.6, 1.0, 0.9]);
    const stone = lit([0.085, 0.075, 0.065], [0.14, 0.12, 0.09]);
    const add = (geo, m, x, y, z, rx = 0, rz = 0) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, 0, rz); statue.add(o); return o; };
    // Fort Wood: an eleven-point star
    const star = new Shape();
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2, rad = i % 2 ? 36 : 52;
      i ? star.lineTo(Math.cos(a) * rad, Math.sin(a) * rad) : star.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
    }
    const fort = new ExtrudeGeometry(star, { depth: 9, bevelEnabled: false });
    fort.rotateX(-Math.PI / 2);
    add(fort, stone, 0, 0, 0);
    // Pedestal (square, tapering) and its cap
    add(new CylinderGeometry(9.5, 13, 38, 4, 1), stone, 0, 9 + 19, 0).rotation.y = Math.PI / 4;
    add(new CylinderGeometry(10.5, 10.5, 2.5, 4, 1), stone, 0, 47, 0).rotation.y = Math.PI / 4;
    // Robe, shoulders, head and crown
    add(new CylinderGeometry(3.4, 6.2, 30, 16), copper, 0, 48 + 15, 0);
    add(new SphereGeometry(3.6, 16, 10), copper, 0, 78, 0);
    add(new SphereGeometry(2.3, 16, 12), copper, 0, 82.5, 0.6);
    for (let i = 0; i < 7; i++) {
      const a = -0.95 + (i / 6) * 1.9;
      const ray = add(new CylinderGeometry(0.05, 0.35, 4.2, 5), copper, Math.sin(a) * 2.6, 84.5, Math.cos(a) * 2.6 * 0.6 + 0.6);
      ray.rotation.set(Math.cos(a) * 0.9, 0, -Math.sin(a) * 0.9);
    }
    // Raised right arm and torch; tablet in the left arm
    add(new CylinderGeometry(0.9, 1.2, 13, 10), copper, 3.2, 86, 0, 0, -0.18);
    add(new CylinderGeometry(1.0, 0.6, 2.4, 10), copper, 4.4, 92.4, 0);
    add(new BoxGeometry(1.2, 6.5, 4.2), copper, -4.0, 70, 0.6, 0, 0.25);
    const flame = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uColor: { value: new Color(1, 0.78, 0.4) }, uIntensity: { value: 2.6 } }, additive));
    flame.position.set(4.4, 94.5, 0);
    flame.scale.setScalar(11);
    statue.add(flame);
    const core = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uColor: { value: new Color(1, 0.95, 0.8) }, uIntensity: { value: 4.0 } }, additive));
    core.position.copy(flame.position);
    core.scale.setScalar(3.2);
    statue.add(core);
    // a soft pool of floodlight around the base
    const pool = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uColor: { value: new Color(0.55, 0.9, 0.8) }, uIntensity: { value: 0.18 } }, additive));
    pool.position.set(0, 40, 0);
    pool.scale.setScalar(120);
    statue.add(pool);
    // Glows go in an unrotated twin group so they can face the camera.
    const glows = new Group();
    glows.position.copy(statue.position);
    glows.scale.copy(statue.scale);
    for (const g of [flame, core, pool]) {
      statue.remove(g);
      g.position.applyAxisAngle(new Vector3(0, 1, 0), statue.rotation.y);
      glows.add(g);
    }
    statue.traverse((o) => { o.frustumCulled = false; });
    glows.traverse((o) => { o.frustumCulled = false; });
    nyc.add(statue, glows);
    world.billboards = [flame, core, pool];
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
    const lm = mat(S.water, { uTime, uUnitsPerM: { value: upmO }, uZenith, ...reflectU, ...F }, flat());
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
      world.waterMeshes.push(m);
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
      const m = new Mesh(ribbonGeometry(smooth, widthM * upmO, 0.03), mat(S.ribbon, { uColor: { value: new Color('#ffb066') }, uIntensity: { value: widthM > 30 ? 0.75 : 0.45 }, uTime, uDash: { value: 0 }, uDraw: { value: 1 }, uFogOn: { value: 1 }, ...F }, additive));
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

  // Downtown Orlando: west of Lake Eola (the park ring around the lake and Thornton Park stay low).
  const eola = LO(28.5434, -81.3725);
  const orlBoxes = new BoxBatch();
  orlBoxes.florida = true;
  {
    const core = LO(28.5415, -81.3795);
    const step = 60 * upmO;
    world.downtownGrid = { origin: core.clone().add(new Vector3(-30 * upmO, 0, -30 * upmO)), block: 120 };
    for (let x = core.x - 16 * step; x < core.x + 16 * step; x += step) {
      for (let z = core.z - 16 * step; z < core.z + 16 * step; z += step) {
        const d = Math.hypot(x - core.x, z - core.z) / upmO;
        if (d > 1300 || inLake(x, z, 25 * upmO) || nearRoad(x, z, 30 * upmO) || ro() < 0.3) continue;
        if (x > eola.x + 120 * upmO || Math.hypot(x - eola.x, z - eola.z) < 260 * upmO) continue; // Thornton Park and the lake park
        const towerish = Math.exp(-((d / 420) ** 2));
        let h = 8 + ro() * 18 + towerish * 120 * Math.exp(gauss(ro) * 0.45);
        h = Math.min(h, 140);
        massing(orlBoxes, ro, x + (ro() - 0.5) * step * 0.08, z + (ro() - 0.5) * step * 0.08, step * (0.55 + ro() * 0.25), step * (0.55 + ro() * 0.25), h * upmO, 0, h > 60 && ro() < 0.75 ? 1 : 3, upmO);
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
    inst.userData.keep = true;   // stays when the photographed city replaces the generated one
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
  const houseList = [], poolList = [], treeList = [], palmList = [];
  const parcelLines = [];
  const streetQuads = []; // [x0, z0, x1, z1, widthUnits]
  // A tree on a lot: a live oak, or (in the newer subdivisions) often a palm.
  const plant = (x, z, oakR, palmShare) => {
    if (ro() < palmShare) palmList.push([x, z, (8 + ro() * 6) * upmO, ro()]);
    else treeList.push([x, z, oakR * upmO, ro()]);
  };
  const addHome = (x, z, w, d, h, rot, backX, backZ, lotW, oaks = 1, palmShare = 0.35) => {
    houseList.push([x, z, w, d, h, rot, ro()]);
    if (ro() < 0.28) poolList.push([x + backX * 0.55, z + backZ * 0.55, 8 * upmO, 4.5 * upmO, rot, ro()]);
    if (ro() < 0.65) plant(x + backX * 0.95 + (ro() - 0.5) * lotW * 0.6, z + backZ * 0.95 + (ro() - 0.5) * lotW * 0.6, (5 + ro() * 5) * oaks, palmShare);
    if (ro() < 0.4) plant(x - backX * 0.8 + (ro() - 0.5) * lotW * 0.6, z - backZ * 0.8 + (ro() - 0.5) * lotW * 0.6, (4 + ro() * 3.5) * oaks, palmShare * 1.3);
  };
  const hoods = [
    [28.6555, -81.2605, low ? 1300 : 1900, low ? 0.55 : 0.8], // Winter Springs, around the office
    [28.6380, -81.2900, low ? 700 : 1100, 0.6],
    [28.6720, -81.2330, low ? 600 : 1000, 0.55],
    [28.5650, -81.3920, low ? 600 : 900, 0.6],  // College Park
    [28.5240, -81.3620, low ? 500 : 800, 0.55],
    [28.5428, -81.3645, low ? 600 : 820, 0.8],  // Thornton Park, east of Lake Eola
    [28.5545, -81.3690, low ? 400 : 550, 0.7],  // Lake Eola Heights
    [28.5432, -81.3683, 420, 0.85],             // Eola Drive / Summerlin, facing the park
  ];
  const downtownCore = LO(28.5415, -81.3795);
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
                if (x < eola.x + 120 * upmO && Math.hypot(x - downtownCore.x, z - downtownCore.z) < 1150 * upmO) continue;
                if (Math.hypot(x - eola.x, z - eola.z) < 250 * upmO) continue;
                const back = W2(lx, mid);
                addHome(x, z, (12 + ro() * 6) * upmO, (10 + ro() * 4) * upmO, (ro() < 0.3 ? 6.0 : 3.3) * upmO, -ang, back[0] - x, back[1] - z, lotW);
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
            addHome(cxL, czL, (bw / 2) * 0.42, (bh / n) * 0.6, (ro() < 0.25 ? 6.0 : 3.3) * upmO, 0, backX, 0, (bh / n), 1.5, 0.12);
          }
        }
      }
    }
    world.parcelCenter = pc;
    world.parcelGrid = { origin: new Vector3(x0, 0, z0), bw: 130, bh: 210, span: 1040 };
  }
  // Lake Eola Park: a lawn ring with oaks and palms around the lake.
  {
    const ring = [];
    for (let i = 0; i < 48; i++) { const t = (i / 48) * Math.PI * 2; ring.push([eola.x + Math.cos(t) * 255 * upmO, eola.z + Math.sin(t) * 235 * upmO]); }
    const pm = mat(S.ground, {
      uMode: { value: 2 }, uGridInv: { value: new Float32Array(4) }, uGridOrigin: { value: new Vector2() },
      uUnitsPerM: { value: upmO }, uStreetCol: { value: new Color('#ffd9a0') }, uDensity: { value: 1 }, uTime, ...districtUniforms(), ...F,
    }, flat());
    const park = shapeMesh([ring], pm, -0.18);
    park.renderOrder = -7.5;
    orl.add(park);
  }
  for (let i = 0; i < 70; i++) {
    const t = ro() * Math.PI * 2, rr = (185 + ro() * 60) * upmO;
    const x = eola.x + Math.cos(t) * rr, z = eola.z + Math.sin(t) * rr * 0.92;
    if (inLake(x, z, 8 * upmO)) continue;
    if (ro() < 0.35) palmList.push([x, z, (9 + ro() * 5) * upmO, ro()]); else treeList.push([x, z, (6 + ro() * 6) * upmO, ro()]);
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
  // Homes: walls and hip roofs as two instanced meshes, then pools, oaks and palms.
  {
    const o = new Object3D();
    const nHouse = houseList.length;
    const hu = { uTime, uZenith, uUnitsPerM: { value: upmO }, ...F };
    const hm = mat(S.houses, hu);
    const seeds = new Float32Array(nHouse);
    houseList.forEach((hh, i) => { seeds[i] = hh[6]; });
    // walls
    const body = new BoxGeometry(1, 1, 1);
    body.translate(0, 0.5, 0);
    body.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
    const walls = new InstancedMesh(body, hm, Math.max(1, nHouse));
    // hip roof: ridge along x, eaves overhanging the walls
    const rp = [
      [-0.5, 0, -0.5], [0.5, 0, -0.5], [0.5, 0, 0.5], [-0.5, 0, 0.5], [-0.18, 1, 0], [0.18, 1, 0],
    ];
    const tri = [[0, 5, 1], [0, 4, 5], [2, 5, 4], [2, 4, 3], [1, 5, 2], [3, 4, 0], [0, 1, 2], [0, 2, 3]];
    const roofPos = new Float32Array(tri.length * 9);
    tri.forEach((t, i) => t.forEach((vi, j) => roofPos.set(rp[vi], i * 9 + j * 3)));
    const roofGeo = new BufferGeometry();
    roofGeo.setAttribute('position', new BufferAttribute(roofPos, 3));
    roofGeo.setAttribute('uv', new BufferAttribute(new Float32Array((roofPos.length / 3) * 2).map((_, i) => (i % 2 ? 2 : 0)), 2));
    roofGeo.computeVertexNormals();
    roofGeo.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
    const roofs = new InstancedMesh(roofGeo, hm, Math.max(1, nHouse));
    houseList.forEach(([x, z, w, d, h, rot], i) => {
      o.position.set(x, 0, z); o.rotation.set(0, rot, 0); o.scale.set(w, h, d); o.updateMatrix();
      walls.setMatrixAt(i, o.matrix);
      o.position.set(x, h, z); o.scale.set(w * 1.08, Math.min(w, d) * 0.36, d * 1.12); o.updateMatrix();
      roofs.setMatrixAt(i, o.matrix);
    });
    walls.frustumCulled = roofs.frustumCulled = false;
    orl.add(walls, roofs);

    const pg = new PlaneGeometry(1, 1); pg.rotateX(-Math.PI / 2);
    const pinst = new InstancedMesh(pg, mat(S.pools, { uTime, ...F }), Math.max(1, poolList.length));
    const pseeds = new Float32Array(poolList.length);
    poolList.forEach(([x, z, w, d, rot, seed], i) => { o.position.set(x, 0.02, z); o.rotation.set(0, rot, 0); o.scale.set(w, 1, d); o.updateMatrix(); pinst.setMatrixAt(i, o.matrix); pseeds[i] = seed; });
    pg.setAttribute('aSeed', new InstancedBufferAttribute(pseeds, 1));
    pinst.frustumCulled = false;
    orl.add(pinst);

    // live oaks: broad, lumpy canopies on short trunks
    const tg = new IcosahedronGeometry(1, 2);
    const tinst = new InstancedMesh(tg, mat(S.trees, { uZenith, ...F }), Math.max(1, treeList.length));
    const tseeds = new Float32Array(treeList.length);
    treeList.forEach(([x, z, rad, seed], i) => { o.position.set(x, rad * 0.75, z); o.rotation.set(0, seed * 7, 0); o.scale.set(rad, rad * 0.62, rad); o.updateMatrix(); tinst.setMatrixAt(i, o.matrix); tseeds[i] = seed; });
    tg.setAttribute('aSeed', new InstancedBufferAttribute(tseeds, 1));
    tinst.frustumCulled = false;
    orl.add(tinst);

    // palms: a slender trunk and a crown of drooping fronds (unit height)
    {
      const pos = [], nor = [], part = [];
      const push = (a, n, pt) => { pos.push(...a); nor.push(...n); part.push(pt); };
      const sides = 5;
      for (let i = 0; i < sides; i++) {
        const a0 = (i / sides) * Math.PI * 2, a1 = ((i + 1) / sides) * Math.PI * 2;
        const r0 = 0.032, r1 = 0.022;
        const p = (a, r, y) => [Math.cos(a) * r + y * y * 0.05, y, Math.sin(a) * r];
        const n0 = [Math.cos(a0), 0, Math.sin(a0)], n1 = [Math.cos(a1), 0, Math.sin(a1)];
        push(p(a0, r0, 0), n0, 0); push(p(a1, r0, 0), n1, 0); push(p(a1, r1, 0.9), n1, 0);
        push(p(a0, r0, 0), n0, 0); push(p(a1, r1, 0.9), n1, 0); push(p(a0, r1, 0.9), n0, 0);
      }
      const top = [0.04, 0.9, 0];
      const fronds = 9;
      for (let f = 0; f < fronds; f++) {
        const a = (f / fronds) * Math.PI * 2 + (f % 2) * 0.2;
        const dx = Math.cos(a), dz = Math.sin(a);
        const seg = 4;
        const pt = (t) => [top[0] + dx * t * 0.42, top[1] + 0.08 * Math.sin(t * Math.PI * 0.6) - 0.22 * t * t, top[2] + dz * t * 0.42];
        for (let k = 0; k < seg; k++) {
          const t0 = k / seg, t1 = (k + 1) / seg;
          const w0 = 0.07 * Math.sin(Math.PI * Math.min(0.95, t0 + 0.08)), w1 = 0.07 * Math.sin(Math.PI * Math.min(0.95, t1 + 0.08));
          const A = pt(t0), B = pt(t1);
          const sx = -dz, sz = dx;
          const q = [[A[0] + sx * w0, A[1] - 0.02, A[2] + sz * w0], [A[0] - sx * w0, A[1] - 0.02, A[2] - sz * w0], [B[0] + sx * w1, B[1] - 0.02, B[2] + sz * w1], [B[0] - sx * w1, B[1] - 0.02, B[2] - sz * w1]];
          const n = [0, 1, 0];
          push(q[0], n, 1); push(q[2], n, 1); push(A, n, 1);
          push(A, n, 1); push(q[2], n, 1); push(B, n, 1);
          push(q[1], n, 1); push(A, n, 1); push(q[3], n, 1);
          push(A, n, 1); push(B, n, 1); push(q[3], n, 1);
        }
      }
      const g = new BufferGeometry();
      g.setAttribute('position', new Float32BufferAttribute(pos, 3));
      g.setAttribute('normal', new Float32BufferAttribute(nor, 3));
      g.setAttribute('aPart', new Float32BufferAttribute(part, 1));
      const ps = new Float32Array(palmList.length);
      const pinst2 = new InstancedMesh(g, mat(S.palms, { uTime, uZenith, ...F }, { side: DoubleSide }), Math.max(1, palmList.length));
      palmList.forEach(([x, z, hgt, seed], i) => { o.position.set(x, 0, z); o.rotation.set(0, seed * 6.28, 0); o.scale.setScalar(hgt); o.updateMatrix(); pinst2.setMatrixAt(i, o.matrix); ps[i] = seed; });
      g.setAttribute('aSeed', new InstancedBufferAttribute(ps, 1));
      pinst2.frustumCulled = false;
      orl.add(pinst2);
    }
    world.homeCount = nHouse;
  }
  const orlUniforms = { uTime, uUnitsPerM: { value: upmO }, uHot: { value: -1 }, uHotOn: { value: 0 }, uZenith, ...facades, ...F };
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
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (0.32 + near * 3.0);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,
      uniforms: { uOn: { value: 0 }, uPointer: { value: new Vector3(1e6, 0, 1e6) }, uPointerOn: { value: 0 }, uCenter: { value: new Vector3().copy(world.parcelCenter).add(CO) }, uSpan: { value: 1100 * upmO } },
      ...additive,
    });
    const lines = new LineSegments(g, pm);
    lines.frustumCulled = false;
    lines.userData.keep = true;
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
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(clamp(abs(dot(normalize(vN), V)), 0.0, 1.0), 1.5);
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

  world.stats = { orlBuildings: orlBoxes.items.length, trees: treeList.length, palms: palmList.length, pools: poolList.length, streets: streetQuads.length, lakes: lakeList.length };
  world.nyc = { group: nyc, upm: upmN, L, center: CN };
  world.orl = { group: orl, upm: upmO, L: LO, center: CO };
  return world;
}
