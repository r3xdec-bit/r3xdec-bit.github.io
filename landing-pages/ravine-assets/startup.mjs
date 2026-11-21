// Keep input and paint opportunities between CPU preparation and GPU uploads.
export function createStartupScheduler({budget = 6, now = () => performance.now(), pause = () => new Promise(resolve => setTimeout(resolve, 0))} = {}) {
  let deadline = now() + budget;
  return {
    due: () => now() >= deadline,
    async yield() { await pause(); deadline = now() + budget; },
    async visit(root, callback) {
      const nodes = [];
      root.traverse(node => nodes.push(node));
      for (const node of nodes) {
        await callback(node);
        if (now() >= deadline) { await pause(); deadline = now() + budget; }
      }
    }
  };
}
