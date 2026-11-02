import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { CATEGORY_META, productsByCategory } from '@/lib/data';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';

export const metadata: Metadata = pageMeta({
  title: 'Video Games',
  description:
    'Video games across PlayStation, Xbox, Nintendo and more. Ask about availability on WhatsApp.',
  path: '/games/',
});

export default function GamesPage() {
  const meta = CATEGORY_META.games;
  const products = productsByCategory('games');
  return (
    <section className="container-page py-16 sm:py-20">
      <ShowcaseHeader title={meta.title} blurb={meta.blurb} />
      <div className="mt-10">
        <ShowcaseGrid products={products} placeholder="Search games…" />
      </div>
    </section>
  );
}
