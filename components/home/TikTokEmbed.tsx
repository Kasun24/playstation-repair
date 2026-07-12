'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import type { TikTokVideo } from '@/lib/data';

let scriptPromise: Promise<void> | null = null;

const loadTikTokScript = (): Promise<void> => {
  if (typeof window === 'undefined') return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve) => {
    if (document.getElementById('tiktok-embed-js')) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.id = 'tiktok-embed-js';
    s.src = 'https://www.tiktok.com/embed.js';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
  return scriptPromise;
};

export default function TikTokEmbed({ video }: { video: TikTokVideo }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cancelled = false;
    let mo: MutationObserver | null = null;
    let timeoutId: number | null = null;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        loadTikTokScript();
        mo = new MutationObserver(() => {
          if (el.querySelector('iframe') && !cancelled) {
            setLoaded(true);
            mo?.disconnect();
          }
        });
        mo.observe(el, { childList: true, subtree: true });
        timeoutId = window.setTimeout(() => {
          if (!cancelled) setLoaded(true);
          mo?.disconnect();
        }, 8000);
      },
      { rootMargin: '200px' },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      mo?.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-surface to-surface-2 min-h-[560px]">
      <div
        aria-hidden={loaded}
        className={`absolute inset-0 transition-opacity duration-500 ${
          loaded ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.05)_45%,transparent_60%)] bg-[length:200%_100%] animate-shimmer" />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <span className="text-xs uppercase tracking-widest text-muted">
            @{video.username}
          </span>
          <div>
            <div className="mb-2 inline-grid h-9 w-9 place-items-center rounded-full border border-accent/40 bg-accent/20 text-accent">
              <Play
                size={14}
                strokeWidth={2.6}
                className="ml-0.5"
                aria-hidden
              />
            </div>
            {video.caption && (
              <p className="text-sm text-text/85">{video.caption}</p>
            )}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite={video.url}
          data-video-id={video.id}
          style={{ maxWidth: '605px', minWidth: '325px', margin: 0 }}
        >
          <section>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent underline"
            >
              View on TikTok
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
}
