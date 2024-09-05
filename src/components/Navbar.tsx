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
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact", anchor: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("18px");
  const [isMobileView, setIsMobileView] = useState(false);
  const [isStoreDropdownVisible, setIsStoreDropdownVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const navBar = document.querySelector('.navbar-nav');
      const navBarWidth = navBar instanceof HTMLElement ? navBar.offsetWidth : 0;
      const availableWidth = window.innerWidth - 300; // Примерная ширина для логотипа и отступов

      setIsMobileView(window.innerWidth <= 1200);

      if (navBarWidth > availableWidth) {
        setIsStoreDropdownVisible(true);
      } else {
        setIsStoreDropdownVisible(false);
      }
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
                    className="text-neutral-900 dark:text-neutral-400 nav-link"
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

          {/* Right-side buttons or dropdown */}
          <div className="flex items-center gap-2">
            {!isMobileView && (
              <>
                {!isStoreDropdownVisible ? (
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
                          src="/images/logos/favicon.ico"
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
                ) : (
                  <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="btn-submenu-toggle">
                    Магазины
                    <ChevronDownIcon className={`h-5 w-5 ml-2 ${isSubMenuOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>
                )}
              </>
            )}

            <ThemeSwitchButton />

            {/* Mobile menu button */}
            {isMobileView && (
              <div className="flex items-center">
                <button
                  className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white menu-icon-container hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} />
                  <XMarkIcon className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup Menu */}
      {isMenuOpen && (
        <div className="mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30">
          <div className="flex flex-col items-center justify-center space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-neutral-900 dark:text-neutral-400 block py-2" scroll={false}>
                {item.name}
              </Link>
            ))}
            {isSubMenuOpen && (
              <div className="submenu mt-2 space-y-3">
                {/* Store buttons as dropdown options */}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
