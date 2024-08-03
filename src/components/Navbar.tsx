import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Главная", href: "#hero", current: false },
  { name: "Программы", href: "#soft", current: false },
  { name: "ЧАВО", href: "#faq", current: false },
  { name: "О нас", href: "#services", current: false },
  { name: "Обратная связь", href: "#contact", current: false },
];

// Utility function to combine class names
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("18px");

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const anchor = document.querySelector(target.getAttribute("href")!);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false); // Закрыть меню после клика по ссылке
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const heroAnchor = document.querySelector("#hero");
    if (heroAnchor) {
      heroAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Функция для динамического изменения шрифта и высоты меню
  useEffect(() => {
    const updateFontSizeAndHeight = () => {
      const baseFontSize = 18; // Базовый размер шрифта
      const screenHeight = window.innerHeight;
      const maxFontSize = baseFontSize;
      const minFontSize = 14;

      // Рассчитать коэффициент уменьшения шрифта на основе высоты экрана и количества элементов меню
      const maxMenuHeight = screenHeight - 64; // Высота меню с учетом отступов
      const itemsCount = isSubMenuOpen ? navigation.length + 3 : navigation.length; // +3 для подменю
      const requiredHeight = itemsCount * 48; // 48px на каждый элемент (включая padding и margin)

      const scaleFactor = maxMenuHeight / requiredHeight;
      const newFontSize = Math.max(
        minFontSize,
        maxFontSize * Math.min(scaleFactor, 1)
      );

      setFontSize(`${newFontSize}px`);
    };

    updateFontSizeAndHeight();

    window.addEventListener("resize", updateFontSizeAndHeight);
    return () => window.removeEventListener("resize", updateFontSizeAndHeight);
  }, [isSubMenuOpen]);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center md:pl-0">
              <a href="#hero" onClick={handleLogoClick}>
                <Image
                  className="block h-12 w-auto logo-animation"
                  src="/images/logos/logo.png"
                  alt="SmartDiag"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="100vw"
                />
              </a>
            </div>

            <div className="hidden lg:flex navbar-nav">
              <div className="flex space-x-5 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-neutral-900 dark:text-neutral-400"
                        : "text-neutral-900 dark:text-neutral-400",
                      "nav-link"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 right-10 lg:right-0 flex items-center gap-2">
              <a
                href="https://www.ozon.ru/seller/smartdiag-862410/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <button className="btn-ozon">
                  <img
                    src="/images/logos/favicon.ico"
                    alt="OZON"
                    className="w-4 h-4"
                  />
                  OZON
                </button>
              </a>

              <a
                href="https://market.yandex.ru/business--smartdiag/50025236"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <button className="btn-yandex">
                  <img
                    src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                    alt="Яндекс Маркет"
                    className="w-4 h-4"
                  />
                  Яндекс Маркет
                </button>
              </a>

              <a
                href="https://www.wildberries.ru/seller/1343369"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <button className="btn-wildberries">
                  <img
                    src="https://www.wildberries.ru/favicon.ico"
                    alt="Wildberries"
                    className="w-4 h-4"
                  />
                  Wildberries
                </button>
              </a>

              <ThemeSwitchButton />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
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
                      isMenuOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30"
          style={{
            fontSize: fontSize,
            maxHeight: `calc(100vh - 128px)`, // Динамическая высота с учетом отступов сверху и снизу
            overflowY: "auto", // Разрешаем скролл, если необходимо
            paddingTop: "16px", // Отступ сверху
            paddingBottom: "16px", // Отступ снизу
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-neutral-900 dark:text-neutral-400"
                    : "text-neutral-900 dark:text-neutral-400",
                  "block py-2 text-lg font-medium hover:text-red-500"
                )}
                aria-current={item.current ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)} // Убедитесь, что меню можно повторно открыть
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col items-center w-full">
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
                  <a
                    href="https://www.ozon.ru/seller/smartdiag-862410/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ozon flex items-center justify-center w-11/12 mx-auto px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <img
                      src="/images/logos/favicon.ico"
                      alt="OZON"
                      className="w-4 h-4 mr-2"
                    />
                    OZON
                  </a>

                  <a
                    href="https://market.yandex.ru/business--smartdiag/50025236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yandex flex items-center justify-center w-11/12 mx-auto px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    <img
                      src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico"
                      alt="Яндекс Маркет"
                      className="w-4 h-4 mr-2"
                    />
                    Яндекс Маркет
                  </a>

                  <a
                    href="https://www.wildberries.ru/seller/1343369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wildberries flex items-center justify-center w-11/12 mx-auto px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    <img
                      src="https://www.wildberries.ru/favicon.ico"
                      alt="Wildberries"
                      className="w-4 h-4 mr-2"
                    />
                    Wildberries
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
