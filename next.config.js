/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "burgerburger.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "freshburger.ca",
      },
    ],
  },
};

module.exports = nextConfig;
