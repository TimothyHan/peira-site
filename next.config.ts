import type { NextConfig } from "next";

// Served at timothyhan.github.io/peira via the deploy workflow in the
// TimothyHan/peira repo (it checks out this repo and publishes its Pages).
// basePath/assetPrefix are what make a static export work from a subpath —
// without them every asset and internal link resolves against "/" and 404s.
// If a custom domain arrives later: drop both.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/peira",
  assetPrefix: "/peira",
  trailingSlash: true,
};

export default nextConfig;
