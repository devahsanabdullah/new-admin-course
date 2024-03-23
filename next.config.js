/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    
        return [
          {
            source: '/',
            destination: '/loading',
            permanent: true,
          },
         
        ];
      },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
