
/* hero: headline letters rise in; sprinkles drift behind and in front of the donut */
(() => {
  const stage = document.getElementById('stage'), hero = document.querySelector('.chapter.hero'), h1 = hero && hero.querySelector('h1');
  if (!stage || !hero) return;
  if (h1) { let k = 0; h1.querySelectorAll('.w').forEach(w => { w.innerHTML = [...w.textContent].map(c => `<span class="ch" style="--k:${k++}">${c}</span>`).join(''); }); }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)'), webgl = document.getElementById('webgl');
  const back = document.createElement('canvas'), front = document.createElement('canvas');
  back.className = 'hero-sprinkles back'; front.className = 'hero-sprinkles front';
  back.setAttribute('aria-hidden', 'true'); front.setAttribute('aria-hidden', 'true');
  stage.insertBefore(back, webgl); webgl.after(front);
  const C = ['#ff4f8b', '#ffd23f', '#3d8cff', '#34c27a', '#8b5cf6', '#ff7a2f', '#fffaf0'];
  let rnd = 7; const R = () => (rnd = (rnd * 16807) % 2147483647) / 2147483647;
  // sprinkles live mostly on the donut's side of the screen, clear of the copy
  const make = (n, z0, z1) => Array.from({ length: n }, () => ({ x: R(), y: R(), z: z0 + R() * (z1 - z0), a: R() * 6.28, va: (R() - .5) * .8, vy: .006 + R() * .012, c: C[(R() * C.length) | 0], ph: R() * 6.28 }));
  const layers = [{ cv: back, ps: make(30, .3, .7) }, { cv: front, ps: [] }];
  let W = 0, H = 0, dpr = 1, mx = 0, my = 0, tx = 0, ty = 0, raf = 0, last = 0, on = true;
  const size = () => { W = stage.clientWidth; H = stage.clientHeight; dpr = Math.min(1.5, devicePixelRatio || 1); layers.forEach(l => { l.cv.width = Math.round(W * dpr); l.cv.height = Math.round(H * dpr); }); };
  const draw = now => {
    raf = 0;
    const dt = Math.min(.05, (now - last) / 1000 || .016); last = now;
    mx += (tx - mx) * .06; my += (ty - my) * .06;
    const base = Math.min(W, H) * .016, narrow = W <= 800;
    layers.forEach(({ cv, ps }, li) => {
      const ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      ps.forEach(p => {
        if (!reduced.matches) { p.y -= p.vy * dt * p.z; p.a += p.va * dt; if (p.y < -.08) { p.y = 1.08; p.x = R(); } }
        const px = p.x;
        const x = (px + Math.sin(now * .0006 + p.ph) * .01) * W + mx * 40 * p.z, y = p.y * H + my * 30 * p.z;
        const len = base * 2.6 * p.z, wd = base * .62 * p.z, fade = Math.min(1, Math.max(0, (y / H - .1) / .12));
        ctx.save(); ctx.translate(x, y); ctx.rotate(p.a);
        ctx.globalAlpha = (li ? .92 : .55 + .4 * p.z) * fade;
        if (li) { ctx.shadowColor = 'rgba(120,20,60,.25)'; ctx.shadowBlur = 10 * p.z; ctx.shadowOffsetY = 6 * p.z; }
        ctx.fillStyle = p.c; ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-len / 2, -wd / 2, len, wd, wd / 2); else ctx.rect(-len / 2, -wd / 2, len, wd);
        ctx.fill();
        ctx.globalAlpha *= .35; ctx.fillStyle = '#fff'; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(-len / 2 + wd * .4, -wd / 2 + wd * .12, len - wd * .8, wd * .26, wd * .13); ctx.fill();
        ctx.restore();
      });
    });
    if (on && !reduced.matches) raf = requestAnimationFrame(draw);
  };
  const sync = () => {
    const o = hero.style.opacity === '' ? 1 : +hero.style.opacity;
    back.style.opacity = front.style.opacity = o.toFixed(3);
    const was = on; on = o > 0.01 && !document.hidden;
    if (on && !was && !raf) { last = performance.now(); raf = requestAnimationFrame(draw); }
  };
  new MutationObserver(sync).observe(hero, { attributes: true, attributeFilter: ['style'] });
  document.addEventListener('visibilitychange', sync);
  addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
  addEventListener('resize', () => { size(); if (!raf) raf = requestAnimationFrame(draw); }, { passive: true });
  size(); sync(); raf = requestAnimationFrame(draw);
})();
