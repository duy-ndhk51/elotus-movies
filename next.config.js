/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
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
