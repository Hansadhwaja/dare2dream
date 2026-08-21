import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "divine-care.ap-south-1.storage.onantryk.com",
      },
    ],
  },
}

export default nextConfig
