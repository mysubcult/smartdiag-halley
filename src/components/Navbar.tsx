import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

// Навигационные ссылки с эмодзи для мобильной версии
const navigation = [
  { name: "Главная 🏠", href: "/", anchor: "#hero" },
  { name: "Программы 💻", href: "/#soft", anchor: "#soft" },
  { name: "Статьи 📝", href: "/#blog", anchor: "#blog" },
  { name: "О нас 👥", href: "/#services", anchor: "#services" },
  { name: "Обратная связь 📞", href: "/#contact", anchor: "#contact" },
];

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
      setIsMobileView(window.innerWidth <= 1200);
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
        router.push('/').then(() => router.push(anchor, undefined, { scroll: false }));
      } else {
        router.push(anchor, undefined, { scroll: false });
      }
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    },
    [router]
  );

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
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

            {/* Горизонтальное меню навигации */}
            <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav ml-10`}>
              <div className="flex space-x-5 items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames("text-neutral-900 dark:text-neutral-400", "nav-link")}
                    style={{ textDecoration: "none" }}
                    scroll={false}
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
                  className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white menu-icon-container hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Открыть главное меню"
                >
                  <span className="sr-only">Открыть главное меню</span>
                  <div className="menu-icon-wrapper relative">
                    <Bars3Icon
                      className={`h-6 w-6 transition-transform duration-300 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                      aria-hidden="true"
                    />
                    <XMarkIcon
                      className={`h-6 w-6 transition-transform duration-300 absolute top-0 left-0 ${
                        isMenuOpen ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Полноэкранное мобильное меню */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white dark:bg-neutral-900 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40"
          style={{
            animation: isMenuOpen ? "fadeIn 0.3s" : "fadeOut 0.3s",
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  "text-2xl font-semibold text-neutral-900 dark:text-neutral-400",
                  "hover:text-red-500 transition-colors"
                )}
                style={{ textDecoration: "none" }}
                scroll={false}
                onClick={handleNavigationClick(item.anchor)}
              >
                {item.name}
              </Link>
            ))}

            {/* Подменю "Магазины" */}
            <div className="flex flex-col items-center w-full mt-8">
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="btn-submenu-toggle flex items-center justify-center py-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors"
              >
                Магазины 🛒
                <ChevronDownIcon
                  className={`h-6 w-6 ml-2 transition-transform ${
                    isSubMenuOpen ? "transform rotate-180" : ""
                  }`}
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

      {/* Дополнительные стили для анимации */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
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
      `}</style>
    </nav>
  );
}
