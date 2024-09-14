import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
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

const deviceTypes: ProductType[] = ["мультимарочные", "марочные", "адаптеры elm"];

const Soft: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProductType>("мультимарочные");
  const [modalLinks, setModalLinks] = useState<{ link: string; label: string }[] | null>(null);

  const handleDownloadClick = useCallback((links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener,noreferrer");
    } else {
      setModalLinks(links);
    }
  }, []);

  const closeModal = useCallback(() => setModalLinks(null), []);

  const filteredProducts = useMemo(
    () => products.filter(product => product.type === selectedType),
    [selectedType]
  );

  const renderDeviceTypeButton = useCallback(
    (type: ProductType) => {
      const isSelected = selectedType === type;
      const buttonLabel = type.charAt(0).toUpperCase() + type.slice(1);
      return (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${
            isSelected
              ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
              : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
          }`}
          aria-pressed={isSelected}
        >
          {buttonLabel}
        </button>
      );
    },
    [selectedType]
  );

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="soft">
      {/* Заголовок и описание */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Программы для оборудования 💻</h2>
        <p className="pt-6 text-base max-w-2xl text-center mx-auto dark:text-neutral-400">
          В этом разделе вы можете скачать программное обеспечение для своего устройства. Для начала определите тип вашего устройства — "Марочный" или "Мультимарочный". Информацию о типе устройства вы найдёте в упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку "Скачать". Инструкция по установке программного обеспечения находится на кнопке "Инструкция".
        </p>
      </div>

      {/* Кнопки выбора типа устройства */}
      <div className="max-w-max mx-auto px-6">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-col sm:flex-row sm:flex-wrap justify-center sm:mt-8 p-1 gap-1">
          {deviceTypes.map(renderDeviceTypeButton)}
        </div>
      </div>

      {/* Сетка продуктов */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {filteredProducts.map(product => (
          <div
            key={product.title}
            className={`rounded-lg py-8 relative flex flex-col hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 ${
              product.mostPopular
                ? "border-red-300 border-2 dark:border-red-600"
                : "border-neutral-300 dark:border-neutral-600"
            }`}
          >
            {/* Заголовок продукта */}
            <h3 className="px-6 text-lg font-semibold leading-5">{product.title}</h3>
            
            {/* Метка "Топ продаж" */}
            {product.mostPopular && (
              <span className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide shadow-md">
                Топ продаж
              </span>
            )}
            
            {/* Описание продукта */}
            <p className="px-6 mt-4 leading-6 dark:text-neutral-400 line-clamp-3">
              {product.description}
            </p>
            
            {/* Кнопки "Скачать" и "Инструкция" */}
            <div className="flex mt-4 mx-6 space-x-2">
              <button
                onClick={() => handleDownloadClick(product.downloadLinks)}
                className="flex-1 px-6 py-3 font-medium text-center rounded-lg bg-red-600 text-white shadow-md hover:bg-green-500 dark:hover:bg-green-500 transition-colors duration-200 ease-in-out transform active:scale-95"
                aria-label={`Скачать ${product.title}`}
              >
                Скачать
              </button>
              {product.docs && product.docsLinks.length > 0 && (
                <button
                  onClick={() => handleDownloadClick(product.docsLinks)}
                  className="flex-1 px-3 py-3 font-medium text-center rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-transparent dark:text-white dark:hover:bg-neutral-600 hover:bg-neutral-200 transition-colors duration-200 ease-in-out transform active:scale-95"
                  aria-label={`Инструкция для ${product.title}`}
                >
                  Инструкция
                </button>
              )}
            </div>
            
            {/* Список особенностей */}
            <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
              <li className="mt-6 font-semibold dark:text-neutral-300">В комплекте:</li>
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="mt-1 w-3 h-3 text-red-600 shrink-0" aria-hidden="true" />
                  <span className="ml-3 dark:text-neutral-400">{feature}</span>
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="flex items-start">
                  <CheckIcon className="mt-1 w-3 h-3 text-red-600 shrink-0" aria-hidden="true" />
                  <span className="ml-3 dark:text-neutral-400">и т.д.</span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Модальное окно для выбора ссылки */}
      {modalLinks && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()} // Предотвращение закрытия модального окна при клике внутри него
          >
            {/* Кнопка закрытия модального окна */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110 active:scale-90"
              aria-label="Закрыть"
            >
              ✕
            </button>
            
            {/* Заголовок модального окна */}
            <h3 className="text-lg font-semibold mb-4 text-center">Выберите ссылку для скачивания</h3>
            
            {/* Ссылки для скачивания */}
            <div className="flex flex-col space-y-2">
              {modalLinks.map(({ link, label }, index) => (
                <Link href={link} key={index} passHref>
                  <a
                    className="block px-6 py-3 font-medium text-center rounded-lg bg-neutral-300 text-black shadow-md dark:bg-neutral-600 dark:text-white hover:bg-neutral-400 dark:hover:bg-neutral-500 transition-colors duration-200 ease-in-out transform active:scale-95"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
};

export default Soft;
