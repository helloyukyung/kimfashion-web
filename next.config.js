/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['oemiosbcnbuuidevvkzj.supabase.co']
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/news',
        permanent: false
      }
    ]
  }
}
module.exports = nextConfig
