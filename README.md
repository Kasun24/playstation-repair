# PlayStation Repair Sri Lanka — Website

Live: **https://playstationrepairsrilanka.lk**

A fast, static marketing site for a PlayStation & Xbox repair workshop in Kadawatha, Sri Lanka. Repairs are the focus; consoles, games, and accessories are secondary showcase sections. No e-commerce, no backend — enquiries go through WhatsApp.

## Tech stack

- Next.js 14 with `output: 'export'` (fully static `out/` folder)
- TypeScript, Tailwind CSS
- `framer-motion` for subtle animations, `lucide-react` for icons

## Getting started

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # produces static out/
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to **GitHub Pages**. The custom domain `playstationrepairsrilanka.lk` is set in the repo's Pages settings, so `NEXT_PUBLIC_BASE_PATH` stays empty.

## Where to update content

| What                        | File                                 |
| --------------------------- | ------------------------------------ |
| Business name, contact, URL, hours, map | `data/site.json` (hours drive the live "Open now" badge) |
| Repair services             | `data/repairs.json` (each one gets a page at `/repairs/<slug>/`) |
| Repair FAQs                 | `data/faq.json`                      |
| Products (consoles etc.)    | `data/products.json`                 |
| TikTok videos               | `data/tiktok.json` (`poster` = cover image; player loads on tap) |
| Customer reviews            | `data/testimonials.json` (section hidden while empty) |
| Logo / share image          | `public/logo.jpg`, `public/og-image.jpg` |
| Workshop photos             | `public/workshop/`                   |
| Theme colors                | `tailwind.config.ts`                 |

## SEO notes

- `siteUrl` in `data/site.json` drives canonical URLs, the sitemap, and `robots.txt` — keep it set to the live domain.
- Page metadata comes from `pageMeta()` in `lib/seo.ts`; each page sets its own canonical URL and share tags.
- Structured data: `LocalBusiness` (every page), `Service` + `BreadcrumbList` (repair pages), `FAQPage` (`/repairs`).
- Google Search Console: paste the HTML-tag verification code into `googleSiteVerification` in `data/site.json`, deploy, verify, then submit `https://playstationrepairsrilanka.lk/sitemap.xml`.
- Before adding photos, strip their metadata and resize to ≤1600px wide (phone photos carry device info, location, and rotation flags).
