import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? "/alejandrosobko.github.io/" : "",
  basePath: isProd ? "/alejandrosobko.github.io" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: true,
    optimizePackageImports: ["@phosphor-icons/react", "@chakra-ui/react"],
  },
  transpilePackages: ["@chakra-ui/react", "@phosphor-icons/react"],
}

export default nextConfig
