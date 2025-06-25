import type { NextConfig } from "next"

const REPO_NAME = "alejandrosobko.github.io"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: true,
    optimizePackageImports: ["@phosphor-icons/react", "@chakra-ui/react"],
  },
  transpilePackages: ["@chakra-ui/react", "@phosphor-icons/react"],
  basePath: process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "",
}

export default nextConfig
