/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.slingacademy.com",
      },
    ],
  },
};

module.exports = nextConfig;
