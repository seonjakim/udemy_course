/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URI: process.env.BASE_URI,
  },
};

module.exports = nextConfig;
