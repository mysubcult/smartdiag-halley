import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Delphi DS150e",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Многофункциональный диагностический инструмент для легковых и грузовых автомобилей.",
    features: [
      "Delphi 2021.10b",
      "Autocom 2021.11",
      "Wurth WoW 5.00.8",
    ],
    href: "https://i.getspace.us/cloud/s/ydF5sRELzHEwzQn",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Autocom CDP+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: [
      "Delphi 2021.10b",
      "Autocom 2021.11",
      "Wurth WoW 5.00.8",
    ],
    href: "https://i.getspace.us/cloud/s/ydF5sRELzHEwzQn",
    cta: "Скачать",
    mostPopular: true,
  },
    {
    title: "Wurth WoW Snooper+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: [
      "Delphi 2021.10b",
      "Autocom 2021.11",
      "Wurth WoW 5.00.8",
    ],
    href: "https://i.getspace.us/cloud/s/ydF5sRELzHEwzQn",
    cta: "Скачать",
    mostPopular: false,
  },
    {
    title: "MUCAR BT200/Thinkcar Mini/Thinkdiag Mini",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальные мобильные приборы для диагностики автомобилей.",
    features: [
      "Diagzone",
      "X-DIAG",
    ],
    href: "https://i.getspace.us/cloud/s/fAMr3QsBMekwR2n",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "VCDS + Вася",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Volkswagen Group.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: true,
  },
  {
    title: "BMW E-NET (E-Sys)",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "E-SYS",
      "Rheingold",
      "ISTA+",
      "ISTA-P",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "K-Dcan INPA",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "Rheingold",
      "INPA",
      "ISTA-D",
      "DIS",
      "NCS",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "ELS 27",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический интерфейс для автомобилей Ford и Mazda.",
    features: [
      "FORScan",
      "FoCCCus",
      "ELMConfig",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/oBNcC2w85wnj2Lx",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Mini-VCI",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Toyota и Lexus.",
    features: [
      "Techstream ",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/TKZPwL7Cfqgjx5D",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Lexia 3/PP2000",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Peugeot и Citroen.",
    features: [
      "Diagbox",
    ],
    href: "https://i.getspace.us/cloud/s/eBmZpZWza2kt2Dc",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "ELM 327 Mini",
    price: 120,
    currency: "$",
    frecuency: "elm",
    description: "Универсальный диагностический сканер для автомобилей, который подключается к порту OBD-II и работает через приложение на смартфоне или компьютере.",
    features: [
      "EOBD Facile",
      "Car Scanner",
      "Torque",
      "ELMScan",
      "Carista", 
      "BimmerCode",
      "LeafSpy",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe",
    cta: "Скачать",
    mostPopular: true,
  },
  {
    title: "Kingbolen ELM",
    price: 120,
    currency: "$",
    frecuency: "elm",
    description: "Диагностический инструмент для автомобилей, оснащенный функцией Bluetooth/Wi-Fi и поддерживающий различные протоколы OBD-II, что позволяет работать с разными автомобильными брендами.",
    features: [
      "EOBD Facile",
      "Car Scanner",
      "Torque",
      "ELMScan",
      "Carista", 
      "BimmerCode",
      "LeafSpy",
      "и т.д.",
    ],
    href: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe",
    cta: "Скачать",
    mostPopular: false,
  },
];

type BillingInterval = "year" | "month" | "elm";

export default function Soft() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Программы для оборудования 💻</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В данном разделе сайта собраны все необходимые программы для оборудования. Перед выбором прибора из списка, необходимо определиться с категорией оборудования, выбрав между &quot;мультимарочным&quot; или &quot;марочным&quot;. После выбора категории и нахождения нужного прибора в списке, можно перейти к загрузке ПО. Для этого необходимо нажать кнопку &quot;Скачать&quot; и выбрать желаемую версию программы в появившемся окне. Чтобы начать загрузку, нужно нажать на иконку с тремя точками рядом с необходимой версией и выбрать &quot;Скачать&quot;.
        </p>
      </div>

<div className="max-w-max mx-auto inline-block">
  <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center sm:mt-8">
    <button
      onClick={() => setBillingInterval("month")}
      type="button"
      className={`${
        billingInterval === "month"
          ? "relative w-full sm:w-auto bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
          : "relative w-full sm:w-auto text-neutral-900 dark:text-neutral-400"
      } rounded-md m-1 py-2 whitespace-nowrap sm:px-8`}
    >
      Мультимарочные
    </button>
    <button
      onClick={() => setBillingInterval("year")}
      type="button"
      className={`${
        billingInterval === "year"
          ? "relative w-full sm:w-auto bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
          : "relative w-full sm:w-auto text-neutral-900 dark:text-neutral-400"
      } rounded-md m-1 py-2 whitespace-nowrap sm:px-8`}
    >
      Марочные
    </button>
    <button
      onClick={() => setBillingInterval("elm")}
      type="button"
      className={`${
        billingInterval === "elm"
          ? "relative w-full sm:w-auto bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
          : "relative w-full sm:w-auto text-neutral-900 dark:text-neutral-400"
      } rounded-md m-1 py-2 whitespace-nowrap sm:px-8`}
    >
      Адаптеры ELM
    </button>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-red-300 border-2 border-solid dark:border-red-600"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-red-100 text-red-600  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Популярное
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>

{/* Call to action */}
<Link
  href={href}
  target="_blank"
  className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
    mostPopular
      ? "bg-red-600 text-white shadow-md"
      : "bg-black text-white dark:bg-white dark:text-black"
  }`}
  style={{ transition: "all 0.3s ease" }}
  onMouseEnter={(e) => {
    if (
      e.currentTarget.classList.contains("bg-black") ||
      e.currentTarget.classList.contains("dark:bg-white")
    ) {
      e.currentTarget.classList.remove("bg-black", "dark:bg-white");
      e.currentTarget.classList.add("bg-gray-500", "dark:bg-gray-500");
    } else if (
      e.currentTarget.classList.contains("bg-red-600")
    ) {
      e.currentTarget.classList.remove("bg-red-600");
      e.currentTarget.classList.add("bg-red-400");
    }
  }}
  onMouseLeave={(e) => {
    if (
      e.currentTarget.classList.contains("bg-gray-500") ||
      e.currentTarget.classList.contains("dark:bg-gray-500")
    ) {
      e.currentTarget.classList.remove("bg-gray-500", "dark:bg-gray-500");
      e.currentTarget.classList.add("bg-black", "dark:bg-white");
    } else if (
      e.currentTarget.classList.contains("bg-red-400")
    ) {
      e.currentTarget.classList.remove("bg-red-400");
      e.currentTarget.classList.add("bg-red-600");
    }
  }}
>
  {cta}
</Link>
                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        Программы:
                      </p>
                      {features.map((features) => (
                        <li key={features} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-red-600 shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div> 
  );
}
