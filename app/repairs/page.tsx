import type { Metadata } from 'next';
import {
  AlertOctagon,
  AlertTriangle,
  BatteryCharging,
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  MessagesSquare,
  MonitorOff,
  MousePointerClick,
  Search,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import RepairForm from '@/components/whatsapp/RepairForm';
import { REPAIR_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PlayStation & Xbox Repairs',
  description:
    'PlayStation and Xbox console repairs in Sri Lanka — No Display, HDMI ports, disc drives, BLOD, software, cleaning, storage upgrades. Controller stick drift, triggers, and charging ports too.',
};

const ICON_MAP: Record<string, LucideIcon> = {
  AlertOctagon,
  AlertTriangle,
  BatteryCharging,
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  MonitorOff,
  MousePointerClick,
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
            <span className="text-accent">Back in the game</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-lg text-muted">
            PlayStation and Xbox — consoles and controllers. Real technicians
            and honest quotes before we start.
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
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>
      ))}

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
