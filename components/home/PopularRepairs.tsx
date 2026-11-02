import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { REPAIRS } from '@/lib/data';
import { repairIcon } from '@/lib/repairIcons';

const POPULAR = [
  'no-display',
  'hdmi-port',
  'stick-drift',
  'clean-thermal',
  'bluray-drive',
  'charging-port',
];

export default function PopularRepairs() {
  const repairs = POPULAR.map((id) => REPAIRS.find((r) => r.id === id)).filter(
    (r): r is NonNullable<typeof r> => Boolean(r),
  );

  return (
    <section className="container-page py-12 sm:py-20">
      <FadeIn onScroll>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-accent">
              What we fix
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Popular repairs
            </h2>
            <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
              PS5, PS4 and Xbox — consoles and controllers. Tap a repair for
              common symptoms and turnaround.
            </p>
          </div>
          <Link
            href="/repairs"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/40 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            All repairs <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </FadeIn>

      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repairs.map((r, i) => {
          const Icon = repairIcon(r.icon);
          return (
            <FadeIn key={r.id} onScroll delay={i * 0.04}>
              <Link
                href={`/repairs/${r.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-surface/40 p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon size={20} strokeWidth={2.2} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-display font-semibold">{r.name}</span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-sm text-muted line-clamp-2">
                    {r.description}
                  </span>
                  <span className="mt-2 block text-xs text-accent">
                    {r.turnaround}
                  </span>
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </div>

      <Link
        href="/repairs"
        className="mt-5 flex sm:hidden items-center justify-center gap-1.5 rounded-lg border border-border/70 bg-surface/40 px-4 py-3 text-sm font-medium text-text"
      >
        See all repairs <ArrowRight size={14} aria-hidden />
      </Link>
    </section>
  );
}
