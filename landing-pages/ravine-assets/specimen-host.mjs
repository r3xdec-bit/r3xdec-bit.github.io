// Keep the photographed specimen visible while its worker prepares the live view.
export async function createSpecimen({canvas, onReady}) {
  if (!canvas.transferControlToOffscreen || !window.Worker) throw Error('Offscreen rendering is not supported');
  const stage = canvas.parentElement;
  const origin = new URL(document.baseURI).origin;
  const events = new AbortController();
  let worker, resize, destroyed = false;
  let state = {time: 0, active: false};
  const dispose = () => {
    destroyed = true;
    events.abort();
    resize?.disconnect();
    worker?.terminate();
  };
  const command = (name, value) => { if (!destroyed) worker.postMessage({specimenCommand: name, value}); };
  stage.classList.add('is-loading');
  try {
    const response = await fetch(origin + '/landing-pages/ravine-assets/worker-runtime.mjs');
    if (!response.ok) throw Error('Specimen worker could not load');
    const url = URL.createObjectURL(new Blob([await response.text()], {type: 'text/javascript'}));
    worker = new Worker(url);
    URL.revokeObjectURL(url);
    const ready = new Promise((resolve, reject) => {
      const fail = message => {
        stage.classList.remove('live', 'is-loading');
        canvas.dataset.workerError = message;
        dispose();
        reject(Error(message));
      };
      worker.onerror = event => fail(event.message || 'Specimen worker failed');
      worker.onmessage = ({data}) => {
        if (data.workerError) {
          fail(data.workerError);
          return;
        }
        if (data.workerState) {
          state = data.workerState;
          canvas.dataset.workerState = JSON.stringify(state);
          canvas.dataset.renderedFrames = String(state.renderedFrames || 0);
          canvas.dataset.animationActive = String(!!state.active);
        }
        for (const [id, key, value] of data.workerDOM || []) {
          if (id !== 'scene') continue;
          if (key.startsWith('style.')) canvas.style[key.slice(6)] = value;
          else if (key.startsWith('attribute.')) canvas.setAttribute(key.slice(10), value);
        }
        if (data.specimenReady) resolve();
      };
    });
    const size = () => { const rect = stage.getBoundingClientRect(); return {width: rect.width, height: rect.height, dpr: devicePixelRatio}; };
    const offscreen = canvas.transferControlToOffscreen();
    worker.postMessage({workerInit: true, kind: 'specimen', canvas: offscreen, ...size(), origin, assets: window.__RAVINE_ASSETS, hidden: document.hidden, reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, coarse: matchMedia('(pointer:coarse)').matches, nodes: [{id: 'scene', dataset: {}, values: {}}]}, [offscreen]);
    canvas.dataset.renderThread = 'worker';
    resize = new ResizeObserver(() => worker.postMessage({workerResize: true, ...size()}));
    resize.observe(stage);
    for (const type of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'keydown', 'keyup']) canvas.addEventListener(type, event => {
      if (type === 'pointerdown') canvas.setPointerCapture(event.pointerId);
      if (type === 'keydown' && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '=', '-'].includes(event.key)) event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      worker.postMessage({workerEvent: {type, targetId: 'scene', pointerId: event.pointerId, pointerType: event.pointerType, button: event.button, buttons: event.buttons, clientX: event.clientX - rect.left, clientY: event.clientY - rect.top, pageX: event.clientX - rect.left, pageY: event.clientY - rect.top, key: event.key, code: event.code, ctrlKey: event.ctrlKey, metaKey: event.metaKey, shiftKey: event.shiftKey, altKey: event.altKey}});
    }, {signal: events.signal});
    document.addEventListener('visibilitychange', () => worker.postMessage({workerHidden: document.hidden}), {signal: events.signal});
    addEventListener('pagehide', event => { if (!event.persisted) dispose(); }, {signal: events.signal});
    await ready;
    onReady?.();
    return {
      get time() { return state.time; }, get active() { return state.active; },
      activate: value => command('activate', value), pause: value => command('pause', value),
      focus: value => command('focus', value), relight: value => command('relight', value),
      zoom: value => command('zoom', value), dispose
    };
  } catch (error) {
    dispose();
    throw error;
  } finally {
    stage.classList.remove('is-loading');
  }
}
