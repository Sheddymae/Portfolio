import { useEffect, useRef } from 'react';

export default function useMouseParallax(enabled = true) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer:fine)').matches) return;
    let frame; let tx = 0; let ty = 0; let x = 0; let y = 0;
    const move = (e) => { const r = node.getBoundingClientRect(); tx = (e.clientX - r.left - r.width / 2) / r.width; ty = (e.clientY - r.top - r.height / 2) / r.height; };
    const reset = () => { tx = 0; ty = 0; };
    const tick = () => { x += (tx - x) * .07; y += (ty - y) * .07; node.style.setProperty('--mx', x); node.style.setProperty('--my', y); frame = requestAnimationFrame(tick); };
    node.addEventListener('pointermove', move, { passive: true }); node.addEventListener('pointerleave', reset, { passive: true }); frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); node.removeEventListener('pointermove', move); node.removeEventListener('pointerleave', reset); };
  }, [enabled]);
  return ref;
}
