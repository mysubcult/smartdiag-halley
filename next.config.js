/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Для статической сборки
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Отключаем оптимизацию изображений
  },
};

module.exports = nextConfig;
