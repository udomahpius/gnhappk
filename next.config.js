/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'rythink.io',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/docs/images/people/**',
      },

      {
        protocol: 'https',
        hostname: 'flowbite-admin-dashboard.vercel.app',
        port: '',
        pathname: '/images/users/**',
      },

      
      {
        protocol: 'https',
        hostname: 'secondhand-sandy.vercel.app',
        port: '',
        pathname: '/_next/static/**',
      },
      {
        protocol: 'https',
        hostname: 'secondhand-sandy.vercel.app',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brandfetch.com',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
}
module.exports = nextConfig
