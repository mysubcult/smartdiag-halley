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
  const [fontSize, setFontSize] = useState("18px"); // Сохранение логики динамического размера шрифта
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

  // Обновление размера шрифта для мобильного меню
  const updateFontSize = useCallback(() => {
    const baseFontSize = 18;
    const minFontSize = 14;
    const screenHeight = window.innerHeight;
    const itemsCount = isSubMenuOpen ? navigation.length + 3 : navigation.length;
    const maxMenuHeight = screenHeight - 64;
    const requiredHeight = itemsCount * 48;

    const scaleFactor = maxMenuHeight / requiredHeight;
    setFontSize(`${Math.max(minFontSize, baseFontSize * Math.min(scaleFactor, 1))}px`);
  }, [isSubMenuOpen]);

  useEffect(() => {
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [updateFontSize]);

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
          <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav`}>
            <div className="flex space-x-5 items-center">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <a
                    onClick={handleNavigationClick(item.anchor)}
                    className={classNames(
                      "text-neutral-900 dark:text-neutral-400 nav-link",
                      "relative px-3 py-2 transition-colors duration-300 ease-in-out",
                      "hover:text-red-500"
                    )}
                  >
                    {item.name}
                    {/* Подчеркивание при наведении */}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out"></span>
                    <style jsx>{`
                      a:hover span {
                        width: 100%;
                      }
                    `}</style>
                  </a>
                </Link>
              ))}
            </div>
          </div>

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
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Открыть главное меню</span>
                <div className="menu-icon-wrapper relative">
                  <Bars3Icon
                    className={`h-6 w-6 transition-transform transform ${
                      isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                  <XMarkIcon
                    className={`h-6 w-6 transition-transform transform absolute top-0 left-0 ${
                      isMenuOpen ? "rotate-0 opacity-100" : "rotate-0 opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && isMobileView && (
        <div
          className="mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30 transition-transform duration-300 ease-in-out"
          style={{
            fontSize: fontSize,
            maxHeight: `calc(100vh - 128px)`,
            overflowY: "auto",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref legacyBehavior>
                <a
                  onClick={handleNavigationClick(item.anchor)}
                  className={classNames(
                    "text-neutral-900 dark:text-neutral-400",
                    "block py-2 text-lg font-medium hover:text-red-500 transition-colors"
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <div className="flex flex-col items-center w-full mt-4">
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="btn-submenu-toggle flex items-center justify-center py-2 text-lg font-medium hover:text-red-500 transition-colors focus:outline-none"
              >
                Магазины
                <ChevronDownIcon
                  className={`h-5 w-5 ml-2 transition-transform ${
                    isSubMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isSubMenuOpen && (
                <div className="submenu mt-2 space-y-3 w-full">
                  <Link href="https://www.ozon.ru/seller/smartdiag-862410/" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ozon flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="OZON"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                      OZON
                    </a>
                  </Link>

                  <Link href="https://market.yandex.ru/business--smartdiag/50025236" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-yandex flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-orange-500 transition-colors"
                    >
                      <Image
                        src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                        alt="Яндекс Маркет"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                      Яндекс Маркет
                    </a>
                  </Link>

                  <Link href="https://www.wildberries.ru/seller/1343369" passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wildberries flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-purple-500 transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
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
