# PlayStation Repair Sri Lanka — Website

A fast, static marketing site for a specialist PlayStation repair business in Sri Lanka. Repairs are the focus; consoles, games, and accessories are secondary showcase sections. No e-commerce, no backend — just a clean site with a WhatsApp-based inquiry flow.

> **Placeholder contact info:** WhatsApp, phone, email and address in `data/site.json` are still stand-in values. Swap them for the real details in one place when they arrive.

## Status

Phase A — site built with sample data. See [`docs/plan.md`](docs/plan.md) for the full build plan.

## Tech stack

- Next.js 14+ with `output: 'export'` (fully static)
- TypeScript
- Tailwind CSS (blue + yellow accent, dark theme)
- `framer-motion` for subtle animations, `lucide-react` for icons

No backend, no API routes, no server actions. The `out/` folder is deployable to plain Nginx.

## Getting started

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # produces static out/
```

## Project structure

```
app/                 Next.js app router pages
components/          UI components
data/                site.json, products.json, repairs.json, tiktok.json
public/              logo.jpg + generated product placeholders
docs/plan.md         Full build plan
```

## Where to update brand content

| What                    | File                                |
| ----------------------- | ----------------------------------- |
| Business name, contact  | `data/site.json`                    |
| Logo image              | `public/logo.jpg`                   |
| Favicon                 | `app/icon.svg`                      |
| Repair services         | `data/repairs.json`                 |
| Products (consoles etc.)| `data/products.json`                |
| TikTok videos           | `data/tiktok.json`                  |
| Theme colors            | `tailwind.config.ts`                |

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
