// Every page of the site and its address in each language.
// The menu, the language switch, hreflang tags and the sitemap all read from here.
import type { Lang } from './home';

export const routes = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  score: { en: '/score/', es: '/es/score/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
} as const;

export type Page = keyof typeof routes;

// Menu order. The Score page is also the green button, so it sits last.
export const menu: { page: Page; label: Record<Lang, string> }[] = [
  { page: 'services', label: { en: 'Services', es: 'Servicios' } },
  { page: 'score', label: { en: 'Blueprint Score', es: 'Blueprint Score' } },
  { page: 'contact', label: { en: 'Contact', es: 'Contacto' } },
];

// Anchors for each path on the Services page, so the home page can link straight to one.
export const pathIds: Record<Lang, Record<'foundation' | 'found' | 'booked' | 'full', string>> = {
  en: { foundation: 'foundation', found: 'get-found', booked: 'get-booked', full: 'full-blueprint' },
  es: { foundation: 'la-base', found: 'que-te-encuentren', booked: 'que-te-contraten', full: 'blueprint-completo' },
};
