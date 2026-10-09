/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the original URLs: /terms/, /privacy/, /refunds/, /merchant-agreement/
  trailingSlash: true,
  images: { unoptimized: true },
  // Static export for Hostinger (HOW_TO_UPLOAD.txt): run with STATIC_EXPORT=1
  // Left off by default so `next build` / `next start` keep working as before.
  ...(process.env.STATIC_EXPORT === '1' ? { output: 'export' } : {}),
};

export default nextConfig;
