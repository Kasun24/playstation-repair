import type { Metadata } from 'next';
import {
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  MessagesSquare,
  Search,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import RepairForm from '@/components/whatsapp/RepairForm';
import { REPAIRS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PlayStation & Xbox Repairs',
  description:
    'PlayStation and Xbox console repairs in Sri Lanka — HDMI ports, controller drift, cleaning, disc drive, storage upgrades. Nintendo Switch too.',
};

const ICON_MAP: Record<string, LucideIcon> = {
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  Wind,
  Wrench,
};

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
            <span className="text-accent">Back in the game</span> tomorrow.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-lg text-muted">
            PlayStation and Xbox — HDMI ports, stick drift, disc drives, storage
            upgrades. Real technicians, honest pricing, and free diagnostics
            before we touch a screwdriver.
          </p>
          <ul className="mt-7 sm:mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              Free diagnostics
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              Fixed-price quotes upfront
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              WhatsApp updates as we work
            </li>
          </ul>
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

      <section className="container-page py-12 sm:py-16">
        <FadeIn onScroll>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            What we fix
          </h2>
          <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
            The common repairs we handle every week. Not on the list? Message
            us — we probably still can.
          </p>
        </FadeIn>
        <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIRS.map((r, i) => {
            const Icon = ICON_MAP[r.icon] ?? Wrench;
            return (
              <FadeIn key={r.id} onScroll delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-surface/40 p-6 transition-colors hover:border-accent/40">
                  <div className="inline-grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg text-text/85">
                    <Icon size={20} strokeWidth={2.2} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{r.description}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {r.turnaround}
                  </span>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section
        id="book"
        className="border-t border-border/60 bg-surface/30"
      >
        <div className="container-page py-12 sm:py-20">
          <FadeIn onScroll>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Book a repair
            </h2>
            <p className="mt-3 text-muted max-w-xl text-[15px] sm:text-base">
              Fill this in — we’ll pick up the conversation on WhatsApp. Your
              message stays visible on the right so you can double-check
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
