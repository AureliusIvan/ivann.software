/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  //disable images optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
