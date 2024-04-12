/** @type {import('next').NextConfig} */
// 서버에서 서버로의 로깅 남겨주는거 -> logging
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    domains: ["visionz-upload-07e1217f1104513b7d9dc240b45787b20a9aeadd.s3.us-west-2.amazonaws.com"],
  },
};

export default nextConfig;
