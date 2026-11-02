import type { MetadataRoute } from 'next';
import { REPAIRS, SITE_URL } from '@/lib/data';

// Shop pages (/consoles, /games, /accessories) are left out while they hold sample
// items — add them back here (and drop `noindex` on the pages) once real stock is listed.
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
    entry('/contact/', 0.7),
  ];
}
