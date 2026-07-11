import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { TIKTOK } from '@/lib/data';

export default function TikTokPlaceholder() {
  return (
    <section className="container-page py-16 sm:py-24">
      <FadeIn onScroll>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Follow us on TikTok
            </h2>
            <p className="mt-3 text-muted max-w-lg">
              Unboxings, repair timelapses, and new arrivals — every week on{' '}
              {TIKTOK.handle}.
            </p>
          </div>
          <Link
            href={TIKTOK.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/40 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View more on TikTok
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </FadeIn>

      <FadeIn onScroll delay={0.1}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIKTOK.videos.map((v) => (
            <div
              key={v.id}
              className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-surface to-surface-2"
            >
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.05)_45%,transparent_60%)] bg-[length:200%_100%] animate-shimmer" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="text-xs uppercase tracking-widest text-muted">
                  @{v.username}
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
                  <p className="text-sm text-text/85">{v.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <p className="mt-6 text-xs text-muted">
        Live TikTok embeds land in Step 8.
      </p>
    </section>
  );
}
