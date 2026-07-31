import Link from 'next/link';
import {
  ArrowUpRight,
  Disc3,
  Headphones,
  Joystick,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

type Tile = {
  title: string;
  blurb: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    title: 'Repairs',
    blurb: 'PlayStation, Xbox & controller repairs.',
    href: '/repairs',
    icon: Wrench,
    featured: true,
  },
  {
    title: 'Consoles',
    blurb: 'PlayStation, Xbox, Nintendo & PC handhelds.',
    href: '/consoles',
    icon: Joystick,
  },
  {
    title: 'Video Games',
    blurb: 'Latest AAA hits and classic favourites.',
    href: '/games',
    icon: Disc3,
  },
  {
    title: 'Accessories',
    blurb: 'Controllers, headsets, storage and more.',
    href: '/accessories',
    icon: Headphones,
  },
];

export default function CategoryTiles() {
  return (
    <section className="container-page py-12 sm:py-24">
      <FadeIn onScroll>
        <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
          What we do
        </h2>
        <p className="mt-3 text-muted max-w-lg text-[15px] sm:text-base">
          Repairs are our craft. Consoles, games and accessories are here too.
        </p>
      </FadeIn>

      <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {TILES.map((tile, i) => {
          const Icon = tile.icon;
          const featured = tile.featured;
          return (
            <FadeIn key={tile.href} onScroll delay={i * 0.05}>
              <Link
                href={tile.href}
                className={`group relative flex h-full flex-col rounded-2xl border p-4 sm:p-6 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  featured
                    ? 'border-accent/30 bg-surface/60 hover:border-accent/60 hover:shadow-glow hover:-translate-y-0.5'
                    : 'border-border/70 bg-surface/40 hover:border-border hover:bg-surface hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`inline-grid h-11 w-11 place-items-center rounded-xl border transition-colors ${
                    featured
                      ? 'border-accent/40 bg-accent/10 text-accent'
                      : 'border-border bg-bg text-text/80 group-hover:text-accent group-hover:border-accent/40'
                  }`}
                >
                  <Icon size={20} strokeWidth={2.2} aria-hidden />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">
                  {tile.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{tile.blurb}</p>
                <span
                  className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${
                    featured ? 'text-accent' : 'text-text/80'
                  }`}
                >
                  Explore
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
