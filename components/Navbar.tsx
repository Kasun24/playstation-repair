'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, Phone, Wrench, X } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/repairs', label: 'Repairs' },
  { href: '/consoles', label: 'Consoles' },
  { href: '/games', label: 'Games' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const telHref = `tel:${SITE.phone.replace(/\s+/g, '')}`;
  const waHref = waLink('Hi PlayStation Repair Sri Lanka — I have a question.');

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 gap-3">
        <Link
          href="/"
          aria-label="PlayStation Repair Sri Lanka — home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
        >
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active
                    ? 'text-accent'
                    : 'text-text/80 hover:text-text hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={telHref}
            aria-label={`Call ${SITE.phone}`}
            title={`Call ${SITE.phone}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-surface/40 text-text/80 transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Phone size={16} strokeWidth={2.2} aria-hidden />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            title="Message us on WhatsApp"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-surface/40 text-text/80 transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <MessageCircle size={16} strokeWidth={2.2} aria-hidden />
          </a>
          <Link
            href="/repairs#book"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Wrench size={14} strokeWidth={2.4} aria-hidden />
            Book Repair
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden -mr-2 p-2 rounded-md text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border/60"
          >
            <nav
              className="container-page py-2 flex flex-col"
              aria-label="Mobile"
            >
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`py-3 px-2 rounded-md text-base font-medium ${
                      active ? 'text-accent' : 'text-text/85'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 mb-3 grid grid-cols-3 gap-2">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border/70 bg-surface/40 px-2 py-2.5 text-xs font-medium text-text/85"
                >
                  <Phone size={14} strokeWidth={2.2} aria-hidden />
                  Call
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border/70 bg-surface/40 px-2 py-2.5 text-xs font-medium text-text/85"
                >
                  <MessageCircle size={14} strokeWidth={2.2} aria-hidden />
                  WhatsApp
                </a>
                <Link
                  href="/repairs#book"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-2 py-2.5 text-xs font-medium text-white"
                >
                  <Wrench size={14} strokeWidth={2.4} aria-hidden />
                  Book
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
