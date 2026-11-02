import type { Metadata } from 'next';
import { SITE, SITE_URL } from '@/lib/data';

export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE.name} — PlayStation & Xbox repairs in Kadawatha, Sri Lanka`,
};

/**
 * Per-page metadata with its own canonical URL and share tags.
 * Next.js replaces (not merges) `openGraph` from the layout, so every page must set it in full.
 */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  /** Route path with trailing slash, e.g. '/repairs/' — matches `trailingSlash: true`. */
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const shareTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: 'en_LK',
      url: path,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;
