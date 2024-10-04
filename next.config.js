const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Добавляем эту строку для статической сборки
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true, // Включаем сохранение позиции прокрутки
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
}

module.exports = nextConfig;
