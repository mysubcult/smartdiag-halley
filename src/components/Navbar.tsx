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

// Подкомпонент для выпадающего меню магазинов
const StoreDropdown: React.FC<{ isOpen: boolean; toggle: () => void; breakpoint: string }> = ({
  isOpen,
  toggle,
  breakpoint,
}) => {
  const subMenuRef = useRef<HTMLDivElement>(null);

  return (
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={subMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg py-2 w-48"
          >
            {storeLinks.map((store) => (
              <a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-neutral-900 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              >
                <Image src={store.iconSrc} alt={store.name} className="w-5 h-5 mr-2" width={20} height={20} loading="lazy" />
                {store.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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

  // Закрытие подменю при клике вне его
  useEffect(() => {
    if (!isSubMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const button = subMenuButtonRef.current;
      const menu = subMenuRef.current;
      if (button && menu && !button.contains(event.target as Node) && !menu.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSubMenuOpen]);

  // Блокировка прокрутки при открытом мобильном меню
  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  // Закрытие мобильного меню при смене брейкпоинта на больший
  useEffect(() => {
    if (currentBreakpoint === 'lg' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [currentBreakpoint, isMenuOpen]);

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
                {currentBreakpoint === 'lg' && (
                  <StoreDropdown isOpen={isSubMenuOpen} toggle={toggleSubMenu} breakpoint={currentBreakpoint} />
                )}
              </div>
              {/* Ссылки магазинов для больших экранов */}
              {currentBreakpoint !== 'lg' && <StoreButtons />}
            </div>

            {/* Кнопки справа */}
            <div className="flex items-center space-x-4">
              <ThemeSwitchButton />

              {/* Отображение брейкпоинта на больших экранах */}
              <div className="hidden lg:flex items-center ml-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {currentBreakpoint.toUpperCase()}
                </span>
              </div>

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
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                    {currentBreakpoint.toUpperCase()}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-neutral-900 z-20 pt-16 overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-4 py-8 px-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className="w-full flex items-center justify-center text-xl font-medium hover:text-red-500 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.emoji && <span className="mr-2 text-2xl">{item.emoji}</span>}
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Подменю магазинов в мобильном меню */}
              <div className="w-full">
                <button
                  onClick={toggleSubMenu}
                  className="w-full flex items-center justify-center text-xl font-medium hover:text-red-500 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isSubMenuOpen}
                >
                  <span className="mr-2 text-2xl">🛒</span>
                  Магазины
                  <ChevronDownIcon className={`h-6 w-6 ml-1 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <AnimatePresence>
                  {isSubMenuOpen && (
                    <motion.div
                      key="submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center mt-4 space-y-4"
                    >
                      <div className="w-full max-w-xs mx-auto flex flex-col space-y-4">
                        {storeLinks.map((store) => (
                          <a
                            key={store.name}
                            href={store.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full text-lg font-medium px-4 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-md transition-transform duration-300 hover:scale-105 whitespace-nowrap"
                          >
                            <Image src={store.iconSrc} alt={store.name} className="w-6 h-6 mr-3" width={24} height={24} loading="lazy" />
                            {store.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
