/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'fastly.picsum.photos',
            port: '',
            pathname: '/id/**',
          },
          {
            protocol: 'https',
            hostname: 'catbox.moe',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'files.catbox.moe',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
