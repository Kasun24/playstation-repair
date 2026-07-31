import { MoveRight, Quote, Star } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="container-page py-12 sm:py-24">
      <FadeIn onScroll>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Fixed and happy
            </h2>
            <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
              A few recent words from the workbench. Real reviews, real repairs.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1.5 text-xs font-medium text-highlight">
            <Star size={14} strokeWidth={2.4} className="fill-highlight" aria-hidden />
            5.0 average
          </div>
        </div>
      </FadeIn>

      <div
        className="mt-8 sm:mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
        role="region"
        aria-label="Customer testimonials"
      >
        {TESTIMONIALS.map((t, i) => (
          <FadeIn
            key={t.id}
            onScroll
            delay={i * 0.06}
            className="w-[85%] shrink-0 snap-start sm:w-[55%] md:w-[45%] lg:w-auto lg:shrink"
          >
            <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-surface/40 p-5 sm:p-6">
              <Quote
                size={20}
                strokeWidth={2.2}
                className="text-accent/70"
                aria-hidden
              />
              <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    strokeWidth={2.4}
                    className={
                      si < t.rating
                        ? 'text-highlight fill-highlight'
                        : 'text-border'
                    }
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed text-text/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                <span
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-accent/30 bg-accent/10 font-display text-sm font-semibold text-accent"
                  aria-hidden
                >
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-text">
                    {t.name}
                    <span className="text-muted"> · {t.location}</span>
                  </span>
                  <span className="text-xs text-muted">{t.service}</span>
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
      {TESTIMONIALS.length > 1 && (
        <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted lg:hidden">
          Swipe to see more
          <MoveRight size={14} aria-hidden />
        </p>
      )}
    </section>
  );
}
