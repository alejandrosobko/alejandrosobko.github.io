import type { NextConfig } from "next"

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
}

export default nextConfig
