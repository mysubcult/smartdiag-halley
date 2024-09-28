'use client';

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
  // ... ваши данные продуктов
];

const DeviceTypes: ProductType[] = ["Все", "Мультимарочные", "Марочные", "Адаптеры elm"];

// Варианты анимации для Framer Motion
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { type: "spring", stiffness: 80, staggerChildren: 0.1 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const menuItemVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, x: -20 },
};

// Компонент карточки продукта
interface ProductCardProps {
  product: Product;
  handleDownloadClick: (links: { link: string; label: string }[]) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleDownloadClick }) => {
  // ... код компонента ProductCard без изменений
};

// Компонент модального окна
interface ModalProps {
  modalLinks: { link: string; label: string }[] | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalLinks, closeModal }) => {
  // ... код компонента Modal без изменений
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
    <div className="mt-6" id="soft"> {/* Удалён фон из этого элемента */}
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
          В этом разделе вы можете скачать программное обеспечение для своего устройства. Для начала определите тип вашего устройства — &quot;Марочный&quot; или &quot;Мультимарочный&quot;. Информацию о типе устройства вы найдёте в упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку &quot;Скачать&quot;. Инструкция по установке программного обеспечения находится на кнопке &quot;Инструкция&quot;.
        </motion.p>
      </div>

      {/* Мобильное меню */}
      <div className="lg:hidden flex flex-col items-center pt-4">
        <div className="p-4 rounded-lg shadow-md flex items-center justify-between w-full max-w-xs"> {/* Удалены фоновые классы */}
          <motion.button
            className="px-4 py-2 text-black dark:text-white rounded-full flex items-center justify-between w-full"
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
            className="ml-4 px-4 py-2 rounded-full shadow"
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
              className="mt-4 w-full max-w-xs shadow-lg rounded-lg overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul className="py-2 text-center">
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
              className="mt-4 w-full max-w-xs shadow-lg rounded-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border-none focus:outline-none dark:text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Десктопные фильтры и поиск */}
      <div className="hidden lg:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-max mx-auto flex flex-wrap items-center p-2 rounded-lg shadow space-y-4 sm:space-y-0 sm:space-x-4"> {/* Удалены фоновые классы */}
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
                    : "hover:bg-gray-300 dark:hover:bg-gray-600"
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
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
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
                  : "hover:bg-gray-300 dark:hover:bg-gray-600"
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
