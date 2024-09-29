'use client';

// components/Navbar.tsx

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Главная', href: '/', emoji: '🏠' },
  { name: 'Программы', href: '/soft', emoji: '💻' },
  { name: 'Статьи', href: '/articles', emoji: '📝' },
  { name: 'О нас', href: '/about', emoji: '👥' }, // Fixed the href here
  { name: 'Обратная связь', href: '/contact', emoji: '💬' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(''); // Initialize with an empty string

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const getBreakpoint = (width: number): string => {
      if (width >= 1536) return '2xl';
      if (width >= 1280) return 'xl';
      if (width >= 1024) return 'lg';
      if (width >= 768) return 'md';
      if (width >= 640) return 'sm';
      return 'xs';
    };

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const bp = getBreakpoint(width);
      setCurrentBreakpoint(bp);
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between flex-wrap">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="block h-12 w-auto"
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu - Hidden on screens lg and below */}
            <div className="hidden xl:flex flex-wrap items-center space-x-5 ml-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
                >
                  {item.name} <span className="inline-block ml-2">{item.emoji}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Button Group for Stores and Theme Switch */}
          <div className="flex items-center space-x-2">
            {/* Hidden on mobile */}
            <div className="hidden xl:flex space-x-2">
              {/* OZON */}
              <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src="/images/logos/favicon.ico"
                    alt="OZON"
                    className="w-5 h-5 mr-2"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  OZON
                </a>
              </Link>

              {/* Яндекс Маркет */}
              <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                    alt="Яндекс Маркет"
                    className="w-5 h-5 mr-2"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  Яндекс Маркет
                </a>
              </Link>

              {/* Wildberries */}
              <Link href="https://www.wildberries.ru/seller/1343369" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src="/images/logos/favicon.ico"
                    alt="Wildberries"
                    className="w-5 h-5 mr-2"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  Wildberries
                </a>
              </Link>
            </div>

            {/* Theme Switcher */}
            <ThemeSwitchButton />

            {/* Индикатор текущего брейкпоинта */}
            <div className="hidden xl:flex items-center ml-2">
              <div className="relative">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {currentBreakpoint.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle - Visible on lg and smaller screens */}
            <div className="xl:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
                {/* Индикатор текущего брейкпоинта для мобильного меню */}
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                  {currentBreakpoint.toUpperCase()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible on lg and smaller screens */}
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="xl:hidden mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-full max-w-sm"
        >
          <div className="flex flex-col items-center space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className="block py-2 text-lg font-medium hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name} <span className="inline-block ml-2">{item.emoji}</span>
                </a>
              </Link>
            ))}

            {/* Submenu for Stores */}
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex items-center justify-center w-full text-left py-2 text-lg font-medium hover:text-red-500 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isSubMenuOpen}
            >
              Магазины <ChevronDownIcon className={`h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isSubMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col space-y-3 w-full mt-2"
              >
                {/* OZON */}
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
                  >
                    OZON
                  </a>
                </Link>

                {/* Яндекс Маркет */}
                <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
                  >
                    Яндекс Маркет
                  </a>
                </Link>

                {/* Wildberries */}
                <Link href="https://www.wildberries.ru/seller/1343369" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
                  >
                    Wildberries
                  </a>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
