'use client';

import { useEffect, useState } from 'react';
import { getOpenStatus, type OpenStatus as Status } from '@/lib/hours';

/** "Open now · until 20:00" badge, in Sri Lanka time. Client-only (depends on the clock). */
export default function OpenStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
        status.open
          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
          : 'border-border/70 bg-surface/50 text-text/75'
      } ${className}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${status.open ? 'bg-emerald-400' : 'bg-muted'}`}
        aria-hidden
      />
      {status.label}
    </span>
  );
}
