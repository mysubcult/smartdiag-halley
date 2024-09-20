import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

type ProductType = "мультимарочные" | "марочные" | "адаптеры elm";

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
    features: ["Delphi 2021.10b, Delphi + Delphi 2020.23", "Инструкции по установке ПО", "Руководство пользователя", "Руководство пользователя"],
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
    features: ["Autocom 2021.11, Delphi + Autocom 2020.23"],
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
      { link: "https://nch.pl/s/KCCEPPDbpb7j7oJ", label: "Скачать с сервера 2" },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "мультимарочные"
  },
  {
    title: "MUCAR BT200/Thinkcar Mini/Thinkdiag",
    description: "Универсальные мобильные приборы для диагностики автомобилей.",
    features: ["Diagzone", "ProDiag", "X-DIAG", "X-PRO5"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/fAMr3QsBMekwR2n", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/T6c4C7Gj5Me3mGF", label: "Скачать с сервера 2" },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "мультимарочные"
  },
  {
    title: "Galletto 1260",
    description: "Универсальный программатор для чип-тюнинга, чтения и удаления кодов неисправностей.",
    features: ["Galletto 1260", "Драйвер"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/dfYejQP9rZGK9Td", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "мультимарочные"
  },
  {
    title: "VCDS + Вася",
    description: "Диагностический инструмент для автомобилей Volkswagen Group.",
    features: ["Вася, VCDS", "Инструкции по установке ПО", "Сборники кодировок", "Видеокурсы"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/mnBd982CC52NEko", label: "Скачать с сервера 2" },
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/bmi7a7zdHbXHMnB", label: "Инструкция 1" },
    ],
    type: "марочные"
  },
  {
    title: "BMW E-NET (E-Sys)",
    description: "Диагностическая система для автомобилей BMW.",
    features: ["E-SYS", "Rheingold", "ISTA+", "ISTA-P", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "марочные"
  },
  {
    title: "K-Dcan INPA",
    description: "Диагностическая система для автомобилей BMW.",
    features: ["Rheingold", "INPA", "ISTA-D", "DIS", "NCS", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "марочные"
  },
  {
    title: "ELS 27",
    description: "Диагностический интерфейс для автомобилей Ford и Mazda.",
    features: ["FORScan", "FoCCCus", "ELMConfig", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/oBNcC2w85wnj2Lx", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "марочные"
  },
  {
    title: "Mini-VCI",
    description: "Диагностический инструмент для автомобилей Toyota и Lexus.",
    features: ["Techstream ", "Инструкция по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/Q3kWQ8ajB8WdF5g", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "марочные"
  },
  {
    title: "Lexia 3/PP2000",
    description: "Диагностический инструмент для автомобилей Peugeot и Citroen.",
    features: ["Diagbox", "Инструкция по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/eBmZpZWza2kt2Dc", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "марочные"
  },
  {
    title: "ELM 327 Mini",
    description: "Универсальный диагностический сканер для автомобилей, который подключается к порту OBD-II и работает через приложение на смартфоне или компьютере.",
    features: ["EOBD Facile", "Car Scanner", "Torque", "ELMScan", "Carista", "BimmerCode", "LeafSpy", "и т.д."],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/7jirqk7RWaqYwCM", label: "Скачать с сервера 1" },
    ],
    mostPopular: true,
    docs: false,
    docsLinks: [],
    type: "адаптеры elm"
  },
  {
    title: "Kingbolen ELM",
    description: "Диагностический инструмент для автомобилей, оснащенный функцией Bluetooth/Wi-Fi и поддерживающий различные протоколы OBD-II, что позволяет работать с разными автомобильными брендами.",
    features: ["EOBD Facile", "Car Scanner", "Torque", "ELMScan", "Carista", "BimmerCode", "LeafSpy", "и т.д."],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe", label: "Скачать с сервера 1" },
      { link: "https://nch.pl/s/7jirqk7RWaqYwCM", label: "Скачать с сервера 1" },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "адаптеры elm"
  }
];

const DeviceTypes: ProductType[] = ["мультимарочные", "марочные", "адаптеры elm"];

export default function Soft() {
  const [selectedType, setSelectedType] = useState<ProductType>("мультимарочные");
  const [modalLinks, setModalLinks] = useState<{ link: string; label: string }[] | null>(null);

  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener noreferrer");
    } else {
      setModalLinks(links);
    }
  };

  const closeModal = () => setModalLinks(null);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="soft">
      <div className="pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Программы для оборудования 💻
        </h2>
        <p className="pt-6 text-lg max-w-2xl text-center mx-auto text-gray-600 dark:text-neutral-400">
          В этом разделе вы можете скачать программное обеспечение для своего устройства. Для начала определите тип вашего устройства — &quot;Марочный&quot; или &quot;Мультимарочный&quot;. Информацию о типе устройства вы найдёте в упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку &quot;Скачать&quot;. Инструкция по установке программного обеспечения находится на кнопке &quot;Инструкция&quot;.
        </p>
      </div>

      <div className="max-w-max mx-auto px-6 mt-8">
        <div className="flex flex-wrap justify-center gap-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1">
          {DeviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-300
                ${
                  selectedType === type
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products
          .filter(({ type }) => type === selectedType)
          .map(({ title, mostPopular, description, features, downloadLinks, docs, docsLinks }) => {
            const displayedFeatures = features.length > 4 ? [...features.slice(0, 3), "и т.д."] : features;

            return (
              <div
                key={title}
                className={`relative rounded-2xl bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 ${
                  mostPopular ? "border-2 border-red-500" : "border border-gray-200 dark:border-neutral-700"
                }`}
              >
                {mostPopular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Топ продаж
                  </span>
                )}

                <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white line-clamp-1">{title}</h3>
                <p className="mt-2 text-gray-600 dark:text-neutral-400 flex-grow line-clamp-3">{description}</p>

                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleDownloadClick(downloadLinks)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    Скачать
                  </button>
                  {docs && docsLinks.length > 0 && (
                    <button
                      onClick={() => handleDownloadClick(docsLinks)}
                      className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      Инструкция
                    </button>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-neutral-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-2">В комплекте:</h4>
                  <ul className="space-y-1 max-h-24 overflow-y-auto pr-2">
                    {displayedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-neutral-400 text-sm">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>

      {modalLinks && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg max-w-sm w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">Выберите ссылку для скачивания</h3>
            <div className="space-y-3">
              {modalLinks.map(({ link, label }) => (
                <Link
                  href={link}
                  key={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-gray-800 dark:text-white rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
