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
  }
}
module.exports = nextConfig
