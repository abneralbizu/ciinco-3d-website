// The network maps (chapters 02-08): flat, accurate dark maps of the real streets, shorelines
// and lakes (OpenStreetMap data through OpenFreeMap, drawn with MapLibre), with CIIN Co.'s
// network on top: the two offices as hubs, fine connecting lines with travelling pulses, and the
// districts, property types, neighbourhoods, services and markets each chapter talks about.
// The 01 "Our cities" opening stays the 3D night map; this layer fades in on the way down.
import { PLACES } from './geo.js';
import { t } from './i18n.js';

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
  { c: [-74.000, 40.728], z: 11.7, b: 29 },        // 02 New York: the harbour and Manhattan
  { c: [-81.340, 28.590], z: 9.9, b: 0 },          // 03 Commercial: Central Florida
  { c: [-81.282, 28.670], z: 11.3, b: 0 },         // 04 Residential: Seminole County around the office
  { c: [-81.2605, 28.6555], z: 11.0, b: 0 },       // 05 Advisory: the services around the office
  { c: [-77.7, 34.5], z: 4.75, b: 0 },             // 06 Track record: both cities
  { c: [-81.36, 28.58], z: 8.9, b: 0 },            // 07 Listings: Central Florida
  { c: [-77.7, 34.5], z: 4.9, b: 0 },              // 08 Contact: both offices
];

// Chapter 03 Commercial is shown in Central Florida (New York has chapter 02). The property types
// are placed around the Orlando area's commercial districts for illustration only.
const TYPES = [
  ['Office', -81.3770, 28.5470], ['Retail', -81.3930, 28.6640], ['Industrial', -81.2960, 28.7890], ['Multifamily', -81.2620, 28.4060],
  ['Hospitality', -81.4690, 28.4330], ['Healthcare', -81.2330, 28.3720], ['Mixed use', -81.3510, 28.5970], ['Land development', -81.1850, 28.5350],
  ['Storage', -81.3250, 28.7020], ['Restaurants', -81.3640, 28.5690], ['Churches', -81.2400, 28.6610], ['Special purpose', -81.3080, 28.4820],
];
const COMMERCIAL_FL = [
  ['Downtown Orlando', -81.3792, 28.5383], ['Lake Mary', -81.3178, 28.7589], ['Maitland', -81.3631, 28.6278], ['Altamonte Springs', -81.3656, 28.6611],
  ['Sanford', -81.2695, 28.8003], ['Lake Nona', -81.2470, 28.4170], ['International Drive', -81.4700, 28.4400],
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

  add('hub-ny', NY, { kind: 'hub', label: 'New York · 276 Fifth Ave.', ch: '1,5,7', office: 'new-york' });
  add('hub-fl', FL, { kind: 'hub', label: 'Winter Springs, FL', ch: '2,3,4,5,6,7', office: 'orlando' });
  DISTRICTS.forEach(([name, lon, lat], i) => { add(`d${i}`, [lon, lat], { kind: 'node', label: name, ch: '1' }); link(`d${i}`, NY, [lon, lat], [1], i % 2 ? 0.2 : -0.2); });
  TYPES.forEach(([name, lon, lat], i) => {
    const p = [lon, lat];
    add(`t${i}`, p, { kind: 'node', label: name, ch: '2', type: i, quiet: 1 });
    link(`t${i}`, FL, p, [2], i % 2 ? 0.22 : -0.22, { type: i });
  });
  COMMERCIAL_FL.forEach(([name, lon, lat], i) => {
    add(`c${i}`, [lon, lat], { kind: 'node', label: name, ch: '2' });
    link(`c${i}`, FL, [lon, lat], [2], i % 2 ? 0.16 : -0.16);
  });
  HOODS.forEach(([name, lon, lat], i) => { add(`h${i}`, [lon, lat], { kind: 'node', label: name, ch: '3' }); link(`h${i}`, FL, [lon, lat], [3], i % 2 ? 0.18 : -0.18); });
  // advisory services: a ring around the Florida office, numbered like the list
  serviceNames.forEach((name, i) => {
    const ang = (i / serviceNames.length) * Math.PI * 2 - Math.PI / 2;
    const p = [FL[0] + Math.cos(ang) * 0.05 / Math.cos(FL[1] * Math.PI / 180), FL[1] + Math.sin(ang) * 0.05];
    add(`s${i}`, p, { kind: 'node', label: `${String(i + 1).padStart(2, '0')} · ${name}`, short: String(i + 1).padStart(2, '0'), ch: '4', service: i, quiet: 1 });
    link(`s${i}`, FL, p, [4], 0.08, { service: i });
  });
  MARKETS.forEach(([name, lon, lat], i) => { add(`m${i}`, [lon, lat], { kind: 'node', label: name, ch: '6' }); link(`m${i}`, FL, [lon, lat], [6], i % 2 ? 0.15 : -0.15); });
  // the line between the two offices
  link('ny-fl', NY, FL, [1, 2, 5, 7], 0.12, { long: 1 });
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
    el.innerHTML = `<span>${t(f.properties.label)}</span>`;
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

  // Each chapter frames its own part of the network in the space its text leaves free, at any
  // screen size: the bounds of its nodes, fitted beside (or, for centred and full-width
  // chapters, behind) the text.
  const FRAME = [
    { keys: null, b: 0 },
    { keys: ['hub-ny', 'd'], b: 29 },
    { keys: ['hub-fl', 'c', 't'], b: 0 },
    { keys: ['hub-fl', 'h'], b: 0 },
    { keys: ['hub-fl', 's'], b: 0 },
    { keys: ['hub-ny', 'hub-fl'], b: 0, behind: true },
    { keys: ['hub-fl', 'm'], b: 0 },
    { keys: ['hub-ny', 'hub-fl'], b: 0, behind: true },
  ];
  const chapterEls = Array.from(document.querySelectorAll('.chapter'));
  // The pieces of text a chapter shows (headline lines, paragraphs, lists, buttons, cards).
  const TEXT = '.kicker, .eyebrow, h1 .line > span, h2 .line > span, .lede, .body, .note, .services, .types, .consulting, '
    + '.stats, .listing-links, .crexi, .cta-row, .next-row, .offices, .agent-mini, .agents, .hours, .contact-form, .scroll-cue';
  const textParts = (ch) => (ch ? Array.from(ch.querySelectorAll(TEXT)) : []);
  // Where a chapter's text sits on screen once the page has scrolled to that chapter
  function textRects(i, live = false) {
    const ch = chapterEls[i];
    if (!ch) return [];
    let shift = 0;
    if (!live) {
      const vh = window.innerHeight, max = document.documentElement.scrollHeight - vh;
      const r = ch.getBoundingClientRect();
      const anchor = i === 0 ? 0 : Math.min(max, Math.max(0, r.top + window.scrollY + r.height / 2 - vh / 2));
      shift = window.scrollY - anchor;
    }
    // measure the text where it ends up, not mid-way through its reveal animation
    if (!live) document.documentElement.classList.add('nm-measure');
    const range = document.createRange();
    const out = textParts(ch).map((el) => { range.selectNodeContents(el); return range.getBoundingClientRect(); })   // the words, not the full-width box
      .filter((r) => r.width > 2 && r.height > 2)
      .map((r) => ({ l: r.left, t: r.top + shift, r: r.right, b: r.bottom + shift }));
    if (!live) document.documentElement.classList.remove('nm-measure');
    return out;
  }
  // The largest clear rectangle of the screen: not under the text, the header, the chapter
  // list or the corner buttons. The chapter's network is fitted into it.
  function freeRect(rects, W, H, aspect = 1) {
    const C = 40, Rn = 26, cw = W / C, rh = H / Rn;
    const wide = W > 860;
    const blocked = (x0, y0, x1, y1) => {
      if (y0 < 84 || y1 > H - 64) return true;
      if (wide && x1 > W - 200) return true;               // chapter list and step buttons
      return rects.some((q) => x1 > q.l - 28 && x0 < q.r + 28 && y1 > q.t - 22 && y0 < q.b + 22);
    };
    const hgt = new Array(C).fill(0);
    let best = null;
    for (let y = 0; y < Rn; y++) {
      for (let x = 0; x < C; x++) hgt[x] = blocked(x * cw, y * rh, (x + 1) * cw, (y + 1) * rh) ? 0 : hgt[x] + 1;
      // largest rectangle under this row's histogram
      const st = [];
      for (let x = 0; x <= C; x++) {
        const h = x < C ? hgt[x] : 0;
        while (st.length && hgt[st[st.length - 1]] >= h) {
          const top = st.pop();
          const hh = hgt[top]; if (!hh) continue;
          const left = st.length ? st[st.length - 1] + 1 : 0;
          const w = (x - left) * cw, hp = hh * rh;
          // how big the network would be drawn in this rectangle (its own shape decides)
          const score = Math.min(w, hp * aspect);
          if (!best || score > best.score * 1.03 || (score > best.score * 0.97 && w * hp > best.area)) best = { score, area: w * hp, x: left * cw, y: (y - hh + 1) * rh, w, h: hp };
        }
        st.push(x);
      }
    }
    return best;
  }
  if (/[?&]debug\b/.test(location.search)) window.__nm = { textRects, freeRect, frames: () => frames };   // for checking the framing
  let frames = null;
  function computeFrames() {
    const W = window.innerWidth, H = window.innerHeight;
    const merc = (c) => maplibregl.MercatorCoordinate.fromLngLat(c);
    frames = FRAME.map((F, i) => {
      if (!F.keys) return VIEWS[0];
      const pts = net.nodes.filter((n) => F.keys.some((k) => n.properties.key === k || (k.length === 1 && n.properties.key.startsWith(k) && /\d/.test(n.properties.key[1])))).map((n) => n.geometry.coordinates);
      const lons = pts.map((q) => q[0]), lats = pts.map((q) => q[1]);
      const bounds = [[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]];
      let pad = { top: 110, bottom: 90, left: 80, right: W > 860 ? 240 : 60 };   // behind the text, whole screen
      // the network's shape on screen (width / height), after turning the map to its bearing
      const rot = (F.b * Math.PI) / 180;
      const mp = pts.map((q) => { const m = merc(q); return [m.x * Math.cos(rot) - m.y * Math.sin(rot), m.x * Math.sin(rot) + m.y * Math.cos(rot)]; });
      const bw = Math.max(...mp.map((q) => q[0])) - Math.min(...mp.map((q) => q[0]));
      const bh = Math.max(...mp.map((q) => q[1])) - Math.min(...mp.map((q) => q[1]));
      const aspect = Math.min(4, Math.max(0.25, (bw + 1e-9) / (bh + 1e-9)));
      const fr = F.behind ? null : freeRect(textRects(i), W, H, aspect);
      if (fr && fr.w > 200 && fr.h >= 120 && fr.score > Math.min(W, H) * 0.26) {
        // inside the clear area, leaving a little room for the names beside the dots
        const ix = Math.min(90, fr.w * 0.14), iy = Math.min(30, fr.h * 0.08);
        pad = { left: fr.x + ix, right: W - (fr.x + fr.w) + ix, top: fr.y + iy, bottom: H - (fr.y + fr.h) + iy };
      }
      const cam = map.cameraForBounds(bounds, { padding: pad, bearing: F.b, maxZoom: 14 });
      if (!cam) return VIEWS[i];
      const c = cam.center.toArray ? cam.center.toArray() : [cam.center.lng, cam.center.lat];
      return { c, z: cam.zoom, b: F.b };
    });
  }
  window.addEventListener('resize', () => { frames = null; labels.forEach((L) => { L.w = 0; }); });
  if (document.fonts) document.fonts.ready.then(() => { frames = null; labels.forEach((L) => { L.w = 0; }); });
  window.addEventListener('load', () => { frames = null; });

  // view along the scroll: glide between chapters; between the two cities, rise high enough to see both
  const merc = (c) => maplibregl.MercatorCoordinate.fromLngLat(c);
  const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  function viewAt(p, W) {
    const i = Math.min(FRAME.length - 2, Math.max(0, Math.floor(p)));
    const t = ease(Math.min(1, Math.max(0, p - i)));
    if (!frames) computeFrames();
    const A = frames[i], B = frames[i + 1];
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
      map.jumpTo({ center: v.center, zoom: v.zoom, bearing: v.bearing });
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

      // labels: never under the chapter's text, never on top of each other. The offices come
      // first, then whatever is lit up; each name goes right of its dot, or left if that is taken.
      const rects = textRects(Math.round(p), true);
      document.querySelectorAll('.system-map, .stepper, .telemetry').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 2) rects.push({ l: r.left, t: r.top, r: r.right, b: r.bottom });
      });
      const placed = [];
      const clear = (b) => b.l > 8 && b.r < W - 8 && b.t > 76 && b.b < H - 40
        && !rects.some((q) => b.r > q.l - 10 && b.l < q.r + 10 && b.b > q.t - 6 && b.t < q.b + 6)
        && !placed.some((q) => b.r > q.l - 6 && b.l < q.r + 6 && b.b > q.t - 3 && b.t < q.b + 3);
      const order = labels.slice().sort((a, b) => (b.f.properties.kind === 'hub') - (a.f.properties.kind === 'hub') || (!!b.f._hot) - (!!a.f._hot));
      for (const L of order) {
        const pr = L.f.properties;
        const quiet = pr.quiet && !L.f._hot;
        let on = false;
        if (L.f._w > 0.55 && mix > 0.6 && !quiet) {
          const s = map.project(L.f.geometry.coordinates);
          if (!L.w) { const r = L.el.firstElementChild.getBoundingClientRect(); L.w = r.width; L.h = r.height; }
          const gap = pr.kind === 'hub' ? 16 : 12, hh = L.h / 2 + 2;
          const right = { l: s.x + gap, r: s.x + gap + L.w, t: s.y - hh, b: s.y + hh };
          const left = { l: s.x - gap - L.w, r: s.x - gap, t: s.y - hh, b: s.y + hh };
          const below = { l: s.x - L.w / 2, r: s.x + L.w / 2, t: s.y + 10, b: s.y + 10 + L.h };
          const above = { l: s.x - L.w / 2, r: s.x + L.w / 2, t: s.y - 10 - L.h, b: s.y - 10 };
          const box = [right, left, below, above].find(clear) || null;
          if (box) {
            placed.push(box);
            on = true;
            L.el.classList.toggle('is-left', box === left);
            L.el.classList.toggle('is-below', box === below);
            L.el.classList.toggle('is-above', box === above);
            L.el.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`;
            L.el.classList.toggle('is-hot', !!L.f._hot);
          }
        }
        if (on !== L.el.classList.contains('is-on')) L.el.classList.toggle('is-on', on);
      }
      lastP = p;
      return v;
    },
    hideLabels() { labels.forEach((L) => L.el.classList.remove('is-on')); },
    resize() { map.resize(); },
  };
}
