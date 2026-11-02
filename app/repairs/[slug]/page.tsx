import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { REPAIRS, SITE, SITE_URL, repairCategoryOf } from '@/lib/data';
import { repairIcon } from '@/lib/repairIcons';
import { pageMeta } from '@/lib/seo';
import { waLink } from '@/lib/whatsapp';

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return REPAIRS.map((r) => ({ slug: r.slug }));
}

const findRepair = (slug: string) => REPAIRS.find((r) => r.slug === slug);

export function generateMetadata({ params }: Params): Metadata {
  const r = findRepair(params.slug);
  if (!r) return {};
  return pageMeta({
    title: `${r.seoTitle} in Sri Lanka`,
    description: `${r.description} Workshop in Kadawatha — typical turnaround ${r.turnaround}. Free diagnosis, book on WhatsApp.`,
    path: `/repairs/${r.slug}/`,
  });
}

const STEPS = [
  'Message us on WhatsApp with your model and the problem.',
  'We diagnose the device for free and give you a firm price.',
  'We repair, test, and let you know it’s ready to collect.',
];

export default function RepairDetailPage({ params }: Params) {
  const r = findRepair(params.slug);
  if (!r) notFound();

  const category = repairCategoryOf(r);
  const related = category.repairs.filter((x) => x.id !== r.id).slice(0, 3);
  const Icon = repairIcon(r.icon);
  const url = `${SITE_URL}/repairs/${r.slug}/`;
  const address = [SITE.address.street, SITE.address.city].join(', ');

  return (
    <>
      <section className="container-page pt-8 pb-12 sm:pt-12 sm:pb-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-text">
                Home
              </Link>
              <ChevronRight size={14} aria-hidden />
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/repairs" className="hover:text-text">
                Repairs
              </Link>
              <ChevronRight size={14} aria-hidden />
            </li>
            <li aria-current="page" className="text-text/85">
              {r.name}
            </li>
          </ol>
        </nav>

        <header className="mt-8 sm:mt-10">
          <div className="inline-grid h-12 w-12 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
            <Icon size={22} strokeWidth={2.2} aria-hidden />
          </div>
          <p className="mt-5 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-accent">
            {category.title} · Kadawatha, Sri Lanka
          </p>
          <h1 className="mt-3 text-[2rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] font-display font-bold tracking-tight max-w-3xl [text-wrap:balance]">
            {r.seoTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-lg text-muted">
            {r.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">
              <Clock size={12} aria-hidden />
              Typical turnaround: {r.turnaround}
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
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(`Hi ${SITE.name} — I need a ${r.name}. My device is: `)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
              Ask on WhatsApp
            </a>
            <Link
              href={`/repairs/?repair=${r.id}#book`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Book with the form
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </header>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="container-page py-12 sm:py-16 grid gap-6 md:grid-cols-2">
          <FadeIn onScroll>
            <div className="h-full rounded-2xl border border-border/70 bg-bg/40 p-6">
              <h2 className="font-display font-semibold text-xl">
                Signs you need this repair
              </h2>
              <ul className="mt-4 space-y-3">
                {r.symptoms.map((s) => (
                  <li key={s} className="flex gap-3 text-sm sm:text-[15px] text-muted">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn onScroll delay={0.06}>
            <div className="h-full rounded-2xl border border-border/70 bg-bg/40 p-6">
              <h2 className="font-display font-semibold text-xl">
                How it works
              </h2>
              <ol className="mt-4 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm sm:text-[15px] text-muted">
                    <span className="inline-grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <a
                href={SITE.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-start gap-2 text-sm text-text/85 hover:text-accent"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                {address}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
            Other {category.title.toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((x) => {
              const XIcon = repairIcon(x.icon);
              return (
                <Link
                  key={x.id}
                  href={`/repairs/${x.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-surface/40 p-5 transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-bg text-text/85">
                    <XIcon size={18} aria-hidden />
                  </span>
                  <span className="font-display font-semibold">{x.name}</span>
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
          <Link
            href="/repairs"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
          >
            See all repairs <ArrowRight size={14} aria-hidden />
          </Link>
        </section>
      )}

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: r.seoTitle,
              serviceType: r.name,
              description: r.description,
              url,
              provider: { '@id': `${SITE_URL}/#business` },
              areaServed: { '@type': 'Country', name: 'Sri Lanka' },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Repairs', item: `${SITE_URL}/repairs/` },
                { '@type': 'ListItem', position: 3, name: r.name, item: url },
              ],
            },
          ],
        }}
      />
    </>
  );
}
