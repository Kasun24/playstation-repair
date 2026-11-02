import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { CATEGORY_META, productsByCategory } from '@/lib/data';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';

export const metadata: Metadata = pageMeta({
  title: 'Consoles',
  description:
    'Gaming consoles — PlayStation, Xbox, Nintendo and PC handhelds. Ask about availability on WhatsApp.',
  path: '/consoles/',
});

export default function ConsolesPage() {
  const meta = CATEGORY_META.consoles;
  const products = productsByCategory('consoles');
  return (
    <section className="container-page py-16 sm:py-20">
      <ShowcaseHeader title={meta.title} blurb={meta.blurb} />
      <div className="mt-10">
        <ShowcaseGrid products={products} placeholder="Search consoles…" />
      </div>
    </section>
  );
}
