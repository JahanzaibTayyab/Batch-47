/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "full-stack-ecommerce-clothing-web.vercel.app",
      },
    ],
  },
};

export default nextConfig;
