// src/components/Navbar.tsx

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface NavItem {
  name: string;
  href: string;
  emoji?: string;
}

interface StoreLink {
  name: string;
  href: string;
  iconSrc: string;
  bgGradient: string;
  textColor: string;
}

const navigation: NavItem[] = [
  { name: 'Главная', href: '/', emoji: '🏠' },
  { name: 'Программы', href: '/soft', emoji: '💻' },
  { name: 'Статьи', href: '/articles', emoji: '📝' },
  { name: 'О нас', href: '/about', emoji: 'ℹ️' },
  { name: 'Обратная связь', href: '/contact', emoji: '📩' },
];

const storeLinks: StoreLink[] = [
  {
    name: 'OZON',
    href: 'https://www.ozon.ru/seller/smartdiag-862410/',
    iconSrc: '/images/logos/favicon.ico',
    bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900',
    textColor: 'text-white',
  },
  {
    name: 'Яндекс Маркет',
    href: 'https://market.yandex.ru/business--smartdiag/50025236',
    iconSrc: 'https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico',
    bgGradient: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700',
    textColor: 'text-black',
  },
  {
    name: 'Wildberries',
    href: 'https://www.wildberries.ru/seller/1343369',
    iconSrc: '/images/logos/favicon.ico',
    bgGradient: 'bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900',
    textColor: 'text-white',
  },
];

const NavLinks: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <>
    {items.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="relative text-base lg:text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 whitespace-nowrap"
      >
        {item.name}
      </Link>
    ))}
  </>
);

const StoreButtons: React.FC = () => (
  <div className="hidden xl:flex space-x-2">
    {storeLinks.map((store) => (
      <Link
        key={store.name}
        href={store.href}
        className={`flex items-center justify-center ${store.bgGradient} ${store.textColor} px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 whitespace-nowrap`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={store.iconSrc}
          alt={`${store.name} Icon`}
          className="w-5 h-5 mr-2"
          width={20}
          height={20}
          loading="lazy"
        />
        {store.name}
      </Link>
    ))}
  </div>
);

const StoreDropdown: React.FC<{ isOpen: boolean; toggle: () => void; breakpoint: string }> = ({
  isOpen,
  toggle,
}) => (
  <div className="relative">
    <button
      onClick={toggle}
      className="flex items-center text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 focus:outline-none whitespace-nowrap"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      Магазины
      <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
    </button>
    {isOpen && (
      <div
        className="absolute mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg py-2 w-48"
      >
        {storeLinks.map((store) => (
          <Link
            key={store.name}
            href={store.href}
            className="flex items-center px-4 py-2 text-neutral-900 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={store.iconSrc} alt={`${store.name} Icon`} className="w-5 h-5 mr-2" width={20} height={20} loading="lazy" />
            {store.name}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  const getBreakpoint = useCallback((width: number): string => {
    if (width >= 1536) return '2xl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';
    return 'xs';
  }, []);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const bp = getBreakpoint(width);
      setCurrentBreakpoint(bp);
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [getBreakpoint]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleSubMenu = useCallback(() => {
    setIsSubMenuOpen((prev) => !prev);
  }, []);

  const memoizedNavLinks = useMemo(() => <NavLinks items={navigation} />, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип и основные ссылки */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logos/logo.png"
                alt="SmartDiag Logo"
                width={256}
                height={117}
                quality={100}
                sizes="100vw"
                priority
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-3 ml-4">
              {memoizedNavLinks}
              {currentBreakpoint === 'lg' && (
                <StoreDropdown isOpen={isSubMenuOpen} toggle={toggleSubMenu} breakpoint={currentBreakpoint} />
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <StoreButtons />
            <ThemeSwitchButton />
            <div className="hidden lg:flex items-center ml-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                {currentBreakpoint.toUpperCase()}
              </span>
            </div>

            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors relative"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
