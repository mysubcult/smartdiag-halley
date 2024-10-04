// components/Navbar.tsx

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

// Типизация для навигационных ссылок
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

// Навигационные элементы
const navigation: NavItem[] = [
  { name: 'Главная', href: '/', emoji: '🏠' },
  { name: 'Программы', href: '/soft', emoji: '💻' },
  { name: 'Статьи', href: '/articles', emoji: '📝' },
  { name: 'О нас', href: '/about', emoji: 'ℹ️' },
  { name: 'Обратная связь', href: '/contact', emoji: '📩' },
];

// Ссылки магазинов
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

// Подкомпонент для навигационных ссылок
const NavLinks: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <>
    {items.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="relative text-base lg:text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out whitespace-nowrap"
      >
        {item.name}
      </Link>
    ))}
  </>
);

// Подкомпонент для ссылок магазинов
const StoreButtons: React.FC = () => (
  <div className="hidden xl:flex space-x-2 ml-4">
    {storeLinks.map((store) => (
      <a
        key={store.name}
        href={store.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${store.bgGradient} ${store.textColor} px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 whitespace-nowrap`}
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
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  const subMenuButtonRef = useRef<HTMLButtonElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

  // Определение брейкпоинта
  const getBreakpoint = useCallback((width: number): string => {
    if (width >= 1536) return '2xl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';
    return 'xs';
  }, []);

  // Обновление брейкпоинта при изменении размера окна
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

  // Оптимизация переключения мобильного меню
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Оптимизация переключения подменю
  const toggleSubMenu = useCallback(() => {
    setIsSubMenuOpen((prev) => !prev);
  }, []);

  // Мемоизация навигационных ссылок
  const memoizedNavLinks = useMemo(() => <NavLinks items={navigation} />, []);

  return (
    <>
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
              {/* Навигационные ссылки для больших экранов */}
              <div className="hidden lg:flex items-center space-x-3 ml-4">
                {memoizedNavLinks}
              </div>
            </div>

            {/* Кнопки справа */}
            <div className="flex items-center space-x-4">
              <StoreButtons />
              <ThemeSwitchButton />

              {/* Кнопка мобильного меню */}
              <div className="lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors relative"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                  aria-expanded={isMenuOpen}
                >
                  <div className="relative w-6 h-6">
                    <AnimatePresence mode="wait" initial={false}>
                      {isMenuOpen ? (
                        <motion.div
                          key="xmark"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="bars"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Bars3Icon className="h-6 w-6" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
