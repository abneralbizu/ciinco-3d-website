// Exports land polygons and populated places used to paint the Earth textures.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import * as topojson from 'topojson-client';
const require = createRequire(import.meta.url);
const land = JSON.parse(readFileSync('node_modules/world-atlas/land-50m.json', 'utf8'));
const geo = topojson.feature(land, land.objects.land);
writeFileSync('data/land.geojson', JSON.stringify(geo));
const cities = require('all-the-cities');
const out = cities.filter(c => c.population >= 15000).map(c => [+c.loc.coordinates[0].toFixed(3), +c.loc.coordinates[1].toFixed(3), c.population]);
writeFileSync('data/cities.json', JSON.stringify(out));
console.log('land features', geo.features.length, 'cities', out.length);
