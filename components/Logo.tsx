import { SITE } from '@/lib/data';

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-display font-bold">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpg"
        alt=""
        aria-hidden
        width={36}
        height={36}
        className="h-9 w-9 rounded-md object-cover ring-1 ring-border/60"
      />
      <span className="flex flex-col leading-tight tracking-tight">
        <span className="text-[13px] sm:text-sm text-text/90">PlayStation</span>
        <span className="text-[11px] sm:text-xs text-highlight -mt-0.5">
          Repair <span className="text-text/70">· Sri Lanka</span>
        </span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
