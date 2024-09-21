// components/Soft.tsx
"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  CheckIcon,
  XMarkIcon,
  MenuIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

// Определение типов продуктов
type ProductType = "Все" | "Мультимарочные" | "Марочные" | "Адаптеры elm";

// Интерфейс продукта
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
    description:
      "Многофункциональный диагностический инструмент для легковых и грузовых автомобилей.",
    features: [
      "Delphi 2021.10b, Delphi + Delphi 2020.23",
      "Инструкции по установке ПО",
      "Руководство пользователя",
      "Руководство пользователя",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/BiaqYzKpxZRTc58",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/8MZQfLRjSy9z4Bk",
        label: "Скачать с сервера 2",
      },
    ],
    mostPopular: false,
    docs: true,
    docsLinks: [
      {
        link: "https://i.getspace.us/cloud/s/7BwyBJf2YHxEkaC",
        label: "Инструкция по установке Delphi 2020.23",
      },
      {
        link: "https://i.getspace.us/cloud/s/qJRfJdgjsqkPxme",
        label: "Инструкция по установке Delphi 2021.10b",
      },
    ],
    type: "Мультимарочные",
  },
  {
    title: "Autocom CDP+",
    description:
      "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: ["Autocom 2021.11, Delphi + Autocom 2020.23"],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/S9CKwWMNDbeB2XH",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/XbJnfSYNiw3dzFm",
        label: "Скачать с сервера 2",
      },
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      {
        link: "https://i.getspace.us/cloud/s/xdr4QZqwsR6k8rr",
        label: "Инструкция по установке Autocom 2020.23",
      },
      {
        link: "https://i.getspace.us/cloud/s/bbRzaksyH6LkSg4",
        label: "Инструкция по установке Autocom 2021.11",
      },
    ],
    type: "Мультимарочные",
  },
  {
    title: "Wurth WoW Snooper+",
    description:
      "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: [
      "Wurth WoW 5.00.8",
      "Инструкция по установке ПО",
      "Руководство пользователя",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/eTR2gqbEbZi66Md",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/KCCEPPDbpb7j7oJ",
        label: "Скачать с сервера 2",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Мультимарочные",
  },
  {
    title: "MUCAR BT200/Thinkcar Mini/Thinkdiag",
    description:
      "Универсальные мобильные приборы для диагностики автомобилей.",
    features: ["Diagzone", "ProDiag", "X-DIAG", "X-PRO5"],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/fAMr3QsBMekwR2n",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/T6c4C7Gj5Me3mGF",
        label: "Скачать с сервера 2",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Мультимарочные",
  },
  {
    title: "Galletto 1260",
    description:
      "Универсальный программатор для чип-тюнинга, чтения и удаления кодов неисправностей.",
    features: ["Galletto 1260", "Драйвер"],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/dfYejQP9rZGK9Td",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Мультимарочные",
  },
  {
    title: "VCDS + Вася",
    description:
      "Диагностический инструмент для автомобилей Volkswagen Group.",
    features: [
      "Вася, VCDS",
      "Инструкции по установке ПО",
      "Сборники кодировок",
      "Видеокурсы",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/mnBd982CC52NEko",
        label: "Скачать с сервера 2",
      },
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      {
        link: "https://i.getspace.us/cloud/s/bmi7a7zdHbXHMnB",
        label: "Инструкция 1",
      },
    ],
    type: "Марочные",
  },
  {
    title: "BMW E-NET (E-Sys)",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "E-SYS",
      "Rheingold",
      "ISTA+",
      "ISTA-P",
      "Инструкции по установке ПО",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Марочные",
  },
  {
    title: "K-Dcan INPA",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "Rheingold",
      "INPA",
      "ISTA-D",
      "DIS",
      "NCS",
      "Инструкции по установке ПО",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Марочные",
  },
  {
    title: "ELS 27",
    description:
      "Диагностический интерфейс для автомобилей Ford и Mazda.",
    features: [
      "FORScan",
      "FoCCCus",
      "ELMConfig",
      "Инструкции по установке ПО",
    ],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/oBNcC2w85wnj2Lx",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Марочные",
  },
  {
    title: "Mini-VCI",
    description:
      "Диагностический инструмент для автомобилей Toyota и Lexus.",
    features: ["Techstream ", "Инструкция по установке ПО"],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/Q3kWQ8ajB8WdF5g",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Марочные",
  },
  {
    title: "Lexia 3/PP2000",
    description:
      "Диагностический инструмент для автомобилей Peugeot и Citroen.",
    features: ["Diagbox", "Инструкция по установке ПО"],
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/eBmZpZWza2kt2Dc",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Марочные",
  },
  {
    title: "ELM 327 Mini",
    description:
      "Универсальный диагностический сканер для автомобилей, который подключается к порту OBD-II и работает через приложение на смартфоне или компьютере.",
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
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/7jirqk7RWaqYwCM",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: true,
    docs: false,
    docsLinks: [],
    type: "Адаптеры elm",
  },
  {
    title: "Kingbolen ELM",
    description:
      "Диагностический инструмент для автомобилей, оснащенный функцией Bluetooth/Wi-Fi и поддерживающий различные протоколы OBD-II, что позволяет работать с разными автомобильными брендами.",
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
    downloadLinks: [
      {
        link: "https://i.getspace.us/cloud/s/Xg9rLCQgfZbedxe",
        label: "Скачать с сервера 1",
      },
      {
        link: "https://nch.pl/s/7jirqk7RWaqYwCM",
        label: "Скачать с сервера 1",
      },
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
    type: "Адаптеры elm",
  },
];

// Типы устройств
const DeviceTypes: ProductType[] = [
  "Все",
  "Мультимарочные",
  "Марочные",
  "Адаптеры elm",
];

// Компонент Навигационной панели
const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Продукты", href: "/products" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Логотип или Название */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-red-500 dark:text-red-400">
                MyProject
              </a>
            </Link>
          </div>
          {/* Десктопное меню */}
          <div className="hidden md:flex md:items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          {/* Кнопка мобильного меню */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Компонент заголовка
const HeaderSection: React.FC = () => (
  <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      В этом разделе вы можете скачать программное обеспечение для своего
      устройства. Для начала определите тип вашего устройства — &quot;Марочный&quot; или
      &quot;Мультимарочный&quot;. Информацию о типе устройства вы найдёте в
      упаковке. После этого найдите карточку с вашим устройством и нажмите кнопку
      &quot;Скачать&quot;. Инструкция по установке программного обеспечения
      находится на кнопке &quot;Инструкция&quot;.
    </motion.p>
  </div>
);

// Компонент фильтров и поиска
interface FiltersProps {
  selectedType: ProductType;
  setSelectedType: (type: ProductType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedType,
  setSelectedType,
  searchQuery,
  setSearchQuery,
}) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
      {/* Кнопки фильтрации */}
      <div className="flex flex-wrap space-x-2 mb-4 sm:mb-0">
        {DeviceTypes.map((type) => (
          <motion.button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedType === type
                ? "bg-red-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={selectedType === type}
          >
            {type}
          </motion.button>
        ))}
      </div>
      {/* Строка поиска */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
          aria-label="Поиск продуктов"
        />
      </div>
    </div>
  </div>
);

// Компонент карточки продукта
interface ProductCardProps {
  product: Product;
  onDownloadClick: (links: { link: string; label: string }[]) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onDownloadClick,
}) => {
  const {
    title,
    mostPopular,
    description,
    features,
    downloadLinks,
    docs,
    docsLinks,
  } = product;
  const displayedFeatures =
    features.length > 4 ? [...features.slice(0, 3), "и т.д."] : features;

  return (
    <motion.div
      className="relative rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Бейдж "Топ продаж" */}
      {mostPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Топ продаж
        </div>
      )}

      {/* Заголовок */}
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2 line-clamp-1">
        {title}
      </h3>

      {/* Описание */}
      <p className="text-gray-700 dark:text-gray-300 flex-grow line-clamp-3 mb-4">
        {description}
      </p>

      {/* Кнопки действий */}
      <div className="flex space-x-2 mb-4">
        <motion.button
          onClick={() => onDownloadClick(downloadLinks)}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Скачать ${title}`}
        >
          Скачать
        </motion.button>
        {docs && docsLinks.length > 0 && (
          <motion.button
            onClick={() => onDownloadClick(docsLinks)}
            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Инструкция для ${title}`}
          >
            Инструкция
          </motion.button>
        )}
      </div>

      {/* Список комплектующих */}
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          В комплекте:
        </h4>
        <ul className="space-y-1 max-h-24 overflow-y-auto">
          {displayedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span className="ml-2 text-gray-700 dark:text-gray-400 line-clamp-2">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Компонент пагинации
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Определение диапазона отображаемых страниц
  const pageNumbers = useMemo(() => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }
    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }
    return range;
  }, [currentPage, totalPages]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex justify-center items-center space-x-2">
      {/* Кнопка "Предыдущая" */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
        } transition-colors duration-300`}
        aria-label="Предыдущая страница"
      >
        Предыдущая
      </button>
      {/* Номера страниц */}
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 py-1 text-sm text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={number}
            onClick={() => onPageChange(number as number)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === number
                ? "bg-red-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            } transition-colors duration-300`}
            aria-label={`Страница ${number}`}
          >
            {number}
          </button>
        )
      )}
      {/* Кнопка "Следующая" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
        } transition-colors duration-300`}
        aria-label="Следующая страница"
      >
        Следующая
      </button>
    </div>
  );
};

// Компонент модального окна для скачивания
interface DownloadModalProps {
  links: { link: string; label: string }[];
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  links,
  onClose,
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
          aria-label="Закрыть модальное окно"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {/* Заголовок модального окна */}
        <h3 className="text-lg font-semibold text-black dark:text-white text-center mb-4">
          Выберите ссылку для скачивания
        </h3>
        {/* Ссылки для скачивания */}
        <div className="flex flex-col space-y-3">
          {links.map(({ link, label }) => (
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
  </AnimatePresence>
);

// Основной компонент страницы
export default function Soft() {
  // Состояния
  const [selectedType, setSelectedType] = useState<ProductType>("Все");
  const [modalLinks, setModalLinks] = useState<
    { link: string; label: string }[] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  // Обработчик клика по кнопке скачивания
  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener noreferrer");
    } else {
      setModalLinks(links);
    }
  };

  // Закрыть модальное окно
  const closeModal = () => setModalLinks(null);

  // Фильтрация продуктов по типу и поисковому запросу
  const filteredProducts = useMemo(() => {
    return products.filter(
      ({ type, title }) =>
        (selectedType === "Все" || type === selectedType) &&
        title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedType, searchQuery]);

  // Пагинация
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIdx, startIdx + productsPerPage);
  }, [currentPage, filteredProducts]);

  // Обработчик смены страницы
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Сброс текущей страницы при изменении фильтров или поискового запроса
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedType, searchQuery]);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Навигационная панель */}
      <NavBar />

      {/* Заголовок */}
      <HeaderSection />

      {/* Фильтры и поиск */}
      <Filters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Сетка карточек продуктов */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              onDownloadClick={handleDownloadClick}
            />
          ))
        ) : (
          <motion.p
            className="col-span-full text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Продукты не найдены.
          </motion.p>
        )}
      </motion.div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Модальное окно для скачивания */}
      {modalLinks && (
        <DownloadModal links={modalLinks} onClose={closeModal} />
      )}
    </div>
  );
}
