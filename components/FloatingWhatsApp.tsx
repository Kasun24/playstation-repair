import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Hi PlayStation Repair Sri Lanka — I have a question.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PlayStation Repair Sri Lanka on WhatsApp"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
        right: 'max(1.25rem, env(safe-area-inset-right))',
      }}
      className="group fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-glow transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite]"
        aria-hidden
      />
      <MessageCircle
        size={26}
        strokeWidth={2.4}
        className="relative"
        aria-hidden
      />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
