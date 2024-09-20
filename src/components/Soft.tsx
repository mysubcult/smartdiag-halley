// components/Soft.tsx

import Link from "next/link";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
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
  link?: string; // Добавлено для ссылок на страницы продуктов
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

const DeviceTypes: ProductType[] = ["Все", "мультимарочные", "марочные", "адаптеры elm"];

export default function Soft() {
  const [selectedType, setSelectedType] = useState<ProductType>("Все");
  const [modalLinks, setModalLinks] = useState<{ link: string; label: string }[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const productsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesType = selectedType === "Все" || product.type === selectedType;
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage, filteredProducts]);

  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener noreferrer");
    } else {
      setModalLinks(links);
    }
  };

  const closeModal = () => setModalLinks(null);

  const handleCategoryClick = useCallback((type: ProductType) => {
    setSelectedType(type);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
    setShowPopover(false);
  }, [totalPages]);

  const handleEllipsisClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopoverPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowPopover(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopover]);

  const renderPagination = useMemo(() => {
    const pagesToShow: (string | number)[] = [];
    pagesToShow.push(1);

    if (totalPages > 5) {
      if (currentPage <= 2) {
        pagesToShow.push(2, 3, "...");
      } else if (currentPage >= totalPages - 1) {
        pagesToShow.push("...", totalPages - 2, totalPages - 1);
      } else {
        if (currentPage > 3) {
          pagesToShow.push("...");
        }
        pagesToShow.push(currentPage - 1, currentPage);
        if (currentPage + 1 < totalPages) {
          pagesToShow.push(currentPage + 1);
        }
        if (currentPage < totalPages - 2) {
          pagesToShow.push("...");
        }
      }
    } else {
      for (let i = 2; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    }

    if (totalPages > 1 && !pagesToShow.includes(totalPages)) {
      pagesToShow.push(totalPages);
    }

    return pagesToShow.map((page, index) => (
      <button
        key={index}
        onClick={(event) => (typeof page === "number" ? handlePageChange(page) : handleEllipsisClick(event))}
        className={`${
          page === currentPage
            ? "bg-red-600 text-white"
            : "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-red-500 hover:text-white"
        } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${
          typeof page !== "number" ? "cursor-pointer" : ""
        }`}
        aria-label={typeof page === "number" ? `Перейти на страницу ${page}` : "Показать другие страницы"}
      >
        {typeof page === "number" ? page : "..."}
      </button>
    ));
  }, [currentPage, totalPages, handlePageChange]);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="soft">
      {/* Заголовок */}
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100">Программы для оборудования 💻</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете скачать программное обеспечение для своего устройства. Для начала определите тип вашего устройства — &quot;Марочный&quot;, &quot;Мультимарочный&quot; или &quot;Адаптер ELM&quot;. Информацию о типе устройства вы найдёте в упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку &quot;Скачать&quot;. Инструкция по установке программного обеспечения находится на кнопке &quot;Инструкция&quot;.
        </p>
      </div>

      {/* Панель навигации с категориями и поиском */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4">
          {/* Категории */}
          <div className="flex flex-wrap gap-2">
            {DeviceTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleCategoryClick(type)}
                className={`${
                  type === selectedType
                    ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
                } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
                aria-label={`Выбрать категорию ${type}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Поиск */}
          <div className="mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700 focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      {/* Список продуктов */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map(({ title, mostPopular, description, features, downloadLinks, docs, docsLinks, link }) => {
            const displayedFeatures = features.length > 4 ? [...features.slice(0, 3), "и т.д."] : features;

            return (
              <div
                key={title}
                className={`rounded-lg py-8 relative flex flex-col bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300`}
              >
                {/* Заголовок с ссылкой на страницу продукта */}
                <Link href={link || "#"}>
                  <h3 className="px-6 text-lg font-semibold line-clamp-1 hover:underline">{title}</h3>
                </Link>

                {/* Маркер "Топ продаж" */}
                {mostPopular && (
                  <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide shadow-md">
                    Топ продаж
                  </p>
                )}

                {/* Описание */}
                <div className="px-6 mt-4 flex-grow flex items-center">
                  <p className="leading-6 dark:text-neutral-400 line-clamp-3">{description}</p>
                </div>

                {/* Кнопки "Скачать" и "Инструкция" */}
                <div className="flex mt-4 mx-6 space-x-2">
                  <button
                    onClick={() => handleDownloadClick(downloadLinks)}
                    className="flex-1 px-4 py-2 font-medium text-center rounded-lg bg-red-600 text-white shadow-md hover:bg-red-500 dark:hover:bg-red-500 transition-colors duration-200 ease-in-out transform active:scale-95"
                  >
                    Скачать
                  </button>
                  {docs && docsLinks.length > 0 && (
                    <button
                      onClick={() => handleDownloadClick(docsLinks)}
                      className="flex-1 px-4 py-2 font-medium text-center rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-transparent dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 ease-in-out transform active:scale-95"
                    >
                      Инструкция
                    </button>
                  )}
                </div>

                {/* Список функций */}
                <div className="mt-6 px-6 border-t border-neutral-300 dark:border-neutral-500">
                  <p className="font-semibold dark:text-neutral-300 mt-4 mb-2">В комплекте:</p>
                  <ul className="flex flex-col gap-y-2 overflow-y-auto h-24">
                    {displayedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                        <span className="ml-3 dark:text-neutral-400 line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-neutral-900 dark:text-neutral-400 col-span-full">
            <h3 className="text-xl font-semibold mb-4">Ничего не найдено</h3>
            <p>К сожалению, по вашему запросу не удалось найти продукты. Попробуйте изменить категорию или поисковый запрос.</p>
          </div>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="max-w-max mx-auto px-6 pb-4">
          <div className="flex space-x-2 justify-center">
            {renderPagination}
          </div>
        </div>
      )}

      {/* Модальное окно */}
      {modalLinks && (
        <dialog open className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
          <div
            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative transform transition-transform duration-300 ease-out scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110 active:scale-90"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center dark:text-neutral-100">Выберите ссылку для скачивания</h3>
            <div className="flex flex-col space-y-2">
              {modalLinks.map(({ link, label }) => (
                <Link href={link} key={link} target="_blank" rel="noopener noreferrer" className="block px-6 py-3 font-medium leading-4 text-center rounded-lg bg-neutral-300 text-black dark:bg-neutral-600 dark:text-white hover:bg-neutral-400 dark:hover:bg-neutral-500 transition-colors duration-200 ease-in-out transform active:scale-95">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
