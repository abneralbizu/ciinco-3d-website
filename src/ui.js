import { t } from './i18n.js';
// Everything on the page that is not 3D: navigation, reveals, counters,
// the contact form and the Crexi listings viewer. Works without WebGL.

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export const FOUNDED = 1990;
// Which side of the screen each chapter's text sits on (drives the shading behind it).
const SIDES = ['left', 'left', 'left', 'right', 'left', 'left', 'center', 'right', 'left'];

export function initUI(bus) {
  const chapters = $$('.chapter');

  // ---- Years in business, copyright year --------------------------------
  const year = new Date().getFullYear();
  const years = year - FOUNDED;
  $$('.js-years').forEach((el) => { el.textContent = String(years); });
  const y = $('#year');
  if (y) y.textContent = String(year);

  // ---- Mobile navigation --------------------------------------------------
  const toggle = $('.nav-toggle');
  const list = $('#nav-list');
  const closeNav = () => { toggle.setAttribute('aria-expanded', 'false'); list.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    list.classList.toggle('is-open', open);
    if (open) list.querySelector('a').focus();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && list.classList.contains('is-open')) { closeNav(); toggle.focus(); } });

  // ---- In-page links: land each chapter where the camera arrives ---------
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = id === 'main' ? chapters[0] : document.getElementById(id);
    if (!target) return;
    const chapter = target.closest('.chapter') || target;
    const idx = chapters.indexOf(chapter);
    if (idx < 0) return;
    e.preventDefault();
    closeNav();
    if (a.dataset.interest) { const sel = $('#f-interest'); if (sel) sel.value = a.dataset.interest; }
    goToChapter(idx, chapter);
  });

  function goToChapter(idx, chapter = chapters[idx]) {
    const top = bus.anchorFor ? bus.anchorFor(idx) : chapter.offsetTop;
    window.scrollTo({ top, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    const focusEl = chapter.querySelector('h1, h2') || chapter;
    focusEl.setAttribute('tabindex', '-1');
    focusEl.focus({ preventScroll: true });
    history.replaceState(null, '', idx === 0 ? location.pathname : `#${chapter.id}`);
  }
  bus.goToChapter = goToChapter;

  // ---- Reveal on view -------------------------------------------------------
  $$('.reveal-stagger').forEach((el) => { Array.from(el.children).forEach((c, i) => c.style.setProperty('--i', i)); });
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        if (en.target.id === 'record') runCounters(en.target);
        io.unobserve(en.target);
      }
    }
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
  bus.startReveals = () => chapters.forEach((c) => io.observe(c));

  // ---- Counters -------------------------------------------------------------
  function runCounters(root) {
    $$('[data-count]', root).forEach((el) => {
      const end = parseInt(el.dataset.count || el.textContent.replace(/,/g, ''), 10);
      if (!Number.isFinite(end) || reducedMotion.matches) return;
      const fmt = (n) => (end >= 1000 ? n.toLocaleString('en-US') : String(n));   // 197,000,000
      const t0 = performance.now() + 450;
      const dur = 1800;
      el.textContent = '0';
      const step = (now) => {
        const t = Math.min(1, Math.max(0, (now - t0) / dur));
        const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        el.textContent = fmt(Math.round(end * e));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  // ---- Chapter state (nav, system map, telemetry) -----------------------
  const navLinks = $$('.site-nav a');
  const mapLinks = $$('.system-map a');
  const fill = $('#sm-fill');
  const sector = $('#tm-sector');
  const coords = $('#tm-coords');
  let lastActive = -1;

  // Previous / next buttons beside the chapter list.
  const stepPrev = $('#step-prev');
  const stepNext = $('#step-next');
  const stepName = $('#step-name');
  const chapterName = (i) => (mapLinks[i] ? mapLinks[i].querySelector('.sm-name').textContent : '');
  const current = () => Math.max(0, lastActive);
  const updateStepper = () => {
    const i = current();
    if (stepPrev) {
      stepPrev.hidden = i === 0;
      stepPrev.setAttribute('aria-label', `${t('Previous chapter')}: ${chapterName(i - 1)}`);
    }
    if (stepNext) {
      stepNext.hidden = i >= chapters.length - 1;
      stepNext.setAttribute('aria-label', `${t('Next chapter')}: ${chapterName(i + 1)}`);
      if (stepName) stepName.textContent = chapterName(i + 1);
    }
  };
  // When a chapter's own Next button is on screen, the corner buttons step aside (phones).
  const seen = new Set();
  const nio = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? seen.add(en.target) : seen.delete(en.target)));
    document.body.classList.toggle('next-visible', seen.size > 0);
  });
  $$('.next-row, #home-port .cta-row, #launch .cta-row').forEach((el) => nio.observe(el));
  if (stepPrev) stepPrev.addEventListener('click', () => goToChapter(Math.max(0, current() - 1)));
  if (stepNext) stepNext.addEventListener('click', () => goToChapter(Math.min(chapters.length - 1, current() + 1)));
  updateStepper();

  bus.setProgress = (p, active, cam) => {
    if (fill) fill.style.transform = `scaleY(${(p / (chapters.length - 1)).toFixed(4)})`;
    if (active !== lastActive) {
      lastActive = active;
      updateStepper();
      document.body.dataset.side = SIDES[active] || 'left';
      mapLinks.forEach((a, i) => a.classList.toggle('is-active', i === active));
      const id = chapters[active] && chapters[active].id;
      // the menu item for this chapter stays underlined (New York and Florida are both Commercial)
      const navFor = { launch: 'launch', commercial: 'launch', 'residential-ny': 'residential' }[id] || id;
      navLinks.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === `#${navFor}`)));
      if (sector) {
        const name = mapLinks[active] ? mapLinks[active].querySelector('.sm-name').textContent : '';
        sector.textContent = `${String(active + 1).padStart(2, '0')} · ${name}`;
      }
    }
    if (coords && cam) coords.textContent = cam; // camera latitude, longitude, altitude
  };

  // Header: tinted once scrolled, hidden while scrolling down, back on scroll up.
  // The header (name, menu, EN/ES) stays on screen in every chapter, so visitors can jump
  // anywhere without scrolling back up; it gains a dark backing once the page has scrolled.
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Footer in view: tuck the chapter chrome away.
  const footer = $('.site-footer');
  new IntersectionObserver(([en]) => document.body.classList.toggle('at-footer', en.isIntersecting), { threshold: 0.05 }).observe(footer);

  // ---- Language switch: stay on the same chapter in the other language ---------
  $$('.lang-switch a:not([aria-current])').forEach((a) => a.addEventListener('click', () => {
    if (location.hash) a.href = a.href.split('#')[0] + location.hash;
  }));

  // ---- Crexi listings viewer (loaded only on request) ----------------------
  const crexiBtn = $('#crexi-load');
  if (crexiBtn) {
    crexiBtn.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.className = 'crexi-frame';
      f.src = 'https://www.crexi.com/widgets/1594';
      f.title = t('CIIN Co. commercial listings on Crexi');
      f.loading = 'lazy';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      crexiBtn.replaceWith(f);
    });
  }

  // ---- Contact form -------------------------------------------------------
  const form = $('#contact-form');
  if (form) {
    const status = $('.form-status', form);
    const rules = [
      ['f-name', (v) => v.trim().length > 1, t('Please enter your name.')],
      ['f-email', (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), t('Please enter a valid email address.')],
      ['f-message', (v) => v.trim().length > 4, t('Please tell us a little about what you need.')],
    ];
    const check = (id, ok, msg) => {
      const el = $(`#${id}`, form);
      const err = $(`#${id}-err`, form);
      const valid = ok(el.value);
      el.setAttribute('aria-invalid', String(!valid));
      if (valid) { el.removeAttribute('aria-describedby'); err.textContent = ''; } else { el.setAttribute('aria-describedby', `${id}-err`); err.textContent = msg; }
      return valid;
    };
    rules.forEach(([id, ok, msg]) => $(`#${id}`, form).addEventListener('blur', (e) => { if (e.target.value) check(id, ok, msg); }));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';
      const results = rules.map((r) => check(...r));
      if (results.includes(false)) {
        const first = rules[results.indexOf(false)][0];
        $(`#${first}`, form).focus();
        status.classList.add('is-error');
        status.textContent = t('Please check the highlighted fields.');
        return;
      }
      if (form.company_website.value) return; // spam trap
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = t('Sending…');
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (!res.ok) throw new Error(String(res.status));
        window.location.href = form.getAttribute('action');
      } catch (err) {
        btn.disabled = false;
        status.classList.add('is-error');
        status.innerHTML = `${t('Your message could not be sent. Please email')} <a href="mailto:rafael@ciinco.com">rafael@ciinco.com</a> ${t('or call')} <a href="tel:+14077395959">407-739-5959</a>.`;
      }
    });
  }

  // ---- Hover links between the page and the 3D scene ----------------------
  $$('#type-chips li').forEach((li, i) => {
    li.addEventListener('pointerenter', () => bus.hotType && bus.hotType(i));
    li.addEventListener('pointerleave', () => bus.hotType && bus.hotType(-1));
  });
  $$('#consulting li').forEach((li) => {
    const i = parseInt(li.dataset.node, 10);
    li.addEventListener('pointerenter', () => bus.hotNode && bus.hotNode(i));
    li.addEventListener('pointerleave', () => bus.hotNode && bus.hotNode(-1));
  });
  $$('.office').forEach((li) => {
    li.addEventListener('pointerenter', () => bus.hotOffice && bus.hotOffice(li.dataset.office));
    li.addEventListener('pointerleave', () => bus.hotOffice && bus.hotOffice(null));
  });
  bus.markType = (i) => $$('#type-chips li').forEach((li, k) => li.classList.toggle('is-hot', k === i));
  bus.markNode = (i) => $$('#consulting li').forEach((li) => li.classList.toggle('is-hot', parseInt(li.dataset.node, 10) === i));
  bus.markOffice = (id) => $$('.office').forEach((li) => li.classList.toggle('is-hot', li.dataset.office === id));

  return { chapters };
}

// Loader progress and dismissal.
export function setLoader(frac) {
  const pct = $('#loader-pct');
  const bar = $('#loader-bar');
  if (pct) pct.textContent = `${Math.round(frac * 100)}%`;
  if (bar) bar.style.transform = `scaleX(${frac.toFixed(3)})`;
}
export function finishLoading() {
  document.body.classList.remove('is-loading');
}
