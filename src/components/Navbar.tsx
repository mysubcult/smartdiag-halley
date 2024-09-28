'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

// TypeScript Interfaces
interface NavigationItem {
  name: string;
  href: string;
}

interface StoreLink {
  name: string;
  href: string;
  iconSrc: string;
  bgGradient: string;
  hoverGradient: string;
  textColor: string;
}

// Navigation and Store Links
const navigationItems: NavigationItem[] = [
  { name: 'Главная', href: '/' },
  { name: 'Программы', href: '/soft' },
  { name: 'Статьи', href: '/articles' },
  { name: 'О нас', href: '/services' },
  { name: 'Обратная связь', href: '/contact' },
];

const storeLinks: StoreLink[] = [
  {
    name: 'OZON',
    href: 'https://www.ozon.ru/seller/smartdiag-862410/',
    iconSrc: '/images/logos/ozon.webp',
    bgGradient: 'from-blue-500 to-blue-700',
    hoverGradient: 'from-blue-600 to-blue-900',
    textColor: 'text-white',
  },
  {
    name: 'Яндекс Маркет',
    href: 'https://market.yandex.ru/business--smartdiag/50025236',
    iconSrc: 'https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico',
    bgGradient: 'from-yellow-400 to-yellow-600',
    hoverGradient: 'from-yellow-500 to-yellow-700',
    textColor: 'text-black',
  },
  {
    name: 'Wildberries',
    href: 'https://www.wildberries.ru/seller/1343369',
    iconSrc: '/images/logos/wildberries.webp',
    bgGradient: 'from-purple-500 to-purple-700',
    hoverGradient: 'from-purple-600 to-purple-900',
    textColor: 'text-white',
  },
];

// Theme Switcher Component
const ThemeSwitchButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg
          className="h-5 w-5 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

// Main Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Handle client-side rendering to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between flex-wrap">
          {/* Logo and Desktop Navigation */}
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="block h-12 w-auto"
                  src="/images/logos/logo.webp" // Optimized WebP format
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority // Eagerly load the logo as it's critical for the layout
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-wrap items-center space-x-5 ml-4">
              {navigationItems.map((item: NavigationItem) => (
                <Link key={item.name} href={item.href}>
                  <span className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Button Group for Stores and Theme Switch */}
          <div className="flex items-center space-x-2">
            {/* Store Links - Hidden on Mobile */}
            <div className="hidden lg:flex space-x-2">
              {storeLinks.map((store: StoreLink) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center bg-gradient-to-r ${store.bgGradient} hover:bg-gradient-to-r ${store.hoverGradient} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
                >
                  <Image
                    src={store.iconSrc}
                    alt={store.name}
                    className="w-5 h-5 mr-2"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  {store.name}
                </a>
              ))}
            </div>

            {/* Theme Switcher */}
            <ThemeSwitchButton />

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                <Bars3Icon className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} />
                <XMarkIcon className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30">
          <div className="flex flex-col items-center space-y-4">
            {navigationItems.map((item: NavigationItem) => (
              <Link key={item.name} href={item.href}>
                <span
                  className="block py-2 text-lg font-medium hover:text-red-500 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Submenu for Stores */}
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex items-center justify-between w-full text-left py-2 text-lg font-medium hover:text-red-500 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isSubMenuOpen}
            >
              Магазины
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  isSubMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {isSubMenuOpen && (
              <div className="flex flex-col space-y-3 w-full mt-2">
                {storeLinks.map((store: StoreLink) => (
                  <a
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center bg-gradient-to-r ${store.bgGradient} hover:bg-gradient-to-r ${store.hoverGradient} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full`}
                  >
                    {store.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
