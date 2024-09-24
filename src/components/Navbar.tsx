import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

interface NavigationItem {
  name: string;
  href: string;
  anchor?: string;
}

const navigation: NavigationItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Логотип */}
          <Link href="/" onClick={handleNavigationClick("#hero")} className="flex-none">
            <Image
              src="/images/logos/logo.png"
              alt="SmartDiag Logo"
              width={256}
              height={117}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Кнопка меню для мобильных устройств */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-neutral-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Меню навигации */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            {/* Ссылки навигации */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-lg font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors"
                  onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
                >
                  {item.name}
                  {/* Подчеркивание при наведении */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Группы кнопок */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              {/* Внешние ссылки на магазины (отображаются только на десктопе) */}
              <div className="hidden lg:flex space-x-2">
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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

                <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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

                <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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
              </div>

              {/* Переключатель темы */}
              <ThemeSwitchButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
          <div className="px-4 pt-4 pb-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-700"
                onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Внешние ссылки на магазины для мобильных устройств */}
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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

              <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
                <button className="w-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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

              <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
                <button className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-105">
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
