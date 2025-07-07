/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Optimize for memory usage
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Webpack optimization for memory
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Reduce memory usage in production builds
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    
    // Reduce memory usage during build
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.sideEffects = false;
    }
    
    return config;
  },
  
  // Output optimization
  output: 'standalone',
  
  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
