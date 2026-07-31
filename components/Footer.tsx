import Link from 'next/link';
import Logo from './Logo';
import { SocialRow } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/40">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted max-w-xs">
            PlayStation and Xbox console repairs in Sri Lanka.
          </p>
          <SocialRow />
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
        <div className="container-page py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} PlayStation Repair Sri Lanka. All rights reserved.</span>
          <span>Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
