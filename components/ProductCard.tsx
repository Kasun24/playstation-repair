import { asset, type Product } from '@/lib/data';

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
          <span className="absolute right-3 top-3 rounded-md border border-border/60 bg-bg/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-text/85 backdrop-blur">
            Pre-owned
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display font-semibold text-lg leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/70 bg-bg/40 px-2 py-0.5 text-[11px] text-text/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
