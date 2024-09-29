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
  { name: 'Магазины', subMenu: [
    { name: 'OZON', href: 'https://www.ozon.ru/seller/smartdiag-862410/' },
    { name: 'Яндекс Маркет', href: 'https://market.yandex.ru/business--smartdiag/50025236' },
    { name: 'Wildberries', href: 'https://www.wildberries.ru/seller/1343369' }
  ]}
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

            {/* Desktop Menu - Hidden on screens below lg */}
            <div className="hidden lg:flex flex-wrap items-center space-x-5 ml-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                        className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
                      >
                        {item.name}
                        <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </button>
                      {isSubMenuOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-neutral-900 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Button Group for Theme Switch */}
          <div className="flex items-center space-x-2">
            {/* Theme Switcher */}
            <ThemeSwitchButton />

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
              <div key={item.name} className="w-full">
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className="flex items-center justify-between w-full py-2 text-lg font-medium hover:text-red-500 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded={isSubMenuOpen}
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {isSubMenuOpen && (
                      <div className="flex flex-col space-y-3 w-full mt-2">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            passHref
                            className="block w-full px-4 py-2 text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    passHref
                    className="block w-full px-4 py-2 text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
