const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Добавляем эту строку для статической сборки
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
}

module.exports = nextConfig
