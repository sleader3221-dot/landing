/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the original URLs: /terms/, /privacy/, /refunds/, /merchant-agreement/
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
