import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Главная", href: "#hero", current: false }, // Use #hero instead of #top
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

  // useEffect для плавного скроллинга
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const anchor = document.querySelector(target.getAttribute('href')!);
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const heroAnchor = document.querySelector('#hero'); // Correctly select the hero section
    if (heroAnchor) {
      heroAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="navbar fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <a href="#hero" onClick={handleLogoClick}> {/* Use #hero here */}
                    <Image
                      className="block h-12 w-auto logo-animation" // Add class for animation
                      src="/images/logos/logo.png"
                      alt="SmartDiag"
                      width={256}
                      height={117}
                      quality={100}
                      sizes="100vw"
                    />
                  </a>
                </div>

                {/* Navbar links visible only on larger screens */}
                <div
                  className="hidden lg:flex navbar-nav"
                >
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
                  {/* Always show the menu button on mobile */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open || isMenuOpen ? (
                      <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => setIsMenuOpen(false)}
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => setIsMenuOpen(true)}
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex flex-col gap-4 items-center">
                <a
                  href="https://www.ozon.ru/seller/smartdiag-862410/"
                  target="_blank"
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
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
