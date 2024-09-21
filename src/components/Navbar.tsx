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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (router.pathname !== '/') {
        router.push('/').then(() => router.push(anchor, undefined, { scroll: false }));
      } else {
        router.push(anchor, undefined, { scroll: false });
      }
      setIsMenuOpen(false);
    },
    [router]
  );

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center justify-start">
            <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
              <Image
                className="block h-12 w-auto"
                src="/images/logos/logo.png"
                alt="SmartDiag Logo"
                width={256}
                height={117}
                quality={100}
                sizes="100vw"
                loading="eager"
              />
            </Link>
          </div>

          {/* Десктопная версия меню */}
          <div className="hidden lg:flex items-center space-x-5 ml-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
                scroll={false}
                onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Переключатель темы и меню для мобильной версии */}
          <div className="flex items-center space-x-2">
            <ThemeSwitchButton />
            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute top-16 left-0 right-0 mx-4 z-30"
          >
            <div className="flex flex-col items-center space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium hover:text-red-500"
                  scroll={false}
                  onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
                >
                  {item.name}
                </Link>
              ))}

              <div className="w-full">
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="w-full flex items-center justify-between text-lg font-medium py-2 hover:text-red-500"
                >
                  Магазины
                  <ChevronDownIcon className={`h-5 w-5 transition-transform ${isSubMenuOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                <AnimatePresence>
                  {isSubMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col space-y-3 mt-2"
                    >
                      <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-transform hover:scale-105">
                          OZON
                        </button>
                      </Link>
                      <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-transform hover:scale-105">
                          Яндекс Маркет
                        </button>
                      </Link>
                      <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-transform hover:scale-105">
                          Wildberries
                        </button>
                      </Link>
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
}
