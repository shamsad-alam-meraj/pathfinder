import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "images.unsplash.com"],
  },
};

export default nextConfig;
