import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

// Навигационные ссылки
const navigation = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Блог", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact", anchor: "#contact" },
];

// Комбинирование классов
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("18px");
  const [isMobileView, setIsMobileView] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
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
            <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav`}>
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
                  <button className="btn-ozon">
                    <Image
                      src="/images/logos/favicon.ico"
                      alt="OZON"
                      className="w-5 h-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    OZON
                  </button>
                </Link>

                <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="btn-yandex">
                    <Image
                      src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                      alt="Яндекс Маркет"
                      className="w-5 h-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    Яндекс Маркет
                  </button>
                </Link>

                <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="btn-wildberries">
                    <Image
                      src="https://www.wildberries.ru/favicon.ico"
                      alt="Wildberries"
                      className="w-5 h-5"
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
                  className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white menu-icon-container hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="menu-icon-wrapper relative">
                    <Bars3Icon
                      className={`h-6 w-6 transition-transform transform ${
                        isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                      }`}
                      aria-hidden="true"
                    />
                    <XMarkIcon
                      className={`h-6 w-6 transition-transform transform absolute top-0 left-0 ${
                        isMenuOpen ? "rotate-[0deg] opacity-100" : "rotate-0 opacity-0"
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

      {/* Popup Menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30"
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
              <Link
                key={item.name}
                href={item.href}
                className={classNames("text-neutral-900 dark:text-neutral-400", "block py-2 text-lg font-medium hover:text-red-500")}
                scroll={false}
                onClick={handleNavigationClick(item.anchor)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col items-center w-full mt-4">
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="btn-submenu-toggle flex items-center justify-center py-2 text-lg font-medium"
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
                  <Link
                    href="https://www.ozon.ru/seller/smartdiag-862410/"
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
                  </Link>

                  <Link
                    href="https://market.yandex.ru/business--smartdiag/50025236"
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
                  </Link>

                  <Link
                    href="https://www.wildberries.ru/seller/1343369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wildberries flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    <Image
                      src="https://www.wildberries.ru/favicon.ico"
                      alt="Wildberries"
                      className="w-4 h-4 mr-2"
                      width={16}
                      height={16}
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
    </nav>
  );
}
