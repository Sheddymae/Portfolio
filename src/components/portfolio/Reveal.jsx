import { useEffect, useRef } from 'react';
export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.classList.add('reveal-visible'); observer.disconnect(); } }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal reveal-${direction} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}
