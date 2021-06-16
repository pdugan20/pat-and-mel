const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withSourceMaps({
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, stale-while-revalidate',
                    },
                ],
            },
        ];
    },
    images: {
        domains: ['firebasestorage.googleapis.com', 'googleapis.com'],
    },
});
