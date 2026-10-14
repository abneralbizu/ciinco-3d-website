// The camera's flight plan. Each chapter of the page has a keyframe; scroll
// position maps to a continuous chapter index, and the camera glides along
// Catmull-Rom splines through the keyframes.
import { CatmullRomCurve3, Vector3 } from 'three';
import { LAYOUT } from './world.js';

const E = LAYOUT.earth.pos, G = LAYOUT.giant.pos, H = LAYOUT.haven.pos, C = LAYOUT.constellation.pos, X = LAYOUT.galaxy.pos;
const v = (x, y, z) => new Vector3(x, y, z);
const add = (a, x, y, z) => a.clone().add(v(x, y, z));

// pos: camera position, look: point of interest, ox/oy: where the subject sits
// on screen (fraction of the viewport; + moves it right / up), fov: lens.
export const KEYFRAMES = [
  { name: 'Launch', pos: add(E, 0, 4.2, 24), look: add(E, 0, 27, -30), ox: 0, oy: 0, my: -0.16, fov: 42, mob: 1.0 },
  { name: 'Home port', pos: add(E, 7, 6, 35), look: add(E, 0, 2, 0), ox: 0.2, oy: 0, fov: 40, mob: 1.25 },
  { name: 'Commercial', pos: add(G, -70, 44, 205), look: add(G, 0, 0, 0), ox: 0.2, oy: 0, fov: 40, mob: 1.25 },
  { name: 'Residential', pos: add(H, 52, 16, 72), look: add(H, 0, 0, 0), ox: -0.2, oy: 0, fov: 40, mob: 1.35 },
  { name: 'Advisory', pos: add(C, -20, 8, 165), look: add(C, 0, 0, 0), ox: 0.2, oy: 0, fov: 40, mob: 1.3 },
  { name: 'Track record', pos: add(X, 0, 330, 470), look: add(X, 0, -60, 0), ox: 0, oy: -0.02, my: 0.05, fov: 42, mob: 1.35 },
  { name: 'Listings', pos: add(X, -300, 120, 250), look: add(X, -30, 0, 0), ox: -0.2, oy: 0, fov: 42, mob: 1.2 },
  { name: 'Contact', pos: add(X, 240, 560, 560), look: add(X, 60, 0, -60), ox: -0.12, oy: 0.04, fov: 40, mob: 1.2 },
];

const posCurve = new CatmullRomCurve3(KEYFRAMES.map((k) => k.pos), false, 'centripetal');
const lookCurve = new CatmullRomCurve3(KEYFRAMES.map((k) => k.look), false, 'centripetal');
const N = KEYFRAMES.length;

// Gentle ease inside each leg so the camera settles at every chapter.
const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;

// Curve parameter for chapter p (CatmullRom with N points: point i at i/(N-1)).
export function sampleJourney(p, aspect, out) {
  const i = Math.min(N - 2, Math.max(0, Math.floor(p)));
  const f = Math.min(1, Math.max(0, p - i));
  const e = ease(f);
  const u = (i + e) / (N - 1);
  posCurve.getPoint(u, out.pos);
  lookCurve.getPoint(u, out.look);
  const a = KEYFRAMES[i], b = KEYFRAMES[i + 1];
  const narrow = aspect < 0.9;
  out.ox = narrow ? 0 : lerp(a.ox, b.ox, e);
  out.oy = narrow ? lerp(a.my ?? 0.13, b.my ?? 0.13, e) : lerp(a.oy, b.oy, e);
  out.fov = lerp(a.fov, b.fov, e);
  if (narrow) {
    // Portrait screens: step back so the subject fits the narrow frame.
    const k = lerp(a.mob, b.mob, e) * (1 + (0.9 / aspect - 1) * 0.35);
    out.pos.sub(out.look).multiplyScalar(k).add(out.look);
  }
  // Speed of travel through this leg (used for warp streaks), 0 at keyframes.
  out.leg = Math.sin(Math.PI * f);
  return out;
}

export const CHAPTERS = N;
