import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const navigation = [
  { name: "Главная", href: "/", id: "hero" },
  { name: "Программы", href: "/", id: "soft" },
  { name: "Блог", href: "/", id: "blog" },
  { name: "О нас", href: "/", id: "services" },
  { name: "Обратная связь", href: "/", id: "contact" },
];

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
    (id: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (router.pathname !== '/') {
        router.push('/').then(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
              <Link href="/" scroll={false}>
                <a onClick={handleNavigationClick("hero")}>
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
                </a>
              </Link>
            </div>

            <div className={`${isMobileView ? "hidden" : "flex"} navbar-nav`}>
              <div className="flex space-x-5 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames("text-neutral-900 dark:text-neutral-400", "nav-link")}
                    onClick={handleNavigationClick(item.id)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Существующие кнопки для магазинов и смены темы */}
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
                {/* Другие кнопки магазинов */}
              </>
            )}
            <ThemeSwitchButton />
            {isMobileView && (
              <button
                className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white menu-icon-container hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="menu-icon-wrapper relative">
                  <Bars3Icon className={`h-6 w-6 transition-transform ${isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"}`} />
                  <XMarkIcon className={`h-6 w-6 transition-transform absolute top-0 left-0 ${isMenuOpen ? "rotate-[0deg] opacity-100" : "rotate-0 opacity-0"}`} />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg p-4 absolute right-4 top-20 w-64 z-30">
          <div className="flex flex-col items-center justify-center space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames("text-neutral-900 dark:text-neutral-400", "block py-2 text-lg font-medium hover:text-red-500")}
                onClick={handleNavigationClick(item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
