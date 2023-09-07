/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com',"www.pngall.com","www.camo.githubusercontent.com", "www.freepngimg.com","www.static-00.iconduck.com", "upload.wikimedia.org","www.cdn.icon-icons.com", "www.assets.com"],
  },
  experimental: {
    appDir:true,
  }
};

module.exports = nextConfig
