/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resource.jweboy.asia",
      },
    ],
  },
};

export default nextConfig;
