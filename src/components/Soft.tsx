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
      "Delphi 2021.10b, Delphi + Delphi 2020.23",
      "Инструкции по установке ПО",
      "Руководство пользователя",
    ],
    href: "https://i.getspace.us/cloud/s/BiaqYzKpxZRTc58",
    cta: "Скачать",
    mostPopular: false,
    docs: true,
    docsLink: "https://i.getspace.us/cloud/s/Nmj3JBHPDDd5zeE",
    docsLabel: "Инструкция",
  },
  {
    title: "Autocom CDP+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: [
      "Autocom 2021.11, Delphi + Autocom 2020.23",
      "Инструкции по установке ПО",
      "Руководство пользователя",
    ],
    href: "https://i.getspace.us/cloud/s/S9CKwWMNDbeB2XH",
    cta: "Скачать",
    mostPopular: true,
    docs: true,
    docsLink: "https://i.getspace.us/cloud/s/as7kNFEmS4MpiSr",
    docsLabel: "Инструкция"
  },
    {
    title: "Wurth WoW Snooper+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: [
      "Wurth WoW 5.00.8",
      "Инструкция по установке ПО",
      "Руководство пользователя",
    ],
    href: "https://i.getspace.us/cloud/s/eTR2gqbEbZi66Md",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
  },
    {
    title: "MUCAR BT200/Thinkcar Mini/Thinkdiag",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальные мобильные приборы для диагностики автомобилей.",
    features: [
      "Diagzone",
      "ProDiag",
      "X-DIAG",
      "X-PRO5",
    ],
    href: "https://i.getspace.us/cloud/s/fAMr3QsBMekwR2n",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
  },
    {
    title: "Galletto 1260",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальный программатор для чип-тюнинга, чтения и удаления кодов неисправностей.",
    features: [
      "Galletto 1260",
      "Драйвер",
    ],
    href: "https://i.getspace.us/cloud/s/dfYejQP9rZGK9Td",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
  },
  {
    title: "VCDS + Вася",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Volkswagen Group.",
    features: [
      "Вася, VCDS",
      "Инструкции по установке ПО",
      "Сборники кодировок",
      "Видеокурсы",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: true,
    docs: true,
    docsLink: "https://i.getspace.us/cloud/s/4eoMD3wNiLCHTLe",
    docsLabel: "Инструкция"
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
      "Инструкции по установке ПО",
    ],
    href: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
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
      "Инструкции по установке ПО",
    ],
    href: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
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
      "Инструкции по установке ПО",
    ],
    href: "https://i.getspace.us/cloud/s/oBNcC2w85wnj2Lx",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
  },
  {
    title: "Mini-VCI",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Toyota и Lexus.",
    features: [
      "Techstream ",
      "Инструкция по установке ПО",
    ],
    href: "https://i.getspace.us/cloud/s/TKZPwL7Cfqgjx5D",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
  },
  {
    title: "Lexia 3/PP2000",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Peugeot и Citroen.",
    features: [
      "Diagbox",
      "Инструкция по установке ПО",
    ],
    href: "https://i.getspace.us/cloud/s/eBmZpZWza2kt2Dc",
    cta: "Скачать",
    mostPopular: false,
    docs: false,
    docsLink: "",
    docsLabel: ""
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
    docs: false,
    docsLink: "",
    docsLabel: ""
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
    docs: false,
    docsLink: "",
    docsLabel: ""
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
          В этом разделе сайта вы найдете все необходимые программы для вашего оборудования. Сначала выберите тип вашего прибора: &quot;Мультимарочный&quot; или &quot;Марочный&quot;. После выбора категории вы можете найти карточку со своим прибором и скачать программное обеспечение для него, нажав кнопку &quot;Скачать&quot;, либо нажать кнопку &quot;Инструкция&quot;, чтобы прочитать инструкции по установке. После нажатия кнопки &quot;Скачать&quot; в появившемся окне выберите необходимую версию программного обеспечения, затем щелкните на иконку с тремя точками справа от выбранной версии и нажмите &quot;Скачать&quot;, чтобы начать загрузку.
        </p>
      </div>

<div className="max-w-max mx-auto px-6">
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
            docs,
            docsLink,
            docsLabel
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
<div className="flex mt-4 mx-6">
{/* Call to action */}
<Link
  href={href}
  target="_blank"
  className={`block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
    mostPopular
      ? "bg-red-600 text-white shadow-md hover:bg-green-500"
      : "bg-black text-white shadow-md dark:bg-white dark:text-black dark:hover:bg-green-500 dark:hover:text-white hover:bg-green-500"
  } transition duration-300 ease-in-out w-full`}
>
  {cta}
</Link>

{
            docs && (<Link
  href={docsLink}
  target="_blank"
  className={`ml-2 block px-3 py-3 font-small leading-4 text-center rounded-lg ${
    mostPopular
      ? "bg-transparent text-black shadow-md dark:bg-transparent dark:text-white dark:hover:bg-neutral-600 hover:bg-neutral-200 hover:text-black"
      : "bg-transparent text-black shadow-md dark:bg-transparent dark:text-white dark:hover:bg-neutral-600 hover:bg-neutral-200 hover:text-black"
  } border-neutral-300 border dark:border-neutral-600 transition duration-300 ease-in-out w-full`}
>{docsLabel}

</Link>
        )} 


  
  
</div>
                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        В комплекте:
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
