import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import VisitWorkshop from '@/components/VisitWorkshop';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/whatsapp/ContactForm';
import { SocialTiles } from '@/components/SocialLinks';
import { SITE } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export const metadata: Metadata = pageMeta({
  title: 'Contact & Location — Kadawatha Workshop',
  description:
    'Contact PlayStation Repair Sri Lanka on WhatsApp or phone (+94 70 415 1435), or visit our workshop on Sooriyapaluwa Road, Ranmuthugala, Kadawatha. Open 7 days.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <section className="container-page py-12 sm:py-20">
        <header>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">
            Say hi
          </p>
          <h1 className="mt-3 sm:mt-4 text-[2rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] md:text-6xl font-display font-bold tracking-tight max-w-3xl [text-wrap:balance]">
            Let’s <span className="text-accent">talk</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-lg text-muted">
            Questions about stock or a repair? WhatsApp is the
            fastest way to reach us — the form below just opens a chat with
            your message pre-filled.
          </p>
        </header>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="container-page py-10 sm:py-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <FadeIn onScroll>
              <a
                href={waLink('Hi PlayStation Repair Sri Lanka — I have a question.')}
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

            <FadeIn onScroll delay={0.1} className="col-span-2 lg:col-span-1">
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
                <p className="mt-1 text-sm text-muted [overflow-wrap:anywhere]">{SITE.email}</p>
                <p className="mt-3 text-xs text-muted">
                  Replies within a day
                </p>
              </a>
            </FadeIn>

          </div>

        </div>
      </section>

      <section className="container-page py-12 sm:py-20">
        <FadeIn onScroll>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Send us a message
          </h2>
          <p className="mt-3 text-muted max-w-xl text-[15px] sm:text-base">
            Fill this in — we’ll pick up the conversation on WhatsApp. Preview
            on the right updates as you type.
          </p>
        </FadeIn>
        <div className="mt-8 sm:mt-10">
          <ContactForm />
        </div>
      </section>

      <VisitWorkshop heading="Find the workshop" />

      <section className="container-page py-12 sm:py-20 border-t border-border/60">
        <FadeIn onScroll>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Follow us
          </h2>
          <p className="mt-3 text-muted max-w-xl text-[15px] sm:text-base">
            Separate accounts for PlayStation and Xbox work — repair
            timelapses, before/afters, and shop updates.
          </p>
        </FadeIn>
        <div className="mt-8 sm:mt-10">
          <SocialTiles />
        </div>
      </section>

    </>
  );
}
