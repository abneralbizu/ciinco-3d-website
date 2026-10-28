// Exports the raw geography used by tools/build_geo.py:
//   data/land10.geojson    coastlines (Natural Earth 1:10m, public domain, via world-atlas)
//   data/states.geojson    US state borders (US Census, via us-atlas)
//   data/region-cities.json  populated places across North America (the night map's extent) (GeoNames CC BY 4.0, via all-the-cities)
// Run from the project root: node tools/export-geo.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import * as topojson from 'topojson-client';

const require = createRequire(import.meta.url);
mkdirSync('data', { recursive: true });

const land = JSON.parse(readFileSync('node_modules/world-atlas/land-10m.json', 'utf8'));
writeFileSync('data/land10.geojson', JSON.stringify(topojson.feature(land, land.objects.land)));

const us = JSON.parse(readFileSync('node_modules/us-atlas/states-10m.json', 'utf8'));
const borders = topojson.mesh(us, us.objects.states, (a, b) => a !== b);
writeFileSync('data/states.geojson', JSON.stringify(borders));

const cities = require('all-the-cities')
  .filter((c) => {
    const [lon, lat] = c.loc.coordinates;
    return lon > -129 && lon < -51 && lat > 15 && lat < 53 && c.population >= 500;
  })
  .map((c) => [+c.loc.coordinates[0].toFixed(4), +c.loc.coordinates[1].toFixed(4), c.population]);
writeFileSync('data/region-cities.json', JSON.stringify(cities));
console.log('cities', cities.length);
