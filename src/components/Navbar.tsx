import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (router.pathname !== "/") {
        router.push("/").then(() =>
          router.push(anchor, undefined, { scroll: false })
        );
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
          {/* Логотип */}
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
          </div>

          {/* Десктопное меню */}
          <div className="hidden lg:flex items-center space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-bold text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors duration-300"
                scroll={false}
                onClick={item.anchor ? handleNavigationClick(item.anchor) : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Кнопки и переключатели */}
          <div className="flex items-center space-x-2">
            {/* Магазины (только на десктопе) */}
            <div className="hidden lg:flex space-x-2">
              <Link
                href="https://www.ozon.ru/seller/smartdiag-862410/"
                target="_blank"
                rel="noopener noreferrer"
              >
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

              <Link
                href="https://market.yandex.ru/business--smartdiag/50025236"
                target="_blank"
                rel="noopener noreferrer"
              >
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

              <Link
                href="https://www.wildberries.ru/seller/1343369"
                target="_blank"
                rel="noopener noreferrer"
              >
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

            {/* Мобильное меню (кнопка) */}
            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Открыть главное меню</span>
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню (список) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-neutral-900 z-30 flex flex-col items-center justify-center space-y-6 p-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors duration-300"
              scroll={false}
              onClick={(e) => {
                if (item.anchor) handleNavigationClick(item.anchor)(e);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* Подменю "Магазины" */}
          <div className="w-full">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex items-center justify-between w-full text-2xl font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 transition-colors duration-300"
            >
              Магазины
              <ChevronDownIcon
                className={`h-6 w-6 transition-transform duration-300 ${
                  isSubMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {isSubMenuOpen && (
              <div className="mt-4 flex flex-col space-y-3">
                <Link
                  href="https://www.ozon.ru/seller/smartdiag-862410/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300">
                    OZON
                  </button>
                </Link>
                <Link
                  href="https://market.yandex.ru/business--smartdiag/50025236"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full transition-all duration-300">
                    Яндекс Маркет
                  </button>
                </Link>
                <Link
                  href="https://www.wildberries.ru/seller/1343369"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300">
                    Wildberries
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Переключатель темы в мобильном меню (опционально) */}
          <div className="mt-6">
            <ThemeSwitchButton />
          </div>
        </div>
      )}
    </nav>
  );
}
