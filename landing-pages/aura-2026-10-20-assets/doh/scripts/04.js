/* DOH! box story. Continues the original pinned stage after the sprinkles chapter:
   the WebGL donut hands off to the rendered one, which drops into the box. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const backOut = t => { const c = 1.9; t = clamp(t); return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const story = $('#story'), stage = $('#stage'), core = $('#story-core'), tail = $('#box-tail'), bx = $('#bx'), webgl = $('#webgl');
if (!story || !stage || !tail || !bx) return;
const reduced = matchMedia('(prefers-reduced-motion: reduce)'), mobileMQ = matchMedia('(max-width: 800px)');
const data = JSON.parse($('#bx-story-data').textContent);
const NF = data.frames, FW = data.size[0], FH = data.size[1], HERO = data.hero; // hero: [width share, cx, cy] of the donut in frame 0
const HAND = 0.035, END = 0.955;
let coverNow = false;
window.DohCover = () => coverNow;
const WINDOWS = [[-9, -1, 22, 32], [34, 42, 64, 72], [74, 82, 146, 154], [160, 168, 1e9, 1e9]];
const JUMP = [4, 52, 96, 191];
const NAMES = ['Pink, please!', 'Choco loco.', 'Oh, pistachio!', 'Simply glazed.'];
const FKEY = { strawberry: 0, chocolate: 1, pistachio: 2, original: 3 };
const COLOUR = ['#ef6b98', '#4a2412', '#8c9240', '#d98a3a'], NOTE = ['Strawberry', 'Chocolate', 'Pistachio', 'Original'];

const scene = $('#bx-scene'), canvas = $('#bx-canvas'), ctx = canvas.getContext('2d');
const chapters = $$('.bx-ch', bx), navBtns = $$('[data-bxjump]', bx), six = $$('#bx-six li'), count = $('#bx-count');
const bgWord = $('#bx-word'), progress = $('#bx-progress'), pinsEl = $('#bx-pins'), ui = $('.bx-ui', bx);

/* split headings into words so they spring in */
$$('h2', bx).forEach(h => {
  let n = 0;
  const walk = node => [...node.childNodes].forEach(ch => {
    if (ch.nodeType === 3) {
      const frag = document.createDocumentFragment();
      ch.textContent.split(/(\s+)/).forEach(p => {
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
        const w = document.createElement('span'); w.className = 'w'; w.style.setProperty('--i', n++); w.textContent = p; frag.appendChild(w);
      });
      ch.replaceWith(frag);
    } else if (ch.nodeType === 1) walk(ch);
  });
  walk(h);
});

/* landing labels */
const pins = data.donuts.map(d => {
  const el = document.createElement('div');
  el.className = 'bx-pin';
  pinsEl.appendChild(el);
  return { el, d, f: FKEY[d.flavour], w: 0, h: 0, shown: false };
});

/* the visitor's pick: whatever they last chose in the carousel or the flavour room (default: the hero) */
let pick = 0;
function setPick(i) {
  if (!Number.isInteger(i) || i < 0 || i > 3) return;
  pick = i;
  $$('.bx-pick-name', bx).forEach(el => { el.textContent = NAMES[i]; });
  let firstLi = six.find(li => Number(li.dataset.f) === i);
  six.forEach(li => li.classList.toggle('is-pick', li === firstLi));
  let marked = false;
  pins.forEach(p => {
    const mine = !marked && p.f === pick;
    if (mine) marked = true;
    p.el.innerHTML = `<i style="--c:${COLOUR[p.f]}"></i>${p.d.label} ${mine ? '<em>YOUR PICK</em>' : `<small>${NOTE[p.f]}</small>`}`;
  });
  pins.forEach(p => { p.w = p.el.offsetWidth; p.h = p.el.offsetHeight; });
}
$$('[data-flavor],[data-explore],[data-taste],[data-closeup]').forEach(b => b.addEventListener('click', () => {
  const v = b.dataset.flavor ?? b.dataset.explore ?? b.dataset.taste ?? b.dataset.closeup;
  setPick(Number(v));
}));
setPick(0);

/* geometry */
let start = 0, len = 1, vw = innerWidth, vh = innerHeight, q = 0, hand = 0, target = 0, shown = 0;
let layout = { x: 0, y: 0, w: FW, h: FH }, handRect = null, rectKey = '', startBg = [255, 223, 73];
function measure() {
  vw = stage.clientWidth; vh = stage.clientHeight;
  const top = story.getBoundingClientRect().top + scrollY;
  start = top + (core && getComputedStyle(core).display !== 'none' ? core.offsetHeight : 0);
  len = Math.max(1, tail.offsetHeight);
  pins.forEach(p => { p.w = p.el.offsetWidth; p.h = p.el.offsetHeight; });
  read();
}
function read() {
  q = clamp((scrollY - start) / len);
  hand = reduced.matches ? (q > 0 ? 1 : 0) : smooth(0, HAND, q);
  target = clamp((q - HAND) / (END - HAND)) * (NF - 1);
  if (reduced.matches) shown = target;
  wake();
}
function jumpTo(f) {
  const top = start + (HAND + f / (NF - 1) * (END - HAND)) * len + 2;
  scrollTo({ top, behavior: reduced.matches ? 'auto' : 'smooth' });
}
navBtns.forEach(b => b.addEventListener('click', () => jumpTo(JUMP[Number(b.dataset.bxjump)])));
const navBox = $('#header .nav-box');
if (navBox) navBox.addEventListener('click', e => { e.preventDefault(); jumpTo(JUMP[0]); });

/* Where the WebGL donut sits at the end of the original story, read straight from its canvas,
   so the rendered donut can take over in exactly the same place. */
const probe = document.createElement('canvas');
function measureHandoff() {
  try {
    if (!webgl || !webgl.width || document.body.classList.contains('no-webgl')) return null;
    const s = 0.25, w = Math.max(1, Math.round(webgl.width * s)), h = Math.max(1, Math.round(webgl.height * s));
    probe.width = w; probe.height = h;
    const p = probe.getContext('2d', { willReadFrequently: true });
    p.clearRect(0, 0, w, h);
    p.drawImage(webgl, 0, 0, w, h);
    const a = p.getImageData(0, 0, w, h).data;
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (a[(y * w + x) * 4 + 3] > 200) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 < 0) return null;
    const r = webgl.getBoundingClientRect(), kx = r.width / w, ky = r.height / h;
    // match the rendered donut by area (its camera is a little more side-on than the WebGL pose)
    const ww = (x1 - x0) * kx, wh = (y1 - y0) * ky, rw = HERO[3] / HERO[4];
    const size = Math.sqrt(ww * wh * rw);
    return { w: size, cx: r.left + (x0 + x1) / 2 * kx, cy: r.top + (y0 + y1) / 2 * ky };
  } catch { return null; }
}

function keys() {
  const m = mobileMQ.matches;
  const fallback = m ? { w: Math.min(vw * 0.72, vh * 0.36), cx: vw * 0.5, cy: vh * 0.66 } : { w: Math.min(vw * 0.42, vh * 0.66), cx: vw * 0.7, cy: vh * 0.5 };
  const h0 = handRect || fallback;
  const r0 = [0, HERO[0], h0.w, h0.cx, h0.cy, HERO[2]];
  if (m) {
    const hw = Math.min(vw * 0.86, vh * 0.42), boxW = Math.min(vw * 0.96, vh * 0.5), endW = Math.min(vw * 0.92, vh * 0.46);
    return [r0, [30, 0.6, hw, vw * 0.5, vh * 0.58, 0.53], [76, 0.62, boxW, vw * 0.5, vh * 0.47, 0.6], [146, 0.62, boxW, vw * 0.5, vh * 0.47, 0.6], [176, 0.68, endW, vw * 0.5, vh * 0.47, 0.5], [191, 0.68, endW, vw * 0.5, vh * 0.47, 0.5]];
  }
  const g = Math.max(18, Math.min(96, vw * 0.06)), textRight = g + Math.min(520, vw * 0.38), col = (textRight + vw - g * 0.5) / 2, avail = vw - textRight - g * 0.5;
  const boxW = Math.min(avail * 0.95, vh * 0.74), endW = Math.min(avail * 0.92, vh * 0.8);
  return [r0, [30, 0.6, h0.w * 1.04, h0.cx, h0.cy, 0.53], [76, 0.62, boxW, col, vh * 0.535, 0.5], [146, 0.62, boxW, col, vh * 0.535, 0.5], [176, 0.68, endW, col, vh * 0.52, 0.5], [191, 0.68, endW, col, vh * 0.52, 0.5]];
}
function place(f) {
  const k = keys();
  let i = 0;
  while (i < k.length - 2 && f > k[i + 1][0]) i++;
  const a = k[i], b = k[i + 1], t = smooth(a[0], b[0], f);
  const ratio = lerp(a[1], b[1], t), sw = lerp(a[2], b[2], t), cx = lerp(a[3], b[3], t), cy = lerp(a[4], b[4], t), fy = lerp(a[5], b[5], t);
  const w = sw / ratio, h = w * FH / FW;
  layout = { x: cx - w * (i === 0 ? lerp(HERO[1], 0.5, t) : 0.5), y: cy - h * fy, w, h };
  scene.style.width = FW + 'px'; scene.style.height = FH + 'px';
  scene.style.transform = `translate3d(${layout.x.toFixed(2)}px,${layout.y.toFixed(2)}px,0) scale(${(w / FW).toFixed(5)})`;
}

/* frames: bounded cache of decoded bitmaps (anchors + a window round the playhead) */
let src = null, CW = FW, CH = FH, inflight = 0, lastDrawn = -1, dirty = true;
const cache = new Map(), pending = new Map(), blobs = [];
// compressed frames become Blobs once (no data-URL parsing on every re-decode)
async function blobOf(i) {
  if (!blobs[i]) blobs[i] = fetch(src[i]).then(r => { if (!r.ok) throw new Error('Frame HTTP ' + r.status); return r.blob(); });
  return blobs[i];
}
const SAFARI = /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
const small = () => mobileMQ.matches || Math.min(screen.width, screen.height) < 700;
const cfg = () => small() ? { anchor: 16, ahead: 10, behind: 4, w: Math.round(FW * 0.68), h: Math.round(FH * 0.68) } : { anchor: 8, ahead: 18, behind: 8, w: FW, h: FH };
function sizeCanvas() { const c = cfg(); if (canvas.width !== c.w || canvas.height !== c.h) { CW = canvas.width = c.w; CH = canvas.height = c.h; lastDrawn = -1; } }
function keepSet(center, dir) {
  // read further ahead the faster the playhead is chasing the scroll
  const c = cfg(), r = Math.round(center), out = [], ahead = c.ahead + Math.min(16, Math.round(Math.abs(target - shown) * 1.5));
  for (let d = 0; d <= ahead; d++) { const f = r + dir * d; if (f >= 0 && f < NF) out.push(f); }
  for (let d = 1; d <= c.behind; d++) { const f = r - dir * d; if (f >= 0 && f < NF) out.push(f); }
  for (let f = 0; f < NF; f += c.anchor) out.push(f);
  return out;
}
function decode(i) {
  if (cache.has(i)) return Promise.resolve(cache.get(i));
  if (pending.has(i)) return pending.get(i);
  inflight++;
  const c = cfg();
  const p = (async () => {
    const blob = await blobOf(i);
    let bmp;
    if (SAFARI || !('createImageBitmap' in window)) {
      const url = URL.createObjectURL(blob), im = new Image();
      im.src = url;
      try { await im.decode(); } finally { URL.revokeObjectURL(url); }
      bmp = im;
    } else {
      try { bmp = c.w < FW ? await createImageBitmap(blob, { resizeWidth: c.w, resizeHeight: c.h, resizeQuality: 'high' }) : await createImageBitmap(blob); }
      catch { bmp = await createImageBitmap(blob); }
    }
    cache.set(i, bmp);
    return bmp;
  })().catch(e => { console.warn('DOH! box frame', i, e); return null; })
    .finally(() => { inflight--; pending.delete(i); dirty = true; wake(); });
  pending.set(i, p);
  return p;
}
function prefetch(center, dir) {
  if (!src) return;
  const keep = keepSet(center, dir);
  for (const i of keep) { if (inflight >= (small() ? 3 : 6)) break; if (!cache.has(i) && !pending.has(i)) decode(i); }
  const ks = new Set(keep);
  for (const i of [...cache.keys()]) if (!ks.has(i)) { const b = cache.get(i); if (b && b.close) b.close(); cache.delete(i); }
}
function nearest(f) {
  const c = Math.round(f);
  if (cache.has(c)) return c;
  for (let d = 1; d < NF; d++) { if (cache.has(c - d)) return c - d; if (cache.has(c + d)) return c + d; }
  return -1;
}
function draw(f) {
  const a = Math.floor(f), b = Math.min(NF - 1, a + 1), t = f - a, A = cache.get(a), B = cache.get(b);
  if (A && B && t > 0.02 && t < 0.98) {
    if (lastDrawn === a + t) return;
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1; ctx.clearRect(0, 0, CW, CH);
    ctx.globalAlpha = 1 - t; ctx.drawImage(A, 0, 0, CW, CH);
    ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = t; ctx.drawImage(B, 0, 0, CW, CH);
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    lastDrawn = a + t; return;
  }
  const n = t >= 0.98 && B ? b : nearest(f);
  if (n < 0 || n === lastDrawn) return;
  ctx.clearRect(0, 0, CW, CH); ctx.drawImage(cache.get(n), 0, 0, CW, CH); lastDrawn = n;
}

/* overlays */
let active = -1;
function overlays(f) {
  let top = 0;
  chapters.forEach((el, i) => {
    const [a, b, c, d] = WINDOWS[i];
    const o = smooth(a, b, f) * (1 - smooth(c, d, f)) * (i === 0 ? smooth(0.5, 1, hand) : 1);
    el.style.opacity = o.toFixed(3);
    el.style.translate = `0 ${((1 - smooth(a, b, f)) * 26 - smooth(c, d, f) * 26).toFixed(1)}px`;
    const st = (o > 0.01 ? 1 : 0) + (o > 0.5 ? 2 : 0);
    if (el._st !== st) { el._st = st; el.classList.toggle('is-on', o > 0.01); el.classList.toggle('is-active', o > 0.5); el.inert = o < 0.5; }
    if (i !== 2) top = Math.max(top, o);
  });
  const cur = f < 33 ? 0 : f < 73 ? 1 : f < 157 ? 2 : 3;
  if (cur !== active) { active = cur; navBtns.forEach((b, i) => i === cur ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current')); }
  // background: from the original story's final colour to the box pink
  const k = smooth(4, 60, f), pink = [255, 159, 204];
  const c = startBg.map((v, i) => Math.round(lerp(v, pink[i], k)));
  bx.style.setProperty('--bx-bgc', `rgb(${c})`);
  bx.style.setProperty('--bx-fadec', `rgba(${c},.92)`);
  bx.style.setProperty('--bx-fade', top.toFixed(3));
  if (bgWord) bgWord.style.transform = `translate(${(-30 - f * 0.18).toFixed(2)}%,-52%) rotate(${(-8 + f * 0.02).toFixed(2)}deg)`;
  // landing labels + checklist
  let n = 0;
  const fi = Math.min(NF - 1, Math.max(0, Math.round(f))), scale = layout.w / FW;
  pins.forEach(p => {
    const land = p.d.land;
    if (f >= land + 0.5) n++;
    const vis = f < 160 ? smooth(land - 0.5, land + 1.5, f) * (1 - smooth(land + 18, land + 24, f)) : 0;
    if (vis <= 0.001) { if (p.shown) { p.el.style.opacity = '0'; p.shown = false; } return; }
    p.shown = true;
    const pos = p.d.pos[fi], x = layout.x + pos[0] * FW * scale, y = layout.y + pos[1] * FH * scale;
    const pop = reduced.matches ? 1 : 0.55 + 0.45 * backOut(clamp((f - land + 0.5) / 4));
    p.el.style.opacity = vis.toFixed(3);
    p.el.style.transform = `translate3d(${(x - p.w / 2).toFixed(1)}px,${(y - p.h - 18 - (1 - pop) * 14).toFixed(1)}px,0) scale(${pop.toFixed(3)})`;
  });
  six.forEach((li, i) => { const v = f >= pins[i].d.land + 0.5; if (li._in !== v) { li._in = v; li.classList.toggle('is-in', v); } });
  if (count.textContent !== String(n)) count.textContent = String(n);
  if (count._full !== (n === 6)) { count._full = n === 6; count.parentElement.classList.toggle('is-full', n === 6); }
  progress.style.transform = `scaleX(${q.toFixed(4)})`;
  // skip link + step pills step aside before the flavour room slides over them
  const uo = (1 - smooth(0.9, 0.975, q)).toFixed(3);
  if (ui && ui._o !== uo) { ui._o = uo; ui.style.opacity = uo; ui.style.visibility = +uo < 0.01 ? 'hidden' : ''; }
  if (progress._o !== uo) { progress._o = uo; progress.style.opacity = uo; }
}

/* loop */
let raf = 0, last = 0, inView = true, wasOn = false, dir = 1, triedKey = '';
function tick(now) {
  raf = 0;
  const dt = Math.min(0.12, (now - last) / 1000 || 0.016); last = now;
  const before = shown;
  if (reduced.matches) shown = target;
  else { shown += (target - shown) * (1 - Math.exp(-dt * 18)); if (Math.abs(target - shown) < 0.004) shown = target; }
  // prefetch towards where the playhead is heading, and keep that heading while it is still
  if (Math.abs(target - shown) > 0.01) dir = Math.sign(target - shown);
  const on = hand > 0.001;
  // Read the WebGL donut's final pose once (one GPU readback), when the original story has settled
  // on its last frame — never per frame during the cross-fade, which would stall the GPU.
  const settled = webgl && webgl.dataset.progress === '1.0000', key = vw + 'x' + vh;
  if ((settled && rectKey !== key && hand < 0.999) || (on && !handRect && triedKey !== key)) {
    triedKey = key;
    const r = measureHandoff();
    if (r) { handRect = r; rectKey = settled ? key : ''; }
    const m = getComputedStyle(stage).backgroundColor.match(/\d+/g);
    if (m) startBg = m.slice(0, 3).map(Number);
  }
  wasOn = on;
  coverNow = hand >= 0.999;
  if (bx._on !== on) { bx._on = on; bx.classList.toggle('is-on', on); }
  const op = smooth(0, 0.5, hand).toFixed(3), so = smooth(0.5, 1, hand).toFixed(3);
  if (bx._op !== op) { bx._op = op; bx.style.opacity = op; }
  if (scene._so !== so) { scene._so = so; scene.style.opacity = so; }
  if (bx._ah !== (hand < 0.5)) { bx._ah = hand < 0.5; bx.setAttribute('aria-hidden', String(hand < 0.5)); }
  if (on) {
    place(shown);
    overlays(shown);
    if (src) { prefetch(shown, dir); draw(shown); }
  } else if (src) prefetch(0, 1);
  const moving = Math.abs(target - shown) > 0.0005 || before !== shown;
  if (moving || dirty || pending.size) { dirty = false; wake(); }
}
function wake() { if (!raf && inView) raf = requestAnimationFrame(tick); }
if ('IntersectionObserver' in window) new IntersectionObserver(e => { inView = e[e.length - 1].isIntersecting; if (inView) { last = performance.now(); wake(); } }, { rootMargin: '200px' }).observe(story);
addEventListener('scroll', read, { passive: true });
let lastW = innerWidth;
addEventListener('resize', () => { measure(); if (innerWidth !== lastW) { lastW = innerWidth; rectKey = ''; } dirty = true; wake(); }, { passive: true });
addEventListener('pageshow', measure);
mobileMQ.addEventListener('change', () => { sizeCanvas(); cache.forEach(b => b && b.close && b.close()); cache.clear(); lastDrawn = -1; measure(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { setPick(pick); measure(); });
sizeCanvas();
measure();

(function adaptive() {
  const GL = window.DohGL;
  if (!GL) return;
  const cap = Math.min(window.devicePixelRatio || 1, 1.7), floor = Math.min(cap, 1.1);
  let pr = cap, acc = 0, n = 0, prev = 0, good = 0;
  const loop = now => {
    requestAnimationFrame(loop);
    const dt = now - prev; prev = now;
    const active = inView && !document.hidden && scrollY < start + 4 && !coverNow;
    if (!active || dt > 100) { acc = n = 0; return; }
    acc += dt; if (++n < 40) return;
    const avg = acc / n; acc = n = 0;
    if (avg > 20.5 && pr > floor) { pr = Math.max(floor, +(pr - 0.15).toFixed(2)); good = 0; }
    else if (avg < 16.2 && pr < cap) { if (++good < 5) return; good = 0; pr = Math.min(cap, +(pr + 0.1).toFixed(2)); }
    else { good = 0; return; }
    GL.renderer.setPixelRatio(pr); GL.resize();
  };
  requestAnimationFrame(loop);
})();

window.DohBox = {
  framesReady() {
    try { const el = $('#bx-frame-data'); const packed = JSON.parse(el.textContent); src = packed.map.map(i => packed.frames[i]); el.textContent = ''; if (!Array.isArray(src) || src.length !== NF) throw new Error('frames'); }
    catch (e) { console.warn('DOH! box frames unavailable', e); src = null; return; }
    decode(0); dirty = true; wake();
  },
  state: () => ({ q, hand, frame: shown, drawn: lastDrawn, target, cached: cache.size, pending: pending.size, handRect, pick }),
};
})();
