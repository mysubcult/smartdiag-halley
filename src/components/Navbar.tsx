import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const navigation = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
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
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" scroll={false} onClick={handleNavigationClick("#hero")}>
                <Image
                  className="block h-12 w-auto"
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="100vw"
                  loading="eager"
                />
              </Link>
              {/* Десктопная версия меню */}
              <div className="hidden lg:flex space-x-5 ml-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
                    style={{ textDecoration: "none" }}
                    scroll={false}
                    onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Группа кнопок для магазинов и переключателей */}
            <div className="flex items-center space-x-2">
              {/* Скрываем кнопки на мобильной версии */}
              <div className="hidden lg:flex space-x-2">
                <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
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
                  <button className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
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
                  <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
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

              {/* Мобильная версия меню */}
              <div className="lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full h-10 w-10 text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} />
                  <XMarkIcon className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Полноэкранное мобильное меню */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-neutral-900 flex flex-col items-center justify-center z-40">
            {/* Контент меню */}
            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-8">
              {/* Основные ссылки */}
              <nav className="flex flex-col items-center space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-2xl font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500"
                    scroll={false}
                    onClick={item.anchor ? handleNavigationClick(item.anchor) : () => setIsMenuOpen(false)}
                  >
                    {/* Эмодзи только для мобильной версии */}
                    <span className="mr-3">
                      {item.name === "Главная" && "🏠"}
                      {item.name === "Программы" && "💻"}
                      {item.name === "Статьи" && "📰"}
                      {item.name === "О нас" && "👥"}
                      {item.name === "Обратная связь" && "📩"}
                    </span>
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Раздел магазинов */}
              <div className="mt-8 w-full flex flex-col items-center space-y-4">
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="flex items-center text-2xl font-semibold text-neutral-900 dark:text-neutral-400 hover:text-red-500"
                >
                  🛒 Магазины
                  <ChevronDownIcon className={`h-6 w-6 ml-2 transition-transform ${isSubMenuOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {isSubMenuOpen && (
                  <div className="flex flex-col items-center space-y-4 mt-4">
                    <Link href="https://www.ozon.ru/seller/smartdiag-862410/" target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        🟦 OZON
                      </button>
                    </Link>

                    <Link href="https://market.yandex.ru/business--smartdiag/50025236" target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        🟨 Яндекс Маркет
                      </button>
                    </Link>

                    <Link href="https://www.wildberries.ru/seller/1343369" target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        🟪 Wildberries
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Кнопка закрытия меню */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close main menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        )}
      </>
    );
}
