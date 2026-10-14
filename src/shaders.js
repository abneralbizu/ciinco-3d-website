// GLSL for every custom surface in the scene. All colours are linear HDR;
// tone mapping and sRGB conversion happen once, in the output pass.

const worldVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

// ---------------------------------------------------------------------------
// Earth: day map, water/city-light masks, drifting clouds with shadows,
// ocean sun-glint, terminator warmth, night lights.
// ---------------------------------------------------------------------------
export const earth = {
  vertexShader: worldVert,
  fragmentShader: /* glsl */ `
    uniform sampler2D uDay;
    uniform sampler2D uMasks;
    uniform sampler2D uClouds;
    uniform vec3 uSunDir;
    uniform float uTime;
    uniform float uLights;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vP;
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSunDir);
      float ndl = dot(N, L);
      float dayMix = smoothstep(-0.18, 0.2, ndl);
      vec3 day = texture2D(uDay, vUv).rgb;
      vec4 m = texture2D(uMasks, vUv);
      vec2 cuv = vUv + vec2(uTime * 0.0012, 0.0);
      float cl = texture2D(uClouds, cuv).r;
      float shadow = texture2D(uClouds, cuv + L.xz * 0.0025).r;

      float lambert = max(ndl, 0.0);
      vec3 sunCol = vec3(1.0, 0.97, 0.92) * 1.3;
      vec3 surf = day * (1.0 - shadow * 0.45) * (lambert * sunCol + 0.012);
      // warm band at the terminator
      float tw = exp(-ndl * ndl * 30.0) * step(0.0, ndl + 0.05);
      surf *= mix(vec3(1.0), vec3(1.35, 0.75, 0.5), tw * 0.6);

      // ocean glint (Blinn-Phong) and sky reflection
      vec3 H = normalize(L + V);
      float water = m.r * (1.0 - cl);
      float spec = pow(max(dot(N, H), 0.0), 90.0) * 2.4 + pow(max(dot(N, H), 0.0), 12.0) * 0.12;
      surf += water * spec * sunCol * smoothstep(0.0, 0.15, ndl) * vec3(1.0, 0.92, 0.8);
      float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
      surf += water * fres * vec3(0.12, 0.3, 0.7) * 0.4 * dayMix;

      // clouds over the top
      vec3 cloudCol = vec3(0.93, 0.95, 1.0) * (lambert * sunCol * 0.62 + 0.004);
      cloudCol *= mix(vec3(1.0), vec3(1.3, 0.75, 0.55), tw * 0.7);
      cl = smoothstep(0.08, 0.95, cl);
      vec3 col = mix(surf, cloudCol, cl * 0.82);

      // atmospheric haze toward the limb on the day side
      col += vec3(0.18, 0.42, 1.0) * fres * 0.9 * dayMix;

      // city lights on the night side
      float lights = m.g * (1.0 - dayMix) * (1.0 - cl * 0.8);
      col += vec3(1.0, 0.64, 0.32) * lights * 1.9 * uLights;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Atmosphere shell: analytic limb glow with Rayleigh-ish colouring and a
// forward-scattering halo when looking toward the sun (the sunrise).
// ---------------------------------------------------------------------------
export const atmosphere = {
  vertexShader: /* glsl */ `
    varying vec3 vP;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uCenter;
    uniform float uR;
    uniform float uOuter;
    uniform vec3 uSunDir;
    uniform vec3 uColDay;
    uniform vec3 uColSet;
    uniform float uIntensity;
    uniform float uMie;
    varying vec3 vP;
    void main() {
      vec3 ro = cameraPosition;
      vec3 rd = normalize(vP - ro);
      vec3 L = normalize(uSunDir);
      vec3 oc = uCenter - ro;
      float tca = dot(oc, rd);
      vec3 cp = ro + rd * tca;
      float h = length(cp - uCenter) / uR;
      vec3 n = normalize(cp - uCenter);
      float dens;
      if (h < 1.0) {
        float thc = sqrt(1.0 - h * h) * uR;
        n = normalize(ro + rd * (tca - thc) - uCenter);
        dens = pow(h, 9.0) * 0.9;
      } else {
        float x = clamp((h - 1.0) / (uOuter - 1.0), 0.0, 1.0);
        dens = pow(1.0 - x, 3.2);
      }
      float sun = dot(n, L);
      float lit = smoothstep(-0.32, 0.28, sun);
      vec3 col = mix(uColSet, uColDay, smoothstep(-0.02, 0.5, sun));
      float vl = max(dot(rd, L), 0.0);
      float mie = (pow(vl, 24.0) * 0.8 + pow(vl, 400.0) * 6.0) * uMie;
      vec3 c = col * dens * lit * uIntensity;
      c += mix(uColSet, vec3(1.0, 0.9, 0.75), 0.5) * mie * dens * smoothstep(-0.45, 0.05, sun) * uIntensity;
      gl_FragColor = vec4(c, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Gas giant ("Commercial"): banded flow, limb darkening, ring shadow.
// ---------------------------------------------------------------------------
export const gasGiant = {
  vertexShader: worldVert,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform sampler2D uRing;
    uniform vec3 uSunDir;
    uniform vec3 uCenter;
    uniform vec3 uRingNormal;
    uniform float uR;
    uniform vec2 uRingRange;
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vP;
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSunDir);
      float lat = vUv.y;
      float flow = uTime * 0.0035 * (1.0 + 0.6 * sin(lat * 38.0) + 0.3 * sin(lat * 91.0));
      vec3 tex = texture2D(uMap, vec2(vUv.x + flow, vUv.y)).rgb;
      float ndl = dot(N, L);
      float lambert = smoothstep(-0.08, 1.0, ndl);
      float limb = pow(max(dot(N, V), 0.0), 0.35);
      // ring shadow: march toward the sun and test the ring plane
      float denom = dot(uRingNormal, L);
      float shade = 1.0;
      if (abs(denom) > 1e-3) {
        float t = dot(uRingNormal, uCenter - vP) / denom;
        if (t > 0.0) {
          float r = length(vP + L * t - uCenter) / uR;
          float u = (r - uRingRange.x) / (uRingRange.y - uRingRange.x);
          if (u > 0.0 && u < 1.0) shade = 1.0 - texture2D(uRing, vec2(u, 0.5)).a * 0.85;
        }
      }
      vec3 col = tex * (lambert * 1.08 * shade + 0.006) * limb;
      col *= mix(vec3(1.0), vec3(1.25, 0.8, 0.6), exp(-ndl * ndl * 25.0) * step(0.0, ndl) * 0.5);
      float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
      col += vec3(0.55, 0.62, 1.0) * fres * 0.35 * smoothstep(-0.2, 0.4, ndl);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export const ring = {
  vertexShader: /* glsl */ `
    varying vec3 vP;
    varying vec3 vL;
    void main() {
      vL = position;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D uRing;
    uniform vec3 uSunDir;
    uniform vec3 uCenter;
    uniform vec3 uRingNormal;
    uniform float uR;
    uniform vec2 uRingRange;
    varying vec3 vP;
    varying vec3 vL;
    void main() {
      float r = length(vL.xy) / uR;
      float u = (r - uRingRange.x) / (uRingRange.y - uRingRange.x);
      if (u < 0.0 || u > 1.0) discard;
      vec4 c = texture2D(uRing, vec2(u, 0.5));
      vec3 L = normalize(uSunDir);
      // planet shadow on the rings
      vec3 oc = uCenter - vP;
      float tca = dot(oc, L);
      float d2 = dot(oc, oc) - tca * tca;
      float sh = (tca > 0.0) ? smoothstep(uR * uR * 0.94, uR * uR * 1.02, d2) : 1.0;
      // lit face vs. back-lit face
      vec3 V = normalize(cameraPosition - vP);
      float sameSide = sign(dot(uRingNormal, L)) * sign(dot(uRingNormal, V));
      float face = sameSide > 0.0 ? 1.0 : 0.45;
      float fwd = pow(max(dot(-V, L), 0.0), 6.0) * 1.5;
      vec3 col = c.rgb * (1.15 * face + fwd) * sh;
      gl_FragColor = vec4(col, c.a * 0.92);
    }
  `,
};

// ---------------------------------------------------------------------------
// Orbital towers ("commercial skyline"): instanced boxes with window grids.
// ---------------------------------------------------------------------------
export const towers = {
  vertexShader: /* glsl */ `
    attribute float aSeed;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying vec3 vScale;
    void main() {
      vLocal = position;
      vSeed = aSeed;
      vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uSunDir;
    uniform float uTime;
    uniform float uGlow;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying vec3 vScale;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSunDir);
      float lambert = max(dot(N, L), 0.0);
      vec3 body = vec3(0.05, 0.06, 0.08);
      vec3 col = body * (lambert * 2.0 + 0.05);
      // glassy specular
      vec3 H = normalize(L + V);
      col += pow(max(dot(N, H), 0.0), 60.0) * vec3(0.9, 0.85, 0.8) * 0.8;
      col += pow(1.0 - max(dot(N, V), 0.0), 4.0) * vec3(0.2, 0.3, 0.6) * 0.2;
      // window grid on the side faces
      float side = 1.0 - abs(N.y) ;
      vec2 f = vec2((vLocal.x + vLocal.z) * vScale.x * 6.0, vLocal.y * vScale.y * 7.0);
      vec2 cell = floor(f);
      vec2 g = fract(f);
      float win = step(0.18, g.x) * step(g.x, 0.82) * step(0.25, g.y) * step(g.y, 0.75);
      float on = step(0.55, hash(cell + vSeed * 17.0));
      float flicker = 0.85 + 0.15 * sin(uTime * (0.5 + hash(cell) * 2.0) + vSeed * 6.0);
      vec3 warm = mix(vec3(1.0, 0.72, 0.42), vec3(0.65, 0.8, 1.0), step(0.75, hash(cell.yx + vSeed)));
      col += win * on * flicker * warm * 1.6 * uGlow * side * (1.0 - lambert * 0.6);
      // roof beacon
      float top = smoothstep(0.46, 0.5, vLocal.y) * step(0.5, fract(vSeed * 7.3));
      col += top * vec3(0.6, 0.75, 1.0) * 2.5 * (0.6 + 0.4 * sin(uTime * 2.0 + vSeed * 20.0));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Haven ("Residential"): ocean world with island lights at night.
// ---------------------------------------------------------------------------
export const haven = {
  vertexShader: worldVert,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform sampler2D uClouds;
    uniform vec3 uSunDir;
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vP;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSunDir);
      float ndl = dot(N, L);
      float dayMix = smoothstep(-0.15, 0.2, ndl);
      vec3 tex = texture2D(uMap, vUv).rgb;
      float water = smoothstep(0.02, 0.1, tex.b - tex.r);
      vec2 cuv = vUv + vec2(uTime * 0.002, 0.0);
      float cl = smoothstep(0.15, 1.0, texture2D(uClouds, cuv).r) * 0.7;
      float shadow = texture2D(uClouds, cuv + L.xz * 0.004).r * 0.85;
      vec3 sunCol = vec3(1.0, 0.96, 0.9) * 1.1;
      float lambert = max(ndl, 0.0);
      vec3 col = tex * (1.0 - shadow * 0.4) * (lambert * sunCol + 0.01);
      vec3 H = normalize(L + V);
      float nh = max(dot(N, H), 0.0);
      col += water * (1.0 - cl) * (pow(nh, 160.0) * 2.4 + pow(nh, 20.0) * 0.05) * sunCol * smoothstep(0.0, 0.1, ndl);
      float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
      col += water * fres * vec3(0.2, 0.6, 0.7) * 0.5 * dayMix;
      vec3 cloudCol = vec3(1.0) * (lambert * sunCol + 0.008);
      col = mix(col, cloudCol, cl);
      col += vec3(0.3, 0.75, 0.85) * fres * 0.8 * dayMix;
      // homes lighting up along the coasts after sunset
      vec2 q = vUv * vec2(1400.0, 700.0);
      float landish = 1.0 - water;
      float lowland = smoothstep(0.35, 0.6, tex.g) * (1.0 - smoothstep(0.75, 0.9, (tex.r + tex.g + tex.b) / 3.0));
      float sparkle = step(0.93, hash(floor(q))) * landish * lowland;
      float night = (1.0 - dayMix) * (1.0 - cl);
      col += vec3(1.0, 0.72, 0.42) * sparkle * night * 1.6;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// Simple lit rocky body (moon, moonlets).
export const rock = {
  vertexShader: worldVert,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform vec3 uSunDir;
    uniform vec3 uTint;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vP;
    void main() {
      vec3 N = normalize(vN);
      vec3 L = normalize(uSunDir);
      vec3 V = normalize(cameraPosition - vP);
      vec3 tex = texture2D(uMap, vUv).rgb * uTint;
      float l = max(dot(N, L), 0.0);
      float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * 0.05;
      gl_FragColor = vec4(tex * (l * 2.0 + 0.004) + rim * vec3(0.4, 0.5, 0.8), 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Stars: twinkling points with a soft core.
// ---------------------------------------------------------------------------
export const stars = {
  vertexShader: /* glsl */ `
    attribute float aSize;
    attribute float aPhase;
    attribute vec3 aColor;
    uniform float uTime;
    uniform float uPixelRatio;
    varying vec3 vColor;
    varying float vTw;
    void main() {
      vColor = aColor;
      vTw = 0.7 + 0.3 * sin(uTime * (0.6 + aPhase * 1.8) + aPhase * 40.0);
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * uPixelRatio;
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec3 vColor;
    varying float vTw;
    void main() {
      vec2 p = gl_PointCoord - 0.5;
      float r = length(p) * 2.0;
      float core = exp(-r * r * 14.0);
      float halo = exp(-r * 4.5) * 0.25;
      float a = (core + halo) * (1.0 - smoothstep(0.85, 1.0, r));
      gl_FragColor = vec4(vColor * a * vTw, 1.0);
    }
  `,
};

// Space dust near the camera path: gives parallax depth while travelling.
export const dust = {
  vertexShader: /* glsl */ `
    attribute float aSize;
    uniform float uPixelRatio;
    uniform float uTime;
    varying float vA;
    void main() {
      vec3 p = position;
      p.y += sin(uTime * 0.1 + position.x * 0.05) * 1.5;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      float d = -mv.z;
      vA = smoothstep(2.0, 20.0, d) * (1.0 - smoothstep(120.0, 260.0, d));
      gl_PointSize = aSize * uPixelRatio * (90.0 / max(d, 1.0));
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    varying float vA;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 5.0) * (1.0 - smoothstep(0.8, 1.0, r)) * vA;
      gl_FragColor = vec4(uColor * a, 1.0);
    }
  `,
};

// Warp streaks: line segments stretched along the camera's velocity.
export const warp = {
  vertexShader: /* glsl */ `
    attribute float aEnd;
    attribute float aRand;
    uniform vec3 uVel;
    uniform float uStrength;
    varying float vA;
    void main() {
      vec3 p = position - uVel * aEnd * (0.6 + aRand * 0.8);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      float d = -mv.z;
      vA = uStrength * (1.0 - aEnd * 0.95) * smoothstep(4.0, 30.0, d) * (1.0 - smoothstep(180.0, 340.0, d)) * (0.4 + aRand * 0.6);
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    varying float vA;
    void main() {
      gl_FragColor = vec4(vec3(0.75, 0.85, 1.0) * vA, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Galaxy ("Track record"): differential rotation + cursor gravity well.
// ---------------------------------------------------------------------------
export const galaxy = {
  vertexShader: /* glsl */ `
    attribute float aRadius;
    attribute float aAngle;
    attribute float aSize;
    attribute vec3 aColor;
    attribute float aRand;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform vec3 uPointer;   // galaxy-local, y unused
    uniform float uPointerOn;
    uniform float uReveal;
    varying vec3 vColor;
    varying float vA;
    void main() {
      float omega = 0.018 + 0.05 / (aRadius / 60.0 + 0.6);
      float ang = aAngle + uTime * omega;
      vec3 p = vec3(cos(ang) * aRadius, position.y, sin(ang) * aRadius);
      // reveal: particles spiral in from a wider, flatter disc
      p.xz *= mix(2.2, 1.0, smoothstep(0.0, 1.0, uReveal - aRand * 0.3 + 0.3));
      vec2 d = p.xz - uPointer.xz;
      float dist2 = dot(d, d);
      float f = exp(-dist2 / 1400.0) * uPointerOn;
      p.xz += normalize(d + 1e-4) * f * 22.0;
      p.y += f * 14.0 * sin(uTime * 2.0 + aRand * 6.28);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = max(1.0, aSize * uPixelRatio * (820.0 / -mv.z) * (1.0 + f * 1.5));
      vColor = aColor * (1.0 + f * 2.5);
      vA = smoothstep(0.0, 0.6, uReveal);
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec3 vColor;
    varying float vA;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 6.0) * (1.0 - smoothstep(0.8, 1.0, r));
      gl_FragColor = vec4(vColor * a * vA, 1.0);
    }
  `,
};

// ---------------------------------------------------------------------------
// Constellation ("Advisory"): lines that draw on, pulses that travel.
// ---------------------------------------------------------------------------
export const constLines = {
  vertexShader: /* glsl */ `
    attribute float aT;      // 0..1 position along the drawing order
    attribute float aLocal;  // 0 at a segment's start, 1 at its end
    attribute float aEdge;   // edge index
    varying float vT;
    varying float vLocal;
    varying float vEdge;
    void main() {
      vT = aT; vLocal = aLocal; vEdge = aEdge;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uDraw;
    uniform float uTime;
    uniform float uHot;   // highlighted node's edges glow; -1 none
    varying float vT;
    varying float vLocal;
    varying float vEdge;
    void main() {
      float shown = step(vT, uDraw);
      float pulse = smoothstep(0.08, 0.0, abs(fract(vLocal - uTime * 0.35 - vEdge * 0.137) - 0.5) - 0.42);
      vec3 base = vec3(0.45, 0.6, 1.0) * 0.35;
      vec3 col = base + vec3(0.8, 0.9, 1.0) * pulse * 0.9;
      gl_FragColor = vec4(col * shown, 1.0);
    }
  `,
};

export const constNodes = {
  vertexShader: /* glsl */ `
    attribute float aIndex;
    uniform float uHot;
    uniform float uDraw;
    uniform float uCount;
    uniform float uPixelRatio;
    uniform float uTime;
    varying float vHot;
    varying float vShown;
    void main() {
      vHot = 1.0 - step(0.5, abs(aIndex - uHot));
      vShown = smoothstep(aIndex / uCount - 0.02, aIndex / uCount + 0.04, uDraw);
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      float pulse = 1.0 + 0.12 * sin(uTime * 1.6 + aIndex);
      gl_PointSize = (22.0 + vHot * 30.0) * pulse * uPixelRatio * (160.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    varying float vHot;
    varying float vShown;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float core = exp(-r * r * 30.0) * 2.0;
      float halo = exp(-r * 4.0) * 0.5;
      float ring = smoothstep(0.05, 0.0, abs(r - 0.62)) * vHot * 0.8;
      vec3 c = mix(vec3(0.7, 0.82, 1.0), vec3(1.0, 0.85, 0.6), vHot);
      float a = (core + halo + ring) * (1.0 - smoothstep(0.9, 1.0, r)) * vShown;
      gl_FragColor = vec4(c * a, 1.0);
    }
  `,
};

// Additive sprite (sun, glows, flares) with tint and intensity.
export const glowSprite = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform vec3 uColor;
    uniform float uIntensity;
    varying vec2 vUv;
    void main() {
      vec3 t = texture2D(uMap, vUv).rgb;
      gl_FragColor = vec4(t * uColor * uIntensity, 1.0);
    }
  `,
};

// Pulsing ring that marks an office on Earth.
export const pinRing = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uOn;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      float r = length(vUv - 0.5) * 2.0;
      float t = fract(uTime * 0.45 + uOffset);
      float ring = smoothstep(0.06, 0.0, abs(r - t)) * (1.0 - t);
      float dot = exp(-r * r * 160.0) * 3.0;
      vec3 c = vec3(1.0, 0.82, 0.55);
      gl_FragColor = vec4(c * (ring * 1.6 + dot) * uOn, 1.0);
    }
  `,
};

// Sky sphere: equirectangular panorama sampled by direction.
export const sky = {
  vertexShader: /* glsl */ `
    varying vec3 vDir;
    void main() {
      vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
      vec4 p = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      gl_Position = p.xyww;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform float uIntensity;
    uniform vec3 uTint;
    varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir);
      vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
      vec3 c = texture2D(uMap, uv).rgb;
      gl_FragColor = vec4(c * uIntensity * uTint, 1.0);
    }
  `,
};

// Final screen pass: vignette, film grain, a touch of chromatic aberration.
export const finalPass = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.03 },
    uVignette: { value: 0.9 },
    uAberration: { value: 0.0007 },
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
      col *= 1.0 - smoothstep(0.18, 0.75, d * uVignette * 1.6) * 0.55;
      col += (hash(vUv * 1000.0) - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};
