import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { SITE } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-1/2 -top-24 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-[70%] top-40 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="container-page pt-10 pb-14 sm:pt-24 sm:pb-28">
        <FadeIn>
          <p className="text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent font-medium">
            {SITE.name}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-4 sm:mt-5 text-[2rem] leading-[1.08] sm:text-6xl sm:leading-[1.02] md:text-7xl font-display font-bold tracking-tight max-w-4xl [text-wrap:balance]">
            <span className="block">PlayStation &amp; Xbox repairs.</span>
            <span className="block">
              Back in the{' '}
              <span className="text-highlight drop-shadow-[0_0_28px_rgba(250,204,21,0.45)]">
                game
              </span>
              . Fast.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-muted max-w-2xl">
            {SITE.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={waLink('Hi PlayStation Repair Sri Lanka — I need a repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
              Book a repair on WhatsApp
            </a>
            <Link
              href="/repairs"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              See what we fix
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.32}>
          <ul className="mt-8 sm:mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              PlayStation &amp; Xbox specialists
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Diagnosis before quote
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              WhatsApp to get started
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
