// Shared geography: one Mercator projection for the whole scene, so the East Coast
// map, the Manhattan grid and Orlando's lakes all line up.
// 1 scene unit = 100 m at the equator. Mercator stretches distances by 1/cos(lat),
// so heights are multiplied by the same factor (k) to keep buildings in proportion.
// tools/build_geo.py uses the same constants for the map texture.
import { Vector3 } from 'three';

export const R = 63710; // earth radius in scene units (100 m)
export const LON0 = -77.5;
export const LAT0 = 34.5;
const rad = Math.PI / 180;
const merc = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * rad) / 2));
const M0 = merc(LAT0);

export const k = (lat) => 1 / Math.cos(lat * rad);

/** Ground position for (lat, lon), with altitude in metres. */
export function P(lat, lon, altM = 0, out = new Vector3()) {
  return out.set(R * (lon - LON0) * rad, (altM / 100) * k(lat), -R * (merc(lat) - M0));
}

/** Scene x/z back to latitude/longitude (for the telemetry readout). */
export function unproject(x, z) {
  const lon = x / R / rad + LON0;
  const m = -z / R + M0;
  const lat = (2 * Math.atan(Math.exp(m)) - Math.PI / 2) / rad;
  return { lat, lon };
}

/** Metres above ground for a scene height at a given latitude. */
export const altitudeM = (y, lat) => (y * 100) / k(lat);

// ---------------------------------------------------------------------------
// Manhattan's 1811 street grid. Avenue index a (5th = 0, west positive), street s.
// Calibrated on 5th Ave & 59th St, 5th & 110th, and 8th & 59th (Columbus Circle).
// ---------------------------------------------------------------------------
const G0 = [40.7644, -73.973];
const GA = [0.001233, -0.002967]; // one west-side avenue block
const GS = [0.000633, 0.000457]; // one street
// East-side avenues sit closer together: Madison, Park, Lexington, 3rd, 2nd, 1st, York, East End.
export const AVENUES = [
  { a: -3.75, name: 'East End' }, { a: -3.3, name: 'York' }, { a: -2.8, name: '1st' }, { a: -2.3, name: '2nd' },
  { a: -1.8, name: '3rd' }, { a: -1.35, name: 'Lexington' }, { a: -0.9, name: 'Park' }, { a: -0.45, name: 'Madison' },
  { a: 0, name: '5th' }, { a: 1, name: '6th' }, { a: 2, name: '7th' }, { a: 3, name: '8th' }, { a: 4, name: '9th' },
  { a: 5, name: '10th' }, { a: 6, name: '11th' }, { a: 6.85, name: '12th' },
];
export function grid(a, s) {
  return [G0[0] + a * GA[0] + (s - 59) * GS[0], G0[1] + a * GA[1] + (s - 59) * GS[1]];
}

// ---------------------------------------------------------------------------
// Places
// ---------------------------------------------------------------------------
export const PLACES = {
  nyc: { lat: 40.735, lon: -73.99 },
  nyOffice: { lat: 40.7459, lon: -73.9867, name: 'New York', sub: 'Commercial · 276 Fifth Ave.' }, // 5th Ave & 30th St
  orlando: { lat: 28.5434, lon: -81.3765 },
  lakeEola: { lat: 28.5434, lon: -81.3725 },
  orlandoOffice: { lat: 28.6555, lon: -81.2605, name: 'Orlando', sub: 'Commercial · Residential · Winter Springs' }, // Willa Springs, Red Bug Lake Rd & Tuskawilla Rd
  lakeJesup: { lat: 28.722, lon: -81.235 },
};
