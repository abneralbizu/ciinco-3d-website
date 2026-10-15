// GLSL for every surface in the two cities. Colours are linear HDR; tone mapping
// and sRGB conversion happen once, in the output pass.

// ---------------------------------------------------------------------------
// Shared: dusk haze. Distance fog tinted warm toward the setting sun.
// ---------------------------------------------------------------------------
const FOG = /* glsl */ `
  uniform vec3 uFogCool;
  uniform vec3 uFogWarm;
  uniform vec3 uSunDir;
  uniform float uFogDensity;
  uniform float uDetail;   // 1 near the ground, fades to 0 high up so the night map takes over
  vec3 hazeColor(vec3 dir) {
    vec2 a = normalize(dir.xz + 1e-5);
    vec2 b = normalize(uSunDir.xz + 1e-5);
    float w = pow(max(dot(a, b), 0.0), 5.0) * smoothstep(0.35, -0.05, dir.y) * 0.7;
    return mix(uFogCool, uFogWarm, w);
  }
  vec3 applyFog(vec3 col, vec3 wp) {
    vec3 d = wp - cameraPosition;
    float dist = length(d);
    float f = 1.0 - exp(-pow(dist * uFogDensity, 1.5));
    return mix(col, hazeColor(d / dist), clamp(f, 0.0, 1.0));
  }
`;
export const fogUniforms = (u) => ({ uFogCool: u.cool, uFogWarm: u.warm, uSunDir: u.sun, uFogDensity: u.density, uDetail: u.detail });

const HASH = /* glsl */ `
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`;

const WORLD_VERT = /* glsl */ `
  varying vec3 vP;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

// ---------------------------------------------------------------------------
// Sky dome: blue hour gradient, sunset glow on the western horizon, stars.
// ---------------------------------------------------------------------------
export const sky = {
  vertexShader: /* glsl */ `
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
      gl_Position = p.xyww;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uSunDir;
    uniform vec3 uZenith;
    uniform vec3 uHorizon;
    uniform vec3 uGlow;
    uniform float uTime;
    varying vec3 vDir;
    ${HASH}
    void main() {
      vec3 d = normalize(vDir);
      float h = d.y;
      vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
      vec2 a = normalize(d.xz + 1e-5);
      vec2 b = normalize(uSunDir.xz + 1e-5);
      float facing = max(dot(a, b), 0.0);
      float band = exp(-max(h, 0.0) * 9.0) * smoothstep(-0.25, 0.02, h);
      col += uGlow * band * (0.06 + pow(facing, 6.0) * 0.6);
      // below the horizon: deep haze
      col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.2, h));
      // stars, fading in toward the zenith
      vec2 sp = vec2(atan(d.z, d.x) * 180.0, h * 260.0);
      vec2 cell = floor(sp);
      float r = hash12(cell);
      vec2 f = fract(sp) - vec2(hash12(cell + 7.1), hash12(cell + 3.7));
      float star = step(0.985, r) * smoothstep(0.08, 0.0, length(f)) * smoothstep(0.12, 0.5, h);
      star *= 0.6 + 0.4 * sin(uTime * (1.0 + r * 3.0) + r * 60.0);
      col += vec3(0.85, 0.9, 1.0) * star * 1.4;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// East Coast night map. Texture channels: R land, G city lights, B coast + borders.
// ---------------------------------------------------------------------------
export const map = {
  vertexShader: WORLD_VERT,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform float uTime;
    uniform float uLights;
    uniform vec4 uBounds; // lonMin, lonMax, latMin, latMax (for the graticule)
    ${FOG}
    ${HASH}
    varying vec3 vP;
    varying vec2 vUv;
    void main() {
      vec3 t = texture2D(uMap, vUv).rgb;
      float land = t.r;
      vec3 water = vec3(0.006, 0.010, 0.022);
      vec3 ground = vec3(0.020, 0.022, 0.034) * (0.85 + 0.3 * fbm(vUv * 60.0));
      vec3 col = mix(water, ground, land);
      col += vec3(0.20, 0.32, 0.62) * t.b * 0.55;
      float tw = 0.85 + 0.15 * sin(uTime * 2.0 + hash12(floor(vUv * 900.0)) * 40.0);
      col += vec3(1.0, 0.72, 0.42) * pow(t.g, 1.4) * 2.4 * tw * uLights;
      // graticule every 2 degrees
      float lon = mix(uBounds.x, uBounds.y, vUv.x);
      float g = smoothstep(0.012, 0.0, abs(fract(lon / 2.0 + 0.5) - 0.5)) ;
      col += vec3(0.25, 0.35, 0.7) * g * 0.05;
      // soften the edges of the map into the haze
      float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x) * smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
      col *= edge;
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// City ground: dark land with street lights. Mode 1 draws Manhattan's real grid.
// ---------------------------------------------------------------------------
export const ground = {
  vertexShader: WORLD_VERT,
  fragmentShader: /* glsl */ `
    uniform float uMode;      // 0 generic streets, 1 Manhattan grid, 2 park
    uniform mat2 uGridInv;    // scene xz -> (avenue, street) for Manhattan
    uniform vec2 uGridOrigin;
    uniform float uUnitsPerM;
    uniform vec3 uStreetCol;
    uniform float uDensity;
    uniform float uTime;
    uniform vec4 uAlignA;   // x, z (metres), radius (m), 0: a district with a north-south street grid
    uniform vec2 uAlignAS;  // block size (m)
    uniform vec4 uAlignB;
    uniform vec2 uAlignBS;
    uniform vec2 uAlignBO;  // grid origin of district B (metres)
    uniform vec3 uHoods[8]; // neighbourhoods that draw their own streets (x, z, radius in metres)
    ${FOG}
    ${HASH}
    varying vec3 vP;
    // A road of half-width w (in units of x's period) with street lamps every lampM metres along it.
    // Far away, the lamps blend into an even glow so nothing shimmers.
    float road(float across, float along, float w) {
      float d = abs(fract(across + 0.5) - 0.5);
      float fw = fwidth(across);
      float onRoad = smoothstep(w + fw, max(w - fw, 0.0), d);
      float lampF = fract(along + 0.5) - 0.5;
      float lamp = smoothstep(0.22, 0.0, abs(lampF)) * smoothstep(w * 1.4 + fw, 0.0, d);
      float blur = clamp(fwidth(along) * 1.5 - 0.3, 0.0, 1.0);
      return onRoad * 0.10 + mix(lamp, onRoad * 0.32, blur);
    }
    void main() {
      vec2 p = vP.xz;
      float m = 1.0 / uUnitsPerM; // metres per unit
      vec3 col = vec3(0.012, 0.013, 0.020);
      float glow = 0.0;
      if (uMode > 1.5) {
        col = vec3(0.006, 0.013, 0.009) * (0.8 + 0.4 * fbm(p * m * 0.01));
        vec2 q = p * m / 60.0;
        float lamp = step(0.93, hash12(floor(q))) * smoothstep(0.2, 0.0, length(fract(q) - 0.5));
        glow += lamp * 0.7;
      } else if (uMode > 0.5) {
        vec2 g = uGridInv * (p - uGridOrigin);
        float onGrid = smoothstep(0.0, 2.0, g.y);
        float avc = g.x >= 0.0 ? g.x : g.x / 0.47;
        // avenues run along the street axis: lamps every 40 m (half a street block)
        float av = road(avc, g.y * 2.0, g.x >= 0.0 ? 0.045 : 0.09);
        float st = road(g.y, avc * (g.x >= 0.0 ? 7.0 : 3.3), 0.1);
        float grid = max(av * 1.2, st);
        vec2 r = p * m / 90.0;
        float ang = hash12(floor(p * m / 700.0)) * 1.2;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 rr = rot * r;
        float old = max(road(rr.x, rr.y * 2.5, 0.07), road(rr.y * 0.6, rr.x * 3.0, 0.05));
        glow += mix(old, grid, onGrid);
      } else {
        vec2 q = p * m;
        vec2 cell = floor(q / 900.0);
        float ang = (hash12(cell) - 0.5) * 1.4;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 rq = rot * q;
        float d = smoothstep(0.25, 0.7, fbm(q / 2500.0)) * uDensity;
        float hood = 0.0;
        for (int i = 0; i < 8; i++) hood = max(hood, smoothstep(uHoods[i].z, uHoods[i].z * 0.85, length(q - uHoods[i].xy)));
        float minor = max(road(rq.x / 110.0, rq.y / 36.0, 0.05), road(rq.y / 160.0, rq.x / 36.0, 0.035)) * 0.45;
        float major = max(road(rq.x / 880.0, rq.y / 45.0, 0.009), road(rq.y / 960.0, rq.x / 45.0, 0.009));
        float gen = minor * d * (1.0 - hood) + major * (0.45 + 0.4 * d) * (1.0 - hood * 0.7);
        // aligned districts (downtown Orlando, the parcel map)
        vec2 a = (q - uAlignA.xy) / uAlignAS;
        float inA = smoothstep(uAlignA.z, uAlignA.z * 0.9, length(q - uAlignA.xy));
        float alA = max(road(a.x, a.y * uAlignAS.y / 30.0, 0.05), road(a.y, a.x * uAlignAS.x / 30.0, 0.035));
        vec2 b = (q - uAlignBO) / uAlignBS;
        float inB = smoothstep(uAlignB.z, uAlignB.z * 0.9, max(abs(q.x - uAlignB.x), abs(q.y - uAlignB.y)));
        float alB = max(road(b.x, b.y * uAlignBS.y / 30.0, 0.04), road(b.y, b.x * uAlignBS.x / 30.0, 0.03));
        glow += mix(mix(gen, alA * 0.8, inA), alB * 0.8, inB);
      }
      col += uStreetCol * glow;
      gl_FragColor = vec4(applyFog(col, vP), uDetail);
    }
  `,
};

// ---------------------------------------------------------------------------
// Water: rivers, harbour, lakes. Sky reflection, sunset glint, rippling city lights.
// ---------------------------------------------------------------------------
export const water = {
  vertexShader: WORLD_VERT,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform vec3 uZenith;
    ${FOG}
    ${HASH}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / uUnitsPerM;
      vec2 n2 = vec2(fbm(q / 60.0 + uTime * 0.05) - 0.5, fbm(q / 60.0 + 9.0 - uTime * 0.04) - 0.5);
      vec3 N = normalize(vec3(n2.x * 0.35, 1.0, n2.y * 0.35));
      vec3 V = normalize(cameraPosition - vP);
      vec3 R = reflect(-V, N);
      float fres = 0.04 + 0.96 * pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 5.0);
      vec3 skyc = mix(hazeColor(R), uZenith, smoothstep(0.0, 0.6, R.y));
      vec3 col = vec3(0.004, 0.008, 0.016) + skyc * fres * 0.9;
      float glint = pow(max(dot(R, normalize(uSunDir)), 0.0), 120.0);
      col += vec3(1.0, 0.6, 0.35) * glint * 2.0;
      // shimmering reflections of lights along the shore
      float sp = step(0.992, hash12(floor(q / 6.0 + vec2(0.0, floor(uTime * 2.0))))) ;
      col += vec3(1.0, 0.8, 0.55) * sp * 0.25 * fres;
      gl_FragColor = vec4(applyFog(col, vP), uDetail);
    }
  `,
};

// ---------------------------------------------------------------------------
// Buildings (instanced boxes): dusk-lit facades with window grids that soften
// to an average glow in the distance, aviation lights, highlight for hot lots.
// ---------------------------------------------------------------------------
export const buildings = {
  vertexShader: /* glsl */ `
    attribute float aSeed;
    attribute float aId;
    attribute float aStyle;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vId;
    varying float vStyle;
    void main() {
      vLocal = position;
      vSeed = aSeed; vId = aId; vStyle = aStyle;
      vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uHot;
    uniform float uHotOn;
    uniform vec3 uZenith;
    ${FOG}
    ${HASH}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vId;
    varying float vStyle;
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSunDir);
      float hM = vScale.y / uUnitsPerM;                       // building height in metres
      float yM = (vLocal.y + 0.5) * hM;                       // height of this fragment
      float side = 1.0 - abs(N.y);
      // facade: dark stone/glass, cooler and brighter toward the top (sky reflection)
      vec3 body = mix(vec3(0.014, 0.017, 0.026), vec3(0.024, 0.028, 0.040), fract(vSeed * 7.3));
      vec3 col = body * (0.5 + 0.5 * smoothstep(0.0, 1.0, vLocal.y + 0.5));
      float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 3.0);
      col += uZenith * 0.8 * fres * side * (0.4 + 0.6 * step(0.5, vStyle));
      col += vec3(1.0, 0.55, 0.3) * max(dot(N, L), 0.0) * 0.07 * side;   // last light from the west
      // windows
      float wM = vStyle > 0.5 ? 2.2 : 3.2;                    // glass towers have tighter mullions
      float u = (abs(N.x) > 0.5 ? vLocal.z * vScale.z : vLocal.x * vScale.x) / uUnitsPerM / wM;
      float v = yM / 3.6;
      vec2 cell = floor(vec2(u, v));
      vec2 f = fract(vec2(u, v));
      float pane = smoothstep(0.08, 0.16, f.x) * smoothstep(0.92, 0.84, f.x) * smoothstep(0.12, 0.22, f.y) * smoothstep(0.88, 0.8, f.y);
      float floorLit = step(0.35, hash12(vec2(cell.y, vSeed * 91.0)));
      float lit = step(0.58, hash12(cell + vSeed * 37.0)) * floorLit;
      vec3 warm = mix(vec3(1.0, 0.74, 0.50), vec3(0.72, 0.84, 1.0), step(0.62, hash12(cell.yx + vSeed * 11.0)));
      float blur = clamp(max(fwidth(u), fwidth(v)) * 1.6 - 0.2, 0.0, 1.0);   // distance: average the grid
      float win = mix(pane * lit, 0.06, blur);
      float ground = smoothstep(14.0, 4.0, yM);              // shopfront band at street level
      float bright = 0.75 + 1.1 * step(0.86, hash12(cell * 1.7 + vSeed * 5.0));
      col += warm * (win * bright + ground * 0.25 * step(0.4, fract(vSeed * 13.1))) * side;
      // roof and crown
      float roof = step(0.5, N.y);
      col = mix(col, vec3(0.014, 0.015, 0.02) + vec3(0.6, 0.7, 1.0) * 0.02, roof);
      float crown = smoothstep(0.985, 1.0, vLocal.y + 0.5) * side * step(120.0, hM);
      col += vec3(0.85, 0.9, 1.0) * crown * 1.2;
      // aviation lights on tall buildings
      float tall = step(150.0, hM);
      float corner = step(0.42, abs(vLocal.x)) * step(0.42, abs(vLocal.z)) * step(0.47, vLocal.y);
      col += vec3(1.0, 0.08, 0.04) * corner * tall * 6.0 * step(0.5, fract(uTime * 0.5 + vSeed));
      // highlight (property-type hover)
      float hot = (1.0 - step(0.5, abs(vId - uHot))) * uHotOn;
      if (vId > -0.5) {
        col += vec3(1.0, 0.82, 0.55) * (0.12 + fres * 1.6) * hot;
        col += vec3(1.0, 0.82, 0.55) * win * 1.5 * hot;
      }
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Homes: instanced houses (body + gable roof in one geometry, roof marked by uv.y > 1).
// ---------------------------------------------------------------------------
export const houses = {
  vertexShader: /* glsl */ `
    attribute float aSeed;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vRoof;
    void main() {
      vLocal = position;
      vSeed = aSeed;
      vRoof = uv.y;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform vec3 uZenith;
    ${FOG}
    ${HASH}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vRoof;
    void main() {
      vec3 N = normalize(vN);
      vec3 L = normalize(uSunDir);
      vec3 wall = mix(vec3(0.05, 0.048, 0.044), vec3(0.036, 0.04, 0.05), fract(vSeed * 5.1));
      vec3 roof = mix(vec3(0.028, 0.024, 0.024), vec3(0.03, 0.034, 0.042), fract(vSeed * 3.3));
      vec3 col = vRoof > 1.5 ? roof : wall;
      col *= 0.6 + 0.4 * max(N.y, 0.0);
      col += uZenith * 0.5 * max(N.y, 0.0);
      col += vec3(1.0, 0.55, 0.3) * max(dot(N, L), 0.0) * 0.08;
      if (vRoof < 1.5) {
        // two or three warm windows per side, some rooms dark
        float u = (abs(N.x) > 0.5 ? vLocal.z : vLocal.x) * 3.0 + 1.5;
        float w = smoothstep(0.15, 0.25, fract(u)) * smoothstep(0.85, 0.75, fract(u)) * smoothstep(0.25, 0.35, vLocal.y + 0.5) * smoothstep(0.75, 0.65, vLocal.y + 0.5);
        float lit = step(0.4, hash12(vec2(floor(u), vSeed * 77.0 + N.x * 3.0 + N.z * 5.0)));
        col += vec3(1.0, 0.68, 0.38) * w * lit * 1.6;
      }
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// Trees: instanced low-poly crowns.
export const trees = {
  vertexShader: /* glsl */ `
    attribute float aSeed;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vSeed = aSeed;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uZenith;
    ${FOG}
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vec3 N = normalize(vN);
      vec3 col = mix(vec3(0.010, 0.022, 0.014), vec3(0.016, 0.028, 0.02), fract(vSeed * 9.1));
      col += uZenith * 0.35 * max(N.y, 0.0);
      col += vec3(1.0, 0.55, 0.3) * max(dot(N, normalize(uSunDir)), 0.0) * 0.05;
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// Backyard pools: small glowing rectangles (instanced planes).
export const pools = {
  vertexShader: /* glsl */ `
    attribute float aSeed;
    varying vec2 vUv;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vUv = uv; vSeed = aSeed;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    ${FOG}
    varying vec2 vUv;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vec2 c = abs(vUv - 0.5) * 2.0;
      float edge = smoothstep(0.75, 1.0, max(c.x, c.y));
      float ripple = 0.85 + 0.15 * sin(uTime * 2.0 + (vUv.x + vUv.y) * 12.0 + vSeed * 30.0);
      vec3 col = mix(vec3(0.15, 0.85, 1.0) * 1.1 * ripple, vec3(0.55, 0.8, 0.85) * 0.3, edge);
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Traffic: points travelling along road segments (head and tail lights).
// ---------------------------------------------------------------------------
export const traffic = {
  vertexShader: /* glsl */ `
    attribute vec3 aEnd;
    attribute float aPhase;
    attribute float aSpeed;
    attribute vec3 aColor;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uSize;
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float t = fract(aPhase + uTime * aSpeed);
      vec3 p = mix(position, aEnd, t);
      vec4 wp = modelMatrix * vec4(p, 1.0);
      vP = wp.xyz;
      vec4 mv = viewMatrix * wp;
      gl_PointSize = clamp(uSize * uPixelRatio / -mv.z, 1.0, 6.0);
      vColor = aColor;
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    ${FOG}
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 4.0);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(vColor * a * fade * uDetail, 1.0);
    }
  `,
};

// Glowing ribbons: highways, bridge decks, the flight arc, light beams.
export const ribbon = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    uniform float uDash;      // 0 solid, >0 travelling pulses (count along the length)
    uniform float uDraw;      // 0..1 how much of the ribbon is drawn (u = along)
    uniform float uFogOn;
    ${FOG}
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
      float core = pow(clamp(across, 0.0, 1.0), 3.0);
      float a = core;
      if (uDash > 0.0) {
        float d = fract(vUv.x * uDash - uTime * 0.35);
        a *= 0.35 + 1.4 * smoothstep(0.75, 1.0, d);
      }
      a *= step(vUv.x, uDraw);
      vec3 col = uColor * a * uIntensity;
      if (uFogOn > 0.5) {
        vec3 d = vP - cameraPosition;
        col *= exp(-pow(length(d) * uFogDensity, 1.5)) * uDetail;
      }
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// Neighbourhood streets: uv.x counts lamps along the street, uv.y runs across it.
export const street = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vP;
    void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    ${FOG}
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
      float lampF = abs(fract(vUv.x) - 0.5);
      float lamp = smoothstep(0.12, 0.0, lampF) * smoothstep(0.3, 1.0, across);
      float blur = clamp(fwidth(vUv.x) * 1.5 - 0.3, 0.0, 1.0);
      float g = across * 0.12 + mix(lamp, 0.2 * across, blur);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(uColor * g * fade * uDetail, 1.0);
    }
  `,
};

// Vertical light column marking an office.
export const beam = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vP;
    varying vec3 vN;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vP;
    varying vec3 vN;
    void main() {
      vec3 V = normalize(cameraPosition - vP);
      float edge = pow(abs(dot(normalize(vN), V)), 2.0);
      float fade = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 2.2);
      float pulse = 0.8 + 0.2 * sin(uTime * 2.0 - vUv.y * 20.0);
      gl_FragColor = vec4(uColor * edge * fade * pulse * uIntensity, 1.0);
    }
  `,
};

// Pulsing ring on the ground at an office.
export const pinRing = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uOn;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float r = length(vUv - 0.5) * 2.0;
      float t = fract(uTime * 0.4);
      float ring = smoothstep(0.035, 0.0, abs(r - t)) * (1.0 - t);
      float ring2 = smoothstep(0.03, 0.0, abs(r - fract(t + 0.5))) * (1.0 - fract(t + 0.5));
      float dotc = exp(-r * r * 200.0) * 3.0;
      gl_FragColor = vec4(uColor * (ring * 1.4 + ring2 * 1.4 + dotc) * uOn, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Advisory tower: 15 glass floors stacked with gaps. Each floor is one service.
// ---------------------------------------------------------------------------
export const floors = {
  vertexShader: /* glsl */ `
    attribute float aFloor;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vFloor;
    void main() {
      vLocal = position;
      vFloor = aFloor;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uHot;
    uniform float uDraw;
    uniform float uTime;
    uniform float uCount;
    uniform vec3 uZenith;
    ${FOG}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vFloor;
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.0);
      float shown = smoothstep(vFloor / uCount - 0.02, vFloor / uCount + 0.06, uDraw);
      float hot = 1.0 - step(0.5, abs(vFloor - uHot));
      // glowing slab edges
      vec3 a = abs(vLocal) * 2.0;
      float edgeX = smoothstep(0.9, 1.0, max(a.x, a.y)) + smoothstep(0.9, 1.0, max(a.z, a.y));
      float edges = smoothstep(0.92, 1.0, max(max(a.x, a.z), 0.0)) * smoothstep(0.7, 1.0, a.y);
      vec3 glass = vec3(0.03, 0.05, 0.09) + uZenith * fres * 1.6;
      vec3 lineCol = mix(vec3(0.55, 0.72, 1.0), vec3(1.0, 0.82, 0.55), hot);
      vec3 col = glass * (0.6 + 0.4 * shown);
      col += lineCol * (edges * 1.6 + fres * 0.3) * shown * (1.0 + hot * 1.8);
      col += vec3(1.0, 0.82, 0.55) * hot * 0.25;
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Parcel map overlay (Listings): lot lines like a plat map, lit near the cursor.
// ---------------------------------------------------------------------------
export const parcels = {
  vertexShader: WORLD_VERT,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uOn;
    uniform vec3 uPointer;
    uniform float uPointerOn;
    ${FOG}
    ${HASH}
    varying vec3 vP;
    varying vec2 vUv;
    float lineAA(float x, float w) { float d = abs(fract(x + 0.5) - 0.5); float fw = fwidth(x); return smoothstep(w + fw, w, d); }
    void main() {
      vec2 q = vP.xz / uUnitsPerM;                  // metres
      vec2 block = floor(q / vec2(130.0, 210.0));
      vec2 inBlock = fract(q / vec2(130.0, 210.0));
      float street = max(lineAA(q.x / 130.0, 0.07), lineAA(q.y / 210.0, 0.045));
      // lots: two rows per block, 6-9 lots per row
      float n = 6.0 + floor(hash12(block) * 4.0);
      vec2 lotId = vec2(floor(inBlock.x * 2.0), floor(inBlock.y * n));
      float lot = max(lineAA(inBlock.x * 2.0, 0.025), lineAA(inBlock.y * n, 0.03 * n / 8.0));
      float id = hash12(block * 13.0 + lotId);
      float pulse = step(0.93, id) * (0.6 + 0.4 * sin(uTime * 2.0 + id * 30.0));
      float near = exp(-pow(length(q - uPointer.xz / uUnitsPerM) / 140.0, 2.0)) * uPointerOn;
      vec3 lineCol = vec3(0.45, 0.62, 1.0);
      vec3 col = lineCol * lot * (0.25 + near * 1.6) + vec3(1.0, 0.8, 0.5) * pulse * 0.22 * (1.0 - street);
      col += vec3(1.0, 0.8, 0.5) * near * 0.12 * (1.0 - street);
      // fade out at the edge of the overlay
      vec2 e = abs(vUv - 0.5) * 2.0;
      float edge = smoothstep(1.0, 0.6, max(e.x, e.y));
      gl_FragColor = vec4(col * uOn * edge, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Cloud deck the camera breaks through when it climbs to the map.
// ---------------------------------------------------------------------------
export const clouds = {
  vertexShader: WORLD_VERT,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uZenith;
    ${FOG}
    ${HASH}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / 400.0 + vec2(uTime * 0.01, 0.0);
      float c = fbm(q) * 0.65 + fbm(q * 3.1 + 4.0) * 0.35;
      float a = smoothstep(0.52, 0.78, c);
      vec3 V = normalize(cameraPosition - vP);
      vec3 col = mix(uZenith * 2.2, hazeColor(-V) * 1.4, 0.5) * (0.6 + 0.6 * c);
      gl_FragColor = vec4(col, a * uOpacity);
    }
  `,
};

// Additive sprite (fountain glow, sun).
export const glowSprite = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    uniform float uIntensity;
    varying vec2 vUv;
    void main() {
      float r = length(vUv - 0.5) * 2.0;
      float a = exp(-r * r * 9.0) + 0.25 * exp(-r * 3.0);
      a *= 1.0 - smoothstep(0.85, 1.0, r);
      gl_FragColor = vec4(uColor * a * uIntensity, 1.0);
    }
  `,
};

// Guard before the glow pass: an invalid pixel (NaN / infinity) from any surface would
// otherwise be blurred by the bloom into a large black rectangle (seen on Safari / Metal).
export const sanitizePass = {
  uniforms: { tDiffuse: { value: null } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    float ok(float v) { return (v >= 0.0 && v < 2000.0) ? v : 0.0; }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(ok(c.r), ok(c.g), ok(c.b), 1.0);
    }
  `,
};

// Final screen pass: vignette, film grain, a touch of chromatic aberration.
export const finalPass = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.028 },
    uVignette: { value: 0.9 },
    uAberration: { value: 0.0006 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    uniform float uVignette;
    uniform float uAberration;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime * 7.0) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float d = dot(c, c);
      vec2 off = c * d * uAberration * 18.0;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      col *= 1.0 - smoothstep(0.18, 0.75, d * uVignette * 1.6) * 0.5;
      col += (hash(vUv * 1000.0) - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};
