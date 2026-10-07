/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain static site to /out that can be
  // uploaded to Hostinger exactly like the original HTML site.
  output: 'export',
  // Keep the original URLs: /terms/, /privacy/, /refunds/, /merchant-agreement/
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
