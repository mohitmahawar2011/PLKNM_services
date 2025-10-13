/**
 * Next.js Configuration for PLKNM Plumbing Services
 *
 * This configuration optimizes the Next.js application for SEO,
 * performance, and production deployment.
 *
 * Features:
 * - SEO-friendly headers
 * - Image optimization
 * - Compression settings
 * - Security headers
 * - Redirects and rewrites
 * - Performance optimizations
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // SWC minification is enabled by default in Next.js 15
  // swcMinify: true, // Removed as it's deprecated

  // Image optimization settings
  images: {
    // Enable image optimization
    formats: ["image/webp", "image/avif"],
    // Use remotePatterns instead of domains (new Next.js 15 format)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plknm-plumbing.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
    ],
    // Image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression settings
  compress: true,

  // Enable experimental features for better SEO
  experimental: {
    // App directory is enabled by default in Next.js 15
    // appDir: true, // Removed as it's default
    // Optimize CSS
    optimizeCss: true,
    // Server components logging is handled differently in Next.js 15
    // logging: { level: 'verbose' }, // Removed as it's deprecated
  },

  // Custom headers for SEO and security
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Performance headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        // Cache static assets
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO (add your specific redirects here)
  async redirects() {
    return [
      // Example redirects - customize based on your needs
      {
        source: "/plumber",
        destination: "/",
        permanent: true,
      },
      {
        source: "/plumbing",
        destination: "/services",
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      // Example rewrites - customize based on your needs
      {
        source: "/emergency",
        destination: "/services/emergency-plumbing",
      },
      // Add more rewrites as needed
    ];
  },

  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = "all";
    }

    return config;
  },

  // Environment variables
  env: {
    SITE_NAME: "PLKNM Plumbing Services",
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://plknm-plumbing.com",
  },

  // Output configuration for static export (if needed)
  // Uncomment if you want to generate a static site
  // output: 'export',
  // trailingSlash: true,

  // PoweredByHeader: false to remove X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;
