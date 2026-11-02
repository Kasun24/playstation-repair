import siteJson from '@/data/site.json';
import productsJson from '@/data/products.json';
import repairsJson from '@/data/repairs.json';
import tiktokJson from '@/data/tiktok.json';
import testimonialsJson from '@/data/testimonials.json';

export type Category = 'consoles' | 'games' | 'accessories';
export type Condition = 'new' | 'pre-owned';

export type Product = {
  id: string;
  name: string;
  category: Category;
  condition: Condition;
  shortDescription: string;
  tags: string[];
  image: string;
  platform?: string[];
};

export type Repair = {
  id: string;
  slug: string;
  seoTitle: string;
  symptoms: string[];
  name: string;
  description: string;
  turnaround: string;
  icon: string;
  platforms?: string[];
};

export type RepairCategory = {
  id: 'console' | 'controller';
  title: string;
  blurb: string;
  platforms: string[];
  repairs: Repair[];
};

export type TikTokVideo = {
  id: string;
  username: string;
  url: string;
  caption?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
};

export const SITE = siteJson;
export const SITE_URL = siteJson.siteUrl;

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a public/ asset with the deploy basePath (needed for plain <img> / <link> tags on GH Pages subpaths). */
export const asset = (path: string): string =>
  path.startsWith('/') ? `${BASE_PATH}${path}` : path;
export const PRODUCTS: Product[] = productsJson.products as Product[];
export const REPAIR_CATEGORIES: RepairCategory[] =
  repairsJson.categories as RepairCategory[];
export const REPAIRS: Repair[] = REPAIR_CATEGORIES.flatMap((c) => c.repairs);
export const repairCategoryOf = (r: Repair): RepairCategory =>
  REPAIR_CATEGORIES.find((c) => c.repairs.some((x) => x.id === r.id))!;
export const TIKTOK = tiktokJson as {
  profileUrl: string;
  handle: string;
  videos: TikTokVideo[];
};
export const TESTIMONIALS: Testimonial[] =
  testimonialsJson.testimonials as Testimonial[];

export const productsByCategory = (category: Category): Product[] =>
  PRODUCTS.filter((p) => p.category === category);

export const CATEGORY_META: Record<
  Category,
  { title: string; blurb: string; href: string }
> = {
  consoles: {
    title: 'Consoles',
    blurb: 'PlayStation, Xbox, Nintendo and PC handhelds.',
    href: '/consoles',
  },
  games: {
    title: 'Video Games',
    blurb: 'A selection across platforms and genres.',
    href: '/games',
  },
  accessories: {
    title: 'Accessories',
    blurb: 'Controllers, headsets, charging and storage.',
    href: '/accessories',
  },
};
