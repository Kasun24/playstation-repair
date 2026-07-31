import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE, SITE_URL } from '@/lib/data';
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

const DEFAULT_TITLE = `${SITE.name} — PlayStation & Xbox Repairs, Consoles & Games`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'PlayStation repair Sri Lanka',
    'Xbox repair Sri Lanka',
    'PS5 repair Sri Lanka',
    'PS4 repair Sri Lanka',
    'Xbox Series X repair Sri Lanka',
    'Xbox Series S repair Sri Lanka',
    'Xbox One repair Sri Lanka',
    'HDMI port repair PlayStation',
    'HDMI port repair Xbox',
    'controller drift fix Sri Lanka',
    'PlayStation disc drive repair',
    'Xbox disc drive repair',
    'console repair Sri Lanka',
    'gaming store Sri Lanka',
    SITE.name,
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: '/',
    locale: 'en_LK',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark' as const,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description: SITE.description,
  url: SITE_URL,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}),
    ...(SITE.address.city ? { addressLocality: SITE.address.city } : {}),
    addressCountry: 'LK',
  },
  ...(SITE.address.mapsUrl ? { hasMap: SITE.address.mapsUrl } : {}),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    SITE.socials.tiktok,
    SITE.socials.instagram,
    SITE.socials.facebook,
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
