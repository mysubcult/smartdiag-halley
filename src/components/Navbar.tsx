import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter, usePathname } from "next/navigation";

// Тип для навигационных ссылок
interface NavItem {
  name: string;
  href: string;
  anchor: string;
}

// Навигационные ссылки
const navigation: NavItem[] = [
  { name: "Главная", href: "/", anchor: "#hero" },
  { name: "Программы", href: "/#soft", anchor: "#soft" },
  { name: "Статьи", href: "/#blog", anchor: "#blog" },
  { name: "О нас", href: "/#services", anchor: "#services" },
  { name: "Обратная связь", href: "/#contact", anchor: "#contact" },
];

// Комбинирование классов с типизацией
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [desiredAnchor, setDesiredAnchor] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  // Обработчик навигации
  const handleNavigationClick = useCallback(
    (anchor: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      if (pathname !== "/") {
        setDesiredAnchor(anchor);
        router.push("/");
      } else {
        const id = anchor.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMenuOpen(false);
    },
    [router, pathname]
  );

  // Выполняем прокрутку после смены пути
  useEffect(() => {
    if (desiredAnchor && pathname === "/") {
      const id = desiredAnchor.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setDesiredAnchor(null);
      }
    }
  }, [pathname, desiredAnchor]);

  // Мемозируем навигационные ссылки
  const memoizedNavigation = useMemo(
    () =>
      navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames("text-neutral-900 dark:text-neutral-400", "nav-link")}
            onClick={handleNavigationClick(item.anchor)}
          >
            {item.name}
          </a>
        </Link>
      )),
    [handleNavigationClick]
  );

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Логотип и навигация */}
          <div className="flex flex-1 items-center">
            <Link href="/" onClick={handleNavigationClick("#hero")}>
              {/* Используйте <a> внутри <Link> для улучшенной семантики */}
              <a className="flex-shrink-0">
                <Image
                  className="h-12 w-auto logo-animation"
                  src="/images/logos/logo.png"
                  alt="SmartDiag Logo"
                  width={256}
                  height={117}
                  quality={100}
                  sizes="100vw"
                  loading="eager"
                />
              </a>
            </Link>

            {/* Десктоп навигация */}
            <div className="hidden lg:flex ml-10 space-x-5">
              {memoizedNavigation}
            </div>
          </div>

          {/* Кнопки справа */}
          <div className="flex items-center gap-2">
            {/* Ссылки на магазины - скрыты на мобильных */}
            <div className="hidden lg:flex space-x-2">
              <Link href="https://www.ozon.ru/seller/smartdiag-862410/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ozon flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
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
                </a>
              </Link>

              <Link href="https://market.yandex.ru/business--smartdiag/50025236">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yandex flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 transition-colors"
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
                </a>
              </Link>

              <Link href="https://www.wildberries.ru/seller/1343369">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wildberries flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-500 transition-colors"
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
                </a>
              </Link>
            </div>

            {/* Кнопка смены темы */}
            <ThemeSwitchButton />

            {/* Кнопка мобильного меню */}
            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="mobile-menu bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  onClick={handleNavigationClick(item.anchor)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </a>
              </Link>
            ))}

            {/* Подменю для магазинов */}
            <div className="mt-3">
              <button
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none"
              >
                <span>Магазины</span>
                <ChevronDownIcon
                  className={classNames("h-5 w-5 transition-transform", isSubMenuOpen ? "transform rotate-180" : "")}
                />
              </button>
              {isSubMenuOpen && (
                <div className="mt-2 space-y-1">
                  <Link href="https://www.ozon.ru/seller/smartdiag-862410/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:bg-blue-500 hover:text-white"
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
                    </a>
                  </Link>

                  <Link href="https://market.yandex.ru/business--smartdiag/50025236">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:bg-orange-500 hover:text-white"
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
                    </a>
                  </Link>

                  <Link href="https://www.wildberries.ru/seller/1343369">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-400 hover:bg-purple-500 hover:text-white"
                    >
                      <Image
                        src="/images/logos/favicon.ico"
                        alt="Wildberries"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                      Wildberries
                    </a>
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
