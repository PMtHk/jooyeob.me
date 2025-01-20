import type { NextConfig } from 'next'
import removeImports from 'next-remove-imports'

const nextConfig: NextConfig = removeImports()({
  webpack(config) {
    return config
  },
})

export default nextConfig
