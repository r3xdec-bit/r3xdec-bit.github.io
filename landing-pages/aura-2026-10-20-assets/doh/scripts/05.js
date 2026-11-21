/* DOH! post-story polish: interactions for everything after the box story. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const fine = matchMedia('(hover: hover) and (pointer: fine)');
const CUT = JSON.parse($('#px-cutouts').textContent); // [strawberry, chocolate, pistachio, original] data URIs

function splitWords(el, cls, start = 0) {
  let n = start;
  const walk = node => [...node.childNodes].forEach(ch => {
    if (ch.nodeType === 3) {
      const frag = document.createDocumentFragment();
      ch.textContent.split(/(\s+)/).forEach(p => {
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
        const w = document.createElement('span'); w.className = cls; w.style.setProperty('--i', n++); w.textContent = p; frag.appendChild(w);
      });
      ch.replaceWith(frag);
    } else if (ch.nodeType === 1 && ch.tagName !== 'BR') walk(ch);
  });
  walk(el);
  return n;
}

/* ---------- headings rise word by word ---------- */
const heads = $$('.content .section-heading h2, .ritual h2, .faq-section h2, .closing h2');
heads.forEach(h => splitWords(h, 'px-w'));
const footWord = $('footer .footer-wordmark');
if (footWord) footWord.innerHTML = [...footWord.textContent].map((c, i) => `<span style="--i:${i}">${c}</span>`).join('');
if ('IntersectionObserver' in window && !reduced.matches) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('px-in'); io.unobserve(e.target); } }), { threshold: 0.3 });
  heads.forEach(h => io.observe(h));
  if (footWord) io.observe(footWord);
} else { heads.forEach(h => h.classList.add('px-in')); footWord && footWord.classList.add('px-in'); }

/* ---------- manifesto: words fill in with scroll ---------- */
const man = $('.manifesto');
let manWords = [];
if (man) {
  [$('h2', man), $('.lead', man), ...$$('.manifesto-right > p:not(.lead)', man)].filter(Boolean).forEach(el => splitWords(el, 'px-f'));
  manWords = $$('.px-f', man);
}

/* ---------- method: cards stack and the covered ones shrink back ---------- */
const cards = $$('.method article');
const cardPick = [3, 1, 0];
cards.forEach((c, k) => {
  c.style.setProperty('--k', k);
  const im = document.createElement('img');
  im.className = 'px-card-donut'; im.alt = ''; im.src = CUT[cardPick[k % 3]];
  c.appendChild(im);
});

// visibility gates so scroll work only runs for sections on screen
const near = new Set();
if ('IntersectionObserver' in window) {
  const gate = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? near.add(e.target) : near.delete(e.target)), { rootMargin: '25% 0px' });
  [man, $('.method-section')].filter(Boolean).forEach(el => gate.observe(el));
} else { near.add(man); near.add($('.method-section')); }
let lit = -1;
function update() {
  ticking = false;
  if (reduced.matches) return;
  const vh = innerHeight;
  if (man && manWords.length && near.has(man)) {
    const r = man.getBoundingClientRect();
    const n = Math.round(clamp((vh * 0.85 - r.top) / (r.height * 0.8)) * manWords.length);
    if (n !== lit) {
      const a = Math.min(n, lit < 0 ? 0 : lit), b = Math.max(n, lit < 0 ? manWords.length : lit);
      for (let i = a; i < b; i++) manWords[i].classList.toggle('on', i < n);
      lit = n;
    }
  }
  const ms = $('.method-section');
  if (cards.length && ms && near.has(ms)) {
    // read everything first, then write (no layout thrash)
    const rects = cards.map(c => c.getBoundingClientRect());
    cards.forEach((c, k) => {
      const next = rects[k + 1];
      const sc = next ? 1 - clamp(1 - (next.top - rects[k].top) / Math.max(1, rects[k].height)) * 0.06 : 1;
      c.style.setProperty('--s', sc.toFixed(4));
      c.style.setProperty('--r', (rects[k].top * 0.12).toFixed(1) + 'deg');
    });
  }
}
let ticking = false;
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll, { passive: true });
update();

/* pause decorative loops while they are off screen */
if ('IntersectionObserver' in window) {
  const loops = [$('.ribbons'), $('.manifesto .round-note'), $('.closing')].filter(Boolean);
  const po = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('px-paused', !e.isIntersecting)));
  loops.forEach(el => po.observe(el));
}

/* ---------- menu: a real donut follows the cursor over the donut rows ---------- */
const rows = $$('#board .menu .menu-row'), DRINKS = JSON.parse($('#px-drinks').textContent);
if (rows.length && fine.matches) {
  const fl = document.createElement('div');
  fl.className = 'px-float';
  fl.setAttribute('aria-hidden', 'true');
  fl.innerHTML = '<img alt="">';
  document.body.appendChild(fl);
  const img = fl.firstChild;
  let x = 0, y = 0, tx = 0, ty = 0, rot = 0, raf = 0, on = false;
  const loop = () => {
    x += (tx - x) * 0.18; y += (ty - y) * 0.18; rot += ((tx - x) * 0.25 - rot) * 0.2;
    fl.style.transform = `translate(${x - 95}px,${y - 95}px) rotate(${rot.toFixed(1)}deg) scale(${on ? 1 : 0.4})`;
    raf = on || Math.abs(tx - x) > 0.5 ? requestAnimationFrame(loop) : 0;
  };
  rows.forEach((row, i) => {
    row.addEventListener('pointerenter', e => { img.src = i < 4 ? CUT[i] : DRINKS[(i - 4) % DRINKS.length]; on = true; fl.classList.add('on'); if (!x) { x = tx = e.clientX + 120; y = ty = e.clientY; } if (!raf) raf = requestAnimationFrame(loop); });
    row.addEventListener('pointermove', e => { tx = e.clientX + 190 + 95 > innerWidth - 8 ? e.clientX - 190 : e.clientX + 190; ty = e.clientY - 20; });
    row.addEventListener('pointerleave', () => { on = false; fl.classList.remove('on'); });
  });
}

/* ---------- tilt on the flavour photo and the box still ---------- */
function tilt(el, target, amount) {
  if (!el || !fine.matches) return;
  el.addEventListener('pointermove', e => {
    if (reduced.matches) return;
    const r = el.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
    target.style.setProperty('--ry', (dx * amount).toFixed(2) + 'deg');
    target.style.setProperty('--rx', (-dy * amount).toFixed(2) + 'deg');
  });
  el.addEventListener('pointerleave', () => { target.style.setProperty('--ry', '0deg'); target.style.setProperty('--rx', '0deg'); });
}
tilt($('#room-photo'), $('#room-photo'), 8);
const rv = $('.ritual-visual');
tilt(rv, rv, 10);

/* ---------- FAQ: smooth open / close ---------- */
$$('.faq-section details').forEach(d => {
  const s = $('summary', d);
  s.addEventListener('click', e => {
    if (reduced.matches || !d.animate) return;
    e.preventDefault();
    const start = d.offsetHeight;
    if (d.open) {
      const end = s.offsetHeight;
      const a = d.animate({ height: [start + 'px', end + 'px'] }, { duration: 320, easing: 'cubic-bezier(.22,.75,.18,1)' });
      a.onfinish = () => { d.open = false; };
    } else {
      d.open = true;
      const end = d.offsetHeight;
      d.animate({ height: [start + 'px', end + 'px'] }, { duration: 380, easing: 'cubic-bezier(.22,.75,.18,1)' });
    }
  });
});

/* ---------- closing: a donut pit ----------
   Small rigid-body sim: fixed 240 Hz steps, impulse contacts with friction, rolling resistance,
   spin damping and sleeping. Donuts fall, hop a little, roll to a stop and then stay put until
   you grab one. */
const closing = $('.closing');
const pit = $('.px-pit');
if (closing && pit) {
  const ctx = pit.getContext('2d');
  const sprites = CUT.map(u => { const im = new Image(); im.src = u; im.onload = () => draw(); return im; });
  const G = 2600, STEP = 1 / 240, MU = 0.95, MAX_SPIN = 7;
  let W = 0, H = 0, F = 0, dpr = 1, R = 50, bodies = [], running = false, started = false, last = 0, acc = 0, drag = null, inView = false;
  const floorY = () => H - (W < 800 ? 30 : 46); // the footer sheet overlaps the bottom of this section
  function size() {
    const r = closing.getBoundingClientRect();
    dpr = Math.min(2, devicePixelRatio || 1);
    W = r.width; H = r.height; F = floorY();
    pit.width = Math.round(W * dpr); pit.height = Math.round(H * dpr);
    R = clamp(Math.min(W, H) * 0.085, 34, 74);
    bodies.forEach(b => { b.r = R * b.k; b.x = clamp(b.x, b.r, W - b.r); b.y = Math.min(b.y, F - b.r); wakeBody(b); });
    draw();
  }
  function spawn() {
    const n = W < 700 ? 9 : 16;
    bodies = [];
    for (let i = 0; i < n; i++) {
      const k = 0.85 + Math.random() * 0.3;
      bodies.push({ x: R + Math.random() * (W - 2 * R), y: -R * (1.4 + i * 1.5), vx: (Math.random() - 0.5) * 140, vy: 0,
        a: Math.random() * 6.283, va: (Math.random() - 0.5) * 2, r: R * k, k, s: i % 4, sleep: false, still: 0, onFloor: false, support: false });
    }
  }
  function wakeBody(b) { if (b.sleep) { b.sleep = false; b.still = 0; b.creep = 0; } }
  function hasSupport(b) {
    if (b.y >= F - b.r - 1.5) return true;
    for (const o of bodies) {
      if (o === b || o.y <= b.y) continue;
      const d = Math.hypot(o.x - b.x, o.y - b.y);
      if (d < o.r + b.r + 1.5 && (o.y - b.y) / d > 0.3) return true;
    }
    return false;
  }
  function step(h) {
    const dragB = drag && drag.b;
    for (const b of bodies) {
      b.support = false; b.onFloor = false;
      if (b.sleep || b === dragB) continue;
      b.vy += G * h;
      b.vx *= Math.exp(-0.25 * h);
      b.x += b.vx * h; b.y += b.vy * h;
      b.a += b.va * h; b.va *= Math.exp(-1.8 * h);
      if (b.y > F - b.r) { b.y = F - b.r; if (b.vy > 0) b.vy = b.vy > 260 ? -b.vy * 0.3 : 0; b.onFloor = b.support = true; }
      if (b.x < b.r) { b.x = b.r; if (b.vx < 0) b.vx = -b.vx * 0.3; }
      if (b.x > W - b.r) { b.x = W - b.r; if (b.vx > 0) b.vx = -b.vx * 0.3; }
    }
    for (let it = 0; it < 5; it++) for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
      const A = bodies[i], B = bodies[j];
      if (A.sleep && B.sleep) continue;
      let dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
      const m = A.r + B.r;
      if (d >= m) continue;
      if (d < 1e-3) { dx = 0.01; dy = 0; d = 0.01; }
      const nx = dx / d, ny = dy / d;
      const movingA = A === dragB || (!A.sleep && Math.hypot(A.vx, A.vy) > 40), movingB = B === dragB || (!B.sleep && Math.hypot(B.vx, B.vy) > 40);
      if (A.sleep && movingB) wakeBody(A);
      if (B.sleep && movingA) wakeBody(B);
      const ia = A.sleep || A === dragB ? 0 : 1, ib = B.sleep || B === dragB ? 0 : 1;
      if (!(ia + ib)) continue;
      const c = Math.max(0, m - d - 0.15) / (ia + ib) * 0.8;
      A.x -= nx * c * ia; A.y -= ny * c * ia; B.x += nx * c * ib; B.y += ny * c * ib;
      if (ny > 0.3) A.support = true;   // B is below A
      if (ny < -0.3) B.support = true;  // A is below B
      const vn = (B.vx - A.vx) * nx + (B.vy - A.vy) * ny;
      if (vn < 0) {
        const e = vn < -280 ? 0.22 : 0;
        const jn = -(1 + e) * vn / (ia + ib);
        A.vx -= jn * nx * ia; A.vy -= jn * ny * ia; B.vx += jn * nx * ib; B.vy += jn * ny * ib;
        const tx = -ny, ty = nx, vt = (B.vx - A.vx) * tx + (B.vy - A.vy) * ty;
        const jt = clamp(-vt / (ia + ib), -MU * jn, MU * jn);
        A.vx -= jt * tx * ia; A.vy -= jt * ty * ia; B.vx += jt * tx * ib; B.vy += jt * ty * ib;
        // only a genuinely glancing hit sets a donut spinning; resting contacts never add spin
        if (it === 0 && Math.abs(vt) > 150) { const sp = clamp(vt * 0.0025, -2.5, 2.5); A.va -= sp * ia; B.va += sp * ib; }
      }
    }
    for (const b of bodies) {
      if (b.sleep || b === dragB) continue;
      if (b.onFloor) { b.vx *= Math.exp(-7 * h); b.va = b.vx / b.r; }          // rolls, with rolling resistance
      else if (b.support) b.va *= Math.exp(-9 * h);                            // resting on another donut: no spin
      b.va = clamp(b.va, -MAX_SPIN, MAX_SPIN);                                 // never a crazy spin
      const sp = Math.hypot(b.vx, b.vy);
      if (b.support && sp < 16 && Math.abs(b.va) < 0.35) { b.still += h; if (b.still > 0.28) { b.sleep = true; b.vx = b.vy = b.va = 0; } }
      else b.still = 0;
      // settle guard: a supported donut that only creeps slowly for a while is put to rest
      if (b.support && sp < 70) { b.creep = (b.creep || 0) + h; if (b.creep > 1.6) { b.sleep = true; b.vx = b.vy = b.va = 0; b.creep = 0; } }
      else b.creep = 0;
    }
    // a sleeping donut whose support was pulled away wakes up and falls
    for (const b of bodies) if (b.sleep && !hasSupport(b)) wakeBody(b);
  }
  function draw() {
    if (!W) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (const b of bodies) {   // soft contact shadows on the floor, fading with height
      const lift = clamp((F - b.y - b.r) / 260);
      if (lift >= 1) continue;
      ctx.fillStyle = `rgba(90,10,45,${(0.2 * (1 - lift)).toFixed(3)})`;
      ctx.beginPath(); ctx.ellipse(b.x + 4, F - 3, b.r * (0.86 - lift * 0.3), b.r * 0.16, 0, 0, 6.283); ctx.fill();
    }
    for (const b of bodies) {
      const im = sprites[b.s];
      if (!im.complete || !im.naturalWidth) continue;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a);
      ctx.drawImage(im, -b.r * 1.06, -b.r * 1.06, b.r * 2.12, b.r * 2.12);
      ctx.restore();
    }
  }
  function frame(now) {
    acc += Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
    let n = 0;
    while (acc >= STEP && n < 14) { step(STEP); acc -= STEP; n++; }
    if (n === 14) acc = 0;
    draw();
    const awake = drag || bodies.some(b => !b.sleep);
    if (inView && awake) requestAnimationFrame(frame); else running = false;
  }
  function wake() { if (!running && inView) { running = true; last = performance.now(); acc = 0; requestAnimationFrame(frame); } }
  function settleInstantly() { for (let i = 0; i < 4000 && bodies.some(b => !b.sleep); i++) step(STEP); draw(); }
  const pt = e => { const r = pit.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const hit = p => { for (let i = bodies.length - 1; i >= 0; i--) { const b = bodies[i]; if (Math.hypot(p.x - b.x, p.y - b.y) < b.r * 0.98) return b; } return null; };
  pit.addEventListener('pointerdown', e => {
    const p = pt(e), b = hit(p);
    if (!b) return;
    wakeBody(b);
    if (e.pointerType === 'touch') {  // touch: a tap makes the donut hop (dragging would fight page scrolling)
      b.vy = -950 - Math.random() * 300; b.vx = (Math.random() - 0.5) * 420; b.va = (Math.random() - 0.5) * 8; wake(); return;
    }
    drag = { b, ox: b.x - p.x, oy: b.y - p.y, px: p.x, py: p.y, t: performance.now(), vx: 0, vy: 0 };
    b.vx = b.vy = 0;
    pit.setPointerCapture(e.pointerId); wake();
  });
  pit.addEventListener('pointermove', e => {
    if (!drag) return;
    const p = pt(e), now = performance.now(), dt = Math.max(0.008, (now - drag.t) / 1000), b = drag.b;
    // smoothed release velocity, so a flick throws and a slow drag just places
    drag.vx = drag.vx * 0.5 + ((p.x - drag.px) / dt) * 0.5; drag.vy = drag.vy * 0.5 + ((p.y - drag.py) / dt) * 0.5;
    b.x = clamp(p.x + drag.ox, b.r, W - b.r); b.y = Math.min(p.y + drag.oy, F - b.r);
    b.vx = drag.vx; b.vy = drag.vy; b.va = clamp(b.vx / b.r * 0.4, -6, 6);
    drag.px = p.x; drag.py = p.y; drag.t = now;
  });
  const drop = () => {
    if (!drag) return;
    const b = drag.b;
    if (performance.now() - drag.t > 90) { drag.vx = drag.vy = 0; }  // held still before letting go: just drop it
    b.vx = clamp(drag.vx, -2200, 2200); b.vy = clamp(drag.vy, -2200, 2200); b.va = clamp(b.vx / b.r * 0.4, -6, 6);
    drag = null; wakeBody(b); wake();
  };
  pit.addEventListener('pointerup', drop); pit.addEventListener('pointercancel', drop);
  let pitW = innerWidth;
  addEventListener('resize', () => { if (started && innerWidth !== pitW) { pitW = innerWidth; size(); wake(); } }, { passive: true });
  const io = new IntersectionObserver(es => {
    inView = es[es.length - 1].isIntersecting;
    if (inView && !started) {
      started = true; size(); spawn();
      if (reduced.matches) settleInstantly(); else wake();
    } else if (inView) wake();
  }, { threshold: 0.25 });
  io.observe(closing);
  const state = () => ({ awake: bodies.filter(b => !b.sleep).length, total: bodies.length, maxSpin: +Math.max(0, ...bodies.map(b => Math.abs(b.va))).toFixed(3),
    maxSpeed: +Math.max(0, ...bodies.map(b => Math.hypot(b.vx, b.vy))).toFixed(1), running });
  window.DohPit = { state };
}
})();
