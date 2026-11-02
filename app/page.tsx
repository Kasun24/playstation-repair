import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import RepairCTABanner from '@/components/home/RepairCTABanner';
import CategoryTiles from '@/components/home/CategoryTiles';
import TrustSection from '@/components/home/TrustSection';
import WorkshopGallery from '@/components/home/WorkshopGallery';
import Testimonials from '@/components/home/Testimonials';
import TikTokSection from '@/components/home/TikTokSection';
import { SITE } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'PlayStation & Xbox Repair in Sri Lanka | PS5, PS4 Repair Kadawatha',
  description: SITE.description,
  path: '/',
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <RepairCTABanner />
      <CategoryTiles />
      <TrustSection />
      <WorkshopGallery />
      <Testimonials />
      <TikTokSection />
    </>
  );
}
