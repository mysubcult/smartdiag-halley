import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CheckIcon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

// Типы и интерфейсы
type ProductType = "Все" | "Мультимарочные" | "Марочные" | "Адаптеры elm";

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

// Данные продуктов
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
    type: "Мультимарочные"
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
    type: "Мультимарочные"
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
    type: "Мультимарочные"
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
    type: "Мультимарочные"
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
    type: "Мультимарочные"
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
    type: "Марочные"
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
    type: "Марочные"
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
    type: "Марочные"
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
    type: "Марочные"
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
    type: "Марочные"
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
    type: "Марочные"
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
    type: "Адаптеры elm"
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
    type: "Адаптеры elm"
  }
];

const DeviceTypes: ProductType[] = ["Все", "Мультимарочные", "Марочные", "Адаптеры elm"];

// Варианты анимации для Framer Motion
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
};

const menuItemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  closed: { opacity: 0, y: -20 },
};

// Компонент карточки продукта
interface ProductCardProps {
  product: Product;
  handleDownloadClick: (links: { link: string; label: string }[]) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleDownloadClick }) => {
  const { title, mostPopular, description, features, downloadLinks, docs, docsLinks } = product;
  const displayedFeatures = features.length > 4 ? [...features.slice(0, 3), "и т.д."] : features;

  return (
    <motion.div
      className="relative rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      {mostPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Топ продаж
        </div>
      )}
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2 line-clamp-1">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 flex-grow line-clamp-3 mb-4">{description}</p>
      <div className="flex space-x-2 mb-4">
        <motion.button
          onClick={() => handleDownloadClick(downloadLinks)}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Скачать
        </motion.button>
        {docs && docsLinks.length > 0 && (
          <motion.button
            onClick={() => handleDownloadClick(docsLinks)}
            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Инструкция
          </motion.button>
        )}
      </div>
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">В комплекте:</h4>
        <ul className="space-y-1 h-24 overflow-y-auto">
          {displayedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span className="ml-2 text-gray-700 dark:text-gray-400 line-clamp-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Компонент модального окна
interface ModalProps {
  modalLinks: { link: string; label: string }[] | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalLinks, closeModal }) => {
  if (!modalLinks) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Закрыть"
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h3 className="text-lg font-semibold text-black dark:text-white text-center mb-4">
          Выберите ссылку для скачивания
        </h3>
        <div className="flex flex-col space-y-3">
          {modalLinks.map(({ link, label }) => (
            <Link
              href={link}
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300 text-center"
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Главный компонент
export default function Soft() {
  const [selectedType, setSelectedType] = useState<ProductType>("Все");
  const [modalLinks, setModalLinks] = useState<{ link: string; label: string }[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const productsPerPage = 8;

  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener noreferrer");
    } else {
      setModalLinks(links);
    }
  };

  const closeModal = () => setModalLinks(null);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        ({ type, title }) =>
          (selectedType === "Все" || type === selectedType) &&
          title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [selectedType, searchQuery]
  );

  const totalPages = useMemo(() => Math.ceil(filteredProducts.length / productsPerPage), [filteredProducts]);

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [filteredProducts, currentPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="mt-6" id="soft">
      {/* Основное содержимое */}
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Программы для оборудования 💻
        </motion.h2>
        <motion.p
          className="pt-6 text-lg max-w-2xl text-center m-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          В этом разделе вы можете скачать программное обеспечение для своего устройства. Для начала определите тип
          вашего устройства — &quot;Марочный&quot; или &quot;Мультимарочный&quot;. Информацию о типе устройства вы
          найдёте в упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку &quot;Скачать&quot;.
          Инструкция по установке программного обеспечения находится на кнопке &quot;Инструкция&quot;.
        </motion.p>
      </div>

      {/* Мобильное меню */}
      <div className="lg:hidden flex flex-col items-center pt-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between w-full max-w-xs">
          <motion.button
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-between w-full"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Выберите категорию"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{selectedType}</span>
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDownIcon className="w-5 h-5" />
            </motion.div>
          </motion.button>
          <motion.button
            className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            aria-label="Поиск"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </motion.button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden w-full max-w-xs"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden py-2 text-center">
                {DeviceTypes.map((type) => (
                  <motion.li
                    key={type}
                    variants={menuItemVariants}
                    className="text-black dark:text-white px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedType(type);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {type}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="overflow-hidden w-full max-w-xs mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border-none focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Десктопные фильтры и поиск */}
      <div className="hidden lg:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-max mx-auto flex flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-wrap gap-2">
            {DeviceTypes.map((type) => (
              <motion.button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedType === type
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            ))}
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Карточки продуктов */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16"
        initial={false}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.title} product={product} handleDownloadClick={handleDownloadClick} />
        ))}
      </motion.div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex justify-center items-center space-x-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            } transition-colors duration-300`}
          >
            Предыдущая
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentPage === number
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              } transition-colors duration-300`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            } transition-colors duration-300`}
          >
            Следующая
          </button>
        </div>
      )}

      {/* Модальное окно */}
      <AnimatePresence>
        {modalLinks && <Modal modalLinks={modalLinks} closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
}
