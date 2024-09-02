import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

// Комбинирование классов
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("18px");
  const [isMobileView, setIsMobileView] = useState(false);
  const router = useRouter();

  // Ссылки на секции для плавной прокрутки
  const sectionRefs = {
    hero: useRef<HTMLElement | null>(null),
    soft: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    blog: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  // Обработчик изменения размера окна
  const handleResize = useCallback(() => {
    setIsMobileView(window.innerWidth <= 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Обработчик для плавной прокрутки
  const handleScroll = (section: keyof typeof sectionRefs) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Закрываем меню после выбора элемента
    }
  };

  const updateFontSize = useCallback(() => {
    const baseFontSize = 18;
    const minFontSize = 14;
    const screenHeight = window.innerHeight;
    const itemsCount = isSubMenuOpen ? 8 : 5; // Количество пунктов в меню
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
                  onClick={() => handleScroll("hero")}
                />
              </Link>
            </div>

            {/* Горизонтальное меню навигации */}
            <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav`}>
              <div className="flex space-x-5 items-center">
                <button
                  className="text-neutral-900 dark:text-neutral-400 nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleScroll("hero")}
                >
                  Главная
                </button>
                <button
                  className="text-neutral-900 dark:text-neutral-400 nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleScroll("soft")}
                >
                  Программы
                </button>
                <button
                  className="text-neutral-900 dark:text-neutral-400 nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleScroll("services")}
                >
                  О нас
                </button>
                <button
                  className="text-neutral-900 dark:text-neutral-400 nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleScroll("blog")}
                >
                  Блог
                </button>
                <button
                  className="text-neutral-900 dark:text-neutral-400 nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleScroll("contact")}
                >
                  Обратная связь
                </button>
              </div>
            </div>
          </div>

          {/* Кнопки магазинов и смены темы */}
          <div className="flex items-center gap-2">
            <ThemeSwitchButton />

            {/* Кнопка меню для мобильных устройств */}
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

      {/* Popup Menu для мобильных устройств */}
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
            <button
              className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              onClick={() => handleScroll("hero")}
            >
              Главная
            </button>
            <button
              className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              onClick={() => handleScroll("soft")}
            >
              Программы
            </button>
            <button
              className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              onClick={() => handleScroll("services")}
            >
              О нас
            </button>
            <button
              className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              onClick={() => handleScroll("blog")}
            >
              Блог
            </button>
            <button
              className="text-neutral-900 dark:text-neutral-400 block py-2 text-lg font-medium hover:text-red-500"
              onClick={() => handleScroll("contact")}
            >
              Обратная связь
            </button>
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
                  {/* Пример добавления элементов подменю */}
                  <Link
                    href="https://www.ozon.ru/seller/smartdiag-862410/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ozon flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    OZON
                  </Link>
                  <Link
                    href="https://market.yandex.ru/business--smartdiag/50025236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yandex flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Яндекс Маркет
                  </Link>
                  <Link
                    href="https://www.wildberries.ru/seller/1343369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wildberries flex items-center justify-center w-full mx-auto px-4 py-3 rounded-lg hover:bg-purple-500 transition-colors"
                  >
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
