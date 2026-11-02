import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  MessagesSquare,
  Search,
  Wrench,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import RepairForm from '@/components/whatsapp/RepairForm';
import Faq from '@/components/Faq';
import { REPAIR_CATEGORIES } from '@/lib/data';
import { repairIcon } from '@/lib/repairIcons';
import { pageMeta } from '@/lib/seo';
import { waLink } from '@/lib/whatsapp';
import faqJson from '@/data/faq.json';

export const metadata: Metadata = pageMeta({
  title: 'PS5, PS4 & Xbox Repair Services in Sri Lanka',
  description:
    'PlayStation and Xbox repairs in Kadawatha, Sri Lanka — no display, HDMI port, disc drive, BLOD, overheating, software and SSD upgrades. Controller stick drift, buttons and charging ports. Free diagnosis.',
  path: '/repairs/',
});

const STEPS = [
  {
    n: 1,
    icon: MessagesSquare,
    title: 'Contact us',
    blurb:
      'Tell us what’s wrong. WhatsApp is fastest — send a short note or a photo of the fault.',
  },
  {
    n: 2,
    icon: Search,
    title: 'Diagnosis',
    blurb:
      'We test the device and confirm the fix. Diagnostic is free — you get a firm price before we start.',
  },
  {
    n: 3,
    icon: Wrench,
    title: 'Fixed',
    blurb:
      'Repaired, tested, and ready to collect. Most jobs finish within a few days.',
  },
];

export default function RepairsPage() {
  return (
    <>
      <section className="container-page py-12 sm:py-20">
        <header>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">
            PlayStation Repair Sri Lanka
          </p>
          <h1 className="mt-3 sm:mt-4 text-[2rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] md:text-6xl font-display font-bold tracking-tight max-w-3xl [text-wrap:balance]">
            Broken today.{' '}
            <span className="text-accent">Back in the game</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-lg text-muted">
            PlayStation and Xbox repairs in Kadawatha, Sri Lanka — consoles
            and controllers. Free diagnosis and a firm price before we start.
          </p>
          <ul className="mt-7 sm:mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              PlayStation &amp; Xbox specialists
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              Diagnosis before quote
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              WhatsApp to get started
            </li>
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Wrench size={18} strokeWidth={2.4} aria-hidden />
              Book a repair
            </a>
            <a
              href={waLink('Hi PlayStation Repair Sri Lanka — I need a repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
              Ask on WhatsApp
            </a>
          </div>
        </header>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="container-page py-12 sm:py-16">
          <FadeIn onScroll>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              How it works
            </h2>
            <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
              Three steps between broken and fixed.
            </p>
          </FadeIn>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.n} onScroll delay={i * 0.06}>
                  <div className="relative flex h-full flex-col rounded-2xl border border-border/70 bg-bg/40 p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-display font-semibold text-accent">
                        {step.n}
                      </span>
                      <Icon
                        size={18}
                        strokeWidth={2.2}
                        className="text-text/70"
                        aria-hidden
                      />
                    </div>
                    <h3 className="mt-5 font-display font-semibold text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{step.blurb}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {REPAIR_CATEGORIES.map((cat, ci) => (
        <section
          key={cat.id}
          className={
            ci === 0
              ? 'container-page py-12 sm:py-16'
              : 'container-page py-12 sm:py-16 border-t border-border/60'
          }
        >
          <FadeIn onScroll>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-accent">
                  {cat.id === 'console'
                    ? 'Console repairs'
                    : 'Controller repairs'}
                </p>
                <h2 className="mt-2 text-2xl sm:text-4xl font-display font-bold tracking-tight">
                  {cat.title}
                </h2>
                <p className="mt-3 text-muted max-w-2xl text-[15px] sm:text-base">
                  {cat.blurb}
                </p>
              </div>
              <ul
                className="flex flex-wrap gap-1.5 sm:justify-end"
                aria-label={`${cat.title} platforms`}
              >
                {cat.platforms.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border/70 bg-surface/40 px-2.5 py-1 text-xs text-text/80"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.repairs.map((r, i) => {
              const Icon = repairIcon(r.icon);
              return (
                <FadeIn key={r.id} onScroll delay={i * 0.05}>
                  <Link
                    href={`/repairs/${r.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="inline-grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg text-text/85">
                      <Icon size={20} strokeWidth={2.2} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display font-semibold text-lg">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{r.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">
                        {r.turnaround}
                      </span>
                      {r.platforms?.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center rounded-full border border-border/60 bg-bg/60 px-2.5 py-1 text-[11px] uppercase tracking-wide text-text/70"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent">
                      Details
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>
      ))}

      <section className="container-page py-12 sm:py-16 border-t border-border/60">
        <FadeIn onScroll>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Repair questions
          </h2>
          <p className="mt-3 text-muted max-w-xl text-[15px] sm:text-base">
            The things people ask us most.
          </p>
        </FadeIn>
        <div className="mt-8 sm:mt-10 max-w-3xl">
          <Faq items={faqJson.faqs} />
        </div>
      </section>

      <section
        id="book"
        className="border-t border-border/60 bg-surface/30 scroll-mt-20"
      >
        <div className="container-page py-12 sm:py-20">
          <FadeIn onScroll>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Book a repair
            </h2>
            <p className="mt-3 text-muted max-w-xl text-[15px] sm:text-base">
              Fill this in — we&rsquo;ll pick up the conversation on WhatsApp.
              Your message stays visible on the right so you can double-check
              before sending.
            </p>
          </FadeIn>
          <div className="mt-8 sm:mt-10">
            <RepairForm />
          </div>
        </div>
      </section>
    </>
  );
}
