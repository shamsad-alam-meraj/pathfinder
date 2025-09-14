import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
