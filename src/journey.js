// The camera's flight plan: one keyframe per chapter of the page.
// Between nearby keyframes the camera glides; between the cities it climbs above the
// clouds and comes back down, with altitude interpolated on a log scale so the zoom
// feels like a real flight instead of a sudden jump.
import { Vector3 } from 'three';
import { P } from './geo.js';

// pos/look: [lat, lon, altitude m]. ox/oy: where the subject sits on screen (fraction of
// the viewport, + = right / up) on wide screens; my: the same on portrait screens.
export const KEYFRAMES = [
  { name: 'Offices', pos: [25.6, -80.6, 2700000], look: [35.6, -77.9, 0], ox: 0.24, oy: 0.02, my: 0.1, fov: 36, mob: 1.25 },
  { name: 'Skyline', pos: [40.6965, -74.0215, 95], look: [40.7140, -74.0070, 200], ox: 0.26, oy: 0, my: 0.2, fov: 40, mob: 1.15 },
  { name: 'Commercial', pos: [40.7460, -74.0150, 230], look: [40.7585, -73.9850, 190], ox: 0.27, oy: 0, my: 0.12, fov: 40, mob: 1.3 },
  { name: 'Residential', pos: [28.6500, -81.2690, 115], look: [28.6560, -81.2600, 0], ox: -0.27, oy: 0, my: 0.14, fov: 40, mob: 1.25 },
  { name: 'Advisory', pos: [28.5408, -81.3712, 95], look: [28.5446, -81.3770, 105], ox: 0.28, oy: 0, my: 0.12, fov: 40, mob: 1.35 },
  { name: 'Track record', pos: [28.5428, -81.3625, 55], look: [28.5420, -81.3800, 70], ox: 0, oy: -0.08, my: 0.08, fov: 42, mob: 1.2 },
  { name: 'Listings', pos: [28.5455, -81.3560, 650], look: [28.5560, -81.3560, 0], ox: -0.26, oy: 0, my: 0.12, fov: 40, mob: 1.25 },
  { name: 'Contact', pos: [28.6200, -81.3050, 1500], look: [28.6700, -81.2450, 0], ox: -0.12, oy: 0.05, my: 0.12, fov: 40, mob: 1.2 },
];

const K = KEYFRAMES.map((kf) => ({ ...kf, P: P(...kf.pos), Lk: P(...kf.look) }));
const N = K.length;

const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;
const tmpA = new Vector3(), tmpB = new Vector3();

export function sampleJourney(p, aspect, out) {
  const i = Math.min(N - 2, Math.max(0, Math.floor(p)));
  const f = Math.min(1, Math.max(0, p - i));
  const e = ease(f);
  const A = K[i], B = K[i + 1];

  const hA = Math.max(0.05, A.P.y), hB = Math.max(0.05, B.P.y);
  const D = Math.hypot(B.P.x - A.P.x, B.P.z - A.P.z);
  const peak = Math.max(hA, hB, D * 0.75);
  const far = peak > Math.max(hA, hB) * 1.6; // a flight, not a glide
  const bump = far ? Math.pow(Math.sin(Math.PI * e), 0.8) : 0;
  const logH = lerp(Math.log(hA), Math.log(hB), e);
  const h = Math.exp(logH + (Math.log(peak) - logH) * bump);
  // Cover most of the ground while high up: on a flight, and on a big climb or descent.
  const ratio = Math.max(hA, hB) / Math.min(hA, hB);
  const hf = far ? ease(ease(e)) : ratio > 8 ? (h - hA) / (hB - hA) : e;
  out.pos.set(lerp(A.P.x, B.P.x, hf), h, lerp(A.P.z, B.P.z, hf));

  // Look target: between the two, pulled toward the ground ahead while high.
  tmpA.copy(A.Lk).lerp(B.Lk, hf);
  if (far) {
    tmpB.set(out.pos.x, 0, out.pos.z).add(tmpA.clone().sub(out.pos).setY(0).normalize().multiplyScalar(h * 0.35));
    tmpA.lerp(tmpB, bump);
  }
  out.look.copy(tmpA);

  const narrow = aspect < 0.9;
  out.ox = narrow ? 0 : lerp(A.ox, B.ox, e);
  out.oy = narrow ? lerp(A.my, B.my, e) : lerp(A.oy, B.oy, e);
  out.fov = lerp(A.fov, B.fov, e);
  if (narrow) {
    const kk = lerp(A.mob, B.mob, e) * (1 + (0.9 / aspect - 1) * 0.3);
    out.pos.sub(out.look).multiplyScalar(kk).add(out.look);
  }
  out.flight = bump;
  return out;
}

export const CHAPTERS = N;
