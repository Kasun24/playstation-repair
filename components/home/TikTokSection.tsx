import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import TikTokEmbed from '@/components/home/TikTokEmbed';
import { TIKTOK } from '@/lib/data';

export default function TikTokSection() {
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TIKTOK.videos.map((v) => (
            <TikTokEmbed key={v.id} video={v} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
