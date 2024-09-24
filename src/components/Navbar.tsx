// components/Navbar.tsx

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoreMenuOpen, setIsStoreMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (router.pathname !== "/") {
        router.push("/").then(() => router.push(anchor, undefined, { scroll: false }));
      } else {
        router.push(anchor, undefined, { scroll: false });
      }
      setIsMenuOpen(false);
      setIsStoreMenuOpen(false);
    },
    [router]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-opacity-90 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
              <Image
                src="/images/logos/logo.png"
                alt="SmartDiag Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Десктопное меню */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-base font-medium hover:text-red-500 transition-colors"
                style={{ textDecoration: "none" }}
                scroll={false}
                onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
              >
                {item.name}
                {item.anchor && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                )}
              </Link>
            ))}

            {/* Кнопки магазинов */}
            <div className="flex space-x-2">
              {storeLinks.map((store) => (
                <Link
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bgGradient} ${store.textColor} transition-colors duration-300`}
                  >
                    <Image
                      src={store.iconSrc}
                      alt={store.alt}
                      width={20}
                      height={20}
                      className="mr-2"
                      loading="lazy"
                    />
                    {store.name}
                  </motion.button>
                </Link>
              ))}
            </div>

            {/* Переключатель темы */}
            <ThemeSwitchButton />
          </div>

          {/* Мобильное меню */}
          <div className="lg:hidden flex items-center">
            <ThemeSwitchButton />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              <AnimatePresence>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 pt-4 pb-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                  scroll={false}
                  onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {/* Кнопки магазинов в мобильном меню */}
              <div className="mt-4 space-y-2">
                {storeLinks.map((store) => (
                  <Link
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${store.bgGradient} ${store.textColor} transition-colors duration-300`}
                    >
                      <Image
                        src={store.iconSrc}
                        alt={store.alt}
                        width={20}
                        height={20}
                        className="mr-2"
                        loading="lazy"
                      />
                      {store.name}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
