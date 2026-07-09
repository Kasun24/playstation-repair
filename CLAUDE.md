# Gaming Store Website — Build Plan for Claude Code

## Git & commit conventions
- **No `Co-Authored-By` trailers.** Commit and push as the user (Kasun24) only — no Claude co-author lines.
- Author identity for all commits: the repo's configured `user.name` / `user.email` (Kasun24).
- Push directly to `origin/main` unless a branch/PR is explicitly requested.

---

## Locked-in decisions & clarifications (2026-07-09)
These resolve ambiguities in the plan below. If anything here conflicts with the sections that follow, THIS section wins.

**Visual identity**
- Accent color: **neon green** on a dark theme (single vibrant accent, per plan).
- Fonts: **Space Grotesk** for headings/logo, **Inter** for body (both from Google Fonts, self-hosted where possible).

**Information architecture**
- Three separate showcase pages (not tabs): `/consoles`, `/games`, `/accessories`. Better SEO and cleaner deep-links from the home tiles.
- Home tiles link directly to each showcase page + `/repairs`.

**Sample content**
- Placeholder product images: **distinct SVG gradient cards per product**, generated at build time — each product gets a unique gradient + name overlay. No hotlinked external images. Stored under `/public/products/`.
- TikTok placeholders: use **real public gaming TikTok video IDs** in `data/tiktok.json` so the embed section actually renders during dev. Swap for the real business's videos when provided.

**Business identity placeholders (in `data/site.json`)**
- Name: `GameHub LK`
- Tagline: `Consoles. Games. Repairs. All in one place.`
- WhatsApp: `94770000000`
- Location: placeholder Colombo address
- Phone/hours: realistic placeholders

**Tech baseline**
- Node 20 LTS, npm (not pnpm/yarn), Next.js 14 **App Router**, TypeScript **strict**.
- Tailwind default preset extended with our design tokens (neon green accent, Space Grotesk / Inter font families).

**Build cadence**
- One commit per plan step (nine steps total). Run `npm run build` after each step; do not commit if the static export fails.

---

## Project overview
A simple, fast showcase website for a new gaming store business in Sri Lanka (reference for inspiration: tecroot.lk — but this is a showcase site, NOT an e-commerce store). No backend, no database, no prices for now.

**Services to feature:** Gaming Consoles, Video Games, Accessories, and Repairs (repairs is a key service — give it prominence).

**Phasing:**
- **Phase A (this project):** Build the complete website as a GitHub repo, fully working with sample data, runnable locally with `npm run dev` and building to a static `out/` folder.
- **Phase B (separate, later — NOT part of this build):** CI/CD to an Oracle server. Ignore all deployment work for now; just ensure the static build always succeeds.

**Content:** The business owner has not provided real data yet. Use realistic SAMPLE data everywhere (see Sample Data section). Keep all content in JSON files so real data can be swapped in later without touching components.

## Placeholder business identity (until real data arrives)
Create a single `data/site.json` (or `config/site.ts`) holding ALL business identity so it can be replaced in one place later:
- Business name: use a placeholder like **"GameHub LK"** (invented, not the reference site's name)
- Logo: generate a simple SVG text/icon logo component
- WhatsApp number: `94770000000` (placeholder)
- TikTok profile URL + video URLs: placeholders (see TikTok section)
- Tagline: e.g., "Consoles. Games. Repairs. All in one place."
- Address/phone/hours: realistic placeholders

## Sample data (required — site must look complete and real)
Inspired by the reference site's categories but with original copy and better presentation. Put in `data/products.json`:
- **Gaming Consoles (6–8 items):** e.g., PS5 Slim, PS5 Digital, PS4 Pro (pre-owned), Xbox Series X, Xbox Series S, Nintendo Switch OLED, Steam Deck. Fields: id, name, category, condition (new/pre-owned), shortDescription, tags, image.
- **Video Games (8–10 items):** a mix of popular PS5/PS4/Xbox titles across genres. Same fields + platform.
- **Accessories (6–8 items):** controllers, headsets, charging docks, console skins, memory cards, cooling stands.
- **Repairs (services, in `data/repairs.json`):** HDMI port replacement, controller stick drift fix, console cleaning & thermal paste, disc drive repair, storage upgrade — each with name, description, typical turnaround (e.g., "1–2 days"), icon name.
- Images: use consistent local placeholder images in `/public/products/` (generated gradient/SVG placeholders are fine — do NOT hotlink images from other websites). Every card must render with an image so the UI looks finished.
- Write all descriptions as original marketing copy — do not copy text from tecroot.lk.

## Tech stack (fixed decisions — do not change)
- **Next.js 14+ with `output: 'export'`** (fully static export, no server features: no API routes, no server actions, no next/image optimization — use `unoptimized: true` for images)
- **Tailwind CSS**
- TypeScript
- Output must be a static `out/` folder deployable to plain Nginx
- No backend of any kind. No form POST endpoints.

## Pages & structure
1. **Home** — hero section with tagline + WhatsApp CTA button, service/category tiles (Consoles, Video Games, Accessories, Repairs), a "Why us" trust section, TikTok section, footer.
2. **Consoles / Video Games / Accessories** — one page each (or one showcase page with tabs). No prices, no cart. Just image cards with names and short descriptions, loaded from a local `data/products.json` so items can be added later by editing JSON. Include a few placeholder items.
3. **Repairs** — describe repair services (consoles, controllers, etc.), simple 3-step "how it works" (Contact us → Diagnosis → Fixed), and the repair inquiry form (see Form section).
4. **Contact** — WhatsApp button, phone, location placeholder, general inquiry form.

## Interactive form (main requirement) — WhatsApp based, no backend
- Build a client-side form component (name, device/item, issue or message, preferred contact time).
- On submit, validate fields, then open `https://wa.me/<NUMBER>?text=<URL-encoded pre-filled message>` in a new tab, composing the message from the form fields.
- Also show the composed message as a preview before sending.
- Use this on the Repairs page (repair-specific fields) and Contact page (general fields).
- No `<form>` POST to any server; purely client-side.

## TikTok section (main requirement)
- "Follow us on TikTok" section on the Home page.
- Embed videos using TikTok's official embed: `<blockquote class="tiktok-embed" cite="VIDEO_URL" data-video-id="...">` plus the `https://www.tiktok.com/embed.js` script loaded client-side.
- Video URLs come from a `data/tiktok.json` array so they're easy to swap.
- Add a "View more on TikTok" button linking to the profile.
- Handle loading gracefully (embeds are client-side only; wrap in a component that loads the script once).

## Design direction & UX (simple stack, modern feel)
Keep the dependency list small — polish comes from craft, not libraries:
- **Allowed libraries:** Tailwind CSS, `framer-motion` (subtle animations only), `lucide-react` (icons). Nothing else unless essential.
- Modern gaming aesthetic: dark theme with one vibrant accent color (neon green or violet), clean cards, rounded corners, subtle glow/gradient accents. Avoid generic template look — distinctive hero typography, consistent spacing scale.
- Fully responsive, **mobile-first** (most Sri Lankan traffic is mobile). Test every section at ~380px width.
- Micro-interactions: card hover lift + glow, smooth scroll-into-view fades (framer-motion, once, no repeat), animated mobile menu, button press states, skeleton shimmer while TikTok embeds load.
- Category filtering and search on showcase pages must be instant client-side (no page reloads), with animated layout transitions when the filter changes.
- Sticky navbar with scroll-aware background blur; mobile hamburger with slide-in panel (mirror the reference site's clean drawer menu, but smoother).
- Floating WhatsApp button on all pages (bottom-right, with subtle pulse).
- Accessibility: keyboard navigable menu/filters, visible focus states, respects `prefers-reduced-motion`.
- Performance: static images in `/public`, lazy-load TikTok embeds and below-the-fold sections; target Lighthouse 90+ on mobile.

## SEO basics
- Proper `<title>`/meta description per page, Open Graph tags, favicon.
- Semantic HTML, alt text on images.
- Generate `sitemap.xml` and `robots.txt` in the static output.

## Build in this order (one step per session/prompt, commit after each)
1. Scaffold Next.js + TypeScript + Tailwind + static export config; add README with setup instructions; verify `npm run build` produces `out/`.
2. Design tokens + layout: theme colors, fonts, navbar (desktop + animated mobile menu), footer.
3. `site.json`, `products.json`, `repairs.json`, `tiktok.json` with all sample data + placeholder images.
4. Home page (hero, category tiles, trust section — TikTok section as placeholder).
5. Products showcase pages + card component + client-side category filter/search with animations.
6. Repairs page + WhatsApp form component.
7. Contact page (reuse form) + floating WhatsApp button on all pages.
8. TikTok embed component wired to `tiktok.json`.
9. SEO/meta, favicon, 404 page, accessibility pass, final responsive polish, Lighthouse check.

After each step: run `npm run build` to confirm static export still works before committing.

## Phase B — CI/CD to Oracle server (LATER, not part of this build)
Keep this section for reference only; do not implement now.

**Stage 1: static files + Nginx via GitHub Actions + rsync.**
- Server prep (manual, one time): install Nginx, create site config serving `/var/www/site`, point domain, add SSL with certbot.
- GitHub Actions workflow (`.github/workflows/deploy.yml`):
  - Trigger: push to `main`
  - Steps: checkout → setup Node → `npm ci` → `npm run build` → rsync `out/` to server over SSH (store SSH private key, host, user as GitHub Secrets)
- Add a second workflow or job that runs build + lint on pull requests (CI).

**Stage 2 (for learning): Dockerize.**
- Multi-stage Dockerfile: build stage → Nginx stage serving `out/`.
- Change the workflow to build the image, push to GitHub Container Registry, then SSH to server and `docker compose pull && up -d`.

This gives a real CI/CD learning path: CI checks → automated deploys → containers.

## Explicitly out of scope (do not build)
- Prices, cart, checkout, payments, user accounts, admin panel, CMS, backend/API of any kind, automatic TikTok feed syncing.
- Any deployment, Docker, or GitHub Actions work (that's Phase B, done separately).
- Copying text, images, or branding from tecroot.lk — it's category/UX inspiration only.
