/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: '/RPwebsite/',
  basePath: '/RPwebsite',
  trailingSlash: true,
}

module.exports = nextConfig 