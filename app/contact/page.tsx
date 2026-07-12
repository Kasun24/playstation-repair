import type { Metadata } from 'next';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/whatsapp/ContactForm';
import { SITE } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach GameHub LK on WhatsApp, phone, or email — or drop into our Colombo store.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="container-page py-16 sm:py-20">
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Say hi
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl">
            Let’s <span className="text-accent">talk</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-muted text-base sm:text-lg">
            Questions about stock, a repair, or a trade-in? WhatsApp is the
            fastest way to reach us — the form below just opens a chat with
            your message pre-filled.
          </p>
        </header>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="container-page py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn onScroll>
              <a
                href={waLink('Hi GameHub LK — I have a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-accent/30 bg-accent/5 p-5 transition-colors hover:border-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MessageCircle
                  size={20}
                  strokeWidth={2.2}
                  className="text-accent"
                  aria-hidden
                />
                <h2 className="mt-4 font-display font-semibold">WhatsApp</h2>
                <p className="mt-1 text-sm text-muted">
                  {SITE.whatsappDisplay}
                </p>
                <p className="mt-3 text-xs text-accent">
                  Chat now →
                </p>
              </a>
            </FadeIn>

            <FadeIn onScroll delay={0.05}>
              <a
                href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
                className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg/40 p-5 transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Phone
                  size={20}
                  strokeWidth={2.2}
                  className="text-text/70"
                  aria-hidden
                />
                <h2 className="mt-4 font-display font-semibold">Phone</h2>
                <p className="mt-1 text-sm text-muted">{SITE.phone}</p>
                <p className="mt-3 text-xs text-muted">
                  During store hours
                </p>
              </a>
            </FadeIn>

            <FadeIn onScroll delay={0.1}>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg/40 p-5 transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail
                  size={20}
                  strokeWidth={2.2}
                  className="text-text/70"
                  aria-hidden
                />
                <h2 className="mt-4 font-display font-semibold">Email</h2>
                <p className="mt-1 text-sm text-muted">{SITE.email}</p>
                <p className="mt-3 text-xs text-muted">
                  Replies within a day
                </p>
              </a>
            </FadeIn>

            <FadeIn onScroll delay={0.15}>
              <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-bg/40 p-5">
                <MapPin
                  size={20}
                  strokeWidth={2.2}
                  className="text-text/70"
                  aria-hidden
                />
                <h2 className="mt-4 font-display font-semibold">Store</h2>
                <p className="mt-1 text-sm text-muted">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}
                </p>
                <p className="mt-3 text-xs text-muted">
                  {SITE.address.country}
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn onScroll delay={0.2}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/70 bg-bg/40 p-5 sm:items-center">
              <Clock
                size={20}
                strokeWidth={2.2}
                className="mt-0.5 shrink-0 text-text/70 sm:mt-0"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                <span className="font-display font-semibold">Open</span>
                {SITE.hours.map((h) => (
                  <span key={h.days} className="text-sm text-muted">
                    <span className="text-text/85">{h.days}</span>{' '}
                    · {h.time}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <FadeIn onScroll>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Send us a message
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            Fill this in — we’ll pick up the conversation on WhatsApp. Preview
            on the right updates as you type.
          </p>
        </FadeIn>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
