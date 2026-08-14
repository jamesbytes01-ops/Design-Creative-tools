/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        'C:/pagefile.sys',
        'C:/hiberfil.sys',
        'C:/swapfile.sys',
        '**/pagefile.sys',
      ],
    };
    return config;
  },
};

export default nextConfig;
