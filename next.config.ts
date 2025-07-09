import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
        turbo: {
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
        }
    },
    // Skip admin routes during build
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    async headers() {
        return [
            {
                source: '/admin/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow'
                    }
                ]
            }
        ]
    }
}

export default nextConfig
