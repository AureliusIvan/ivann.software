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
            // rules: {
            //     '*.svg': {
            //         loaders: ['@svgr/webpack'],
            //         as: '*.js',
            //     },
            // }
        }
    }
}

export default nextConfig
