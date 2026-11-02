import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import OpenStatus from '@/components/OpenStatus';
import { SITE } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

const mapQuery = encodeURIComponent(SITE.address.mapEmbedQuery);

/** Address, hours, live open/closed status and an embedded Google Map. */
export default function VisitWorkshop({
  heading = 'Visit the workshop',
}: {
  heading?: string;
}) {
  const telHref = `tel:${SITE.phone.replace(/\s+/g, '')}`;
  return (
    <section className="border-t border-border/60 bg-surface/30">
      <div className="container-page py-12 sm:py-20 grid gap-8 lg:grid-cols-2 lg:items-center">
        <FadeIn onScroll>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-accent">
            {SITE.address.city}
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-bold tracking-tight">
            {heading}
          </h2>
          <div className="mt-4">
            <OpenStatus />
          </div>

          <dl className="mt-6 space-y-4 text-[15px]">
            <div className="flex gap-3">
              <dt className="sr-only">Address</dt>
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <dd className="text-text/90">
                {SITE.address.street}, {SITE.address.city}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="sr-only">Opening hours</dt>
              <Clock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <dd className="space-y-0.5">
                {SITE.hours.map((h) => (
                  <div key={h.days} className="text-muted">
                    <span className="inline-block w-24 text-text/90">{h.days}</span>
                    {h.time}
                  </div>
                ))}
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-sm text-muted">
            Message us before you come so we&rsquo;re ready for your console.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <a
              href={SITE.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Navigation size={16} aria-hidden />
              Get directions
            </a>
            <a
              href={waLink(`Hi ${SITE.name} — I'd like to drop off my console. When can I come?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-surface/50 px-5 py-3 text-sm font-medium text-text/90 transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp before visiting
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-surface/50 px-5 py-3 text-sm font-medium text-text/90 transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone size={16} aria-hidden />
              Call
            </a>
          </div>
        </FadeIn>

        <FadeIn onScroll delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-surface">
            <iframe
              title={`Map — ${SITE.name}, ${SITE.address.city}`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-72 w-full sm:h-96 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.7)]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
