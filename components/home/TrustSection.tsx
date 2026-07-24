import { BadgeCheck, MapPin, Wallet, Zap, type LucideIcon } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

type Item = { icon: LucideIcon; title: string; blurb: string };

const ITEMS: Item[] = [
  {
    icon: BadgeCheck,
    title: 'Genuine gear only',
    blurb:
      'Every console and accessory tested end-to-end before it reaches you.',
  },
  {
    icon: Zap,
    title: 'Fast turnaround',
    blurb:
      'Stick drift and storage upgrades most often same-day; deeper repairs in a few days.',
  },
  {
    icon: Wallet,
    title: 'Fair pricing',
    blurb:
      'No surprise fees. Free diagnostics — we tell you upfront what a fix costs.',
  },
  {
    icon: MapPin,
    title: 'Right here in Colombo',
    blurb:
      'Drop by, or chat first on WhatsApp — pickup and delivery can be arranged.',
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <FadeIn onScroll>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Why us
          </h2>
          <p className="mt-3 text-muted max-w-lg">
            Simple promises we hold ourselves to.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} onScroll delay={i * 0.06}>
                <div className="flex flex-col">
                  <div className="inline-grid h-10 w-10 place-items-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                    <Icon size={18} strokeWidth={2.4} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{item.blurb}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
