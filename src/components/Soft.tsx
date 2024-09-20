import Link from "next/link";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleDownloadClick = (links: { link: string; label: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].link, "_blank", "noopener noreferrer");
    } else {
      setModalLinks(links);
    }
  };

  const closeModal = () => setModalLinks(null);

  // Фильтрация продуктов по типу и поисковому запросу
  const filteredProducts = products.filter(
    ({ type, title }) =>
      type === selectedType &&
      title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-black" id="soft">
      {/* Заголовок */}
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

      {/* Фильтры и строка поиска */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
          {/* Панель фильтров */}
          <div className="flex space-x-2 mb-4 sm:mb-0">
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
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
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
            />
          </div>
        </div>
      </div>

      {/* Карточки продуктов */}
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
        {filteredProducts.map(({ title, mostPopular, description, features, downloadLinks, docs, docsLinks }) => {
          const displayedFeatures = features.length > 4 ? [...features.slice(0, 3), "и т.д."] : features;

          return (
            <motion.div
              key={title}
              className={`relative rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-300 dark:border-gray-700`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Топ продаж */}
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

              {/* Кнопки */}
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

              {/* В комплекте */}
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
        })}
      </motion.div>

      {/* Модальное окно для ссылок на скачивание */}
      <AnimatePresence>
        {modalLinks && (
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
              {/* Закрыть */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              {/* Заголовок */}
              <h3 className="text-lg font-semibold text-black dark:text-white text-center mb-4">
                Выберите ссылку для скачивания
              </h3>
              {/* Ссылки */}
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
        )}
      </AnimatePresence>
    </div>
  );
}
