import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  name: string;
  href: string;
  anchor?: string;
}

const primaryNavigation: NavigationItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
];

const secondaryNavigation: NavigationItem[] = [
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact" },
];

const storeLinks = [
  {
    name: "OZON",
    href: "https://www.ozon.ru/seller/smartdiag-862410/",
    bg: "from-blue-500 to-blue-700",
    hoverBg: "from-blue-600 to-blue-900",
    textColor: "text-white",
    iconSrc: "/images/logos/favicon.ico",
    alt: "OZON",
  },
  {
    name: "Яндекс Маркет",
    href: "https://market.yandex.ru/business--smartdiag/50025236",
    bg: "from-yellow-400 to-yellow-600",
    hoverBg: "from-yellow-500 to-yellow-700",
    textColor: "text-black",
    iconSrc: "https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico",
    alt: "Яндекс Маркет",
  },
  {
    name: "Wildberries",
    href: "https://www.wildberries.ru/seller/1343369",
    bg: "from-purple-500 to-purple-700",
    hoverBg: "from-purple-600 to-purple-900",
    textColor: "text-white",
    iconSrc: "/images/logos/favicon.ico",
    alt: "Wildberries",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isStoreMenuOpen, setIsStoreMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigationClick = useCallback(
    (anchor?: string) => (event: React.MouseEvent) => {
      if (anchor) {
        event.preventDefault();
        if (router.pathname !== '/') {
          router.push('/').then(() => router.push(anchor, undefined, { scroll: false }));
        } else {
          router.push(anchor, undefined, { scroll: false });
        }
      }
      setIsMenuOpen(false);
      setIsMoreMenuOpen(false);
      setIsStoreMenuOpen(false);
    },
    [router]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")} aria-label="Главная">
              <Image
                className="h-12 w-auto"
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

          {/* Десктопное меню */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Основные пункты меню */}
            <div className="flex space-x-8">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                  style={{ textDecoration: "none" }}
                  scroll={false}
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {item.name}
                  {/* Подчеркивание при наведении */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Дополнительные пункты меню */}
            {secondaryNavigation.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isMoreMenuOpen}
                >
                  Дополнительно
                  <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform ${isMoreMenuOpen ? "transform rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMoreMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-20"
                    >
                      <div className="py-1">
                        {secondaryNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-neutral-900 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors whitespace-nowrap"
                            style={{ textDecoration: "none" }}
                            scroll={false}
                            onClick={handleNavigationClick(item.anchor)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Кнопки магазинов */}
            <div className="flex space-x-2 ml-4">
              {storeLinks.map((store) => (
                <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bg} hover:${store.hoverBg} ${store.textColor} transition-transform duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap`}
                  >
                    <Image
                      src={store.iconSrc}
                      alt={store.alt}
                      className="w-5 h-5 mr-2"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span className="truncate">{store.name}</span>
                  </button>
                </Link>
              ))}
            </div>

            {/* Переключатель темы */}
            <ThemeSwitchButton />
          </div>

          {/* Мобильная навигация */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeSwitchButton />
            <button
              className="p-2 rounded-md text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню навигации"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Десктопное выпадающее меню "Дополнительно" */}
      <AnimatePresence>
        {isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 z-40"
          >
            <div className="px-4 pt-4 pb-6 space-y-6">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                  scroll={false}
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Мобильное меню с анимацией */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 pt-4 pb-6 space-y-6">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                  scroll={false}
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Дополнительные пункты меню в мобильном виде */}
              {secondaryNavigation.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    className="w-full flex items-center justify-between text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors focus:outline-none whitespace-nowrap"
                    aria-expanded={isMoreMenuOpen}
                  >
                    Дополнительно
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${isMoreMenuOpen ? "transform rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMoreMenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-3 pl-4"
                      >
                        {secondaryNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                            scroll={false}
                            onClick={handleNavigationClick(item.anchor)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Кнопки магазинов в мобильном меню */}
              <div className="space-y-2">
                {storeLinks.map((store) => (
                  <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`w-full flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bg} hover:${store.hoverBg} ${store.textColor} transition-transform duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap`}
                    >
                      <Image
                        src={store.iconSrc}
                        alt={store.alt}
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      {store.name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
