/** @type {import('next').NextConfig} */
const removedCities = [
    'littleton', 'lakewood', 'thornton', 'centennial', 'englewood',
    'glenwood-springs', 'gunbarrel', 'highlands-ranch', 'jefferson-county',
    'louisville', 'northglenn', 'parker', 'superior', 'belmar',
    'castle-rock', 'columbine-valley', 'fountain', 'greenwood-village',
    'lone-tree', 'meridian', 'milliken', 'sedalia', 'estes-park',
    'westminster-hills'
];

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
    async redirects() {
        return [
            ...removedCities.map(city => ({
                source: `/${city}`,
                destination: '/',
                permanent: true
            })),
            ...removedCities.map(city => ({
                source: `/${city}/vinyl-fences`,
                destination: '/vinyl-fences',
                permanent: true
            })),
            ...removedCities.map(city => ({
                source: `/${city}/wood-fences`,
                destination: '/wood-fences',
                permanent: true
            })),
            ...removedCities.map(city => ({
                source: `/${city}/chainlink-fences`,
                destination: '/chainlink-fences',
                permanent: true
            }))
        ];
    }
};

module.exports = nextConfig
