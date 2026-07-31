import { SITE } from '@/lib/data';

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.144 5.144 0 0 1-1.537-2.85V1h-3.146v13.616c0 1.395-1.132 2.527-2.527 2.527a2.527 2.527 0 1 1 0-5.054c.14 0 .277.012.411.034V8.976a5.671 5.671 0 0 0-.411-.015 5.673 5.673 0 1 0 5.673 5.673V8.632a8.253 8.253 0 0 0 4.951 1.641V7.126a5.132 5.132 0 0 1 0-1.564z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

type SocialItem = {
  brand: 'PlayStation' | 'Xbox';
  platform: 'TikTok' | 'Facebook';
  label: string;
  href: string;
  Icon: (p: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const SOCIALS: SocialItem[] = [
  {
    brand: 'PlayStation',
    platform: 'TikTok',
    label: '@playstation.repair',
    href: SITE.socials.playstation.tiktok,
    Icon: TikTokIcon,
  },
  {
    brand: 'PlayStation',
    platform: 'Facebook',
    label: 'PlayStation Repair',
    href: SITE.socials.playstation.facebook,
    Icon: FacebookIcon,
  },
  {
    brand: 'Xbox',
    platform: 'TikTok',
    label: '@xbox.repair.srila',
    href: SITE.socials.xbox.tiktok,
    Icon: TikTokIcon,
  },
  {
    brand: 'Xbox',
    platform: 'Facebook',
    label: 'Xbox Repair',
    href: SITE.socials.xbox.facebook,
    Icon: FacebookIcon,
  },
];

export function SocialTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {SOCIALS.map((s) => (
        <a
          key={`${s.brand}-${s.platform}`}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg/40 p-5 transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <s.Icon
            className="h-5 w-5 text-text/70 transition-colors group-hover:text-accent"
          />
          <h3 className="mt-4 font-display font-semibold">
            {s.brand} · {s.platform}
          </h3>
          <p className="mt-1 text-sm text-muted break-all">{s.label}</p>
          <p className="mt-3 text-xs text-accent">Open →</p>
        </a>
      ))}
    </div>
  );
}

export function SocialRow() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {SOCIALS.map((s) => (
        <li key={`${s.brand}-${s.platform}`}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.brand} on ${s.platform}`}
            title={`${s.brand} on ${s.platform}`}
            className="group inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg/40 px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <s.Icon className="h-3.5 w-3.5" />
            <span>{s.brand === 'PlayStation' ? 'PS' : 'Xbox'} · {s.platform}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
