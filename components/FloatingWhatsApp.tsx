import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Hi GameHub LK — I have a question.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GameHub LK on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black shadow-glow transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:bottom-6 sm:right-6"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-accent/60 motion-safe:animate-ping"
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
