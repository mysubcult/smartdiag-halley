import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Главная", href: "/", current: false },
  { name: "Программы", href: "#soft", current: false },
  { name: "О нас", href: "#services", current: false },
  { name: "ЧАВО", href: "#faq", current: false },
  { name: "Обратная связь", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block h-12 w-auto"
                      src="/images/logos/logo.png"
                      alt="SmartDiag"
                      width={256}
                      height={117}
                      quality={100}
                      sizes="100vw"
                    />
                  </Link>
                </div>

<div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
<Link
  key={item.name}
  href={item.href}
  className={classNames(
    item.current
      ? "text-neutral-900 dark:text-neutral-400"
      : "text-neutral-900 dark:text-neutral-400",
    "text-base font-medium inline-block transition-colors duration-300 ease-in-out transform hover:text-red-500 hover:scale-105",
  )}
  aria-current={item.current ? "page" : undefined}
  style={{ textDecoration: "none" }}
>
  {item.name}
</Link>
                    ))}
                  </div>
                 </div>

<div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
  {/* OZON */}
  <a
    href="https://www.ozon.ru/seller/smartdiag-862410/"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:block"
  >
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 p-1 text-base font-medium rounded-full flex items-center gap-2">
      <img src="/images/logos/favicon.ico" alt="OZON" className="w-4 h-4" />
      OZON
    </button>
  </a>
  
  {/* Яндекс Маркет */}
  <a
    href="https://market.yandex.ru/business--smartdiag/50025236"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:block"
  >
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 p-1 text-base font-medium rounded-full flex items-center gap-2">
      <img src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico" alt="Яндекс Маркет" className="w-4 h-4" />
      Яндекс Маркет
    </button>
  </a>
    {/* Wildberries */}
  <a
    href="https://www.wildberries.ru/seller/1343369"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:block"
  >
    <button className="bg-purple-700 hover:bg-purple-800 text-white px-3 p-1 text-base font-medium rounded-full flex items-center gap-2">
      <img src="https://www.wildberries.ru/favicon.ico" alt="Wildberries" className="w-4 h-4" />
      Wildberries
    </button>
  </a>

  <ThemeSwitchButton />
</div>


                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
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
  {/* OZON */}
  <a
    href="https://www.ozon.ru/seller/smartdiag-862410/"
    target="_blank"
  >
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-base font-medium rounded-full flex items-center gap-2">
      <img src="/images/logos/favicon.ico" alt="OZON" className="w-4 h-4" />
      OZON
    </button>
  </a>
  
  {/* Яндекс Маркет */}
  <a
    href="https://market.yandex.ru/business--smartdiag/50025236"
    target="_blank"
  >
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 text-base font-medium rounded-full flex items-center gap-2">
      <img src="https://yastatic.net/market-export/_/i/favicon/ymnew/favicon.ico" alt="Яндекс Маркет" className="w-4 h-4" />
      Яндекс Маркет
    </button>
  </a>
  
  {/* Wildberries */}
  <a
    href="https://www.wildberries.ru/seller/1343369"
    target="_blank"
  >
    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 text-base font-medium rounded-full flex items-center gap-2">
      <img src="https://www.wildberries.ru/favicon.ico" alt="Wildberries" className="w-4 h-4" />
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
