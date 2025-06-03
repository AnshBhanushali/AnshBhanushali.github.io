// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org"],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
