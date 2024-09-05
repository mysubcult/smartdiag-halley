import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

type ProductType = "мультимарочные" | "марочные" | "elm";

interface Product {
  title: string;
  description: string;
  features: string[];
  downloadLinks: { link: string; label: string }[];
  mostPopular: boolean;
  docs: boolean;
  docsLinks: { link: string; label: string }[];
  type: ProductType;
}

const products: Product[] = [
  {
    title: "Delphi DS150e",
    description: "Многофункциональный диагностический инструмент для легковых и грузовых автомобилей.",
    features: ["Delphi 2021.10b, Delphi + Delphi 2020.23", "Инструкции по установке ПО", "Руководство пользователя"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/BiaqYzKpxZRTc58", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/8MZQfLRjSy9z4Bk", label: "Скачать с сервера 2" }
    ],
    mostPopular: false,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/7BwyBJf2YHxEkaC", label: "Инструкция по установке Delphi 2020.23" },
      { link: "https://i.getspace.us/cloud/s/qJRfJdgjsqkPxme", label: "Инструкция по установке Delphi 2021.10b" }
    ],
    type: "мультимарочные"
  },
  {
    title: "Autocom CDP+",
    description: "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: ["Autocom 2021.11, Delphi + Autocom 2020.23", "Инструкции по установке ПО", "Руководство пользователя"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/S9CKwWMNDbeB2XH", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/XbJnfSYNiw3dzFm", label: "Скачать с сервера 2" }
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/xdr4QZqwsR6k8rr", label: "Инструкция по установке Autocom 2020.23" },
      { link: "https://i.getspace.us/cloud/s/bbRzaksyH6LkSg4", label: "Инструкция по установке Autocom 2021.11" },
    ],
    type: "мультимарочные"
  },
  {
    title: "Wurth WoW Snooper+",
    description: "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: ["Wurth WoW 5.00.8", "Инструкция по установке ПО", "Руководство пользователя"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/eTR2gqbEbZi66Md", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/KCCEPPDbpb7j7oJ", label: "Скачать с сервера 2" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "мультимарочные"
  },
  {
    title: "Launch X431 Pro",
    description: "Продвинутый сканер диагностики для профессионалов.",
    features: ["Launch X431 2020", "Полная инструкция пользователя", "Технические документы"],
    downloadLinks: [
      { link: "https://example.com/launch1", label: "Скачать с сервера 1" },
      { link: "https://example.com/launch2", label: "Скачать с сервера 2" }
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://example.com/doc1", label: "Документация по Launch X431 2020" }
    ],
    type: "марочные"
  },
  {
    title: "Bosch KTS 570",
    description: "Диагностическая система для грузовых и легковых автомобилей от Bosch.",
    features: ["Bosch KTS 570 2021", "Инструкции и документация", "Поддержка различных протоколов"],
    downloadLinks: [
      { link: "https://example.com/bosch1", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: true,
    docsLinks: [
      { link: "https://example.com/docbosch", label: "Документация Bosch KTS 570" }
    ],
    type: "марочные"
  },
  {
    title: "ELM327 Bluetooth",
    description: "Сканер для чтения и удаления ошибок с автомобилей с использованием ELM327.",
    features: ["Поддержка всех основных протоколов", "Простота использования", "Инструкция"],
    downloadLinks: [
      { link: "https://example.com/elm1", label: "Скачать с сервера 1" },
      { link: "https://example.com/elm2", label: "Скачать с сервера 2" }
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://example.com/elmdoc", label: "Руководство пользователя ELM327" }
    ],
    type: "elm"
  }
];

const DeviceTypes: ProductType[] = ["мультимарочные", "марочные", "elm"];

export default function Soft() {
  const [selectedType, setSelectedType] = useState<ProductType>("мультимарочные");
  const [modalLinks, setModalLinks] = useState<{ link: string; label: string }[] | null>(null);

  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank");
    } else {
      setModalLinks(links);
    }
  };

  const closeModal = () => setModalLinks(null);

  const renderButton = (label: string, type: ProductType) => (
    <button
      onClick={() => setSelectedType(type)}
      className={`${
        selectedType === type
          ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
          : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
      } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Программы для оборудования 💻</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете скачать программное обеспечение для своего устройства.
        </p>
      </div>

      <div className="max-w-max mx-auto px-6">
        {/* Применяем стили, как в предыдущем примере */}
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-col sm:flex-row sm:flex-wrap justify-center sm:mt-8 p-1 gap-1">
          {DeviceTypes.map((type) => renderButton(type.charAt(0).toUpperCase() + type.slice(1), type))}
        </div>
      </div>

      {/* Сетка статей */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products
          .filter(({ type }) => type === selectedType)
          .map(({ title, mostPopular, description, features, downloadLinks, docs, docsLinks }) => (
            <div
              key={title}
              className={`rounded-lg py-8 relative flex flex-col ${
                mostPopular
                  ? "border-red-300 border-2 border-solid dark:border-red-600"
                  : "border-neutral-300 border dark:border-neutral-600"
              } hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="px-6 text-lg font-semibold leading-5">{title}</h3>
              {mostPopular && (
                <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide shadow-md">
                  Топ продаж
                </p>
              )}
              <p className="px-6 mt-4 leading-6 dark:text-neutral-400">{description}</p>
              <div className="flex mt-4 mx-6">
                <button
                  onClick={() => handleDownloadClick(downloadLinks)}
                  className="block px-6 py-3 font-medium leading-4 text-center rounded-lg bg-red-600 text-white shadow-md hover:bg-green-500 dark:hover:bg-green-500 transition-colors duration-200 ease-in-out transform active:scale-95 w-full"
                >
                  Скачать
                </button>
                {docs && docsLinks.length > 0 && (
                  <button
                    onClick={() => handleDownloadClick(docsLinks)}
                    className="ml-2 block px-3 py-3 font-small leading-4 text-center rounded-lg border-neutral-300 border dark:border-neutral-600 dark:bg-transparent dark:text-white dark:hover:bg-neutral-600 hover:bg-neutral-200 transition-colors duration-200 ease-in-out transform active:scale-95 w-full"
                  >
                    Инструкция
                  </button>
                )}
              </div>
              <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                <p className="mt-6 font-semibold dark:text-neutral-300">В комплекте:</p>
                {features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-red-600 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {modalLinks && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative transform transition-transform duration-300 ease-out scale-100"
            onClick={(e) => e.stopPropagation()} // Остановить всплытие события клика
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110 active:scale-90"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center">Выберите ссылку для скачивания</h3>
            <div className="flex flex-col space-y-2">
              {modalLinks.map(({ link, label }, index) => (
                <Link href={link} key={index} target="_blank">
                  <a className="block px-6 py-3 font-medium leading-4 text-center rounded-lg bg-neutral-300 text-black shadow-md dark:bg-neutral-600 dark:text-white hover:bg-neutral-400 dark:hover:bg-neutral-500 transition-colors duration-200 ease-in-out transform active:scale-95">
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
