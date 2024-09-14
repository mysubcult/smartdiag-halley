import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

// Тип для навигационных ссылок
interface NavigationItem {
  name: string;
  href: string;
  anchor: string;
}

// Навигационные ссылки
const navigation: NavigationItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact", anchor: "#contact" },
];

// Утилита для объединения классов
const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const router = useRouter();

  // Обработчик изменения размера окна для определения мобильного вида
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Инициализация состояния при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Обработчик клика по навигационной ссылке
  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (router.pathname !== "/") {
        router.push("/").then(() => {
          // Добавляем небольшой таймаут для плавного перехода
          setTimeout(() => {
            const target = document.querySelector(anchor);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        });
      } else {
        const target = document.querySelector(anchor);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMenuOpen(false); // Закрываем мобильное меню после навигации
    },
    [router]
  );

  // Закрытие подменю при изменении размера окна
  useEffect(() => {
    if (!isMobileView) {
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    }
  }, [isMobileView]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/" passHref legacyBehavior>
              <a onClick={handleNavigationClick("#hero")}>
                <Image
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  className="h-12 w-auto logo-animation"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority
                />
              </a>
            </Link>
          </div>

          {/* Горизонтальное меню навигации */}
          {!isMobileView && (
            <div className="flex space-x-5">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <a
                    onClick={handleNavigationClick(item.anchor)}
                    className={classNames(
                      "px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 transition-colors",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          )}

          {/* Кнопки магазинов, смены темы и мобильное меню */}
          <div className="flex items-center space-x-4">
            {/* Кнопки магазинов отображаются только на десктопе */}
            {!isMobileView && (
              <>
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ozon flex items-center px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Image
                      src="/images/logos/favicon.ico"
                      alt="OZON"
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-2"
                      loading="lazy"
                    />
                    OZON
                  </a>
                </Link>

                <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yandex flex items-center px-3 py-2 rounded-md hover:bg-orange-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Image
                      src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                      alt="Яндекс Маркет"
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-2"
                      loading="lazy"
                    />
                    Яндекс Маркет
                  </a>
                </Link>

                <Link href="https://www.wildberries.ru/seller/1343369" passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wildberries flex items-center px-3 py-2 rounded-md hover:bg-purple-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Image
                      src="/images/logos/favicon.ico"
                      alt="Wildberries"
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-2"
                      loading="lazy"
                    />
                    Wildberries
                  </a>
                </Link>
              </>
            )}

            {/* Кнопка смены темы */}
            <ThemeSwitchButton />

            {/* Кнопка мобильного меню */}
            {isMobileView && (
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Открыть главное меню</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && isMobileView && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref legacyBehavior>
                <a
                  onClick={handleNavigationClick(item.anchor)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  {item.name}
                </a>
              </Link>
            ))}

            {/* Подменю "Магазины" */}
            <div className="mt-3">
              <button
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              >
                <span>Магазины</span>
                <ChevronDownIcon
                  className={classNames(
                    "h-5 w-5 transform transition-transform",
                    isSubMenuOpen ? "rotate-180" : "rotate-0"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isSubMenuOpen && (
                <div className="mt-2 space-y-1">
                  <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="OZON"
                        width={16}
                        height={16}
                        className="w-4 h-4 mr-2"
                        loading="lazy"
                      />
                      OZON
                    </a>
                  </Link>

                  <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Image
                        src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                        alt="Яндекс Маркет"
                        width={16}
                        height={16}
                        className="w-4 h-4 mr-2"
                        loading="lazy"
                      />
                      Яндекс Маркет
                    </a>
                  </Link>

                  <Link href="https://www.wildberries.ru/seller/1343369" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        width={16}
                        height={16}
                        className="w-4 h-4 mr-2"
                        loading="lazy"
                      />
                      Wildberries
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
