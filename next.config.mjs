/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nextui.org',
          pathname: '/**',
        },
      ]}
      //   domains: ['nextui.org'],
      // },
};

export default nextConfig;
