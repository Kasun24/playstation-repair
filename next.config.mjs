/**
 * `NEXT_PUBLIC_BASE_PATH` lets the GitHub Pages workflow build the site under a subpath
 * (e.g. `/playstation-repair`) without hardcoding it. Leave empty for a custom domain
 * or a `<user>.github.io` repo where the site is served from `/`.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
