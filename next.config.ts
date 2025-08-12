import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
        hostname: 'mellow-seahorse-605.convex.cloud',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
