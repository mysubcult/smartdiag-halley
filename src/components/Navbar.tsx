// components/Navbar.tsx

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitchButton from './ThemeSwitchButton';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Главная', href: '/', emoji: '🏠' },
  { name: 'Программы', href: '/soft', emoji: '💻' },
  { name: 'Статьи', href: '/articles', emoji: '📝' },
  { name: 'О нас', href: '/about', emoji: 'ℹ️' },
  { name: 'Обратная связь', href: '/contact', emoji: '📩' },
];

const storeLinks = [
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  // Создаем ссылки для кнопки и выпадающего меню
  const subMenuButtonRef = useRef<HTMLButtonElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

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

  // Обработчик кликов вне выпадающего меню
  useEffect(() => {
    if (!isSubMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const button = subMenuButtonRef.current;
      const menu = subMenuRef.current;
      if (button && menu) {
        if (!button.contains(event.target as Node) && !menu.contains(event.target as Node)) {
          setIsSubMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Очистка обработчика при закрытии меню или размонтировании
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubMenuOpen]);

  // Управление прокруткой основного содержимого при открытом мобильном меню
  useEffect(() => {
    if (isMenuOpen) {
      // Сохраняем текущий стиль overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Устанавливаем overflow: hidden
      document.body.style.overflow = 'hidden';
      // Восстанавливаем стиль при очистке
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Навигационная панель */}
      <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between flex-wrap">
            {/* Логотип и основные ссылки */}
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <a>
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
                  </a>
                </Link>
              </div>

              {/* Десктопное меню */}
              <div className="hidden lg:flex flex-wrap items-center space-x-5 ml-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <a className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out">
                      {item.name}
                    </a>
                  </Link>
                ))}

                {/* Выпадающее меню "Магазины" только на брейкпоинте lg */}
                {currentBreakpoint === 'lg' && (
                  <div className="relative">
                    <button
                      ref={subMenuButtonRef} // Привязываем ref к кнопке
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className="flex items-center text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded={isSubMenuOpen}
                    >
                      Магазины
                      <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    <AnimatePresence>
                      {isSubMenuOpen && (
                        <motion.div
                          ref={subMenuRef} // Привязываем ref к выпадающему меню
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg py-2 w-48"
                        >
                          {storeLinks.map((store) => (
                            // Заменяем Link на <a> для внешних ссылок
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
                )}
              </div>

              {/* Кнопки магазинов, отображаемые на брейкпоинтах xl и 2xl */}
              {currentBreakpoint !== 'lg' && (
                <div className="hidden xl:flex space-x-2 ml-4">
                  {storeLinks.map((store) => (
                    // Заменяем Link на <a> для внешних ссылок
                    <a
                      key={store.name}
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center ${store.bgGradient} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
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
              )}
            </div>

            {/* Группа кнопок: переключение темы и индикатор брейкпоинта */}
            <div className="flex items-center space-x-2">
              <ThemeSwitchButton />

              {/* Индикатор текущего брейкпоинта */}
              <div className="hidden lg:flex items-center ml-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {currentBreakpoint.toUpperCase()}
                </span>
              </div>

              {/* Кнопка открытия мобильного меню - видима на брейкпоинтах lg и меньше */}
              <div className="lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors relative"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle Menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  {/* Индикатор текущего брейкпоинта для мобильного меню */}
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
                <Link key={item.name} href={item.href} passHref>
                  <a
                    className="w-full flex items-center justify-center text-xl font-medium hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2 text-2xl">{item.emoji}</span> {/* Эмодзи слева */}
                    {item.name}
                  </a>
                </Link>
              ))}

              {/* Подменю для "Магазины" */}
              <div className="w-full">
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="w-full flex items-center justify-center text-xl font-medium hover:text-red-500 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isSubMenuOpen}
                >
                  <span className="mr-2 text-2xl">🛒</span> {/* Эмодзи для "Магазины" */}
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
                      {/* Контейнер для кнопок магазинов с фиксированной шириной */}
                      <div className="w-full max-w-xs mx-auto flex flex-col space-y-4">
                        {storeLinks.map((store) => (
                          // Заменяем Link на <a> для внешних ссылок и удаляем onClick
                          <a
                            key={store.name}
                            href={store.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full text-lg font-medium px-4 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-md transition-all duration-300 ease-in-out hover:scale-105"
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
