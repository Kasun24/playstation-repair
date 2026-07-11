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
      </div>

      <div className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28">
        <FadeIn>
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-accent font-medium">
            {SITE.name} · Colombo
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.02] tracking-tight max-w-4xl">
            Consoles. Games.
            <br />
            <span className="text-accent drop-shadow-[0_0_28px_rgba(57,255,20,0.4)]">
              Repairs.
            </span>{' '}
            All in one place.
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl">
            {SITE.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink('Hi GameHub LK — I have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-black transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
              Chat on WhatsApp
            </a>
            <Link
              href="/consoles"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Browse consoles
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.32}>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Free repair diagnostics
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Same-day fixes on many faults
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              WhatsApp support 7 days a week
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
