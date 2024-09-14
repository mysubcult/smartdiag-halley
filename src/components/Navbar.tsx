// components/Navbar.tsx

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

// Навигационные ссылки без эмодзи для десктопа
const navigation = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact", anchor: "#contact" },
];

// Эмодзи для мобильной версии меню
const mobileEmojis: { [key: string]: string } = {
  "Главная": "🏠",
  "Программы": "💻",
  "Статьи": "📝",
  "О нас": "👥",
  "Обратная связь": "📞",
  "Магазины": "🛒",
};

// Комбинирование классов
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const router = useRouter();

  // Определение мобильного вида
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1200;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Обработчик кликов по навигации
  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (router.pathname !== '/') {
        router.push('/').then(() => router.push(anchor, undefined, { scroll: !isMobileView }));
      } else {
        router.push(anchor, undefined, { scroll: !isMobileView });
      }
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    },
    [router, isMobileView]
  );

  // Отключение прокрутки фона при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  href="/"
                  scroll={!isMobileView}
                  onClick={handleNavigationClick("#hero")}
                >
                  <Image
                    className="block h-12 w-auto logo-animation"
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

              {/* Горизонтальное меню навигации для десктопа */}
              <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav ml-4`}>
                <div className="flex space-x-5 items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames("text-neutral-900 dark:text-neutral-400", "nav-link")}
                      style={{ textDecoration: "none" }}
                      scroll={!isMobileView}
                      onClick={handleNavigationClick(item.anchor)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Кнопки магазинов, смены темы и меню */}
            <div className="flex items-center gap-2">
              {!isMobileView && (
                <>
                  <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="btn-ozon flex items-center px-3 py-2 rounded-md hover:bg-ozon-hover transition-colors">
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="OZON"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      OZON
                    </button>
                  </Link>

                  <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="btn-yandex flex items-center px-3 py-2 rounded-md hover:bg-yandex-hover transition-colors">
                      <Image
                        src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                        alt="Яндекс Маркет"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      Яндекс Маркет
                    </button>
                  </Link>

                  <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="btn-wildberries flex items-center px-3 py-2 rounded-md hover:bg-wildberries-hover transition-colors">
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      Wildberries
                    </button>
                  </Link>
                </>
              )}

              {/* Кнопка смены темы */}
              <ThemeSwitchButton />

              {/* Кнопка меню появляется, когда isMobileView == true */}
              {isMobileView && (
                <div className="flex items-center">
                  <button
                    className={classNames(
                      "inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors p-2",
                      "transform transition-transform duration-300",
                      isMenuOpen ? "rotate-45" : "rotate-0"
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                  >
                    <span className="sr-only">{isMenuOpen ? "Закрыть меню" : "Открыть меню"}</span>
                    <div className="relative">
                      <Bars3Icon
                        className={classNames(
                          "h-6 w-6 absolute top-0 left-0 transition-opacity duration-300",
                          isMenuOpen ? "opacity-0" : "opacity-100"
                        )}
                        aria-hidden="true"
                      />
                      <XMarkIcon
                        className={classNames(
                          "h-6 w-6 absolute top-0 left-0 transition-opacity duration-300",
                          isMenuOpen ? "opacity-100" : "opacity-0"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Полноэкранное мобильное меню */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white dark:bg-neutral-900 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out z-40 mt-16" // mt-16 соответствует высоте navbar (h-16)
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "text-2xl font-semibold text-neutral-900 dark:text-neutral-400",
                    "hover:text-red-500 transition-colors flex items-center"
                  )}
                  style={{ textDecoration: "none" }}
                  scroll={isMobileView ? true : false} // Условное использование scroll
                  onClick={handleNavigationClick(item.anchor)}
                >
                  {/* Добавление эмодзи только в мобильной версии */}
                  <span className="mr-2">{mobileEmojis[item.name]}</span>
                  {item.name}
                </Link>
              ))}

              {/* Подменю "Магазины" */}
              <div className="flex flex-col items-center w-full mt-8">
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="btn-submenu-toggle flex items-center justify-center py-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors"
                >
                  <span className="mr-2">{mobileEmojis["Магазины"]}</span>
                  Магазины
                  <ChevronDownIcon
                    className={`h-6 w-6 ml-2 transition-transform ${isSubMenuOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                {isSubMenuOpen && (
                  <div className="submenu mt-4 space-y-4 w-full flex flex-col items-center">
                    <Link
                      href="https://www.ozon.ru/seller/smartdiag-862410/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ozon flex items-center justify-center w-3/4 px-4 py-3 rounded-lg hover:bg-ozon-hover transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="OZON"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      OZON
                    </Link>

                    <Link
                      href="https://market.yandex.ru/business--smartdiag/50025236"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-yandex flex items-center justify-center w-3/4 px-4 py-3 rounded-lg hover:bg-yandex-hover transition-colors"
                    >
                      <Image
                        src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                        alt="Яндекс Маркет"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      Яндекс Маркет
                    </Link>

                    <Link
                      href="https://www.wildberries.ru/seller/1343369"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wildberries flex items-center justify-center w-3/4 px-4 py-3 rounded-lg hover:bg-wildberries-hover transition-colors"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        className="w-5 h-5 mr-2"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      Wildberries
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Дополнительные стили для анимации и кнопок */}
        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.95);
            }
          }

          /* Примеры стилей для кнопок магазинов */
          .btn-ozon {
            background-color: #ff7f00;
            color: white;
          }

          .btn-yandex {
            background-color: #ffcc00;
            color: black;
          }

          .btn-wildberries {
            background-color: #a200ff;
            color: white;
          }

          .hover\\:bg-ozon-hover:hover {
            background-color: #e67300;
          }

          .hover\\:bg-yandex-hover:hover {
            background-color: #e6b800;
          }

          .hover\\:bg-wildberries-hover:hover {
            background-color: #8a00e6;
          }

          /* Анимация мобильного меню */
          .fixed.inset-0 {
            animation: fadeIn 0.3s forwards;
          }

          .fixed.inset-0.hidden {
            animation: fadeOut 0.3s forwards;
          }

          /* Обеспечить, чтобы мобильное меню было под navbar */
          .mt-16 {
            margin-top: 4rem; /* h-16 = 4rem = 64px */
          }

          /* Уменьшение расстояния между логотипом и меню */
          .navbar-nav {
            margin-left: 1rem; /* заменено с ml-10 на ml-4 */
          }
        `}</style>
      </>
    );
}
