# GameHub LK — Gaming Store Showcase Site

A fast, static showcase website for a gaming store in Sri Lanka. Consoles, video games, accessories, and repairs — no e-commerce, no backend, just a clean marketing site with a WhatsApp-based inquiry flow.

> **Placeholder brand:** "GameHub LK" is a stand-in name until the real business identity is provided. All content lives in JSON files so it can be swapped in one place.

## Status

Phase A — building the site with sample data. See [`docs/plan.md`](docs/plan.md) for the full build plan.

## Tech stack

- Next.js 14+ with `output: 'export'` (fully static)
- TypeScript
- Tailwind CSS
- `framer-motion` for subtle animations, `lucide-react` for icons

No backend, no API routes, no server actions. The `out/` folder is deployable to plain Nginx.

## Getting started

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # produces static out/
```

## Project structure (planned)

```
app/                 Next.js app router pages
components/          UI components
data/                site.json, products.json, repairs.json, tiktok.json
public/products/     Local placeholder images
docs/plan.md         Full build plan
```

## Roadmap

Build order (one commit per step):

1. Scaffold Next.js + TS + Tailwind + static export
2. Design tokens, navbar, footer
3. Sample data JSON + placeholder images
4. Home page
5. Product showcase pages with filter/search
6. Repairs page + WhatsApp form
7. Contact page + floating WhatsApp button
8. TikTok embed component
9. SEO, favicon, 404, accessibility, Lighthouse pass

Phase B (CI/CD to Oracle server, Docker) is tracked in the plan but not part of this repo yet.
