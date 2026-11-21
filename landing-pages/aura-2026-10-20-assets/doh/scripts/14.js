
/* card swap (after reactbits.dev/components/card-swap): elastic.out(.6,.9), drop 2s, promote 2s (stagger .15s,
   overlap .9), return 2s; one swap every 5s, paused on hover and while the section is off screen */
(() => {
  const stack = document.querySelector('.swap-stack'); if (!stack) return;
  const cards = [...stack.querySelectorAll('.swap-card')], legend = [...document.querySelectorAll('.swap-legend li')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const P2 = 2 * Math.PI / 1.5, P3 = 1.5 / (2 * Math.PI) * Math.asin(1);
  const elastic = t => t >= 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - P3) * P2) + 1;
  let order = cards.map((_, i) => i), dist = 60, vdist = 70;
  const SKEW = 6;
  const slot = i => ({ x: i * dist, y: -i * vdist, z: -i * dist * 1.5 });
  const st = cards.map(() => ({ x: 0, y: 0, z: 0, tw: null }));
  const apply = k => { const c = st[k]; cards[k].style.transform = `translate3d(${c.x.toFixed(2)}px,${c.y.toFixed(2)}px,${c.z.toFixed(2)}px) skewY(${SKEW}deg)`; };
  const size = () => { const w = cards[0].offsetWidth || 480, k = w / 480; dist = 60 * k; vdist = 70 * k; };
  const place = () => { size(); order.forEach((k, i) => { const s = slot(i); Object.assign(st[k], s, { tw: null }); cards[k].style.zIndex = cards.length - i; apply(k); }); };
  const tween = (k, to, start, dur) => { st[k].tw = { from: null, to, start, dur }; };
  let raf = 0;
  const frame = now => {
    raf = 0; let busy = false;
    st.forEach((c, k) => {
      const t = c.tw; if (!t) return;
      if (now < t.start) { busy = true; return; }
      if (!t.from) t.from = { x: c.x, y: c.y, z: c.z };
      const p = Math.min(1, (now - t.start) / t.dur), e = elastic(p);
      for (const a of ['x', 'y', 'z']) if (a in t.to) c[a] = t.from[a] + (t.to[a] - t.from[a]) * e;
      apply(k);
      if (p >= 1) c.tw = null; else busy = true;
    });
    if (busy) raf = requestAnimationFrame(frame);
  };
  const run = () => { if (!raf) raf = requestAnimationFrame(frame); };
  const syncLegend = () => legend.forEach((li, i) => li.classList.toggle('is-on', i === +cards[order[0]].dataset.step));
  function swap() {
    if (order.length < 2) return;
    const now = performance.now(), [front, ...rest] = order, D = 1700;
    // drop the front card
    tween(front, { y: st[front].y + 500 }, now, D);
    // promote the rest, slightly staggered, starting near the end of the drop's fast part
    const promoteAt = now + D * (1 - 0.9);
    rest.forEach((k, i) => { setTimeout(() => { cards[k].style.zIndex = cards.length - i; }, D * .1); const s = slot(i); tween(k, s, promoteAt + i * 150, D); });
    // return the dropped card to the back
    const back = slot(cards.length - 1), returnAt = promoteAt + D * 0.05;
    setTimeout(() => { cards[front].style.zIndex = 1; st[front].tw = { from: null, to: back, start: performance.now(), dur: D }; run(); }, returnAt - now);
    order = [...rest, front];
    setTimeout(syncLegend, D * .25);
    run();
  }
  // the reverse move: the back card drops out of the pile and lands on the front
  function unswap() {
    if (order.length < 2) return;
    const now = performance.now(), back = order[order.length - 1], rest = order.slice(0, -1), D = 1600;
    tween(back, { y: st[back].y + 420 }, now, D * .5);
    rest.forEach((k, i) => { cards[k].style.zIndex = cards.length - i - 1; tween(k, slot(i + 1), now + D * .1 + i * 120, D); });
    setTimeout(() => { cards[back].style.zIndex = cards.length + 1; st[back].tw = { from: null, to: slot(0), start: performance.now(), dur: D }; run(); setTimeout(() => { cards[back].style.zIndex = cards.length; }, D); }, D * .28);
    order = [back, ...rest];
    setTimeout(syncLegend, D * .3);
    run();
  }
  // scroll position picks the front card: 01, 02, 03
  const track = document.querySelector('.swap-track');
  let shown = 0, sraf = 0;
  const read = () => {
    sraf = 0;
    const r = track.getBoundingClientRect(), len = Math.max(1, track.offsetHeight - innerHeight);
    const want = Math.max(0, Math.min(cards.length - 1, Math.floor(Math.max(0, Math.min(1, -r.top / len)) * cards.length)));
    if (reduced.matches) { while (shown < want) { order.push(order.shift()); shown++; } while (shown > want) { order.unshift(order.pop()); shown--; } place(); syncLegend(); return; }
    while (shown < want) { swap(); shown++; }
    while (shown > want) { unswap(); shown--; }
  };
  addEventListener('scroll', () => { if (!sraf) sraf = requestAnimationFrame(read); }, { passive: true });
  const goTo = i => { let y = 0, n = track; while (n) { y += n.offsetTop; n = n.offsetParent; } scrollTo({ top: y + (i + .5) / cards.length * (track.offsetHeight - innerHeight), behavior: reduced.matches ? 'auto' : 'smooth' }); };
  cards.forEach(c => c.addEventListener('click', () => goTo(Math.min(cards.length - 1, shown + 1))));
  legend.forEach((li, i) => { li.style.cursor = 'pointer'; li.addEventListener('click', () => goTo(i)); });
  addEventListener('resize', () => { place(); }, { passive: true });
  place(); syncLegend(); read();
})();
