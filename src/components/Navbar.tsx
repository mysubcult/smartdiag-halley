// src/components/Navbar.tsx

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="relative text-base lg:text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out whitespace-nowrap"
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

const StoreDropdown: React.FC<{ isOpen: boolean; toggle: () => void }> = ({
  isOpen,
  toggle,
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const subMenuButtonRef = useRef<HTMLButtonElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleSubMenu = useCallback(() => {
    setIsSubMenuOpen((prev) => !prev);
  }, []);

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
                <StoreDropdown isOpen={isSubMenuOpen} toggle={toggleSubMenu} />
              </div>
            </div>

            {/* Кнопки справа */}
            <div className="flex items-center space-x-2">
              {/* Theme Switch Button остается здесь */}
              <StoreButtons />

              {/* Ссылки магазинов для больших экранов */}
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
                          <Link
                            key={store.name}
                            href={store.href}
                            className="flex items-center justify-center w-full text-lg font-medium px-4 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-md transition-transform duration-300 hover:scale-105 whitespace-nowrap"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image src={store.iconSrc} alt={`${store.name} Icon`} className="w-6 h-6 mr-3" width={24} height={24} loading="lazy" />
                            {store.name}
                          </Link>
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
