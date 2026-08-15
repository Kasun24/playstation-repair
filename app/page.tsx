import Hero from '@/components/home/Hero';
import RepairCTABanner from '@/components/home/RepairCTABanner';
import CategoryTiles from '@/components/home/CategoryTiles';
import TrustSection from '@/components/home/TrustSection';
import Testimonials from '@/components/home/Testimonials';
import TikTokSection from '@/components/home/TikTokSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RepairCTABanner />
      <CategoryTiles />
      <TrustSection />
      <Testimonials />
      <TikTokSection />
    </>
  );
}
