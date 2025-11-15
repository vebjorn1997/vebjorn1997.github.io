import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/vebjorn1997.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vebjorn1997.github.io' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;