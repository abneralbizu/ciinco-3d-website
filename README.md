# CIIN Co. 3D website

An immersive 3D website for **Continental Investments International Network Co.** Visitors scroll through
New York and Orlando at dusk. The camera flies between the two cities, and each place is one part of the business:

| Chapter | Scene | Content |
|---|---|---|
| 00 Skyline | Lower Manhattan from the harbour | "From street level to skyline." |
| 01 Our cities | Night map of the East Coast, a flight path from New York to Orlando | The two offices |
| 02 Commercial | Midtown Manhattan from over the Hudson; one building lights up per property type | Buying, selling, leasing, due diligence |
| 03 Residential | Homes, pools and lakes around the Winter Springs office | Buying, selling, renting, due diligence |
| 04 Advisory | A glass tower by Lake Eola, one floor per service | The 15 consulting services |
| 05 Track record | Downtown Orlando across Lake Eola at sunset | 36 years, $197M+ transactions, $35M under development |
| 06 Listings | A plat map of lots in Colonialtown that lights up under the cursor | Crexi listings, residential inquiries |
| 07 Contact | Above the Winter Springs office, Lake Jesup behind | Agent, offices, contact form |

The earlier space version (planets and galaxies) is kept on the `space-version` branch.

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
- `?cam=lat,lon,altM,lookLat,lookLon,lookAltM` puts the camera anywhere, for framing new shots.

## Folder layout

```
ciinco-3d-website/
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
│       ├── textures/             East Coast night map (generated, see below)
│       ├── data/                 New York shorelines, map bounds (generated)
│       ├── images/               Favicon, social-share image, portrait, Equal Housing logo
│       ├── fonts/                Archivo, Instrument Serif, JetBrains Mono (SIL OFL, licences included)
│       └── docs/                 Signed SOP PDFs
├── src/                          Source for assets/js/cosmos.js
│   ├── main.js                   Renderer, scroll → camera, interactions, quality control
│   ├── geo.js                    One map projection for everything, the Manhattan grid, office locations
│   ├── world.js                  Builds New York, Orlando, the map, bridges, roads, homes, lakes
│   ├── journey.js                The camera's flight plan (one keyframe per chapter, in lat/lon/altitude)
│   ├── shaders.js                GLSL for every surface (sky, haze, streets, water, buildings, homes…)
│   └── ui.js                     Navigation, reveals, counters, contact form, Crexi viewer
├── tools/
│   ├── fetch-data.sh             Downloads the New York borough shorelines
│   ├── export-geo.mjs            Exports coastlines, state lines and towns for the map
│   └── build_geo.py              Builds nyc.json and the night-map texture
├── netlify.toml                  Netlify settings (publish folder = site, no build step)
└── package.json                  Build scripts
```

## Editing

- **Words:** edit `site/index.html` directly. Each chapter is a clearly marked `<section>` block.
  The "36 years" figures update themselves every January (they're calculated from 1990).
- **Phone numbers, addresses, licence numbers:** in `site/index.html` (contact chapter, footer, structured data
  at the top) and the footers of the other pages.
- **Colours and fonts:** the `:root` block at the top of `site/assets/css/cosmos.css`.
- **Camera, buildings, effects:** edit files in `src/`, then rebuild:

  ```bash
  npm install          # once
  npm run build        # writes site/assets/js/cosmos.js
  ```

  `src/journey.js` holds the camera position for each chapter as latitude, longitude and altitude;
  `src/geo.js` holds the office locations; `src/world.js` builds the cities.

## The artwork

Everything you see is generated for this site from open geographic data. There are no stock images.

- **New York:** the real shorelines of the five boroughs (NYC Open Data), with the New Jersey and
  Westchester waterfronts added. Manhattan's buildings stand on the real 1811 street grid, Central Park and
  the Reservoir are where they belong, and the tallest towers and six bridges are placed at their real addresses.
  Building heights follow the real pattern (Midtown, Downtown, Hudson Yards), but individual buildings are
  generated massing, not surveyed models.
- **Orlando:** Lake Eola, I-4, SR 408, SR 436, SR 417, SR 434, Red Bug Lake Road, Tuskawilla Road and
  some twenty named lakes are placed from their real positions; downtown towers, neighbourhoods, homes,
  pools and trees are generated around them.
- **East Coast map:** Natural Earth coastlines (public domain), US Census state lines, and real towns
  from GeoNames (CC BY 4.0, credited in the footer).
- The office locations are approximate: 5th Ave & 30th St in New York, and Red Bug Lake Rd & Tuskawilla Rd
  in Winter Springs.

To rebuild the geography (about a minute):

```bash
npm install
npm run geo          # needs Python 3 with numpy, pillow and shapely
```

## Preview on GitHub Pages (before launch)

Every push to `main` also publishes a review copy through GitHub Pages
(`.github/workflows/pages-preview.yml`), at `https://abneralbizu.github.io/ciinco-3d-website/`.
The preview is hidden from search engines, but anyone who has the link can open it.

Turn it on once: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
GitHub Pages on a private repository needs a paid GitHub plan (Pro, Team or Enterprise);
on the free plan the repository has to be public. The contact form only works on Netlify, and
the security headers in `site/_headers` apply on Netlify and Cloudflare Pages, not on GitHub Pages.

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

- Phones and low-power computers automatically get a lighter map, fewer buildings and homes, and no anti-aliasing.
  The site also watches its own frame rate for the first few seconds and lowers resolution if needed.
- Rendering pauses when the tab is hidden.
- `prefers-reduced-motion` switches off parallax, the opening descent, moving film grain, text animations and counters.
- Without WebGL a still image of the skyline is shown.
- The city detail fades out as the camera climbs, so the night map stays clean from high up.
- Keyboard: skip link, visible focus, in-page links move focus to the chapter heading.
- Checked with axe-core: no violations on any page.
