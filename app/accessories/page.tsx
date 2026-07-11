import type { Metadata } from 'next';
import { CATEGORY_META, productsByCategory } from '@/lib/data';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';

export const metadata: Metadata = {
  title: 'Accessories',
  description:
    'Controllers, headsets, charging docks, cooling stands, storage, and more from GameHub LK.',
};

export default function AccessoriesPage() {
  const meta = CATEGORY_META.accessories;
  const products = productsByCategory('accessories');
  return (
    <main className="container-page py-16 sm:py-20">
      <ShowcaseHeader title={meta.title} blurb={meta.blurb} />
      <div className="mt-10">
        <ShowcaseGrid products={products} placeholder="Search accessories…" />
      </div>
    </main>
  );
}
