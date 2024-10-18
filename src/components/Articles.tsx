import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const categories = [
  { name: "Все", value: "Все" },
  { name: "Установка ПО", value: "Установка ПО" },
  { name: "Оборудование", value: "Оборудование" },
  { name: "Советы", value: "Советы" },
  { name: "Общее", value: "Общее" },
  { name: "Ошибки", value: "Ошибки" },
];

const blogPosts = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt: "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов.",
    link: "/articles/errors/archive",
    category: "Ошибки",
    keywords: ["ошибки архива", "проблемы с архивом", "ошибка открытия архива", "архив"],
  },
  {
    title: "Инструкция по установке Autocom 2021",
    image: "/images/blog/post1.jpg",
    excerpt: "Полноценная, подробная инструкция по установке программного обеспечения.",
    link: "/articles/software/autocom2021",
    category: "Установка ПО",
    keywords: ["установка ПО", "Autocom 2021", "инструкция"],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const postsPerPage = 8;

  const filteredPosts = useMemo(() => {
    const filteredByCategory = selectedCategory === "Все" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);
    return filteredByCategory.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, filteredPosts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-6" id="blog">
      {/* Заголовок */}
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Статьи 💻
        </motion.h2>
        <motion.p
          className="pt-6 text-lg max-w-2xl text-center m-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          В этом разделе вы можете найти статьи и решения по программному обеспечению.
        </motion.p>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex flex-col items-center pt-4">
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs"
          layout
        >
          <div className="flex items-center justify-between">
            <motion.button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-between w-full"
              onClick={() => {
                setIsMobileMenuOpen((prev) => !prev);
                if (isSearchOpen) setIsSearchOpen(false);
              }}
              aria-expanded={isMobileMenuOpen}
              aria-label="Выберите категорию"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{selectedCategory}</span>
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-5 h-5" />
              </motion.div>
            </motion.button>
            <motion.button
              className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow"
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              aria-label="Поиск"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dropdown */}
          <motion.ul
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden text-center m-0 p-0 list-none"
            initial={false}
            animate={
              isMobileMenuOpen
                ? { opacity: 1, height: "auto", marginTop: "1rem" }
                : { opacity: 0, height: 0, marginTop: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            {categories.map((category, index) => (
              <li
                key={category.value}
                className={`text-black dark:text-white px-4 py-2 leading-tight hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${
                  index === categories.length - 1 ? "rounded-b-lg" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setIsMobileMenuOpen(false);
                }}
              >
                {category.name}
              </li>
            ))}
          </motion.ul>

          {/* Search Bar */}
          <motion.div
            className="overflow-hidden w-full"
            initial={false}
            animate={
              isSearchOpen
                ? { opacity: 1, height: "auto", marginTop: "1rem" }
                : { opacity: 0, height: 0, marginTop: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Поиск..."
              id="mobile-search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border-none focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Filters and Search */}
      <div className="hidden lg:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-max mx-auto flex flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow space-x-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category.value
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Поиск..."
              id="desktop-search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Карточки статей */}
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
        {paginatedPosts.map(({ title, image, excerpt, link }) => (
          <motion.div
            key={title}
            className="relative rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-300 dark:border-gray-700"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Изображение */}
            <Link href={link}>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            </Link>

            {/* Заголовок */}
            <h3 className="text-xl font-extrabold text-black dark:text-white mb-2 line-clamp-3">{title}</h3>
            {/* Описание */}
            <p className="text-gray-700 dark:text-gray-300 flex-grow line-clamp-5 mb-4">{excerpt}</p>
            {/* Кнопка */}
            <Link href={link}>
              <motion.button
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Читать далее
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(number)}
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
            onClick={() => handlePageChange(currentPage + 1)}
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
    </div>
  );
}
