import { SITE } from './data';

export const waLink = (message?: string): string => {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
