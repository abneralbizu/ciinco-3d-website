// The network maps (chapters 02-08): flat, accurate dark maps of the real streets, shorelines
// and lakes (OpenStreetMap data through OpenFreeMap, drawn with MapLibre), with CIIN Co.'s
// network on top: the two offices as hubs, fine connecting lines with travelling pulses, and the
// districts, property types, neighbourhoods, services and markets each chapter talks about.
// The 01 "Our cities" opening stays the 3D night map; this layer fades in on the way down.
import { grid, PLACES } from './geo.js';

const TILES = 'https://tiles.openfreemap.org/planet';
const C = {
  land: '#0d111c', water: '#04060c', shore: '#24395e', park: '#0d1716',
  bld: '#131926', bldLine: '#1a2231', minor: '#1a2131', major: '#262f45', motor: '#33405f', state: '#2a3550',
};
// Which side of the screen each chapter's text sits on (matches ui.js)
const SIDES = ['left', 'left', 'left', 'right', 'left', 'center', 'right', 'left'];

// ---- Map style: our own, minimal and dark ----------------------------------------------
function style() {
  const line = (id, classes, color, widths, minzoom = 0) => ({
    id, type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom,
    filter: ['all', ['in', ['geometry-type'], ['literal', ['LineString', 'MultiLineString']]], ['in', ['get', 'class'], ['literal', classes]], ['!=', ['get', 'brunnel'], 'tunnel']],
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint: { 'line-color': color, 'line-width': ['interpolate', ['exponential', 1.6], ['zoom'], ...widths] },
  });
  return {
    version: 8,
    sources: { omt: { type: 'vector', url: TILES } },
    layers: [
      { id: 'land', type: 'background', paint: { 'background-color': C.land } },
      { id: 'park', type: 'fill', source: 'omt', 'source-layer': 'park', paint: { 'fill-color': C.park } },
      { id: 'green', type: 'fill', source: 'omt', 'source-layer': 'landcover', filter: ['in', ['get', 'class'], ['literal', ['grass', 'wood']]], paint: { 'fill-color': C.park, 'fill-opacity': 0.6 } },
      { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', filter: ['!=', ['get', 'brunnel'], 'tunnel'], paint: { 'fill-color': C.water } },
      { id: 'shore', type: 'line', source: 'omt', 'source-layer': 'water', filter: ['!=', ['get', 'brunnel'], 'tunnel'], paint: { 'line-color': C.shore, 'line-width': ['interpolate', ['linear'], ['zoom'], 5, 0.3, 10, 0.6, 15, 1.2] } },
      { id: 'buildings', type: 'fill', source: 'omt', 'source-layer': 'building', minzoom: 12.5, paint: { 'fill-color': C.bld, 'fill-outline-color': C.bldLine, 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 12.5, 0, 13.6, 1] } },
      line('roads-minor', ['minor', 'service'], C.minor, [11, 0.2, 14, 0.7, 17, 3], 11),
      line('roads-major', ['primary', 'secondary', 'tertiary'], C.major, [8, 0.25, 12, 0.8, 16, 3.5], 7),
      line('roads-motor', ['motorway', 'trunk'], C.motor, [5, 0.3, 10, 1, 15, 4]),
      { id: 'states', type: 'line', source: 'omt', 'source-layer': 'boundary', maxzoom: 9, filter: ['==', ['get', 'admin_level'], 4], paint: { 'line-color': C.state, 'line-width': 0.8, 'line-dasharray': [3, 2] } },
    ],
  };
}

// ---- The network ------------------------------------------------------------------------
const NY = [PLACES.nyOffice.lon, PLACES.nyOffice.lat];
const FL = [PLACES.orlandoOffice.lon, PLACES.orlandoOffice.lat];
const ll = ([lat, lon]) => [lon, lat];

// Chapter views: centre [lon, lat], zoom, bearing (Manhattan's grid runs 29 degrees off north)
const VIEWS = [
  { c: [-74.2, 40.55], z: 7.6, b: 0 },            // 01 (the map is still hidden here)
  { c: [-74.000, 40.728], z: 11.7, b: 29 },        // 02 Skyline: New York harbour and Manhattan
  { c: [-73.9910, 40.7540], z: 13.2, b: 29 },      // 03 Commercial: Midtown
  { c: [-81.282, 28.670], z: 11.3, b: 0 },         // 04 Residential: Seminole County around the office
  { c: [-81.2605, 28.6555], z: 11.0, b: 0 },       // 05 Advisory: the services around the office
  { c: [-77.7, 34.5], z: 4.75, b: 0 },             // 06 Track record: both cities
  { c: [-81.36, 28.58], z: 8.9, b: 0 },            // 07 Listings: Central Florida
  { c: [-77.7, 34.5], z: 4.9, b: 0 },              // 08 Contact: both offices
];

const TYPES = [
  ['Office', 1.6, 47.5], ['Retail', -0.15, 55.5], ['Industrial', 6.35, 27.5], ['Multifamily', 3.5, 64.5], ['Hospitality', 2.35, 45.5], ['Healthcare', -2.95, 31.5],
  ['Mixed use', 5.6, 37.5], ['Land development', 6.1, 41.5], ['Storage', 6.0, 21.5], ['Restaurants', 1.7, 12.5], ['Churches', 4.3, 71.5], ['Special purpose', 6.35, 35.5],
];
const DISTRICTS = [
  ['Financial District', -74.0110, 40.7075], ['Midtown', -73.9840, 40.7549], ['Hudson Yards', -74.0010, 40.7536],
  ['Downtown Brooklyn', -73.9903, 40.6928], ['Long Island City', -73.9485, 40.7447], ['Jersey City', -74.0431, 40.7178],
];
const HOODS = [
  ['Winter Springs', -81.3081, 28.6989], ['Oviedo', -81.2081, 28.6700], ['Casselberry', -81.3279, 28.6778], ['Longwood', -81.3384, 28.7031],
  ['Lake Mary', -81.3178, 28.7589], ['Winter Park', -81.3392, 28.6000], ['East Orlando · UCF', -81.2001, 28.6024],
];
const MARKETS = [
  ['Orlando', -81.3792, 28.5383], ['Kissimmee', -81.4076, 28.2920], ['Sanford', -81.2695, 28.8003], ['Clermont', -81.7729, 28.5494],
  ['Lake Nona', -81.2470, 28.4170], ['Winter Park', -81.3392, 28.6000], ['Daytona Beach', -81.0228, 29.2108],
];

/** A gentle curve from a to b (lon/lat), bowed to one side. */
function curve(a, b, bow = 0.18, n = 48) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const cx = mx - dy * bow, cy = my + dx * bow;
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    pts.push([u * u * a[0] + 2 * u * t * cx + t * t * b[0], u * u * a[1] + 2 * u * t * cy + t * t * b[1]]);
  }
  return pts;
}

function buildNetwork(serviceNames) {
  const nodes = [], edges = [];
  const add = (id, coord, props) => nodes.push({ type: 'Feature', id: nodes.length + 1, properties: { key: id, ...props }, geometry: { type: 'Point', coordinates: coord } });
  const link = (key, a, b, chapters, bow, props = {}) => edges.push({ type: 'Feature', id: edges.length + 1, properties: { key, ch: chapters.join(','), ...props }, geometry: { type: 'LineString', coordinates: curve(a, b, bow) } });

  add('hub-ny', NY, { kind: 'hub', label: 'New York · 276 Fifth Ave.', ch: '1,2,5,7', office: 'new-york' });
  add('hub-fl', FL, { kind: 'hub', label: 'Winter Springs, FL', ch: '3,4,5,6,7', office: 'orlando' });
  DISTRICTS.forEach(([name, lon, lat], i) => { add(`d${i}`, [lon, lat], { kind: 'node', label: name, ch: '1' }); link(`d${i}`, NY, [lon, lat], [1], i % 2 ? 0.2 : -0.2); });
  TYPES.forEach(([name, a, s], i) => {
    const p = ll(grid(a, s));
    add(`t${i}`, p, { kind: 'node', label: name, ch: '2', type: i, quiet: 1 });
    link(`t${i}`, NY, p, [2], i % 2 ? 0.22 : -0.22, { type: i });
  });
  HOODS.forEach(([name, lon, lat], i) => { add(`h${i}`, [lon, lat], { kind: 'node', label: name, ch: '3' }); link(`h${i}`, FL, [lon, lat], [3], i % 2 ? 0.18 : -0.18); });
  // advisory services: a ring around the Florida office, numbered like the list
  serviceNames.forEach((name, i) => {
    const ang = (i / serviceNames.length) * Math.PI * 2 - Math.PI / 2;
    const p = [FL[0] + Math.cos(ang) * 0.085 / Math.cos(FL[1] * Math.PI / 180), FL[1] + Math.sin(ang) * 0.085];
    add(`s${i}`, p, { kind: 'node', label: `${String(i + 1).padStart(2, '0')} · ${name}`, short: String(i + 1).padStart(2, '0'), ch: '4', service: i, quiet: 1 });
    link(`s${i}`, FL, p, [4], 0.08, { service: i });
  });
  MARKETS.forEach(([name, lon, lat], i) => { add(`m${i}`, [lon, lat], { kind: 'node', label: name, ch: '6' }); link(`m${i}`, FL, [lon, lat], [6], i % 2 ? 0.15 : -0.15); });
  // the line between the two offices
  link('ny-fl', NY, FL, [1, 5, 7], 0.12, { long: 1 });
  return { nodes, edges };
}

export function createNetMap({ container, services }) {
  const maplibregl = window.maplibregl;   // loaded on demand (assets/js/maplibre-gl.js)
  const map = new maplibregl.Map({
    container, style: style(), center: VIEWS[0].c, zoom: VIEWS[0].z, bearing: 0,
    interactive: false, attributionControl: { compact: true }, fadeDuration: 0, renderWorldCopies: false,
    pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
  });
  const net = buildNetwork(services);
  const pulseData = { type: 'FeatureCollection', features: [] };
  let ready = false;

  map.on('style.load', () => {
    map.addSource('edges', { type: 'geojson', data: { type: 'FeatureCollection', features: net.edges } });
    map.addSource('nodes', { type: 'geojson', data: { type: 'FeatureCollection', features: net.nodes } });
    map.addSource('pulses', { type: 'geojson', data: pulseData });
    const w = ['coalesce', ['feature-state', 'w'], 0];
    const hot = ['coalesce', ['feature-state', 'hot'], 0];
    map.addLayer({ id: 'edges', type: 'line', source: 'edges', layout: { 'line-cap': 'round' }, paint: {
      'line-color': ['case', ['>', hot, 0.5], '#ecd1a4', '#8fb6ff'],
      'line-width': ['case', ['>', hot, 0.5], 1.8, ['==', ['get', 'long'], 1], 1.4, 1],
      'line-opacity': ['*', w, ['case', ['>', hot, 0.5], 0.95, ['coalesce', ['feature-state', 'dim'], 0.42]]],
    } });
    map.addLayer({ id: 'pulses', type: 'circle', source: 'pulses', paint: {
      'circle-radius': ['get', 'r'], 'circle-color': ['get', 'c'], 'circle-blur': 0.6, 'circle-opacity': ['get', 'o'],
    } });
    map.addLayer({ id: 'node-halo', type: 'circle', source: 'nodes', paint: {
      'circle-radius': ['case', ['==', ['get', 'kind'], 'hub'], 16, ['>', hot, 0.5], 12, 7],
      'circle-color': ['case', ['>', hot, 0.5], '#ecd1a4', '#8fb6ff'], 'circle-blur': 1,
      'circle-opacity': ['*', w, ['case', ['==', ['get', 'kind'], 'hub'], 0.35, ['>', hot, 0.5], 0.5, 0.18]],
    } });
    map.addLayer({ id: 'node-core', type: 'circle', source: 'nodes', paint: {
      'circle-radius': ['case', ['==', ['get', 'kind'], 'hub'], 4.5, ['>', hot, 0.5], 3.6, 2.4],
      'circle-color': ['case', ['>', hot, 0.5], '#ecd1a4', ['==', ['get', 'kind'], 'hub'], '#ffffff', '#cfe0ff'],
      'circle-stroke-color': '#8fb6ff', 'circle-stroke-width': ['case', ['==', ['get', 'kind'], 'hub'], 1.5, 0],
      'circle-opacity': w, 'circle-stroke-opacity': w,
    } });
    ready = true;
  });

  // HTML labels in the site's own type, placed over the map
  const labelRoot = document.createElement('div');
  labelRoot.className = 'nm-labels';
  container.parentNode.appendChild(labelRoot);
  const labels = net.nodes.map((f) => {
    const el = document.createElement('div');
    el.className = `nm-label nm-${f.properties.kind}`;
    el.innerHTML = `<span>${f.properties.label}</span>`;
    labelRoot.appendChild(el);
    return { f, el, shown: false };
  });

  const weightOf = (chs, p) => chs.split(',').reduce((m, c) => Math.max(m, 1 - Math.min(1, Math.abs(p - +c) * 1.7)), 0);
  const state = {}; // last feature-state per source:id, to only send changes
  function setState(src, id, s) {
    const k = `${src}:${id}`, prev = state[k] || {};
    let changed = false;
    for (const key in s) if (Math.abs((prev[key] ?? -1) - s[key]) > 0.01) { changed = true; break; }
    if (!changed) return;
    state[k] = { ...prev, ...s };
    map.setFeatureState({ source: src, id }, s);
  }

  // view along the scroll: glide between chapters; between the two cities, rise high enough to see both
  const merc = (c) => maplibregl.MercatorCoordinate.fromLngLat(c);
  const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  function viewAt(p, W) {
    const i = Math.min(VIEWS.length - 2, Math.max(0, Math.floor(p)));
    const t = ease(Math.min(1, Math.max(0, p - i)));
    const A = VIEWS[i], B = VIEWS[i + 1];
    const a = merc(A.c), b = merc(B.c);
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    const fit = Math.log2((W * 0.8) / (512 * Math.max(d, 1e-9)));        // zoom that shows both centres
    const low = Math.min(A.z, B.z);
    let z = A.z + (B.z - A.z) * t;
    let tc = t;
    if (fit < low - 0.5) { z -= (z - fit) * Math.pow(Math.sin(Math.PI * t), 0.7); tc = ease(t); }
    const x = a.x + (b.x - a.x) * tc, y = a.y + (b.y - a.y) * tc;
    const c = new maplibregl.MercatorCoordinate(x, y).toLngLat();
    let db = B.b - A.b;
    return { center: [c.lng, c.lat], zoom: z, bearing: A.b + db * t, i, t };
  }

  let hover = null;
  let lastP = -1;
  return {
    map,
    get ready() { return ready; },
    /** p: scroll progress in chapters; mix: how visible the map is (0-1). */
    update(p, time, mix, hotType, hotNode, hotOffice, pointer) {
      if (mix < 0.01) return null;
      const W = window.innerWidth, H = window.innerHeight;
      const v = viewAt(p, W);
      // keep the subject clear of the chapter's text
      const narrow = W / H < 0.9;
      const sideA = SIDES[v.i], sideB = SIDES[Math.min(SIDES.length - 1, v.i + 1)];
      const pad = (side) => (narrow ? { left: 0, right: 0, top: H * 0.25, bottom: 0 }
        : side === 'left' ? { left: W * 0.46, right: 0, top: 0, bottom: 0 }
          : side === 'right' ? { left: 0, right: W * 0.46, top: 0, bottom: 0 }
            : { left: 0, right: 0, top: H * 0.3, bottom: 0 });
      const pa = pad(sideA), pb = pad(sideB);
      const padding = {};
      for (const k of ['left', 'right', 'top', 'bottom']) padding[k] = pa[k] + (pb[k] - pa[k]) * v.t;
      map.jumpTo({ center: v.center, zoom: v.zoom, bearing: v.bearing, padding });
      if (!ready) return v;

      // which parts of the network belong to this stretch of the page
      const hoverKey = hover && hover.properties.key;
      for (const f of net.edges) {
        const pr = f.properties;
        const isHot = (pr.type !== undefined && pr.type === hotType) || (pr.service !== undefined && pr.service === hotNode) || pr.key === hoverKey
          || (pr.long && hotOffice) ;
        const quiet = pr.type !== undefined || pr.service !== undefined;
        setState('edges', f.id, { w: weightOf(pr.ch, p), hot: isHot ? 1 : 0, dim: quiet ? 0.22 : 0.42 });
        f._w = weightOf(pr.ch, p); f._hot = isHot;
      }
      for (const f of net.nodes) {
        const pr = f.properties;
        const isHot = (pr.type !== undefined && pr.type === hotType) || (pr.service !== undefined && pr.service === hotNode)
          || (pr.office && pr.office === hotOffice) || pr.key === hoverKey;
        f._w = Math.max(weightOf(pr.ch, p), pr.kind === 'hub' && p > 0.6 ? 0.5 : 0);
        f._hot = isHot;
        setState('nodes', f.id, { w: f._w, hot: isHot ? 1 : 0 });
      }
      // travelling pulses: from the hub outward along each visible line
      pulseData.features.length = 0;
      for (const f of net.edges) {
        if (f._w < 0.2) continue;
        const pts = f.geometry.coordinates;
        const seed = (f.id * 0.618) % 1;
        const speed = f.properties.long ? 0.12 : 0.28;
        for (const off of [0, 0.5]) {
          const t = (time * speed + seed + off) % 1;
          const k = t * (pts.length - 1), i0 = Math.floor(k), fr = k - i0;
          const a = pts[i0], b = pts[Math.min(pts.length - 1, i0 + 1)];
          const fade = Math.sin(Math.PI * t);
          pulseData.features.push({ type: 'Feature', properties: { r: f._hot ? 4 : 2.6, c: f._hot ? '#ecd1a4' : '#cfe0ff', o: f._w * fade * (f._hot ? 1 : 0.7) }, geometry: { type: 'Point', coordinates: [a[0] + (b[0] - a[0]) * fr, a[1] + (b[1] - a[1]) * fr] } });
        }
      }
      map.getSource('pulses').setData(pulseData);

      // hovering a node on the map shows its name
      hover = null;
      if (pointer && pointer.inside && !pointer.overUI) {
        const hits = map.queryRenderedFeatures([[pointer.px - 10, pointer.py - 10], [pointer.px + 10, pointer.py + 10]], { layers: ['node-core'] });
        const h = hits.find((x) => (x.state && x.state.w > 0.5));
        if (h) hover = net.nodes.find((n) => n.id === h.id) || null;
      }

      // labels
      for (const L of labels) {
        const pr = L.f.properties;
        const quiet = pr.quiet && !L.f._hot;
        const show = L.f._w > 0.55 && mix > 0.6 && !quiet;
        if (show) {
          const s = map.project(L.f.geometry.coordinates);
          const onScreen = s.x > -50 && s.x < W + 50 && s.y > -20 && s.y < H + 20;
          L.el.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`;
          L.el.classList.toggle('is-on', onScreen);
          L.el.classList.toggle('is-hot', !!L.f._hot);
        } else if (L.el.classList.contains('is-on')) L.el.classList.remove('is-on');
      }
      lastP = p;
      return v;
    },
    hideLabels() { labels.forEach((L) => L.el.classList.remove('is-on')); },
    resize() { map.resize(); },
  };
}
