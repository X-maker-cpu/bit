/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  images:{domains:["images.pexels.com","render.fineartamerica.com","web.facebook.com",
  "scontent.fnbo9-1.fna.fbcdn.net","pixels.com" ,"media.istockphoto.com","encrypted-tbn0.gstatic.com"]}
};

module.exports = nextConfig;
