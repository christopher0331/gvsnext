/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'greenviewsolutionsimages.s3.us-west-1.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io'
            },
            {
                protocol: 'https',
                hostname: 'api.cloudflare.com'
            },
            {
                protocol: 'https',
                hostname: 'imagedelivery.net'
            },
            {
                protocol: 'https',
                hostname: 'greenviewsolutions.net'
            }
        ]
    },
}

module.exports = nextConfig
