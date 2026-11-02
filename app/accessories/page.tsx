import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { CATEGORY_META, productsByCategory } from '@/lib/data';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';

export const metadata: Metadata = pageMeta({
  title: 'Accessories',
  description:
    'Controllers, headsets, charging, cooling and storage. Ask about availability on WhatsApp.',
  path: '/accessories/',
});

export default function AccessoriesPage() {
  const meta = CATEGORY_META.accessories;
  const products = productsByCategory('accessories');
  return (
    <section className="container-page py-16 sm:py-20">
      <ShowcaseHeader title={meta.title} blurb={meta.blurb} />
      <div className="mt-10">
        <ShowcaseGrid products={products} placeholder="Search accessories…" />
      </div>
    </section>
  );
}
