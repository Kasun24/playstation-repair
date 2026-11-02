import type { MetadataRoute } from 'next';
import { REPAIRS, SITE_URL } from '@/lib/data';

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
    entry('/repairs/', 0.9),
    ...REPAIRS.map((r) => entry(`/repairs/${r.slug}/`, 0.8)),
    entry('/consoles/', 0.6),
    entry('/games/', 0.6),
    entry('/accessories/', 0.6),
    entry('/contact/', 0.7),
  ];
}
