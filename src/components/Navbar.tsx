// /src/components/Navbar.tsx

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavbarProps {
  onNavigateTo: (section: string) => void;
}

const navigation = [
  { name: "Главная", anchor: "hero" },
  { name: "Программы", anchor: "soft" },
  { name: "Блог", anchor: "faq" },
  { name: "О нас", anchor: "services" },
  { name: "Обратная связь", anchor: "contact" },
];

export default function Navbar({ onNavigateTo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("18px");
  const [isMobileView, setIsMobileView] = useState(false);

  const handleNavigationClick = (anchor: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    onNavigateTo(anchor);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" scroll={false}>
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

            <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav`}>
              <div className="flex space-x-5 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={handleNavigationClick(item.anchor)}
                    className="text-neutral-900 dark:text-neutral-400 hover:text-red-500"
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isMobileView && (
              <>
                {/* Кнопки магазинов */}
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
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
                <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
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
                <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
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
            )}

            <ThemeSwitchButton />

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
              <a
                key={item.name}
                onClick={handleNavigationClick(item.anchor)}
                className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col items-center w-full mt-4">
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="btn-submenu-toggle flex items-center justify-center py-2 text-lg font-medium"
              >
                Магазины
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform transform ${
                    isSubMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isSubMenuOpen && (
                <div className="flex flex-col items-center w-full mt-2">
                  <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                    <button className="btn-mobile-submenu py-2 px-4 text-lg font-medium">OZON</button>
                  </Link>
                  <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
                    <button className="btn-mobile-submenu py-2 px-4 text-lg font-medium">Яндекс Маркет</button>
                  </Link>
                  <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
                    <button className="btn-mobile-submenu py-2 px-4 text-lg font-medium">Wildberries</button>
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
