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
  { name: 'OZON', href: 'https://www.ozon.ru/seller/smartdiag-862410/' },
  { name: 'Яндекс Маркет', href: 'https://market.yandex.ru/business--smartdiag/50025236' },
  { name: 'Wildberries', href: 'https://www.wildberries.ru/seller/1343369' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(''); // Новое состояние для брейкпоинта

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
      return 'xs'; // Для ширин меньше чем sm
    };

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const bp = getBreakpoint(width);
      setCurrentBreakpoint(bp);
    };

    // Инициализация при загрузке
    updateBreakpoint();

    // Обработчик изменения размера окна
    window.addEventListener('resize', updateBreakpoint);

    // Очистка обработчика при размонтировании
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [mounted]);

  if (!mounted) {
    return null; // Prevents hydration mismatch by not rendering until client-side
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
                  priority // Eagerly load the logo as it's critical for the layout
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

              {/* Store Links - Only visible on XL and larger screens */}
              <div className="hidden xl:flex space-x-2">
                {storeLinks.map((store) => (
                  <Link href={store.href} passHref key={store.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      {store.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Button Group for Theme Switch */}
          <div className="flex items-center space-x-2">
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
            <div className="lg:hidden">
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

      {/* Mobile Menu - Visible on lg and smaller screens */}
      {isMenuOpen && (
        <div className="lg:hidden mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30">
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
              <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isSubMenuOpen && (
              <div className="flex flex-col space-y-3 w-full mt-2">
                {storeLinks.map((store) => (
                  <Link key={store.name} href={store.href} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
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
