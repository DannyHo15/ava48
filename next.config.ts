import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Image optimization configuration
  images: {
    // Enable modern image formats
    formats: ["image/avif", "image/webp"],

    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Configure image sizes for art direction
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Configure quality settings for different use cases
    qualities: [],

    // Set minimum cache TTL for optimized images
    minimumCacheTTL: ONE_WEEK_IN_SECONDS, // 1 week

    // Allow images from specific external domains if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],

    // Enable dangerous SVG handling if needed (not recommended)
    dangerouslyAllowSVG: false,

    // Set content security policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Set content disposition type
    contentDispositionType: "attachment",

    // Configure maximum redirects for remote images
    maximumRedirects: 3,
  },

  // Enable compression for better performance
  compress: true,

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure trailing slash behavior
  trailingSlash: false,

  // Configure headers for better caching and security
  async headers() {
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Configure redirects if needed
  async redirects() {
    return [];
  },

  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
