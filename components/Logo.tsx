import { SITE, asset } from '@/lib/data';

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-display font-bold">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset('/logo.jpg')}
        alt=""
        aria-hidden
        width={36}
        height={36}
        className="h-9 w-9 rounded-md object-cover ring-1 ring-border/60"
      />
      <span className="whitespace-nowrap text-[15px] sm:text-base leading-none tracking-tight text-text">
        PlayStation Repair{' '}
        <span className="text-highlight">Sri Lanka</span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
