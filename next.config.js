/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponents: true,
    serverActions: true
  }
};

module.exports = nextConfig;
