// Builds every object in the CIIN Co. system. Positions are in scene units;
// the camera journey in journey.js flies between them.
import {
  AdditiveBlending, BackSide, BufferAttribute, BufferGeometry, Color, DoubleSide, Group,
  InstancedBufferAttribute, InstancedMesh, LineSegments, Matrix4, Mesh, MeshBasicMaterial,
  Object3D, PlaneGeometry, Points, Quaternion, RingGeometry, ShaderMaterial, SphereGeometry,
  TorusGeometry, BoxGeometry, Vector2, Vector3,
} from 'three';
import * as S from './shaders.js';

export const LAYOUT = {
  earth: { pos: new Vector3(0, 0, 0), r: 10 },
  moon: { pos: new Vector3(-30, 10, -38), r: 2.6 },
  giant: { pos: new Vector3(340, -20, -430), r: 42 },
  haven: { pos: new Vector3(-190, -25, -720), r: 24 },
  constellation: { pos: new Vector3(60, 30, -980) },
  galaxy: { pos: new Vector3(0, -90, -1340), r: 340 },
};

export const OFFICES = [
  { id: 'orlando', name: 'Orlando', sub: 'Commercial · Residential', lat: 28.68, lon: -81.27 },
  { id: 'new-york', name: 'New York', sub: 'Commercial', lat: 40.75, lon: -73.99 },
];

export const PROPERTY_TYPES = ['Office', 'Retail', 'Industrial', 'Multifamily', 'Hospitality', 'Healthcare',
  'Mixed use', 'Land development', 'Storage', 'Restaurants', 'Churches', 'Special purpose'];

// Deterministic randomness so the universe looks the same on every visit.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = (r) => {
  const u = 1 - r(), v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

// Lat/lon to a point on a three.js SphereGeometry (u = 0 at lon -180).
export function latLonToLocal(lat, lon, radius) {
  const phi = ((lon + 180) / 360) * Math.PI * 2;
  const la = (lat * Math.PI) / 180;
  return new Vector3(-Math.cos(phi) * Math.cos(la), Math.sin(la), Math.sin(phi) * Math.cos(la)).multiplyScalar(radius);
}

function mat(def, uniforms, extra = {}) {
  return new ShaderMaterial({ vertexShader: def.vertexShader, fragmentShader: def.fragmentShader, uniforms, ...extra });
}
const additive = { transparent: true, blending: AdditiveBlending, depthWrite: false };

function atmosphereShell(center, r, outer, day, set, intensity, mie, sunDir) {
  const m = mat(S.atmosphere, {
    uCenter: { value: center.clone() }, uR: { value: r }, uOuter: { value: outer },
    uSunDir: { value: sunDir }, uColDay: { value: new Color(day) }, uColSet: { value: new Color(set) },
    uIntensity: { value: intensity }, uMie: { value: mie },
  }, additive);
  const mesh = new Mesh(new SphereGeometry(r * outer, 96, 64), m);
  mesh.position.copy(center);
  return mesh;
}

export function buildWorld(scene, tex, quality) {
  const uTime = { value: 0 };
  const uPixelRatio = { value: 1 };
  const seg = quality.low ? 96 : 160;
  const world = { uTime, uPixelRatio, hit: [] };

  // ---- Sky ---------------------------------------------------------------
  const sky = new Mesh(new SphereGeometry(5000, 64, 32), mat(S.sky, {
    uMap: { value: tex.sky }, uIntensity: { value: 1.0 }, uTint: { value: new Color(1, 1, 1) },
  }, { side: BackSide, depthWrite: false }));
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);
  world.sky = sky;

  // ---- Stars: a far shell of bright twinklers ------------------------------
  {
    const r = rng(11);
    const n = quality.low ? 4000 : 9000;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), ph = new Float32Array(n);
    const tints = [new Color('#a9c1ff'), new Color('#ffffff'), new Color('#ffe2b8'), new Color('#ffd0d8')];
    for (let i = 0; i < n; i++) {
      const v = new Vector3(gauss(r), gauss(r), gauss(r)).normalize().multiplyScalar(3200 + r() * 800);
      pos.set([v.x, v.y, v.z], i * 3);
      const c = tints[Math.floor(r() * r() * 4)].clone().multiplyScalar(0.5 + Math.pow(r(), 3) * 2.2);
      col.set([c.r, c.g, c.b], i * 3);
      size[i] = 1.0 + Math.pow(r(), 6) * 6.5;
      ph[i] = r();
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('aColor', new BufferAttribute(col, 3));
    g.setAttribute('aSize', new BufferAttribute(size, 1));
    g.setAttribute('aPhase', new BufferAttribute(ph, 1));
    const p = new Points(g, mat(S.stars, { uTime, uPixelRatio }, additive));
    p.frustumCulled = false;
    scene.add(p);
    world.stars = p;
  }

  // ---- Space dust along the journey (parallax) ---------------------------
  {
    const r = rng(23);
    const n = quality.low ? 1800 : 4200;
    const pos = new Float32Array(n * 3), size = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const z = 80 - r() * 1700;
      pos.set([(r() - 0.5) * 700, (r() - 0.5) * 420, z], i * 3);
      size[i] = 0.6 + r() * 1.6;
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('aSize', new BufferAttribute(size, 1));
    const p = new Points(g, mat(S.dust, { uTime, uPixelRatio, uColor: { value: new Color(0.55, 0.65, 0.9) } }, additive));
    p.frustumCulled = false;
    scene.add(p);
  }

  // ---- Warp streaks --------------------------------------------------------
  {
    const r = rng(31);
    const n = quality.low ? 500 : 1100;
    const pos = new Float32Array(n * 6), end = new Float32Array(n * 2), rnd = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      const x = (r() - 0.5) * 800, y = (r() - 0.5) * 500, z = 100 - r() * 1800;
      pos.set([x, y, z, x, y, z], i * 6);
      end.set([0, 1], i * 2);
      const k = r();
      rnd.set([k, k], i * 2);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('aEnd', new BufferAttribute(end, 1));
    g.setAttribute('aRand', new BufferAttribute(rnd, 1));
    const m = mat(S.warp, { uVel: { value: new Vector3() }, uStrength: { value: 0 } }, additive);
    const l = new LineSegments(g, m);
    l.frustumCulled = false;
    scene.add(l);
    world.warp = m;
  }

  // ---- Sun ---------------------------------------------------------------
  const earthSun = new Vector3(0, 0.3, -0.95).normalize();
  world.earthSun = earthSun;
  {
    const m = mat(S.glowSprite, { uMap: { value: tex.sun }, uColor: { value: new Color(1, 0.93, 0.82) }, uIntensity: { value: 9 } },
      { ...additive, depthTest: true });
    const sun = new Mesh(new PlaneGeometry(1, 1), m);
    sun.scale.setScalar(700);
    sun.renderOrder = -5;
    sun.frustumCulled = false;
    scene.add(sun);
    world.sun = sun;
    const gm = mat(S.glowSprite, { uMap: { value: tex.glow }, uColor: { value: new Color(1, 0.8, 0.55) }, uIntensity: { value: 1.6 } },
      { ...additive, depthTest: true });
    const sunGlow = new Mesh(new PlaneGeometry(1, 1), gm);
    sunGlow.scale.setScalar(1100);
    sunGlow.renderOrder = -6;
    sunGlow.frustumCulled = false;
    scene.add(sunGlow);
    world.sunGlow = sunGlow;
  }

  // ---- Earth: home port ----------------------------------------------------
  {
    const { pos, r } = LAYOUT.earth;
    const group = new Group();
    group.position.copy(pos);
    group.rotation.z = 0.12;
    const m = mat(S.earth, {
      uDay: { value: tex.earthDay }, uMasks: { value: tex.earthMasks }, uClouds: { value: tex.earthClouds },
      uSunDir: { value: earthSun }, uTime, uLights: { value: 1 },
    });
    const earth = new Mesh(new SphereGeometry(r, seg, seg / 2), m);
    group.add(earth);
    scene.add(group);
    scene.add(atmosphereShell(pos, r, 1.1, '#4d8dff', '#ff7a3a', 1.2, 0.45, earthSun));
    world.earth = { group, mesh: earth, ...LAYOUT.earth };
    world.hit.push({ center: pos, r, chapter: 1, label: 'Home port · Orlando & New York' });

    // Office pins
    world.pins = OFFICES.map((o, i) => {
      const local = latLonToLocal(o.lat, o.lon, r * 1.002);
      const pm = mat(S.pinRing, { uTime, uOn: { value: 0 }, uOffset: { value: i * 0.5 } }, { ...additive, side: DoubleSide });
      const ring = new Mesh(new PlaneGeometry(2.2, 2.2), pm);
      ring.position.copy(local);
      ring.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), local.clone().normalize());
      group.add(ring);
      return { ...o, local, ring, mat: pm };
    });

    // Moon
    const mm = mat(S.rock, { uMap: { value: tex.moon }, uSunDir: { value: earthSun }, uTint: { value: new Color(1, 1, 1.03) } });
    const moon = new Mesh(new SphereGeometry(LAYOUT.moon.r, 64, 32), mm);
    moon.position.copy(LAYOUT.moon.pos);
    scene.add(moon);
    world.moon = moon;
  }

  // ---- Gas giant: commercial ----------------------------------------------
  {
    const { pos, r } = LAYOUT.giant;
    const sunDir = new Vector3(-0.35, 0.32, 0.88).normalize();
    const ringRange = new Vector2(1.28, 2.35);
    const tilt = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0.35).normalize(), -1.2);
    const ringNormal = new Vector3(0, 0, 1).applyQuaternion(tilt);
    const ringRangeU = { value: ringRange };
    const pm = mat(S.gasGiant, {
      uMap: { value: tex.gas }, uRing: { value: tex.ring }, uSunDir: { value: sunDir }, uCenter: { value: pos },
      uRingNormal: { value: ringNormal }, uR: { value: r }, uRingRange: ringRangeU, uTime,
    });
    const planet = new Mesh(new SphereGeometry(r, seg, seg / 2), pm);
    planet.position.copy(pos);
    planet.quaternion.copy(tilt).multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2));
    scene.add(planet);
    scene.add(atmosphereShell(pos, r, 1.06, '#a8b8ff', '#ff9f6a', 0.6, 0.35, sunDir));

    const rm = mat(S.ring, {
      uRing: { value: tex.ring }, uSunDir: { value: sunDir }, uCenter: { value: pos }, uRingNormal: { value: ringNormal },
      uR: { value: r }, uRingRange: ringRangeU,
    }, { transparent: true, depthWrite: false, side: DoubleSide });
    const rings = new Mesh(new RingGeometry(r * ringRange.x, r * ringRange.y, 256, 1), rm);
    rings.position.copy(pos);
    rings.quaternion.copy(tilt);
    scene.add(rings);

    // Orbital station: a slender ring carrying a skyline of towers.
    const station = new Group();
    station.position.copy(pos);
    const stTilt = new Quaternion().setFromAxisAngle(new Vector3(1, 0, -0.2).normalize(), -1.32);
    station.quaternion.copy(stTilt);
    const R = r * 2.62;
    const torus = new Mesh(new TorusGeometry(R, 0.55, 8, 360), new MeshBasicMaterial({ color: new Color(0.05, 0.06, 0.09) }));
    station.add(torus);
    const r2 = rng(77);
    const count = quality.low ? 150 : 260;
    const box = new BoxGeometry(1, 1, 1);
    const seeds = new Float32Array(count);
    const tm = mat(S.towers, { uSunDir: { value: sunDir }, uTime, uGlow: { value: 1 } });
    const inst = new InstancedMesh(box, tm, count);
    const o = new Object3D();
    const beaconAngles = PROPERTY_TYPES.map((_, i) => (i / PROPERTY_TYPES.length) * Math.PI * 2 + 0.2);
    for (let i = 0; i < count; i++) {
      // cluster towers into districts, one per property type
      const district = i % PROPERTY_TYPES.length;
      const a = beaconAngles[district] + gauss(r2) * 0.07;
      const h = 2 + Math.pow(r2(), 2.2) * 13 * (1 - Math.min(1, Math.abs(a - beaconAngles[district]) * 6) * 0.6);
      const w = 0.9 + r2() * 1.5;
      const dir = new Vector3(Math.cos(a), Math.sin(a), 0);
      const side = (r2() - 0.5) * 2.2;
      o.position.copy(dir).multiplyScalar(R + h / 2 + 0.3).add(new Vector3(0, 0, side));
      o.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), dir);
      o.rotateY(r2() * Math.PI);
      o.scale.set(w, h, w * (0.7 + r2() * 0.6));
      o.updateMatrix();
      inst.setMatrixAt(i, o.matrix);
      seeds[i] = r2();
    }
    inst.geometry.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
    station.add(inst);
    scene.add(station);
    world.station = station;
    world.beacons = beaconAngles.map((a, i) => ({
      name: PROPERTY_TYPES[i],
      local: new Vector3(Math.cos(a), Math.sin(a), 0).multiplyScalar(R + 9),
    }));
    world.giant = { planet, rings, center: pos, r, sunDir };
    world.hit.push({ center: pos, r: r * 1.1, chapter: 2, label: 'Commercial · Enter orbit' });
  }

  // ---- Haven: residential -------------------------------------------------
  {
    const { pos, r } = LAYOUT.haven;
    const sunDir = new Vector3(-0.72, 0.32, 0.55).normalize();
    const hm = mat(S.haven, { uMap: { value: tex.haven }, uClouds: { value: tex.havenClouds }, uSunDir: { value: sunDir }, uTime });
    const planet = new Mesh(new SphereGeometry(r, seg, seg / 2), hm);
    planet.position.copy(pos);
    planet.rotation.set(0.2, 2.2, -0.25);
    scene.add(planet);
    scene.add(atmosphereShell(pos, r, 1.12, '#53d6e6', '#ff9a6a', 1.25, 0.8, sunDir));
    // two small moons
    const m1 = new Mesh(new SphereGeometry(1.6, 48, 24), mat(S.rock, { uMap: { value: tex.moon }, uSunDir: { value: sunDir }, uTint: { value: new Color(1.0, 0.92, 0.85) } }));
    const m2 = new Mesh(new SphereGeometry(0.9, 32, 16), mat(S.rock, { uMap: { value: tex.moon }, uSunDir: { value: sunDir }, uTint: { value: new Color(0.85, 0.9, 1.0) } }));
    scene.add(m1, m2);
    world.haven = { planet, center: pos, r, moons: [m1, m2] };
    world.hit.push({ center: pos, r: r * 1.1, chapter: 3, label: 'Residential · Orlando' });
  }

  // ---- Constellation: advisory ------------------------------------------
  {
    const center = LAYOUT.constellation.pos;
    const r = rng(5);
    const n = 15;
    const nodes = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const a = t * Math.PI * 2.6 + 0.4;
      const rad = 18 + t * 42;
      nodes.push(new Vector3(
        Math.cos(a) * rad * 1.25 + gauss(r) * 5,
        (t - 0.5) * 50 + Math.sin(a * 1.7) * 10 + gauss(r) * 4,
        Math.sin(a) * rad * 0.7 + gauss(r) * 6,
      ));
    }
    const edges = [];
    for (let i = 0; i < n - 1; i++) edges.push([i, i + 1]);
    // a few cross links to the nearest non-neighbour
    for (let i = 0; i < n; i += 2) {
      let best = -1, bd = Infinity;
      for (let j = 0; j < n; j++) {
        if (Math.abs(i - j) <= 1) continue;
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < bd) { bd = d; best = j; }
      }
      if (best >= 0 && !edges.some(([a, b]) => (a === i && b === best) || (a === best && b === i))) edges.push([Math.min(i, best), Math.max(i, best)]);
    }
    edges.sort((a, b) => Math.max(...a) - Math.max(...b));
    const lp = new Float32Array(edges.length * 6), at = new Float32Array(edges.length * 2), al = new Float32Array(edges.length * 2), ae = new Float32Array(edges.length * 2);
    edges.forEach(([a, b], k) => {
      lp.set([nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z], k * 6);
      const t = Math.max(a, b) / n;
      at.set([t, t], k * 2);
      al.set([0, 1], k * 2);
      ae.set([k, k], k * 2);
    });
    const lg = new BufferGeometry();
    lg.setAttribute('position', new BufferAttribute(lp, 3));
    lg.setAttribute('aT', new BufferAttribute(at, 1));
    lg.setAttribute('aLocal', new BufferAttribute(al, 1));
    lg.setAttribute('aEdge', new BufferAttribute(ae, 1));
    const uDraw = { value: 0 }, uHot = { value: -1 };
    const lines = new LineSegments(lg, mat(S.constLines, { uDraw, uTime, uHot }, additive));
    const np = new Float32Array(n * 3), ni = new Float32Array(n);
    nodes.forEach((v, i) => { np.set([v.x, v.y, v.z], i * 3); ni[i] = i; });
    const ng = new BufferGeometry();
    ng.setAttribute('position', new BufferAttribute(np, 3));
    ng.setAttribute('aIndex', new BufferAttribute(ni, 1));
    const pts = new Points(ng, mat(S.constNodes, { uDraw, uHot, uCount: { value: n }, uPixelRatio, uTime }, additive));
    const group = new Group();
    group.position.copy(center);
    group.scale.setScalar(1.35);
    group.add(lines, pts);
    scene.add(group);
    world.constellation = { group, nodes, uDraw, uHot };
  }

  // ---- Galaxy: track record ----------------------------------------------
  {
    const { pos, r: R } = LAYOUT.galaxy;
    const r = rng(1990);
    const n = quality.low ? 45000 : 130000;
    const radius = new Float32Array(n), angle = new Float32Array(n), size = new Float32Array(n), rand = new Float32Array(n);
    const posA = new Float32Array(n * 3), col = new Float32Array(n * 3);
    const cCore = new Color('#ffe3bd'), cMid = new Color('#c4b6ff'), cOut = new Color('#6f8dff'), cHii = new Color('#ff7eb0'), cDust = new Color('#8fa8ff');
    const arms = 2;
    for (let i = 0; i < n; i++) {
      const field = r() < 0.18;
      let rad, a, y;
      if (field) {
        rad = Math.pow(r(), 0.8) * R * 1.05;
        a = r() * Math.PI * 2;
      } else {
        rad = Math.pow(r(), 1.7) * R;
        const arm = Math.floor(r() * arms);
        a = (arm / arms) * Math.PI * 2 + rad * 0.0135 + gauss(r) * (0.3 * (1 - rad / R) + 0.075);
      }
      y = gauss(r) * (3 + 22 * Math.exp(-rad / 34));
      radius[i] = rad; angle[i] = a; rand[i] = r();
      posA.set([0, y, 0], i * 3);
      const t = Math.min(1, rad / R);
      const c = t < 0.25 ? cCore.clone().lerp(cMid, t / 0.25) : cMid.clone().lerp(cOut, (t - 0.25) / 0.75);
      if (!field && r() < 0.035 && t > 0.2) c.copy(cHii);
      if (field) c.copy(cDust).multiplyScalar(0.5);
      const bright = (field ? 0.35 : 0.7) + Math.pow(r(), 6) * 2.5 + Math.exp(-rad / 26) * 1.6;
      c.multiplyScalar(bright * 0.3);
      col.set([c.r, c.g, c.b], i * 3);
      size[i] = (field ? 0.8 : 1.0) + Math.pow(r(), 9) * 5;
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(posA, 3));
    g.setAttribute('aRadius', new BufferAttribute(radius, 1));
    g.setAttribute('aAngle', new BufferAttribute(angle, 1));
    g.setAttribute('aSize', new BufferAttribute(size, 1));
    g.setAttribute('aColor', new BufferAttribute(col, 3));
    g.setAttribute('aRand', new BufferAttribute(rand, 1));
    const uPointer = { value: new Vector3(9999, 0, 9999) }, uPointerOn = { value: 0 }, uReveal = { value: 0 };
    const pts = new Points(g, mat(S.galaxy, { uTime, uPixelRatio, uPointer, uPointerOn, uReveal }, additive));
    pts.frustumCulled = false;
    const group = new Group();
    group.position.copy(pos);
    group.rotation.set(0.32, 0, 0.12);
    group.add(pts);
    // bright core
    const core = new Mesh(new PlaneGeometry(1, 1), mat(S.glowSprite, { uMap: { value: tex.glow }, uColor: { value: new Color(1, 0.86, 0.66) }, uIntensity: { value: 1.4 } }, additive));
    core.scale.setScalar(150);
    core.frustumCulled = false;
    group.add(core);
    scene.add(group);
    world.galaxy = { group, core, uPointer, uPointerOn, uReveal, R };
    world.hit.push({ center: pos, r: R * 0.5, chapter: 5, label: 'Track record · Since 1990' });
  }

  // ---- Lens-flare ghosts (camera space) -----------------------------------
  {
    const ghosts = [];
    const spec = [[0.35, 0.12, '#8fb6ff', 0.12], [0.62, 0.06, '#ffd9a0', 0.16], [1.0, 0.2, '#a98cff', 0.07], [1.35, 0.035, '#ffffff', 0.22], [1.7, 0.3, '#5fd0ff', 0.05]];
    for (const [t, s, c, k] of spec) {
      const m = mat(S.glowSprite, { uMap: { value: tex.ghost }, uColor: { value: new Color(c) }, uIntensity: { value: 0 } }, { ...additive, depthTest: false });
      const mesh = new Mesh(new PlaneGeometry(1, 1), m);
      mesh.renderOrder = 10;
      mesh.frustumCulled = false;
      ghosts.push({ mesh, t, s, k });
    }
    world.ghosts = ghosts;
  }

  return world;
}
