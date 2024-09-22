// components/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton"; // Убедитесь, что этот компонент существует
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  anchor?: string;
}

const navigation: NavItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Закрытие меню при изменении размера окна на десктоп
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функция для плавной прокрутки к якорю
  const handleNavigationClick = (href: string, anchor?: string) => (e: React.MouseEvent) => {
    if (anchor) {
      e.preventDefault();
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a>
                <Image
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={120}
                  height={40}
                  priority
                />
              </a>
            </Link>
          </div>

          {/* Десктопное меню */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  onClick={item.anchor ? handleNavigationClick(item.href, item.anchor) : undefined}
                  className="relative text-lg font-medium hover:text-red-500 transition-colors duration-300"
                >
                  {item.name}
                  {/* Подчеркивание при наведении */}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </Link>
            ))}
          </div>

          {/* Группа кнопок справа */}
          <div className="flex items-center space-x-4">
            {/* Кнопки магазинов для десктопа */}
            <div className="hidden lg:flex space-x-2">
              <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-3 py-1 rounded-full transition-transform transform hover:scale-105">
                    <Image
                      src="/images/logos/favicon.ico"
                      alt="OZON"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    OZON
                  </button>
                </a>
              </Link>

              <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-3 py-1 rounded-full transition-transform transform hover:scale-105">
                    <Image
                      src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                      alt="Яндекс Маркет"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Яндекс Маркет
                  </button>
                </a>
              </Link>

              <Link href="https://www.wildberries.ru/seller/1343369" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-3 py-1 rounded-full transition-transform transform hover:scale-105">
                    <Image
                      src="/images/logos/favicon.ico"
                      alt="Wildberries"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Wildberries
                  </button>
                </a>
              </Link>
            </div>

            {/* Переключатель темы */}
            <ThemeSwitchButton />

            {/* Мобильное меню */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                aria-label="Toggle menu"
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
            <div className="px-4 pt-4 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    onClick={item.anchor ? handleNavigationClick(item.href, item.anchor) : undefined}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-neutral-800"
                  >
                    {item.name}
                  </a>
                </Link>
              ))}

              {/* Кнопки магазинов в мобильном меню */}
              <div className="mt-4 space-y-2">
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105">
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="OZON"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      OZON
                    </button>
                  </a>
                </Link>

                <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <button className="w-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-transform transform hover:scale-105">
                      <Image
                        src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                        alt="Яндекс Маркет"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Яндекс Маркет
                    </button>
                  </a>
                </Link>

                <Link href="https://www.wildberries.ru/seller/1343369" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <button className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105">
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Wildberries
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
