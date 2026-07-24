import Link from 'next/link';
import { ArrowLeft, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="container-page py-24 sm:py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">
        Error 404
      </p>
      <h1 className="mt-4 text-5xl sm:text-6xl font-display font-bold tracking-tight">
        Game <span className="text-accent">over</span>.
      </h1>
      <p className="mt-4 mx-auto max-w-lg text-muted">
        This page doesn’t exist — maybe it was moved, or the link is broken.
        Let’s get you back to something useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <ArrowLeft size={18} strokeWidth={2.4} aria-hidden />
          Back to home
        </Link>
        <Link
          href="/repairs"
          className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-surface/40 px-5 py-3 font-medium text-text transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Wrench size={18} strokeWidth={2.4} aria-hidden />
          Book a repair
        </Link>
      </div>
    </div>
  );
}
