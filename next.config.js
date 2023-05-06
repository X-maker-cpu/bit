/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  images:{domains:["images.pexels.com"]}
};

module.exports = nextConfig;
