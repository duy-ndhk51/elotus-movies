/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  sassOptions: {
    additionalData: `
          @import "@styles/_variables.scss";
          @import "@styles/_tool.scss";
        `,
  },
  config: {
    commitizen: {
      path: '@commitlint/cz-commitlint',
    },
  },
};

module.exports = nextConfig;
