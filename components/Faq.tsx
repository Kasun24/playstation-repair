import { ChevronDown } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export type FaqItem = { q: string; a: string };

/** Native <details> accordion (works without JS) + FAQPage structured data. */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-bg/40">
        {items.map((f) => (
          <details key={f.q} className="group px-5 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold text-[15px] sm:text-base focus:outline-none focus-visible:text-accent [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <ChevronDown
                size={18}
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="pb-5 -mt-1 text-sm sm:text-[15px] text-muted">
              {f.a}
            </p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </>
  );
}
