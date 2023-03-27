import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Delphi DS150e",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Многофункциональный диагностический инструмент для автомобилей.",
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
    title: "Wurth WoW",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: [
      "Delphi 2021.10b",
      "Autocom 2021.11",
      "Wurth WoW 5.00.8",
    ],
    href: "https://i.getspace.us/cloud/s/H8rFC8dwz2cTpJJ",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "VCDS + Вася",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: true,
  },
  {
    title: "BNW E-NET (E-Sys)",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "K-Dcan INPA",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "ELS 27",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Mini-VCI",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Lexia 3/PP2000",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "ELM 327 Mini",
    price: 120,
    currency: "$",
    frecuency: "elm",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
    cta: "Скачать",
    mostPopular: false,
  },
  {
    title: "Kingbolen ELM",
    price: 120,
    currency: "$",
    frecuency: "elm",
    description: "Программа и инструкции по установке для приборов серии VCDS.",
    features: [
      "VCDS",
      "Вася 19.6",
    ],
    href: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
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
          В этом разделе сайта мы объединили все программное обеспечение для нашего оборудования. Для того, чтобы скачать программы, просто кликните по необходимой ссылке, а затем в новом окне нажмите на 3 точки, расположенные рядом с папкой с нужной вам версией, и нажмите на кнопку &quot;Скачать&quot;.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Мультимарочные
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Марочные
          </button>
          <button
            onClick={() => setBillingInterval("elm")}
            type="button"
            className={`${
              billingInterval === "elm"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Приложения ELM
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
