const path = require("path");

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
};

module.exports = nextConfig;
