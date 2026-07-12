import siteJson from '@/data/site.json';
import productsJson from '@/data/products.json';
import repairsJson from '@/data/repairs.json';
import tiktokJson from '@/data/tiktok.json';

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
  name: string;
  description: string;
  turnaround: string;
  icon: string;
};

export type TikTokVideo = {
  id: string;
  username: string;
  url: string;
  caption?: string;
};

export const SITE = siteJson;
export const SITE_URL = siteJson.siteUrl;
export const PRODUCTS: Product[] = productsJson.products as Product[];
export const REPAIRS: Repair[] = repairsJson.repairs as Repair[];
export const TIKTOK = tiktokJson as {
  profileUrl: string;
  handle: string;
  videos: TikTokVideo[];
};

export const productsByCategory = (category: Category): Product[] =>
  PRODUCTS.filter((p) => p.category === category);

export const CATEGORY_META: Record<
  Category,
  { title: string; blurb: string; href: string }
> = {
  consoles: {
    title: 'Consoles',
    blurb: 'New and pre-owned — PlayStation, Xbox, Nintendo, and PC handhelds.',
    href: '/consoles',
  },
  games: {
    title: 'Video Games',
    blurb: 'The latest AAA hits and timeless classics across every platform.',
    href: '/games',
  },
  accessories: {
    title: 'Accessories',
    blurb: 'Controllers, headsets, charging, storage — everything to level up your setup.',
    href: '/accessories',
  },
};
