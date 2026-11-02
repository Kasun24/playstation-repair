import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { SITE, asset } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export default function Hero() {
  const telHref = `tel:${SITE.phone.replace(/\s+/g, '')}`;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
          style={{ backgroundImage: `url(${asset('/workshop/hero.jpg')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
        <div className="absolute left-0 top-1/3 h-[420px] w-[420px] -translate-x-1/3 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-highlight/20 blur-3xl" />
      </div>

      <div className="container-page pt-12 pb-14 sm:pt-24 sm:pb-28">
        <FadeIn>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-text/60">
            Kadawatha · Sri Lanka
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-4 sm:mt-5 font-display font-bold tracking-tight [text-wrap:balance] max-w-4xl">
            <span className="block text-[2rem] leading-[1.02] sm:text-6xl md:text-7xl text-accent drop-shadow-[0_0_32px_rgba(59,130,246,0.4)]">
              PlayStation Repair
            </span>
            <span className="block text-[2rem] leading-[1.02] sm:text-6xl md:text-7xl text-highlight drop-shadow-[0_0_32px_rgba(250,204,21,0.4)]">
              Xbox Repair
            </span>
            <span className="mt-2 sm:mt-3 block text-lg sm:text-2xl md:text-3xl font-medium text-text/85">
              One workshop for both.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-5 sm:mt-7 max-w-2xl text-[15px] sm:text-lg text-muted">
            {SITE.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={waLink('Hi PlayStation Repair Sri Lanka — I need a repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
              Book on WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone size={18} strokeWidth={2.2} aria-hidden />
              Call {SITE.phone}
            </a>
            <Link
              href="/repairs"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-surface/20 px-5 py-3 font-medium text-text/85 transition-colors hover:border-border hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
