import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: '/vendenta-site',
  assetPrefix: '/vendenta-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
