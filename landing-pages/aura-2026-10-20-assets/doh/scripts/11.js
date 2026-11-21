
/* hero candy physics: sprinkles rain in, bounce off the donut, pile up on the floor;
   the cursor shoves them around and a click (or tap) throws them in the air.
   Each sprinkle is three particles held by stiff sticks (Verlet), so it tumbles and rolls. */
(() => {
  const stage = document.getElementById('stage'), hero = document.querySelector('.chapter.hero'), webgl = document.getElementById('webgl');
  if (!stage || !hero || !webgl) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const cv = document.createElement('canvas');
  cv.className = 'hero-sprinkles front'; cv.setAttribute('aria-hidden', 'true');
  webgl.after(cv);
  const ctx = cv.getContext('2d');
  const COL = ['#ff4f8b', '#ffd23f', '#3d8cff', '#34c27a', '#8b5cf6', '#ff7a2f', '#fffaf0'];
  let W = 0, H = 0, dpr = 1, unit = 1, N = 0;
  let P = [], S = [], spawnQ = 0;
  const mouse = { x: -1e4, y: -1e4, px: -1e4, py: -1e4, vx: 0, vy: 0, t: 0 };
  let rnd = 11; const R = () => (rnd = (rnd * 16807) % 2147483647) / 2147483647;

  const donut = () => {
    const m = W <= 800;
    const d = m ? Math.min(W * .72, H * .36) : Math.min(W * .54, H * .804);
    return { x: (m ? .65 : .635) * W, y: (m ? .68 : .51) * H, r: d * .43, ry: d * .4 };
  };
  function addSprinkle(x, y, vx, vy) {
    const len = unit * (2.1 + R() * .9), w = unit * (.62 + R() * .12), a = R() * Math.PI * 2, c = COL[(R() * COL.length) | 0];
    const dx = Math.cos(a) * len / 2, dy = Math.sin(a) * len / 2, base = P.length, rr = w / 2;
    for (let k = -1; k <= 1; k++) P.push({ x: x + dx * k, y: y + dy * k, ox: x + dx * k - vx, oy: y + dy * k - vy, r: rr, s: S.length });
    S.push({ i: base, len, w, c });
  }
  function size() {
    const oldW = W, oldH = H;
    W = stage.clientWidth; H = stage.clientHeight; dpr = Math.min(1.75, devicePixelRatio || 1);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    unit = Math.max(8, Math.min(W, H) * .0165);
    N = W <= 800 ? 60 : 110;
    if (oldW && (Math.abs(oldW - W) > 2 || Math.abs(oldH - H) > 2)) { const kx = W / oldW, ky = H / oldH; P.forEach(p => { p.x *= kx; p.ox *= kx; p.y *= ky; p.oy *= ky; }); }
  }
  // collisions: uniform grid over particles
  const grid = new Map();
  function collide() {
    const cs = unit * 1.2; grid.clear();
    for (let i = 0; i < P.length; i++) { const p = P[i], k = ((p.x / cs) | 0) * 4096 + ((p.y / cs) | 0); let b = grid.get(k); if (!b) grid.set(k, b = []); b.push(i); }
    for (let i = 0; i < P.length; i++) {
      const p = P[i], gx = (p.x / cs) | 0, gy = (p.y / cs) | 0;
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        const b = grid.get((gx + ox) * 4096 + gy + oy); if (!b) continue;
        for (const j of b) {
          if (j <= i) continue; const q = P[j]; if (q.s === p.s) continue;
          const dx = q.x - p.x, dy = q.y - p.y, min = p.r + q.r, d2 = dx * dx + dy * dy;
          if (d2 < min * min && d2 > 1e-6) { const d = Math.sqrt(d2), push = (min - d) / d * .5; p.x -= dx * push; p.y -= dy * push; q.x += dx * push; q.y += dy * push; }
        }
      }
    }
  }
  let last = 0, raf = 0, on = true, idle = 0;
  function step(dt) {
    const g = 2600 * (unit / 10) * dt * dt, dn = donut(), floor = H - unit * .6;
    const fr = .985;
    for (const p of P) {
      const vx = (p.x - p.ox) * fr, vy = (p.y - p.oy) * fr;
      p.ox = p.x; p.oy = p.y; p.x += vx; p.y += vy + g;
    }
    // the cursor shoves what it touches, with its own speed
    const mr = unit * 4.2;
    if (mouse.t > 0) for (const p of P) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < mr * mr) { const d = Math.sqrt(d2) || 1, k = (mr - d) / mr; p.x += dx / d * k * unit * .9 + mouse.vx * k * .35; p.y += dy / d * k * unit * .9 + mouse.vy * k * .35; }
    }
    for (let it = 0; it < 3; it++) {
      // sticks keep each sprinkle rigid
      for (const sp of S) {
        const a = P[sp.i], b = P[sp.i + 1], c = P[sp.i + 2], h = sp.len / 2;
        for (const [u, v, L] of [[a, b, h], [b, c, h], [a, c, sp.len]]) {
          const dx = v.x - u.x, dy = v.y - u.y, d = Math.hypot(dx, dy) || 1e-4, k = (d - L) / d * .5;
          u.x += dx * k; u.y += dy * k; v.x -= dx * k; v.y -= dy * k;
        }
      }
      collide();
      for (const p of P) {
        // donut: an ellipse they bounce and slide off
        const ex = (p.x - dn.x) / (dn.r + p.r), ey = (p.y - dn.y) / (dn.ry + p.r), e = ex * ex + ey * ey;
        if (e < 1) { const d = Math.sqrt(e) || 1e-3, nx = ex / d, ny = ey / d; p.x = dn.x + nx * (dn.r + p.r); p.y = dn.y + ny * (dn.ry + p.r); const vx = p.x - p.ox, vy = p.y - p.oy, vn = vx * nx + vy * ny; if (vn < 0) { p.ox += vn * nx * 1.5; p.oy += vn * ny * 1.5; } }
        if (p.y > floor - p.r) { const vy = p.y - p.oy; p.y = floor - p.r; p.oy = p.y + vy * .35; p.ox = p.x - (p.x - p.ox) * .82; }
        if (p.x < p.r) { p.x = p.r; p.ox = p.x + (p.x - p.ox) * .4; }
        if (p.x > W - p.r) { p.x = W - p.r; p.ox = p.x + (p.x - p.ox) * .4; }
      }
    }
  }
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    for (const sp of S) {
      const a = P[sp.i], c = P[sp.i + 2];
      const fade = Math.min(1, Math.max(0, ((a.y + c.y) / 2 / H - .08) / .1));
      if (fade <= 0) continue;
      ctx.globalAlpha = fade;
      ctx.strokeStyle = 'rgba(120,20,60,.22)'; ctx.lineWidth = sp.w; ctx.beginPath(); ctx.moveTo(a.x + 1.5, a.y + 2.5); ctx.lineTo(c.x + 1.5, c.y + 2.5); ctx.stroke();
      ctx.strokeStyle = sp.c; ctx.lineWidth = sp.w; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(c.x, c.y); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = sp.w * .28; ctx.beginPath();
      const nx = -(c.y - a.y), ny = c.x - a.x, nl = Math.hypot(nx, ny) || 1, o = sp.w * .18;
      ctx.moveTo(a.x - nx / nl * o, a.y - ny / nl * o); ctx.lineTo(c.x - nx / nl * o, c.y - ny / nl * o); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  function frame(now) {
    raf = 0;
    const dt = Math.min(1 / 30, (now - last) / 1000 || 1 / 60); last = now;
    if (S.length < N && (spawnQ += dt * (W <= 800 ? 26 : 40)) >= 1) {
      for (; spawnQ >= 1 && S.length < N; spawnQ--) addSprinkle(R() * W, -unit * 4 - R() * H * .3, (R() - .5) * unit * .3, unit * .2);
    }
    const sub = 2; for (let k = 0; k < sub; k++) step(dt / sub);
    mouse.t = Math.max(0, mouse.t - dt);
    draw();
    // rest when nothing moves and the cursor is away
    let moving = mouse.t > 0 || S.length < N;
    if (!moving) for (const p of P) if (Math.abs(p.x - p.ox) + Math.abs(p.y - p.oy) > .05) { moving = true; break; }
    idle = moving ? 0 : idle + 1;
    if (on && idle < 30) raf = requestAnimationFrame(frame);
  }
  const wake = () => { if (!raf && on && !reduced.matches) { idle = 0; last = performance.now(); raf = requestAnimationFrame(frame); } };
  addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (mouse.t > 0) { mouse.vx = x - mouse.x; mouse.vy = y - mouse.y; } else { mouse.vx = mouse.vy = 0; }
    mouse.x = x; mouse.y = y; mouse.t = .12; wake();
  }, { passive: true });
  addEventListener('pointerdown', e => {
    if (!on || e.target.closest('a,button,input,label')) return;
    const r = stage.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, br = unit * 16;
    for (const p of P) { const dx = p.x - x, dy = p.y - y, d = Math.hypot(dx, dy); if (d < br) { const k = (1 - d / br) * unit * 2.4; p.ox = p.x - dx / (d || 1) * k * .6; p.oy = p.y + k * 1.4 - dy / (d || 1) * k * .3; } }
    wake();
  }, { passive: true });
  const sync = () => {
    const o = hero.style.opacity === '' ? 1 : +hero.style.opacity;
    cv.style.opacity = o.toFixed(3);
    on = o > 0.01 && !document.hidden; if (on) wake();
  };
  new MutationObserver(sync).observe(hero, { attributes: true, attributeFilter: ['style'] });
  document.addEventListener('visibilitychange', sync);
  addEventListener('resize', () => { size(); wake(); }, { passive: true });
  size();
  if (reduced.matches) { // a still, settled pile
    for (let i = 0; i < N; i++) addSprinkle(R() * W, H - unit * (1 + R() * 3), 0, 0);
    for (let k = 0; k < 240; k++) step(1 / 60);
    draw();
  } else { sync(); wake(); }
})();
