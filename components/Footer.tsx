import Link from 'next/link';
import Logo from './Logo';
import { SocialRow } from './SocialLinks';
import { REPAIRS, SITE } from '@/lib/data';

const FOOTER_REPAIRS = REPAIRS.filter((r) =>
  ['no-display', 'hdmi-port', 'bluray-drive', 'clean-thermal', 'stick-drift', 'charging-port'].includes(r.id),
);

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted max-w-xs">
            PlayStation and Xbox console &amp; controller repairs in Kadawatha,
            Sri Lanka.
          </p>
          <address className="not-italic text-sm text-muted max-w-xs">
            <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
              {SITE.address.street}, {SITE.address.city}
            </a>
            <br />
            <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="hover:text-text transition-colors">
              {SITE.phone}
            </a>
          </address>
          <SocialRow />
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3 text-text">Popular repairs</h3>
          <ul className="space-y-2 text-sm text-muted">
            {FOOTER_REPAIRS.map((r) => (
              <li key={r.id}>
                <Link href={`/repairs/${r.slug}`} className="hover:text-text transition-colors">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3 text-text">Shop</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/consoles" className="hover:text-text transition-colors">Consoles</Link></li>
            <li><Link href="/games" className="hover:text-text transition-colors">Video Games</Link></li>
            <li><Link href="/accessories" className="hover:text-text transition-colors">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3 text-text">Services</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/repairs" className="hover:text-text transition-colors">Repairs</Link></li>
            <li><Link href="/contact" className="hover:text-text transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-page pt-4 pb-24 sm:pb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} PlayStation Repair Sri Lanka. All rights reserved.</span>
          <span>Kadawatha, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
