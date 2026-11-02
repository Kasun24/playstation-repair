import { MapPin, MessageCircle, Wallet, Wrench, type LucideIcon } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

type Item = { icon: LucideIcon; title: string; blurb: string };

const ITEMS: Item[] = [
  {
    icon: Wrench,
    title: 'Repair-first',
    blurb: 'PlayStation and Xbox repairs are our daily work.',
  },
  {
    icon: Wallet,
    title: 'Clear quotes',
    blurb: 'We diagnose the fault and share the cost before starting.',
  },
  {
    icon: MessageCircle,
    title: 'Easy to reach',
    blurb: 'WhatsApp is the quickest way to describe the fault and book a slot.',
  },
  {
    icon: MapPin,
    title: 'Kadawatha workshop',
    blurb: 'Open 7 days. Drop by, or arrange it over WhatsApp first.',
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-12 sm:py-20">
        <FadeIn onScroll>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Why us
          </h2>
          <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
            Simple promises we hold ourselves to.
          </p>
        </FadeIn>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
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
