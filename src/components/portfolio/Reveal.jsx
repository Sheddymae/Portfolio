import { useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Keep content visible even if IntersectionObserver is unavailable.
    const show = () => el.classList.add('reveal-visible');

    if (typeof IntersectionObserver === 'undefined') {
      show();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        show();
        observer.disconnect();
      }
    }, { threshold: 0.01, rootMargin: '0px' });

    observer.observe(el);
    const fallback = window.setTimeout(show, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} reveal-safe ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
