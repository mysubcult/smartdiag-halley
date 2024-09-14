import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Определение типов для категорий и блог-постов
interface Category {
  name: string;
  value: string;
}

interface BlogPost {
  title: string;
  image: string;
  excerpt: string;
  link: string;
  category: string;
  keywords: string[];
}

// Список категорий
const categories: Category[] = [
  { name: "Все", value: "Все" },
  { name: "Установка ПО", value: "Установка ПО" },
  { name: "Оборудование", value: "Оборудование" },
  { name: "Советы", value: "Советы" },
  { name: "Общее", value: "Общее" },
  { name: "Ошибки", value: "Ошибки" },
];

// Список блог-постов
const blogPosts: BlogPost[] = [
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
  {
    title: "Тестовый пост",
    image: "/images/blog/post1.jpg",
    excerpt: "Это тестовый пост для демонстрации функционала.",
    link: "/articles/software/autocom2021",
    category: "Установка ПО",
    keywords: ["тест", "демонстрация", "функционал"],
  },
  {
    title: "Инструкция по установке Autocom 2021 (расширенная версия)",
    image: "/images/blog/post1.jpg",
    excerpt: "Подробная инструкция по установке Autocom 2021 с дополнительными шагами.",
    link: "/articles/software/autocom2021",
    category: "Установка ПО",
    keywords: ["установка ПО", "Autocom 2021", "инструкция", "расширенная"],
  },
];

const POSTS_PER_PAGE = 8;

const Blog: React.FC = () => {
  // Состояния компонента
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(null);

  const popoverRef = useRef<HTMLDivElement>(null);

  // Вычисляем самую длинную категорию для установки минимальной ширины выпадающего списка
  const longestCategory = useMemo(() => {
    return categories.reduce(
      (max, category) => (category.name.length > max.length ? category.name : max),
      categories[0].name
    );
  }, []);

  // Фильтрация постов по категории и поисковому запросу
  const filteredPosts = useMemo(() => {
    const filteredByCategory =
      selectedCategory === "Все"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);
    if (!searchTerm.trim()) return filteredByCategory;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return filteredByCategory.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerSearchTerm) ||
        post.excerpt.toLowerCase().includes(lowerSearchTerm) ||
        post.keywords.some((keyword) => keyword.toLowerCase().includes(lowerSearchTerm))
    );
  }, [selectedCategory, searchTerm]);

  // Общее количество страниц для пагинации
  const totalPages = useMemo(() => Math.ceil(filteredPosts.length / POSTS_PER_PAGE), [filteredPosts.length]);

  // Пагинированные посты для текущей страницы
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);

  // Обработчик клика по категории
  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  // Обработчик смены страницы
  const handlePageChange = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
      setShowPopover(false);
    },
    [totalPages]
  );

  // Обработчик клика по многоточию для открытия поповера
  const handleEllipsisClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopoverPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowPopover(true);
  };

  // Обработка клика вне поповера для его закрытия
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

  // Генерация элементов пагинации
  const renderPagination = useMemo(() => {
    const pagesToShow: (string | number)[] = [1];

    if (totalPages > 5) {
      if (currentPage <= 2) {
        pagesToShow.push(2, 3, "...");
      } else if (currentPage >= totalPages - 1) {
        pagesToShow.push("...", totalPages - 2, totalPages - 1);
      } else {
        if (currentPage > 3) pagesToShow.push("...");
        pagesToShow.push(currentPage - 1, currentPage, currentPage + 1);
        if (currentPage < totalPages - 2) pagesToShow.push("...");
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
        onClick={(event) =>
          typeof page === "number" ? handlePageChange(page) : handleEllipsisClick(event)
        }
        className={`${
          page === currentPage
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
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
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      {/* Заголовок секции */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 💻 (в разработке)</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете найти статьи и решения по программному обеспечению.
        </p>
      </div>

      {/* Панель навигации по категориям и поиску */}
      <div className="max-w-max mx-auto px-6 mt-6 sm:mt-8">
        <div className="relative text-base font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 sm:mt-0 flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-auto flex-grow gap-1">
            {/* Выбор категории для мобильных устройств */}
            <div className="relative" style={{ minWidth: `${longestCategory.length + 4}ch` }}>
              <button
                className="sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md flex items-center justify-between w-full relative"
                onClick={() => setShowCategories((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={showCategories}
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-4 h-4 absolute right-2 transform transition-transform duration-300 ${
                    showCategories ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCategories && (
                <div
                  className="absolute z-50 w-full bg-white dark:bg-neutral-700 shadow-md rounded-md mt-2 transition-all ease-in-out duration-300"
                  role="listbox"
                >
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => {
                        handleCategoryClick(category.value);
                        setShowCategories(false);
                      }}
                      className="block text-left w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-neutral-600"
                      role="option"
                      aria-selected={category.value === selectedCategory}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
              {/* Выбор категории для десктопных устройств */}
              <div className="hidden sm:flex flex-wrap gap-1">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => handleCategoryClick(category.value)}
                    className={`${
                      category.value === selectedCategory
                        ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
                    } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
                    aria-label={`Выбрать категорию ${category.name}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            {/* Поле поиска для десктопных устройств */}
            <div className="hidden sm:flex">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input w-25 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700"
                aria-label="Поиск статей"
              />
            </div>
          </div>
          {/* Кнопка поиска для мобильных устройств */}
          <button
            className="ml-auto sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-label="Показать поиск"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z"
              />
            </svg>
          </button>
        </div>

        {/* Поле поиска для мобильных устройств */}
        <div
          className={`relative w-full sm:hidden transition-all duration-300 ${
            showSearch ? "max-h-40" : "max-h-0"
          } overflow-hidden`}
        >
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input w-full p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700 mt-2"
            aria-label="Поиск статей"
          />
        </div>
      </div>

      {/* Секция с карточками статей */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map(({ title, image, excerpt, link }) => (
            <div
              key={title}
              className="rounded-lg overflow-hidden flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 h-full"
            >
              <Link href={link} passHref>
                <a className="relative h-[200px]">
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className="object-cover"
                    priority={title === paginatedPosts[0].title}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    loading="lazy"
                  />
                </a>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                {/* Заголовок поста */}
                <div className="h-12 grid items-center justify-items-start">
                  <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
                </div>

                {/* Описание поста */}
                <div className="h-20 grid items-center justify-items-start">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">{excerpt}</p>
                </div>

                {/* Кнопка "Читать далее" */}
                <div className="mt-auto text-right">
                  <Link href={link} passHref>
                    <a>
                      <button className="bg-red-600 text-white text-sm rounded-md px-4 py-2 transition-colors duration-300 hover:bg-red-500">
                        Читать далее
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-neutral-900 dark:text-neutral-400 col-span-full">
            <h3 className="text-xl font-semibold mb-4">Ничего не найдено</h3>
            <p>К сожалению, по вашему запросу не удалось найти статьи. Попробуйте изменить категорию или поисковый запрос.</p>
          </div>
        )}
      </div>

      {/* Секция пагинации */}
      <div className="max-w-max mx-auto px-6 pb-4">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
          {renderPagination}
        </div>
      </div>

      {/* Поповер для пагинации */}
      {showPopover && popoverPosition && (
        <div
          ref={popoverRef}
          className="absolute z-50 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-lg p-4"
          style={{ top: popoverPosition.top, left: popoverPosition.left }}
          role="dialog"
          aria-modal="true"
        >
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${
                  page === currentPage
                    ? "bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-900 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                } rounded-md py-2 px-3 transition-colors duration-300 ease-in-out`}
                aria-label={`Перейти на страницу ${page}`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
