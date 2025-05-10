/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/RPwebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/RPwebsite/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 