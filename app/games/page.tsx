import type { Metadata } from 'next';
import { CATEGORY_META, productsByCategory } from '@/lib/data';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';

export const metadata: Metadata = {
  title: 'Video Games',
  description:
    'The latest AAA game releases and timeless classics across PlayStation, Xbox, Nintendo, and more.',
};

export default function GamesPage() {
  const meta = CATEGORY_META.games;
  const products = productsByCategory('games');
  return (
    <main className="container-page py-16 sm:py-20">
      <ShowcaseHeader title={meta.title} blurb={meta.blurb} />
      <div className="mt-10">
        <ShowcaseGrid products={products} placeholder="Search games…" />
      </div>
    </main>
  );
}
