import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

type ProductType = "мультимарочные" | "марочные" | "адаптеры elm" | "все";

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
    description: "Диагностический сканер для автомобилей, работает через приложение на смартфоне или компьютере.",
    features: ["Car Scanner", "Torque", "Carista"],
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
    description: "Диагностический инструмент для автомобилей, оснащенный функцией Bluetooth/Wi-Fi.",
    features: ["Car Scanner", "Torque", "Carista"],
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

const DeviceTypes: ProductType[] = ["все", "мультимарочные", "марочные", "адаптеры elm"];

export default function Soft() {
  const [selectedType, setSelectedType] = useState<ProductType>("все");
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [showSearch, setShowSearch] = useState<boolean>(false); 
  const [showCategories, setShowCategories] = useState<boolean>(false); 
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const searchRef = useRef<HTMLInputElement>(null); 

  const productsPerPage = 8;

  const filteredProducts = useMemo(() => {
    const filtered = selectedType === "все"
      ? products
      : products.filter(({ type }) => type === selectedType);
    
    return filtered.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedType, searchTerm]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage, filteredProducts]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryClick = (type: ProductType) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  };

  const renderButton = (label: string, type: ProductType) => (
    <button
      onClick={() => handleCategoryClick(type)}
      className={`${
        selectedType === type
          ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
          : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
      } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out relative flex items-center`}
    >
      {label}
      <svg
        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showCategories ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
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

      <div className="max-w-max mx-auto px-6 mt-6 sm:mt-8">
        <div className="relative text-base font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 sm:mt-0 flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-auto flex-grow gap-1">
            <div className="relative">
              <div className="hidden sm:flex gap-1">
                {DeviceTypes.map((type) => renderButton(type.charAt(0).toUpperCase() + type.slice(1), type))}
              </div>

              <button
                className="sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md flex items-center justify-between w-full"
                onClick={() => setShowCategories(!showCategories)}
              >
                <span>{selectedType}</span>
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showCategories ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showCategories && (
                <div className="absolute z-50 w-full bg-white dark:bg-neutral-700 shadow-md rounded-md mt-2 transition-all ease-in-out duration-300">
                  {DeviceTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        handleCategoryClick(type);
                        setShowCategories(false);
                      }}
                      className="block text-left w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-neutral-600"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden sm:flex">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-40 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700"
              />
            </div>
          </div>

          <button
            className="ml-auto sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md"
            onClick={handleSearchIconClick}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z" />
            </svg>
          </button>
        </div>

        <div
          className={`relative w-full sm:hidden transition-all duration-300 ${showSearch ? "max-h-40" : "max-h-0"} overflow-hidden`}
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700 mt-2"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map(({ title, mostPopular, description, features, downloadLinks, docs, docsLinks }) => (
            <div
              key={title}
              className={`rounded-lg py-8 relative flex flex-col h-full ${
                mostPopular
                  ? "border-red-300 border-2 border-solid dark:border-red-600"
                  : "border-neutral-300 border dark:border-neutral-600"
              } hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300`}
              style={{ height: "100%", maxHeight: "450px", overflow: "hidden" }} 
            >
              {/* Title section */}
              <h3 className="px-6 text-lg font-semibold leading-5" style={{ overflow: "hidden", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                {title}
              </h3>
              {mostPopular && (
                <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide shadow-md">
                  Топ продаж
                </p>
              )}
              {/* Description section */}
              <p className="px-6 mt-4 leading-6 dark:text-neutral-400" style={{ overflow: "hidden", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}>
                {description}
              </p>
              {/* Buttons section */}
              <div className="flex mt-4 mx-6">
                <button
                  onClick={() => window.open(downloadLinks[0].link, "_blank")}
                  className="block px-6 py-3 font-medium leading-4 text-center rounded-lg bg-red-600 text-white shadow-md hover:bg-green-500 dark:hover:bg-green-500 transition-colors duration-200 ease-in-out transform active:scale-95 w-full"
                >
                  Скачать
                </button>
                {docs && docsLinks.length > 0 && (
                  <button
                    onClick={() => window.open(docsLinks[0].link, "_blank")}
                    className="ml-2 block px-3 py-3 font-small leading-4 text-center rounded-lg border-neutral-300 border dark:border-neutral-600 dark:bg-transparent dark:text-white dark:hover:bg-neutral-600 hover:bg-neutral-200 transition-colors duration-200 ease-in-out transform active:scale-95 w-full"
                  >
                    Инструкция
                  </button>
                )}
              </div>
              {/* Features section */}
              <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500" style={{ overflow: "hidden", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                <p className="mt-6 font-semibold dark:text-neutral-300">В комплекте:</p>
                {features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-red-600 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-neutral-900 dark:text-neutral-400">
            <p>Нет результатов для выбранной категории или поиска.</p>
          </div>
        )}
      </div>

      <div className="max-w-max mx-auto px-6 pb-4">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${
                page === currentPage
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
              } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
