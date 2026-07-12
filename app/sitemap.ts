import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  });
  return [
    entry('/', 1),
    entry('/consoles', 0.9),
    entry('/games', 0.9),
    entry('/accessories', 0.9),
    entry('/repairs', 0.9),
    entry('/contact', 0.7),
  ];
}
