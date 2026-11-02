'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onScroll?: boolean;
};

/**
 * Content is visible in the server HTML (no blank page before JS loads).
 * - Default: CSS fade-up on page load.
 * - onScroll: after hydration, sections still below the fold are hidden and
 *   fade in when scrolled into view. Anything already on screen is left alone.
 * Both honour prefers-reduced-motion.
 */
export default function FadeIn({
  children,
  delay = 0,
  className = '',
  onScroll = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'static' | 'hidden' | 'shown'>('static');

  useEffect(() => {
    if (!onScroll) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState('hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState('shown');
        io.disconnect();
      },
      { rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onScroll]);

  if (!onScroll) {
    return (
      <div
        className={`motion-safe:animate-fade-up ${className}`}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  const motionClass =
    state === 'hidden'
      ? 'opacity-0 translate-y-4'
      : state === 'shown'
        ? 'opacity-100 translate-y-0 transition duration-500 ease-out'
        : '';

  return (
    <div
      ref={ref}
      className={`${motionClass} ${className}`}
      style={state === 'shown' && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
