import { Gamepad2 } from 'lucide-react';

export default function Logo() {
  return (
    <span className="flex items-center gap-2 font-display font-bold text-lg">
      <span className="grid place-items-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent">
        <Gamepad2 size={18} strokeWidth={2.4} aria-hidden />
      </span>
      <span className="tracking-tight">
        GameHub<span className="text-accent">.</span>LK
      </span>
    </span>
  );
}
