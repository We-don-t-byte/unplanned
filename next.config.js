/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
  },
};

module.exports = nextConfig;
