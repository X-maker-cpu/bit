/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  images:{domains:["images.pexels.com","encrypted-tbn0.gstatic.com","render.fineartamerica.com","web.facebook.com","scontent.fnbo10-1.fna.fbcdn.net"]}
};

module.exports = nextConfig;
