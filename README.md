# CIIN Co. Cosmos

An immersive 3D website for **Continental Investments International Network Co.** Visitors scroll through a
small solar system where each world is one part of the business:

| Chapter | World | Content |
|---|---|---|
| 00 Launch | Sunrise over Earth | "Every property is its own world." |
| 01 Home port | Earth, with Orlando and New York lit up | The two offices |
| 02 Commercial | A ringed gas giant with an orbiting skyline | Buying, selling, leasing, due diligence, property types |
| 03 Residential | Haven, a calm ocean world | Homes: buying, selling, renting, due diligence |
| 04 Advisory | A constellation, one star per service | The 15 consulting services |
| 05 Track record | A spiral galaxy | 36 years, $197M+ transactions, $35M under development |
| 06 Listings | Inside the galaxy | Crexi listings, residential inquiries |
| 07 Contact | Looking back over the galaxy | Agent, offices, contact form |

Every word on the page is ordinary HTML. The 3D scene is decoration behind it, so the site still works
(with a still image instead) on devices without 3D graphics, and screen readers read it like any other page.

## Preview on your computer

The site has to be opened through a small local web server (browsers block 3D textures from `file://`):

```bash
npm run serve        # then open http://localhost:8080
```

Or, without Node: `python3 -m http.server 8080 --directory site`.

Handy preview switches (add to the address):

- `?p=2` pins the camera on a chapter (0–7), for checking one scene.
- `?low` forces the light version used on phones and older computers.

## Folder layout

```
ciinco-cosmos/
├── site/                         ← THE WEBSITE. Publish this folder as-is.
│   ├── index.html                The whole home page (all eight chapters)
│   ├── privacy.html              Privacy policy
│   ├── accessibility.html        Accessibility statement
│   ├── standardized-operating-procedures*.html   SOP chooser + Florida + New York
│   ├── thanks.html               Shown after the contact form is sent
│   ├── 404.html                  "Page not found"
│   ├── _headers                  Security + caching headers (Netlify / Cloudflare Pages)
│   ├── _redirects                /sop short link
│   ├── robots.txt
│   └── assets/
│       ├── css/cosmos.css        All styling. Colours and fonts are at the top ("Tokens").
│       ├── js/cosmos.js          The built 3D engine + page behaviour (generated, don't edit)
│       ├── textures/             Planet, sky and light artwork (generated, see below)
│       ├── images/               Favicon, social-share image, portrait, Equal Housing logo
│       ├── fonts/                Archivo, Instrument Serif, JetBrains Mono (SIL OFL, licences included)
│       └── docs/                 Signed SOP PDFs
├── src/                          Source for assets/js/cosmos.js
│   ├── main.js                   Renderer, scroll → camera, interactions, quality control
│   ├── world.js                  Builds the planets, rings, skyline, galaxy, stars
│   ├── journey.js                The camera's flight plan (one keyframe per chapter)
│   ├── shaders.js                GLSL for every surface (atmospheres, oceans, rings, galaxy…)
│   └── ui.js                     Navigation, reveals, counters, contact form, Crexi viewer
├── tools/
│   ├── generate_textures.py      Paints every texture in site/assets/textures
│   └── export-geo.mjs            Exports coastlines + cities used for the Earth texture
├── netlify.toml                  Netlify settings (publish folder = site, no build step)
└── package.json                  Build scripts
```

## Editing

- **Words:** edit `site/index.html` directly. Each chapter is a clearly marked `<section>` block.
  The "36 years" figures update themselves every January (they're calculated from 1990).
- **Phone numbers, addresses, licence numbers:** in `site/index.html` (contact chapter, footer, structured data
  at the top) and the footers of the other pages.
- **Colours and fonts:** the `:root` block at the top of `site/assets/css/cosmos.css`.
- **Camera, planets, effects:** edit files in `src/`, then rebuild:

  ```bash
  npm install          # once
  npm run build        # writes site/assets/js/cosmos.js
  ```

  `src/journey.js` holds the camera position for each chapter; `src/world.js` holds where each world sits.

## The artwork

All imagery is generated for this site. Nothing is stock. `tools/generate_textures.py` paints the planets,
rings, moon, deep-space panorama and light sprites with procedural noise. Earth uses real coastlines
(Natural Earth, public domain) and real city locations (GeoNames, CC BY 4.0, credited in the footer), so
Orlando and New York light up where they really are. The social-share image is a render of the opening scene.

To regenerate (takes a few minutes):

```bash
npm install
npm run textures     # needs Python 3 with numpy + pillow
```

## Publishing (Netlify)

1. Push this folder to its GitHub repository.
2. In Netlify: **Add new site → Import an existing project →** pick the repository.
   The settings come from `netlify.toml` (publish directory `site`, no build command).
3. **Contact form:** Netlify detects the form automatically on the first deploy. Turn on email alerts in
   **Site configuration → Forms → Form notifications** so messages reach rafael@ciinco.com.
4. Add the domain under **Domain management**. HTTPS is automatic.
5. Once the domain is known, make the social-share image link absolute in `index.html`
   (`og:image` → `https://YOUR-DOMAIN/assets/images/og-image.jpg`) and add
   `<link rel="canonical" href="https://YOUR-DOMAIN/">`.

Cloudflare Pages works the same way (it reads `_headers` and `_redirects` too). Its forms work differently:
point the form at a form service and add that service to `form-action` and `connect-src` in `_headers`.

## Security

- **No third-party code.** Every script, font and image is served from the site itself; there are no
  trackers, analytics or cookies.
- **Content-Security-Policy** in `site/_headers` blocks scripts, styles and connections from anywhere else.
  Inline scripts and inline styles are not used, so the policy can stay strict.
- **Crexi listings load only when a visitor asks.** The listings viewer is the only outside content, and it is
  limited to `www.crexi.com` by `frame-src`.
- Other headers: HSTS, `X-Frame-Options: DENY` / `frame-ancestors 'none'` (no clickjacking), `nosniff`,
  a strict referrer policy, and a Permissions-Policy that turns off camera, microphone, location and payments.
- **Contact form:** a hidden spam-trap field, input length limits, and client-side checks. Netlify stores
  submissions; nothing is sent anywhere else.
- Keep dependencies current: `npm audit` and `npm update three`, then `npm run build`. Only the built
  `cosmos.js` is published; `node_modules` never goes online.

## Performance and accessibility

- Phones and low-power computers automatically get lighter textures, fewer particles and no anti-aliasing.
  The site also watches its own frame rate for the first few seconds and lowers resolution if needed.
- Rendering pauses when the tab is hidden.
- `prefers-reduced-motion` switches off parallax, warp streaks, moving film grain, text animations and counters.
- Without WebGL a still image of the deep-space panorama is shown.
- Keyboard: skip link, visible focus, in-page links move focus to the chapter heading.
- Checked with axe-core: no violations on any page.
