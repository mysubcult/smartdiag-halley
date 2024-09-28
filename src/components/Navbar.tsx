// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Программы', href: '/soft' },
  { name: 'Статьи', href: '/articles' },
  { name: 'О нас', href: '/services' },
  { name: 'Обратная связь', href: '/contact' },
];

const storeLinks = [
  {
    name: 'OZON',
    href: 'https://www.ozon.ru/seller/smartdiag-862410/',
    bgGradient: 'from-blue-500 to-blue-700',
    hoverGradient: 'from-blue-600 to-blue-900',
    textColor: 'text-white',
    iconSrc: '/images/logos/favicon.ico',
  },
  {
    name: 'Яндекс Маркет',
    href: 'https://market.yandex.ru/business--smartdiag/50025236',
    bgGradient: 'from-yellow-400 to-yellow-600',
    hoverGradient: 'from-yellow-500 to-yellow-700',
    textColor: 'text-black',
    iconSrc: 'https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico',
  },
  {
    name: 'Wildberries',
    href: 'https://www.wildberries.ru/seller/1343369',
    bgGradient: 'from-purple-500 to-purple-700',
    hoverGradient: 'from-purple-600 to-purple-900',
    textColor: 'text-white',
    iconSrc: '/images/logos/favicon.ico',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // To handle client-side rendering

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch by not rendering until client-side
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-opacity-90 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a>
                <Image
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={128}
                  height={58}
                  className="h-12 w-auto"
                  priority
                />
              </a>
            </Link>
          </div>

          {/* Десктоп Меню */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="relative text-lg font-semibold hover:text-red-500 transition-colors whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
            ))}
          </div>

          {/* Кнопки и переключатель темы */}
          <div className="flex items-center space-x-4">
            {/* Кнопки магазинов (только на десктопе) */}
            <div className="hidden lg:flex space-x-2">
              {storeLinks.map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bgGradient} hover:${store.hoverGradient} ${store.textColor} transition-transform transform hover:scale-105 whitespace-nowrap`}
                >
                  <Image
                    src={store.iconSrc}
                    alt={store.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                    loading="lazy"
                  />
                  {store.name}
                </a>
              ))}
            </div>

            {/* Переключатель темы */}
            <ThemeSwitchButton />

            {/* Кнопка открытия мобильного меню */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 pt-4 pb-2 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}

              {/* Кнопки магазинов в мобильном меню */}
              <div className="mt-4 space-y-2">
                {storeLinks.map((store) => (
                  <a
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bgGradient} hover:${store.hoverGradient} ${store.textColor} transition-transform transform hover:scale-105 whitespace-nowrap`}
                  >
                    <Image
                      src={store.iconSrc}
                      alt={store.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-2"
                      loading="lazy"
                    />
                    {store.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
