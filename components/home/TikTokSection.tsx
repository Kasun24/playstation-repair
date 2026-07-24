import Link from 'next/link';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import TikTokEmbed from '@/components/home/TikTokEmbed';
import { TIKTOK } from '@/lib/data';

export default function TikTokSection() {
  const hasMultiple = TIKTOK.videos.length > 1;
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
        <div
          className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
          role="region"
          aria-label="TikTok videos"
        >
          {TIKTOK.videos.map((v) => (
            <div
              key={v.id}
              className="w-[85%] shrink-0 snap-start sm:w-[55%] md:w-[45%] lg:w-auto lg:shrink"
            >
              <TikTokEmbed video={v} />
            </div>
          ))}
        </div>
        {hasMultiple && (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted lg:hidden">
            Swipe to see more
            <MoveRight size={14} aria-hidden />
          </p>
        )}
      </FadeIn>
    </section>
  );
}
