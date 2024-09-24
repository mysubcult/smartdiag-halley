import { useState, useCallback, useEffect, useRef } from "react";
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

const navigation: NavigationItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
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
  const [visibleItems, setVisibleItems] = useState<NavigationItem[]>(navigation);
  const [hiddenItems, setHiddenItems] = useState<NavigationItem[]>([]);

  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const themeButtonRef = useRef<HTMLDivElement>(null);
  const storeButtonsRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

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
    },
    [router]
  );

  const updateMenuItems = useCallback(() => {
    if (!navbarRef.current) return;

    const navbarWidth = navbarRef.current.offsetWidth;

    // Ширина логотипа
    const logoElement = navbarRef.current.querySelector("#logo");
    const logoWidth = logoElement ? (logoElement as HTMLElement).offsetWidth : 0;

    // Ширина кнопки темы
    const themeButtonWidth = themeButtonRef.current ? themeButtonRef.current.offsetWidth : 0;

    // Ширина кнопок магазинов
    const storeButtonsWidth = storeButtonsRef.current
      ? Array.from(storeButtonsRef.current.children).reduce((acc, btn) => acc + (btn as HTMLElement).offsetWidth + 8, 0) // 8px margin
      : 0;

    // Ширина кнопки гамбургера
    const hamburgerWidth = hamburgerButtonRef.current ? hamburgerButtonRef.current.offsetWidth : 0;

    // Доступная ширина для пунктов меню
    const availableWidth = navbarWidth - logoWidth - themeButtonWidth - storeButtonsWidth - hamburgerWidth - 32; // 32px padding

    let totalWidth = 0;
    const visible: NavigationItem[] = [];
    const hidden: NavigationItem[] = [];

    menuItemRefs.current.forEach((ref, index) => {
      if (ref) {
        const itemWidth = ref.offsetWidth + 32; // 32px margin (space-x-8 = 2rem = 32px)
        if (totalWidth + itemWidth <= availableWidth) {
          visible.push(navigation[index]);
          totalWidth += itemWidth;
        } else {
          hidden.push(navigation[index]);
        }
      }
    });

    setVisibleItems(visible);
    setHiddenItems(hidden);
  }, []);

  useEffect(() => {
    updateMenuItems();
    const handleResize = () => {
      updateMenuItems();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateMenuItems]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateMenuItems();
    });
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [updateMenuItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-50">
      <div ref={navbarRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex-shrink-0 mr-6">
            <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")} aria-label="Главная" id="logo">
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
          <div className="hidden lg:flex lg:items-center lg:space-x-4 flex-grow">
            <div className="flex space-x-8">
              {visibleItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={el => { menuItemRefs.current[index] = el; }}
                  className="relative text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap group"
                  style={{ textDecoration: "none" }}
                  scroll={false}
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {item.name}
                  {/* Подчеркивание при наведении */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
              {hiddenItems.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    className="flex items-center text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isMoreMenuOpen}
                    aria-label="Дополнительные пункты меню"
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
                          {hiddenItems.map((item) => (
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
            </div>

            {/* Кнопки магазинов */}
            <div className="flex space-x-2 ml-4" ref={storeButtonsRef}>
              {storeLinks.map((store) => (
                <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`store-button flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bg} hover:${store.hoverBg} ${store.textColor} transition-transform duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap`}
                  >
                    <Image
                      src={store.iconSrc}
                      alt={store.alt}
                      className="w-5 h-5 mr-2"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span>{store.name}</span>
                  </button>
                </Link>
              ))}
            </div>

            {/* Переключатель темы */}
            <div className="ml-4" ref={themeButtonRef}>
              <ThemeSwitchButton />
            </div>
          </div>

          {/* Мобильная навигация */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeSwitchButton />
            <button
              ref={hamburgerButtonRef}
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
            className="hidden lg:block absolute top-16 left-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 w-full z-40"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="py-2">
                {hiddenItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                    style={{ textDecoration: "none" }}
                    scroll={false}
                    onClick={handleNavigationClick(item.anchor)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors whitespace-nowrap"
                  style={{ textDecoration: "none" }}
                  scroll={false}
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Подменю магазинов */}
              <div>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="w-full flex items-center justify-between text-lg font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors focus:outline-none whitespace-nowrap"
                  aria-expanded={isMoreMenuOpen}
                  aria-label="Магазины"
                >
                  Магазины
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
                      {storeLinks.map((store) => (
                        <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                          <button
                            className={`w-full flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bg} hover:${store.hoverBg} ${store.textColor} transition-transform duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap`}
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
