import { MessageCircle } from 'lucide-react';
import { SITE, asset, type Product } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 transition-all duration-200 hover:border-accent/50 hover:shadow-glow hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(product.image)}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.condition === 'pre-owned' && (
          <span className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-md border border-border/60 bg-bg/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-text/85 backdrop-blur">
            Pre-owned
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="font-display font-semibold text-sm sm:text-lg leading-snug">
          {product.name}
        </h3>
        <p className="mt-1.5 mb-3 sm:mb-0 text-xs sm:mt-2 sm:text-sm text-muted line-clamp-2 sm:line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="mt-4 mb-5 hidden flex-wrap gap-1.5 sm:flex">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/70 bg-bg/40 px-2 py-0.5 text-[11px] text-text/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={waLink(
            `Hi ${SITE.name} — is the ${product.name}${
              product.condition === 'pre-owned' ? ' (pre-owned)' : ''
            } available? What's the price?`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-accent/40 bg-accent/10 px-2 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Ask about ${product.name} on WhatsApp`}
        >
          <MessageCircle size={15} strokeWidth={2.4} aria-hidden />
          <span className="sm:hidden">Ask</span>
          <span className="hidden sm:inline">Ask on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
