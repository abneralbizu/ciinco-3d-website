"""
Procedural texture generator for the CIIN Co cosmos site.

Every image in site/assets/textures is painted by this script: no stock photos,
no downloaded imagery. Earth uses real coastlines (Natural Earth via world-atlas)
and real population centres (GeoNames via all-the-cities) so Orlando and
New York light up where they really are. Everything else is noise and maths.

Run:  python3 tools/generate_textures.py         (from the project root)
Needs: numpy, pillow  (and data/land.geojson + data/cities.json from
       `node tools/export-geo.mjs`)
"""
import json
import math
import os
import sys
import time

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join("site", "assets", "textures")
os.makedirs(OUT, exist_ok=True)
RNG = np.random.default_rng(1990)  # the year CIIN Co was founded

# --------------------------------------------------------------------------
# Noise
# --------------------------------------------------------------------------
_PERM = RNG.permutation(256)
PERM = np.concatenate([_PERM, _PERM]).astype(np.int32)
VALS = RNG.uniform(-1.0, 1.0, 256).astype(np.float32)


def vnoise(p):
    """3D value noise in [-1, 1] for points p of shape (..., 3)."""
    pi = np.floor(p)
    f = (p - pi).astype(np.float32)
    pi = pi.astype(np.int64)
    x, y, z = (pi[..., 0] & 255), (pi[..., 1] & 255), (pi[..., 2] & 255)
    u = f * f * f * (f * (f * 6 - 15) + 10)

    def h(dx, dy, dz):
        return VALS[PERM[PERM[PERM[(x + dx) & 255] + ((y + dy) & 255)] + ((z + dz) & 255)] & 255]

    ux, uy, uz = u[..., 0], u[..., 1], u[..., 2]
    x00 = h(0, 0, 0) * (1 - ux) + h(1, 0, 0) * ux
    x10 = h(0, 1, 0) * (1 - ux) + h(1, 1, 0) * ux
    x01 = h(0, 0, 1) * (1 - ux) + h(1, 0, 1) * ux
    x11 = h(0, 1, 1) * (1 - ux) + h(1, 1, 1) * ux
    y0 = x00 * (1 - uy) + x10 * uy
    y1 = x01 * (1 - uy) + x11 * uy
    return y0 * (1 - uz) + y1 * uz


_ROT = np.array([[0.00, 0.80, 0.60], [-0.80, 0.36, -0.48], [-0.60, -0.48, 0.64]], dtype=np.float32)


def fbm(p, octaves=6, lac=2.03, gain=0.5, ridge=False):
    total = np.zeros(p.shape[:-1], dtype=np.float32)
    amp, norm = 1.0, 0.0
    q = p.astype(np.float32)
    for _ in range(octaves):
        n = vnoise(q)
        if ridge:
            n = 1.0 - np.abs(n)
            n = n * n
        total += amp * n
        norm += amp
        amp *= gain
        q = (q @ _ROT) * lac + 13.7
    return total / norm


def sphere_dirs(w, h):
    """Unit vectors for every pixel of an equirectangular map (lon -180..180)."""
    lon = (np.arange(w, dtype=np.float32) + 0.5) / w * 2 * np.pi - np.pi
    lat = np.pi / 2 - (np.arange(h, dtype=np.float32) + 0.5) / h * np.pi
    lon, lat = np.meshgrid(lon, lat)
    d = np.stack([np.cos(lat) * np.cos(lon), np.sin(lat), np.cos(lat) * np.sin(lon)], -1)
    return d.astype(np.float32), lat, lon


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def mix(a, b, t):
    """Linear blend of colours a, b (shape (...,3) or (3,)) by scalar field t."""
    t = np.asarray(t, dtype=np.float32)
    if t.ndim >= 1 and t.shape[-1] != 3:
        t = t[..., None]
    return a * (1 - t) + b * t


def hexrgb(s):
    s = s.lstrip("#")
    return np.array([int(s[i:i + 2], 16) / 255 for i in (0, 2, 4)], dtype=np.float32)


def ramp(x, stops):
    """Colour ramp: stops = [(pos, '#hex'), ...]."""
    x = np.clip(x, 0, 1)
    pos = np.array([s[0] for s in stops], dtype=np.float32)
    cols = np.stack([hexrgb(s[1]) for s in stops])
    out = np.empty(x.shape + (3,), dtype=np.float32)
    for c in range(3):
        out[..., c] = np.interp(x, pos, cols[:, c])
    return out


def save(arr, name, quality=88, mode=None):
    a = np.clip(arr, 0, 1)
    img = Image.fromarray((a * 255 + 0.5).astype(np.uint8), mode)
    path = os.path.join(OUT, name)
    if name.endswith(".webp"):
        img.save(path, "WEBP", quality=quality, method=6)
    elif name.endswith(".jpg"):
        img.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    else:
        img.save(path, optimize=True)
    print(f"  {name:28s} {img.size[0]}x{img.size[1]}  {os.path.getsize(path)/1024:7.0f} KB")
    return img


def downsized(name, src_name, size, quality=86):
    img = Image.open(os.path.join(OUT, src_name))
    img = img.resize(size, Image.LANCZOS)
    path = os.path.join(OUT, name)
    img.save(path, "WEBP", quality=quality, method=6)
    print(f"  {name:28s} {size[0]}x{size[1]}  {os.path.getsize(path)/1024:7.0f} KB")


# --------------------------------------------------------------------------
# Earth  ("Home port")
# --------------------------------------------------------------------------
def earth(W=4096):
    H = W // 2
    print("Earth")
    t0 = time.time()
    # Land mask from real coastlines.
    mask_img = Image.new("L", (W, H), 0)
    dr = ImageDraw.Draw(mask_img)
    geo = json.load(open("data/land.geojson"))

    def unwrap(ring):
        """Make longitudes continuous across the antimeridian; close polar rings via the pole."""
        out, off = [], 0.0
        for i, (lon, lat) in enumerate(ring):
            if i and abs(lon - ring[i - 1][0]) > 180:
                off -= 360 * math.copysign(1, lon - ring[i - 1][0])
            out.append((lon + off, lat))
        span = out[-1][0] - out[0][0]
        if abs(span) > 180:  # wraps the globe (Antarctica): close along the nearest pole
            pole = -90 if min(p[1] for p in out) < 0 else 90
            out += [(out[-1][0], pole), (out[0][0], pole)]
        return out

    def draw(ring, fill):
        r = unwrap(ring)
        for shift in (-360, 0, 360):
            pts = [((lon + shift + 180) / 360 * W, (90 - lat) / 180 * H) for lon, lat in r]
            dr.polygon(pts, fill=fill)

    for feat in geo["features"]:
        g = feat["geometry"]
        polys = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
        for poly in polys:
            draw(poly[0], 255)
            for hole in poly[1:]:
                draw(hole, 0)
    land = np.asarray(mask_img, dtype=np.float32) / 255.0
    # Soft coast distance for shallows.
    coast = np.asarray(mask_img.filter(ImageFilter.GaussianBlur(W / 512)), dtype=np.float32) / 255.0
    coast_wide = np.asarray(mask_img.filter(ImageFilter.GaussianBlur(W / 160)), dtype=np.float32) / 255.0

    # Noise at half resolution, then upsample (the coastline carries the fine detail).
    hw, hh = W // 2, H // 2
    d, lat, lon = sphere_dirs(hw, hh)
    n_terrain = fbm(d * 3.2 + 4.0, 7)
    n_ridge = fbm(d * 6.0 + 9.0, 5, ridge=True)
    n_moist = fbm(d * 2.1 + 21.0, 5)

    def up(a):
        im = Image.fromarray(((a * 0.5 + 0.5) * 65535).astype(np.uint16))
        im = im.resize((W, H), Image.BICUBIC)
        return (np.asarray(im, dtype=np.float32) / 65535) * 2 - 1

    n_terrain, n_ridge, n_moist = up(n_terrain), up(n_ridge * 2 - 1) * 0.5 + 0.5, up(n_moist)
    _, latF, _ = sphere_dirs(W, H)
    alat = np.abs(np.degrees(latF))

    # Biomes: desaturated, slightly cool so the planet sits in the site palette.
    desert = smoothstep(12, 22, alat) * (1 - smoothstep(33, 42, alat))
    moist = np.clip(n_moist * 0.9 + 0.5 - desert * 0.7, 0, 1)
    c_forest = hexrgb("#1f3a2c")
    c_grass = hexrgb("#4a5a3a")
    c_desert = hexrgb("#a08866")
    c_rock = hexrgb("#6d6458")
    c_tundra = hexrgb("#7b8078")
    base = mix(mix(c_desert, c_grass, smoothstep(0.25, 0.55, moist)), c_forest, smoothstep(0.55, 0.85, moist))
    base = mix(base, c_tundra, smoothstep(50, 62, alat))
    base = mix(base, c_rock, np.clip(n_ridge * 1.2 - 0.45, 0, 1) * 0.8)
    base *= (0.85 + 0.3 * n_terrain[..., None])
    ice = smoothstep(66, 74, alat + n_terrain * 6)
    base = mix(base, hexrgb("#dfe7ef"), ice)

    ocean = ramp(smoothstep(0.0, 0.9, coast_wide) * 0.6 + coast * 0.4,
                 [(0, "#04122a"), (0.35, "#072247"), (0.75, "#0d3a66"), (1, "#1b5a7e")])
    ocean = ocean * (0.92 + 0.1 * n_terrain[..., None])
    ocean = mix(ocean, hexrgb("#c9d8e6"), smoothstep(72, 80, alat + n_terrain * 4) * 0.85)  # sea ice

    day = mix(ocean, base, land)
    save(day, "earth-day.webp", 86)

    # Masks: R = water (specular), G = city lights, B = unused (kept black).
    water = (1 - land) * (1 - smoothstep(72, 80, alat + n_terrain * 4))

    lights = np.zeros((H, W), dtype=np.float32)
    cities = json.load(open("data/cities.json"))
    xs = np.array([(c[0] + 180) / 360 * W for c in cities])
    ys = np.array([(90 - c[1]) / 180 * H for c in cities])
    pops = np.array([c[2] for c in cities], dtype=np.float32)
    # Splat each city as a soft blob whose size and brightness follow population.
    order = np.argsort(pops)
    for i in order:
        x, y, p = xs[i], ys[i], pops[i]
        r = max(1.0, min(W / 300, (p ** 0.42) / 60 * (W / 4096)))
        x0, x1 = int(max(0, x - 3 * r)), int(min(W, x + 3 * r + 1))
        y0, y1 = int(max(0, y - 3 * r)), int(min(H, y + 3 * r + 1))
        if x1 <= x0 or y1 <= y0:
            continue
        gx, gy = np.meshgrid(np.arange(x0, x1) + 0.5, np.arange(y0, y1) + 0.5)
        blob = np.exp(-((gx - x) ** 2 + (gy - y) ** 2) / (2 * r * r))
        lights[y0:y1, x0:x1] += blob * min(1.0, 0.18 + (p / 2.5e6) ** 0.5)
    # Sprawl texture: break the blobs up so they read as street grids, not discs.
    grain = np.asarray(Image.fromarray(((RNG.random((H, W)) ** 3) * 255).astype(np.uint8)), dtype=np.float32) / 255
    lights = np.clip(lights, 0, 1.4)
    lights = np.clip(lights * (0.45 + 1.4 * grain) * (land > 0.3), 0, 1) ** 0.85

    clouds = np.zeros_like(water)
    masks = np.stack([water, lights, clouds], -1)
    save(masks, "earth-masks.webp", 92)

    # Clouds: own texture so they can drift independently of the ground.
    d2, lat2, _ = sphere_dirs(hw, hh)
    warp = np.stack([fbm(d2 * 2.0 + 1.3, 4), fbm(d2 * 2.0 + 7.1, 4), fbm(d2 * 2.0 + 3.7, 4)], -1)
    c = fbm(d2 * 3.0 + warp * 1.6 + 40.0, 7)
    alat2 = np.abs(np.degrees(lat2))
    belt = 0.55 + 0.25 * np.cos(np.radians(alat2) * 4.0)  # ITCZ / mid-latitude storm tracks
    cl = smoothstep(0.05, 0.55, c * 1.25 + belt * 0.35 - 0.12)
    cl = cl * (0.7 + 0.3 * fbm(d2 * 18.0, 3) * 0.5 + 0.15)
    cimg = Image.fromarray((np.clip(cl, 0, 1) * 255).astype(np.uint8), "L").resize((W // 2, H // 2), Image.BICUBIC)
    cimg.save(os.path.join(OUT, "earth-clouds.webp"), "WEBP", quality=82, method=6)
    print(f"  {'earth-clouds.webp':28s} {cimg.size[0]}x{cimg.size[1]}  {os.path.getsize(os.path.join(OUT,'earth-clouds.webp'))/1024:7.0f} KB")

    downsized("earth-day-2k.webp", "earth-day.webp", (2048, 1024))
    downsized("earth-masks-2k.webp", "earth-masks.webp", (2048, 1024), 92)
    print(f"  ({time.time()-t0:.0f}s)")


# --------------------------------------------------------------------------
# Gas giant  ("Commercial")
# --------------------------------------------------------------------------
def gas_giant(W=2048):
    H = W // 2
    print("Gas giant")
    d, lat, lon = sphere_dirs(W, H)
    warp = fbm(d * np.array([1.2, 5.0, 1.2], dtype=np.float32) * 1.6 + 2.0, 6)
    turb = fbm(d * np.array([3.0, 14.0, 3.0], dtype=np.float32) + warp[..., None] * 1.8, 6)
    y = np.sin(lat)  # -1..1
    bands = y * 7.5 + warp * 0.9 + turb * 0.35
    b = 0.5 + 0.5 * np.sin(bands * 2.6) * 0.65 + 0.35 * np.sin(bands * 6.3 + 1.0) * 0.5
    b = np.clip(b + turb * 0.18, 0, 1)
    col = ramp(b, [(0.0, "#3a2a22"), (0.22, "#7a5236"), (0.42, "#c69a64"),
                   (0.6, "#ead6ae"), (0.78, "#f6efe0"), (1.0, "#d9b98a")])
    # A cool indigo tint near the poles ties it to the site palette.
    pole = smoothstep(0.62, 0.95, np.abs(y))
    col = mix(col, col * hexrgb("#7f8fc0") * 1.1, pole * 0.85)
    # One great storm, south of the equator.
    sx, sy = math.radians(40), math.radians(-22)
    dlon = np.angle(np.exp(1j * (lon - sx)))
    e = (dlon / 0.24) ** 2 + ((lat - sy) / 0.085) ** 2
    swirl = np.exp(-e * 1.3)
    ring = np.exp(-((np.sqrt(e) - 1.0) ** 2) / 0.05)
    col = mix(col, hexrgb("#b4583a"), swirl * 0.85)
    col = mix(col, hexrgb("#f4e3c4"), ring * 0.55)
    save(col, "gas-giant.webp", 88)

    # Ring strip: RGBA, x = radius from inner to outer edge.
    rw = 2048
    r = np.linspace(0, 1, rw, dtype=np.float32)
    n = fbm(np.stack([r * 60, np.zeros_like(r), np.zeros_like(r) + 3.3], -1), 6) * 0.5 + 0.5
    n2 = fbm(np.stack([r * 340, np.zeros_like(r) + 9.1, np.zeros_like(r)], -1), 4) * 0.5 + 0.5
    dens = np.clip(n * 1.3 - 0.15, 0, 1) * (0.55 + 0.45 * n2)
    dens *= smoothstep(0.0, 0.06, r) * (1 - smoothstep(0.93, 1.0, r))
    dens *= 1 - 0.92 * np.exp(-((r - 0.62) ** 2) / 0.00045)  # Cassini-style gap
    dens *= 1 - 0.6 * np.exp(-((r - 0.84) ** 2) / 0.0001)
    rc = ramp(np.clip(r * 0.8 + n * 0.3, 0, 1), [(0, "#6f5a46"), (0.5, "#d8c3a0"), (1, "#f2e8d6")])
    rgba = np.concatenate([rc, dens[:, None]], -1)
    strip = np.repeat(rgba[None], 16, 0)
    save(strip, "ring.png", mode="RGBA")


# --------------------------------------------------------------------------
# Haven  ("Residential"): a calm ocean world with archipelagos
# --------------------------------------------------------------------------
def haven(W=2048):
    H = W // 2
    print("Haven")
    d, lat, lon = sphere_dirs(W, H)
    warp = np.stack([fbm(d * 1.7 + 5.0, 4), fbm(d * 1.7 + 11.0, 4), fbm(d * 1.7 + 17.0, 4)], -1)
    h = fbm(d * 2.6 + warp * 0.9 + 30.0, 8)
    alat = np.abs(np.degrees(lat))
    sea = 0.16
    landm = smoothstep(sea, sea + 0.015, h)
    depth = np.clip((sea - h) / 0.5, 0, 1)
    water = ramp(1 - depth, [(0, "#06233d"), (0.55, "#0c4c6e"), (0.86, "#1d8597"), (0.97, "#5fc4bf"), (1, "#a6e3d2")])
    elev = np.clip((h - sea) / 0.35, 0, 1)
    landc = ramp(elev, [(0, "#d9cfa8"), (0.08, "#7fa37a"), (0.35, "#3f6f55"), (0.7, "#5d6b62"), (1, "#e9eef0")])
    col = mix(water, landc, landm)
    col = mix(col, hexrgb("#eef5f8"), smoothstep(72, 82, alat + h * 10))
    save(col, "haven.webp", 88)
    # Clouds (alpha only)
    c = fbm(d * 3.6 + warp * 2.0 + 60.0, 7)
    cl = smoothstep(0.08, 0.5, c + 0.05)
    cimg = Image.fromarray((np.clip(cl, 0, 1) * 255).astype(np.uint8), "L").resize((1024, 512), Image.BICUBIC)
    cimg.save(os.path.join(OUT, "haven-clouds.webp"), "WEBP", quality=80, method=6)
    print(f"  {'haven-clouds.webp':28s} 1024x512")


# --------------------------------------------------------------------------
# Moon
# --------------------------------------------------------------------------
def moon(W=1024):
    H = W // 2
    print("Moon")
    d, lat, lon = sphere_dirs(W, H)
    base = fbm(d * 3.0 + 70.0, 7) * 0.5 + 0.5
    hgt = np.zeros((H, W), dtype=np.float32)
    rng = np.random.default_rng(7)
    for _ in range(420):
        cdir = rng.normal(size=3)
        cdir /= np.linalg.norm(cdir)
        rad = (rng.random() ** 5) * 0.22 + 0.008
        ang = np.arccos(np.clip(d @ cdir.astype(np.float32), -1, 1)) / rad
        bowl = np.where(ang < 1, ang ** 2 - 1, 0)
        rim = np.exp(-((ang - 1.0) ** 2) / 0.02) * 0.35
        hgt += (bowl * 0.35 + rim * 0.8) * rad * 2.2
    shade = 0.5 + np.clip(np.gradient(hgt, axis=1) * 30 - np.gradient(hgt, axis=0) * 30, -0.5, 0.5)
    v = np.clip(base * 0.55 + 0.25 + (shade - 0.5) * 0.5 + hgt * 0.4, 0, 1)
    col = ramp(v, [(0, "#2b2c33"), (0.5, "#7c7b80"), (1, "#d6d3cf")])
    save(col, "moon.webp", 86)


# --------------------------------------------------------------------------
# Deep-space panorama (equirectangular skybox)
# --------------------------------------------------------------------------
def skybox(W=4096):
    """Deep-space panorama. Dim on purpose: the planets and live stars carry the light."""
    H = W // 2
    print("Skybox")
    t0 = time.time()
    hw, hh = W // 2, H // 2
    d, lat, lon = sphere_dirs(hw, hh)
    # Galactic plane: a tilted great circle that arcs across the journey's view.
    gn = np.array([0.32, 0.88, 0.36], dtype=np.float32)
    gn /= np.linalg.norm(gn)
    gl = d @ gn
    warp = np.stack([fbm(d * 1.6 + 1.0, 4), fbm(d * 1.6 + 5.0, 4), fbm(d * 1.6 + 9.0, 4)], -1)
    wob = fbm(d * 2.4 + 50.0, 4) * 0.08
    band = np.exp(-((gl + wob) / 0.2) ** 2)
    halo = np.exp(-((gl + wob) / 0.55) ** 2)
    core_dir = np.array([-0.35, 0.05, -0.94], dtype=np.float32)
    core_dir /= np.linalg.norm(core_dir)
    cdot = d @ core_dir
    core = np.exp(-(1 - cdot) / 0.09) * band
    glow = fbm(d * 2.8 + warp * 1.2, 7) * 0.5 + 0.5
    star_cloud = fbm(d * 9.0 + warp * 2.0 + 3.0, 6) * 0.5 + 0.5
    dust = fbm(d * 3.6 + warp * 1.5 + 30.0, 7) * 0.5 + 0.5
    dust_fine = fbm(d * 11.0 + warp * 2.5 + 31.0, 5) * 0.5 + 0.5
    lanes = smoothstep(0.5, 0.72, dust * 0.75 + dust_fine * 0.25) * np.exp(-((gl + wob * 1.5) / 0.09) ** 2)

    col = np.zeros((hh, hw, 3), dtype=np.float32)
    # Base: faint indigo haze so black never looks flat.
    col += hexrgb("#070a1c") * (0.6 + 0.4 * halo[..., None])
    mw = band * (0.25 + 0.9 * glow ** 1.6) * (0.6 + 0.6 * star_cloud ** 2)
    mwc = ramp(np.clip(glow * 0.6 + core * 1.4, 0, 1),
               [(0, "#1c2452"), (0.35, "#4a4f8f"), (0.65, "#a59bc4"), (0.85, "#ecd5b4"), (1, "#fff1dc")])
    col += (mw * 0.42 + core * 0.9)[..., None] * mwc
    col += halo[..., None] * hexrgb("#151b3d") * 0.35
    col *= (1 - lanes * 0.85)[..., None]
    col += lanes[..., None] * hexrgb("#2a140c") * 0.05  # warm rim in the dust

    # Emission nebulae, placed where the camera looks during the journey.
    nebs = [((-0.30, 0.10, -1.0), ["#2a1a7a", "#6a3cf0", "#e05a9a"], 0.55, 1.15),
            ((0.95, -0.10, -0.40), ["#06343f", "#109cb0", "#8ff0e0"], 0.45, 0.95),
            ((-0.95, 0.30, 0.20), ["#2a0f3a", "#a03c88", "#ffb0c8"], 0.45, 0.8),
            ((0.10, -0.85, -0.50), ["#2a1606", "#c47a2a", "#ffe0a0"], 0.40, 0.6),
            ((0.25, 0.55, 0.80), ["#0a1a4a", "#2e5ed0", "#a8c8ff"], 0.55, 0.75),
            ((-0.6, -0.3, -0.75), ["#140b3a", "#3b2aa8", "#9a8cff"], 0.35, 0.6)]
    for i, (cdir, hexes, size, strength) in enumerate(nebs):
        cdir = np.array(cdir, dtype=np.float32)
        cdir /= np.linalg.norm(cdir)
        dd = (1 - d @ cdir) / size
        w2 = np.stack([fbm(d * 2.2 + i * 3.1, 5), fbm(d * 2.2 + i * 7.3, 5), fbm(d * 2.2 + i * 1.7, 5)], -1)
        n = fbm(d * 2.0 + w2 * 1.8 + i * 17.0, 8) * 0.5 + 0.5
        fil = fbm(d * 6.0 + w2 * 2.4 + i * 5.0, 6, ridge=True)  # glowing filaments
        fine = fbm(d * 14.0 + w2 * 3.0 + i * 2.0, 4) * 0.5 + 0.5
        env = np.exp(-dd * 2.2)
        m = env * smoothstep(0.35, 0.85, n)
        f = env * fil ** 3 * smoothstep(0.3, 0.7, n)
        hole = smoothstep(0.56, 0.74, fbm(d * 4.5 + w2 + i * 9.0, 6) * 0.5 + 0.5)
        dens = (m * (0.5 + 0.6 * fine) + f * 0.9) * (1 - hole * 0.8)
        c = ramp(np.clip(dens * 1.4, 0, 1), [(0, hexes[0]), (0.55, hexes[1]), (1, hexes[2])])
        col += dens[..., None] * c * strength
    col = np.clip(col, 0, None)
    col = col / (1 + col * 0.9)  # soft tone map
    # Upsample in float, then dither, so the dark gradients don't band.
    up = [np.asarray(Image.fromarray(col[..., c].astype(np.float32), "F").resize((W, H), Image.BICUBIC)) for c in range(3)]
    arr = np.stack(up, -1).clip(0, 1)
    arr = arr + (RNG.random((H, W, 1)).astype(np.float32) - 0.5) * (1.6 / 255)
    # Baked faint stars, denser along the Milky Way (the bright ones are live particles).
    n_stars = 60000
    v = RNG.normal(size=(n_stars * 2, 3)).astype(np.float32)
    v /= np.linalg.norm(v, axis=1, keepdims=True)
    keep = RNG.random(n_stars * 2) < (0.25 + 0.75 * np.exp(-((v @ gn) / 0.25) ** 2))
    v = v[keep][:n_stars]
    slat = np.arcsin(np.clip(v[:, 1], -1, 1))
    slon = np.arctan2(v[:, 2], v[:, 0])
    sx = ((slon + np.pi) / (2 * np.pi) * W).astype(int) % W
    sy = ((np.pi / 2 - slat) / np.pi * H).astype(int).clip(0, H - 1)
    sb = RNG.random(len(v)) ** 5 * 0.85 + 0.06
    tint = ramp(RNG.random(len(v)), [(0, "#9fb6ff"), (0.55, "#ffffff"), (1, "#ffd6a0")])
    for k in range(len(v)):
        y, x = sy[k], sx[k]
        arr[y, x] = np.maximum(arr[y, x], tint[k] * sb[k])
        if sb[k] > 0.45:  # a touch of bloom on the brighter ones
            for dy, dx in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                yy, xx = min(H - 1, max(0, y + dy)), (x + dx) % W
                arr[yy, xx] = np.maximum(arr[yy, xx], tint[k] * sb[k] * 0.35)
    save(arr, "skybox.webp", 90)
    downsized("skybox-2k.webp", "skybox.webp", (2048, 1024), 84)
    print(f"  ({time.time()-t0:.0f}s)")


# --------------------------------------------------------------------------
# Sprites
# --------------------------------------------------------------------------
def sprites():
    print("Sprites")
    s = 256
    y, x = np.mgrid[0:s, 0:s].astype(np.float32)
    r = np.hypot(x - s / 2 + 0.5, y - s / 2 + 0.5) / (s / 2)
    glow = np.exp(-r * r * 9) + 0.25 * np.exp(-r * 3.2)
    glow *= 1 - smoothstep(0.85, 1.0, r)
    save(np.repeat(glow[..., None], 3, -1), "glow.png", mode="RGB")
    # Sun flare: core + soft rays.
    ang = np.arctan2(y - s / 2, x - s / 2)
    rays = (0.5 + 0.5 * np.cos(ang * 6)) ** 18 * np.exp(-r * 2.4) * 0.5
    rays += (0.5 + 0.5 * np.cos(ang * 2)) ** 60 * np.exp(-r * 1.2) * 0.7
    core = np.exp(-r * r * 60) + 0.5 * np.exp(-r * 6)
    sun = (core + rays) * (1 - smoothstep(0.9, 1.0, r))
    col = sun[..., None] * hexrgb("#fff1d8")
    save(col, "sun.png", mode="RGB")
    # Lens-flare ghost: soft hexagon ring.
    hexd = np.maximum(np.abs(x - s / 2) * 0.866 + np.abs(y - s / 2) * 0.5, np.abs(y - s / 2)) / (s / 2)
    ghost = smoothstep(1.0, 0.82, hexd) * (0.35 + 0.65 * smoothstep(0.4, 0.95, hexd))
    save(np.repeat(ghost[..., None], 3, -1) * 0.8, "ghost.png", mode="RGB")


if __name__ == "__main__":
    which = sys.argv[1:] or ["earth", "gas", "haven", "moon", "sky", "sprites"]
    if "sprites" in which: sprites()
    if "gas" in which: gas_giant()
    if "haven" in which: haven()
    if "moon" in which: moon()
    if "earth" in which: earth()
    if "sky" in which: skybox()
