'use client';

// components/Navbar.tsx

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Программы', href: '/soft' },
  { name: 'Статьи', href: '/articles' },
  { name: 'О нас', href: '/services' },
  { name: 'Обратная связь', href: '/contact' },
];

const storeLinks = [
  { name: 'OZON', href: 'https://www.ozon.ru/seller/smartdiag-862410/', colorClass: 'from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900', textColor: 'text-white' },
  { name: 'Яндекс Маркет', href: 'https://market.yandex.ru/business--smartdiag/50025236', colorClass: 'from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700', textColor: 'text-black' },
  { name: 'Wildberries', href: 'https://www.wildberries.ru/seller/1343369', colorClass: 'from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900', textColor: 'text-white' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

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
                  {item.name}
                </Link>
              ))}

              {/* Store Links - Visible only on xl */}
              {currentBreakpoint === 'xl' && (
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 focus:outline-none flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isSubMenuOpen}
                >
                  Магазины
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
              )}
            </div>
          </div>

          {/* Button Group for Stores and Theme Switch */}
          <div className="flex items-center space-x-2">
            {/* Hidden on mobile */}
            <div className="hidden xl:flex space-x-2">
              {currentBreakpoint !== 'lg' && storeLinks.map((store) => (
                <Link key={store.name} href={store.href} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center bg-gradient-to-r ${store.colorClass} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
                  >
                    {store.name}
                  </a>
                </Link>
              ))}
            </div>

            {/* Theme Switcher */}
            <ThemeSwitchButton />

            {/* Mobile Menu Toggle */}
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown for Stores on xl */}
      {currentBreakpoint === 'xl' && isSubMenuOpen && (
        <div className="absolute left-4 top-16 z-30 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 w-48">
          {storeLinks.map((store) => (
            <Link key={store.name} href={store.href} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-lg font-medium ${store.textColor} hover:text-red-500 py-2`}
              >
                {store.name}
              </a>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30">
          <div className="flex flex-col items-center space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className="block py-2 text-lg font-medium hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
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
              Магазины
              <ChevronDownIcon className={`h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isSubMenuOpen && (
              <div className="flex flex-col space-y-3 w-full mt-2">
                {storeLinks.map((store) => (
                  <Link key={store.name} href={store.href} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center bg-gradient-to-r ${store.colorClass} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full`}
                    >
                      {store.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
