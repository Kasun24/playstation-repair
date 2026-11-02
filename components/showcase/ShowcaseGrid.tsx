'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/data';

type Props = {
  products: Product[];
  placeholder: string;
};

export default function ShowcaseGrid({ products, placeholder }: Props) {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [products, query, tag]);

  const reset = () => {
    setQuery('');
    setTag(null);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <Search
            size={18}
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-lg border border-border/70 bg-surface/40 py-3 pl-11 pr-4 text-base text-text placeholder:text-muted focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/40 sm:text-sm"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={tag === null} onClick={() => setTag(null)}>
            All
          </FilterChip>
          {tags.map((t) => (
            <FilterChip
              key={t}
              active={tag === t}
              onClick={() => setTag(t === tag ? null : t)}
            >
              {t}
            </FilterChip>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted" aria-live="polite">
        Showing {filtered.length} of {products.length}
      </p>

      <motion.div
        layout
        className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-border/60 bg-surface/40 p-10 text-center">
          <p className="font-display font-semibold">No matches</p>
          <p className="mt-1 text-sm text-muted">
            Try clearing the filter or a shorter search term.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-bg px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X size={14} aria-hidden /> Reset
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        active
          ? 'border-accent bg-accent text-white'
          : 'border-border/70 bg-surface/40 text-text/80 hover:border-border hover:text-text'
      }`}
    >
      {children}
    </button>
  );
}
