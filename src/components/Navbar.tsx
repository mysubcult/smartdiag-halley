// components/Navbar.tsx
import { useState, useCallback, useRef, useEffect } from "react";
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

const externalStores = [
  {
    name: "OZON",
    href: "https://www.ozon.ru/seller/smartdiag-862410/",
    bgGradient: "from-blue-500 to-blue-700",
    hoverGradient: "from-blue-600 to-blue-900",
    textColor: "text-white",
    iconSrc: "/images/logos/ozon.ico",
    alt: "OZON",
  },
  {
    name: "Яндекс Маркет",
    href: "https://market.yandex.ru/business--smartdiag/50025236",
    bgGradient: "from-yellow-400 to-yellow-600",
    hoverGradient: "from-yellow-500 to-yellow-700",
    textColor: "text-black",
    iconSrc: "https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico",
    alt: "Яндекс Маркет",
  },
  {
    name: "Wildberries",
    href: "https://www.wildberries.ru/seller/1343369",
    bgGradient: "from-purple-500 to-purple-700",
    hoverGradient: "from-purple-600 to-purple-900",
    textColor: "text-white",
    iconSrc: "/images/logos/wildberries.ico",
    alt: "Wildberries",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoresDropdownOpen, setIsStoresDropdownOpen] = useState(false);
  const router = useRouter();
  const storesDropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigationClick = useCallback(
    (anchor?: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (anchor) {
        event.preventDefault();
        if (router.pathname !== "/") {
          router.push("/").then(() => {
            const element = document.querySelector(anchor);
            element?.scrollIntoView({ behavior: "smooth" });
          });
        } else {
          const element = document.querySelector(anchor);
          element?.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
        setIsStoresDropdownOpen(false);
      }
    },
    [router]
  );

  // Закрытие выпадающего меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        storesDropdownRef.current &&
        !storesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsStoresDropdownOpen(false);
      }
    };

    if (isStoresDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStoresDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-opacity-100 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
              <Image
                src="/images/logos/logo.png"
                alt="SmartDiag Logo"
                width={256}
                height={64}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Десктопное меню */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-12">
            {/* Навигационные ссылки */}
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigationClick(item.anchor)}
                  className="relative text-base sm:text-lg font-medium hover:text-red-500 transition-colors whitespace-nowrap group"
                >
                  {item.name}
                  {/* Подчеркивание при наведении */}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Внешние магазины в выпадающем меню */}
            <div className="relative" ref={storesDropdownRef}>
              <button
                onClick={() => setIsStoresDropdownOpen(!isStoresDropdownOpen)}
                className="flex items-center text-base sm:text-lg font-medium hover:text-red-500 transition-colors whitespace-nowrap group focus:outline-none"
              >
                Магазины
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </button>

              <AnimatePresence>
                {isStoresDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {externalStores.map((store) => (
                        <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                          <button
                            className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-md w-full text-left ${store.bgGradient} hover:${store.hoverGradient} ${store.textColor} transition-transform transform hover:scale-105 whitespace-nowrap`}
                          >
                            <Image
                              src={store.iconSrc}
                              alt={store.alt}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                              loading="lazy"
                            />
                            <span>{store.name}</span>
                          </button>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Группа кнопок справа */}
          <div className="flex items-center space-x-4">
            {/* Переключатель темы */}
            <ThemeSwitchButton />

            {/* Мобильное меню */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Открыть главное меню</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
            id="mobile-menu"
          >
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigationClick(item.anchor)}
                  className="block px-3 py-2 rounded-md text-base sm:text-lg font-medium hover:text-red-500 whitespace-nowrap text-center"
                >
                  {item.name}
                </Link>
              ))}

              {/* Внешние магазины в мобильном меню */}
              <div className="mt-4">
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-400 mb-2 text-center">Магазины</h3>
                <div className="flex flex-col space-y-2">
                  {externalStores.map((store) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button
                        className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${store.bgGradient} hover:${store.hoverGradient} ${store.textColor} transition-transform transform hover:scale-105 whitespace-nowrap`}
                      >
                        <Image
                          src={store.iconSrc}
                          alt={store.alt}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                          loading="lazy"
                        />
                        <span className="text-sm sm:text-base">{store.name}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
