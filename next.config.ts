import type { NextConfig } from 'next'
import removeImports from 'next-remove-imports'

const nextConfig: NextConfig = removeImports()({
  webpack(config) {
    return config
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '8mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lawnhtaqgtzovjhzthxo.supabase.co',
      },
    ],
  },
})

export default nextConfig
