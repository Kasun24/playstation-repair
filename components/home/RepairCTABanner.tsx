import Link from 'next/link';
import { ArrowRight, MessageCircle, Wrench } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { SITE, asset } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export default function RepairCTABanner() {
  return (
    <section className="container-page pt-2 pb-6 sm:pt-4 sm:pb-8">
      <FadeIn onScroll>
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface/50">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.18]"
            style={{ backgroundImage: `url(${asset('/workshop/cta.jpg')})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/70 to-bg/40"
            aria-hidden
          />

          <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="flex items-start gap-4 sm:items-center">
              <span
                className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent sm:h-12 sm:w-12"
                aria-hidden
              >
                <Wrench size={22} strokeWidth={2.2} />
              </span>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  Need a repair? Contact us.
                </h2>
                <p className="mt-1 text-sm sm:text-[15px] text-muted max-w-xl">
                  Send a short note about the fault — we&rsquo;ll reply on
                  WhatsApp with next steps and an estimated turnaround.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href="/repairs#book"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Book a repair
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href={waLink(
                  'Hi PlayStation Repair Sri Lanka — I need a repair.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-surface/50 px-5 py-3 text-sm font-medium text-text/90 transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Message ${SITE.whatsappDisplay} on WhatsApp`}
              >
                <MessageCircle size={16} strokeWidth={2.4} aria-hidden />
                WhatsApp now
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
