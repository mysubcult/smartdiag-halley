import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
    bgColor: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900",
    textColor: "text-white",
    iconSrc: "/images/logos/favicon.ico",
  },
  {
    name: "Яндекс Маркет",
    href: "https://market.yandex.ru/business--smartdiag/50025236",
    bgColor: "from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700",
    textColor: "text-black",
    iconSrc: "https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico",
  },
  {
    name: "Wildberries",
    href: "https://www.wildberries.ru/seller/1343369",
    bgColor: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900",
    textColor: "text-white",
    iconSrc: "/images/logos/favicon.ico",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    },
    [router]
  );

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Логотип и десктопное меню */}
            <div className="flex items-center">
              <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
                <Image
                  className="block h-12 w-auto max-w-[150px]"
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="(max-width: 768px) 100px, 150px"
                  loading="eager"
                />
              </Link>

              {/* Десктопное меню */}
              <div className="hidden lg:flex lg:ml-6 space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 whitespace-nowrap"
                    style={{ textDecoration: "none" }}
                    scroll={false}
                    onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Правая часть: кнопки магазинов и переключатель темы */}
            <div className="flex items-center space-x-2">
              {/* Кнопки магазинов (только для десктопа) */}
              <div className="hidden xl:flex space-x-2">
                {storeLinks.map((store) => (
                  <Link
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`flex items-center justify-center bg-gradient-to-r ${store.bgColor} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap`}
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
                    </button>
                  </Link>
                ))}
              </div>

              {/* Переключатель темы */}
              <ThemeSwitchButton />

              {/* Кнопка мобильного меню */}
              <div className="lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Открыть главное меню"
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
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Оверлей */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Меню */}
            <motion.div
              className="fixed inset-0 bg-white dark:bg-neutral-900 z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4">
                <Image
                  className="h-10 w-auto"
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="100vw"
                  loading="eager"
                />
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Закрыть меню"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4 mt-4 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500"
                    scroll={false}
                    onClick={(event) => {
                      if (item.anchor) {
                        handleNavigationClick(item.anchor)(event);
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* Кнопки магазинов */}
              <div className="flex flex-col space-y-4 mt-8 px-4 mb-8">
                {storeLinks.map((store) => (
                  <Link
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`w-full flex items-center justify-center bg-gradient-to-r ${store.bgColor} ${store.textColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
                    >
                      {store.name}
                    </button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
