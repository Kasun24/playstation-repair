'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { asset, type TikTokVideo } from '@/lib/data';

function TikTokLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.144 5.144 0 0 1-1.537-2.85V1h-3.146v13.616c0 1.395-1.132 2.527-2.527 2.527a2.527 2.527 0 1 1 0-5.054c.14 0 .277.012.411.034V8.976a5.671 5.671 0 0 0-.411-.015 5.673 5.673 0 1 0 5.673 5.673V8.632a8.253 8.253 0 0 0 4.951 1.641V7.126a5.132 5.132 0 0 1 0-1.564z" />
    </svg>
  );
}

/**
 * Lightweight TikTok card: shows a cover + caption, and only loads TikTok's
 * official player iframe when tapped (no heavy embed.js on page load).
 */
export default function TikTokEmbed({ video }: { video: TikTokVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border/60 bg-surface">
      {playing ? (
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&description=1&music_info=0&rel=0`}
          title={video.caption ?? 'TikTok video'}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
          aria-label={`Play TikTok video: ${video.caption ?? 'workshop video'}`}
        >
          {video.poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(video.poster)}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/30" aria-hidden />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bg/70 px-2.5 py-1 text-xs text-text/90 backdrop-blur">
            <TikTokLogo className="h-3.5 w-3.5" />@{video.username}
          </span>
          <span
            className="absolute left-1/2 top-1/2 inline-grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-bg shadow-lg transition-transform group-hover:scale-110"
            aria-hidden
          >
            <Play size={26} strokeWidth={2.4} className="ml-1" fill="currentColor" />
          </span>
          {video.caption && (
            <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-text">
              {video.caption}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
