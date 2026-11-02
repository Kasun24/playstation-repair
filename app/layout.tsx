import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { REPAIRS, SITE, SITE_URL } from '@/lib/data';
import { OG_IMAGE } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const DEFAULT_TITLE =
  'PlayStation & Xbox Repair in Sri Lanka | PS5, PS4 Repair Kadawatha';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: SITE.description,
    locale: 'en_LK',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: true, email: true, address: true },
  ...(SITE.googleSiteVerification
    ? { verification: { google: SITE.googleSiteVerification } }
    : {}),
};

export const viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark' as const,
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

const DAY_NAMES: Record<string, string[]> = {
  'Mon – Sat': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  Sun: ['Sunday'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: `${SITE_URL}/`,
  image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/workshop/hero.jpg`],
  logo: `${SITE_URL}/logo.jpg`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: 'LK',
  },
  hasMap: SITE.address.mapsUrl,
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  openingHoursSpecification: SITE.hours.map((h) => {
    const [opens, closes] = h.time.split('–').map((t) => t.trim());
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_NAMES[h.days] ?? h.days,
      opens,
      closes,
    };
  }),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'PlayStation & Xbox repair services',
    itemListElement: REPAIRS.map((r) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: r.name,
        url: `${SITE_URL}/repairs/${r.slug}/`,
      },
    })),
  },
  sameAs: [
    SITE.socials.playstation.tiktok,
    SITE.socials.playstation.facebook,
    SITE.socials.xbox.tiktok,
    SITE.socials.xbox.facebook,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 scroll-mt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
