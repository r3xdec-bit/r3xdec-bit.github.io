
/* pinned scroll stories: the flavour room (4 flavours) and the recipe (3 steps).
   Scroll position picks the active item; within an item, --lp (0..1) drives the gentle motion. */
(() => {
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function story(track, count, onIndex, onLocal) {
    if (!track) return null;
    let cur = -1, raf = 0;
    const read = () => {
      raf = 0;
      const r = track.getBoundingClientRect(), len = Math.max(1, track.offsetHeight - innerHeight);
      if (r.bottom < -innerHeight || r.top > innerHeight * 2) return;
      const p = clamp(-r.top / len), f = p * count, i = Math.min(count - 1, Math.floor(f)), lp = clamp(f - i);
      if (i !== cur) { const prev = cur; cur = i; onIndex(i, prev); }
      onLocal(p, i, reduced.matches ? .5 : lp);
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(read); }, { passive: true });
    addEventListener('resize', () => { if (!raf) raf = requestAnimationFrame(read); }, { passive: true });
    read();
    // jump to an item: lands in the middle of its stretch
    return i => { let y = 0, n = track; while (n) { y += n.offsetTop; n = n.offsetParent; } const len = track.offsetHeight - innerHeight; scrollTo({ top: y + (i + .5) / count * len, behavior: reduced.matches ? 'auto' : 'smooth' }); };
  }

  /* flavour room */
  const room = document.getElementById('flavour-room'), storyEl = document.querySelector('.room-story');
  const roomBars = [...document.querySelectorAll('.room-photo .room-steps i')];
  const select = i => { if (window.DohExperience && DohExperience.selectFlavour) DohExperience.selectFlavour(i); };
  const goRoom = story(document.querySelector('.room-track'), 4, (i, prev) => {
    select(i);
    if (prev >= 0 && storyEl) { storyEl.classList.remove('swap'); void storyEl.offsetWidth; storyEl.classList.add('swap'); }
  }, (p, i, lp) => {
    room.style.setProperty('--lp', lp.toFixed(3));
    roomBars.forEach((b, k) => b.style.setProperty('--f', clamp(p * 4 - k).toFixed(3)));
  });
  if (goRoom) document.querySelectorAll('[data-taste]').forEach((b, i) => b.addEventListener('click', () => goRoom(i)));

})();
