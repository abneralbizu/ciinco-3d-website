"""
Builds the geography the 3D cities stand on.

  site/assets/data/nyc.json        New York shorelines (5 boroughs + the New Jersey waterfront), simplified
  site/assets/textures/map.webp    East Coast night map: land, coast + state lines, city lights (Mercator)
  site/assets/textures/map-2k.webp lighter copy for phones

Sources (see README "Credits"): NYC Borough Boundaries, clipped to shoreline (NYC Open Data);
Natural Earth 1:10m land (public domain); US Census state borders (us-atlas);
GeoNames populated places (CC BY 4.0, via all-the-cities).

Run from the project root after `node tools/export-geo.mjs`:
    python3 tools/build_geo.py
The projection constants must match src/geo.js.
"""
import json
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from shapely.geometry import shape, Polygon, MultiPolygon, box, mapping
from shapely.ops import unary_union

OUT_DATA = os.path.join("site", "assets", "data")
OUT_TEX = os.path.join("site", "assets", "textures")
os.makedirs(OUT_DATA, exist_ok=True)
os.makedirs(OUT_TEX, exist_ok=True)

# Map extent (degrees). Mercator, so shapes stay true at every latitude.
LON_MIN, LON_MAX, LAT_MIN, LAT_MAX = -97.0, -60.0, 22.0, 47.5


def merc(lat):
    return math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


def rings(geom):
    polys = geom.geoms if isinstance(geom, MultiPolygon) else [geom]
    for p in polys:
        yield p


# ---------------------------------------------------------------------------
# New York shorelines
# ---------------------------------------------------------------------------
def nyc():
    g = json.load(open("data/nyc-boroughs.geojson"))
    out = {}
    land = []
    for f in g["features"]:
        name = f["properties"]["BoroName"]
        geom = shape(f["geometry"]).buffer(0)
        land.append(geom)
        simp = geom.simplify(0.00005, preserve_topology=True)
        out[name] = simp
    nyc_union = unary_union(land)

    # New Jersey waterfront (Bayonne to the Palisades), drawn from known shoreline points
    # and trimmed against the boroughs so the Hudson and Upper Bay stay open.
    shore = [(-74.075, 40.640), (-74.064, 40.662), (-74.060, 40.684), (-74.050, 40.700), (-74.040, 40.708),
             (-74.0335, 40.716), (-74.030, 40.728), (-74.027, 40.737), (-74.026, 40.748), (-74.020, 40.760),
             (-74.012, 40.773), (-74.002, 40.786), (-73.990, 40.802), (-73.979, 40.822), (-73.966, 40.842),
             (-73.957, 40.858), (-73.940, 40.900), (-73.921, 40.950), (-73.905, 41.020)]
    west = [(-74.40, 41.020), (-74.40, 40.560), (-74.21, 40.560), (-74.19, 40.640), (-74.10, 40.648)]
    nj = Polygon(shore + west).buffer(0)
    newark_bay = Polygon([(-74.165, 40.655), (-74.115, 40.660), (-74.105, 40.700), (-74.120, 40.735),
                          (-74.150, 40.735), (-74.170, 40.700)])
    nj = nj.difference(newark_bay).difference(nyc_union.buffer(0.0008))
    out["New Jersey"] = nj.simplify(0.00008, preserve_topology=True)

    # Westchester, north of the Bronx, between the Hudson and Long Island Sound.
    westchester = Polygon([(-73.935, 40.905), (-73.905, 41.10), (-73.60, 41.10), (-73.66, 40.98), (-73.75, 40.90),
                           (-73.785, 40.875)]).difference(nyc_union.buffer(0.0005))
    out["Westchester"] = westchester.simplify(0.0001, preserve_topology=True)

    # Nassau County edge so Queens doesn't end in a cliff.
    nassau = Polygon([(-73.70, 40.58), (-73.40, 40.58), (-73.40, 40.90), (-73.76, 40.90), (-73.745, 40.80),
                      (-73.70, 40.75)]).difference(nyc_union.buffer(0.0005))
    out["Nassau"] = nassau.simplify(0.0001, preserve_topology=True)

    data = {}
    total = 0
    for name, geom in out.items():
        polys = []
        for p in rings(geom):
            if p.area < 2e-7:  # drop specks
                continue
            ring = [[round(x, 5), round(y, 5)] for x, y in p.exterior.coords[:-1]]
            holes = [[[round(x, 5), round(y, 5)] for x, y in h.coords[:-1]] for h in p.interiors if Polygon(h).area > 2e-7]
            polys.append({"outer": ring, "holes": holes})
            total += len(ring) + sum(len(h) for h in holes)
        data[name] = polys
    # Manhattan island alone (largest polygon) for "is this lot on the island?" tests.
    man = max(rings(out["Manhattan"]), key=lambda p: p.area)
    data["_manhattanIsland"] = [[round(x, 5), round(y, 5)] for x, y in man.exterior.coords[:-1]]
    with open(os.path.join(OUT_DATA, "nyc.json"), "w") as fh:
        json.dump(data, fh, separators=(",", ":"))
    print("nyc.json", total, "points", os.path.getsize(os.path.join(OUT_DATA, "nyc.json")) // 1024, "KB")


# ---------------------------------------------------------------------------
# East Coast night map
# ---------------------------------------------------------------------------
def night_map(W=4096):
    lon_span = math.radians(LON_MAX - LON_MIN)
    m_top, m_bot = merc(LAT_MAX), merc(LAT_MIN)
    H = int(round(W * (m_top - m_bot) / lon_span))
    S = 2  # supersample for clean coastlines

    def px(lon, lat, s=1):
        return ((lon - LON_MIN) / (LON_MAX - LON_MIN) * W * s, (m_top - merc(lat)) / (m_top - m_bot) * H * s)

    bbox = box(LON_MIN - 1, LAT_MIN - 1, LON_MAX + 1, LAT_MAX + 1)
    land = shape(json.load(open("data/land10.geojson"))["features"][0]["geometry"]).buffer(0)
    land = land.intersection(bbox)
    mask = Image.new("L", (W * S, H * S), 0)
    d = ImageDraw.Draw(mask)
    for p in rings(land):
        d.polygon([px(x, y, S) for x, y in p.exterior.coords], fill=255)
        for h in p.interiors:
            d.polygon([px(x, y, S) for x, y in h.coords], fill=0)
    mask = mask.resize((W, H), Image.LANCZOS)
    m = np.asarray(mask, dtype=np.float32) / 255

    # Coastline: a thin bright edge plus a soft glow.
    edge = np.abs(np.asarray(mask.filter(ImageFilter.GaussianBlur(0.8)), dtype=np.float32) / 255 - m) * 3
    glow = np.asarray(mask.filter(ImageFilter.GaussianBlur(5)), dtype=np.float32) / 255
    coast = np.clip(edge, 0, 1) * 0.9 + np.clip((glow - m) * 1.5, 0, 1) * 0.35

    # State borders.
    bl = Image.new("L", (W * S, H * S), 0)
    db = ImageDraw.Draw(bl)
    st = json.load(open("data/states.geojson"))
    lines = st["coordinates"] if st["type"] == "MultiLineString" else [st["coordinates"]]
    for line in lines:
        pts = [px(x, y, S) for x, y in line]
        if len(pts) > 1:
            db.line(pts, fill=150, width=S)
    borders = np.asarray(bl.resize((W, H), Image.LANCZOS), dtype=np.float32) / 255

    # City lights from real populated places.
    lights = np.zeros((H, W), dtype=np.float32)
    rng = np.random.default_rng(1990)
    for lon, lat, pop in json.load(open("data/region-cities.json")):
        if not (LON_MIN < lon < LON_MAX and LAT_MIN < lat < LAT_MAX):
            continue
        x, y = px(lon, lat)
        r = 0.6 + (pop ** 0.42) / 55
        b = min(1.0, 0.12 + (pop / 3e5) ** 0.5)
        n = int(3 + min(40, pop ** 0.33))
        # scatter a few points per place so towns read as sprawl, not discs
        for _ in range(n):
            ox, oy = rng.normal(0, r * 0.55, 2)
            xi, yi = int(x + ox), int(y + oy)
            if 0 <= xi < W and 0 <= yi < H:
                lights[yi, xi] += b * (0.5 + rng.random())
    lights = np.asarray(Image.fromarray(np.clip(lights * 255, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7)), dtype=np.float32) / 255
    halo = np.asarray(Image.fromarray(np.clip(lights * 255, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(4)), dtype=np.float32) / 255
    lights = np.clip(lights * 1.6 + halo * 0.9, 0, 1) * np.clip(m * 1.2, 0, 1)

    lines_ch = np.clip(coast + borders * 0.5, 0, 1)
    img = np.stack([m, lights, lines_ch], -1)
    im = Image.fromarray((img * 255 + 0.5).astype(np.uint8))
    im.save(os.path.join(OUT_TEX, "map.webp"), "WEBP", quality=90, method=6)
    im.resize((W // 2, H // 2), Image.LANCZOS).save(os.path.join(OUT_TEX, "map-2k.webp"), "WEBP", quality=88, method=6)
    print("map.webp", W, H, os.path.getsize(os.path.join(OUT_TEX, "map.webp")) // 1024, "KB")
    with open(os.path.join(OUT_DATA, "map.json"), "w") as fh:
        json.dump({"lonMin": LON_MIN, "lonMax": LON_MAX, "latMin": LAT_MIN, "latMax": LAT_MAX}, fh)


if __name__ == "__main__":
    nyc()
    night_map()
