/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URI: process.env.BASE_URI,
  },
  images: {
    formats: ["image/webp"],
    domains: ["img-c.udemycdn.com"],
  },
};

module.exports = nextConfig;
