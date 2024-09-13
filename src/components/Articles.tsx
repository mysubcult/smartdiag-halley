import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    "title": "Как справиться с ошибкой при открытии архива",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов.",
    "link": "/articles/errors/archive",
    "category": "Ошибки",
    "keywords": ["ошибки архива", "проблемы с архивом", "ошибка открытия архива", "архив"]
  },
  {
    "title": "Инструкция по установке Autocom 2021",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Полноценная, подробная инструкция по усатнвоке программного обеспечения.",
    "link": "/articles/software/autocom2021",
    "category": "Установка ПО",
    "keywords": ["ошибки архива", "проблемы с архивом", "ошибка открытия архива", "архив"]
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const postsPerPage = 8;

  const longestCategory = useMemo(() => {
    return categories.reduce(
      (max, category) => (category.name.length > max.length ? category.name : max),
      categories[0].name
    );
  }, []);

  const filteredPosts = useMemo(() => {
    const filteredByCategory = selectedCategory === "Все" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);
    return filteredByCategory.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, filteredPosts]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
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
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
        } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${typeof page !== "number" ? "cursor-pointer" : ""}`}
        aria-label={typeof page === "number" ? `Перейти на страницу ${page}` : "Показать другие страницы"}
      >
        {typeof page === "number" ? page : "..."}
      </button>
    ));
  }, [currentPage, totalPages]);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 💻 (в разработке)</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете найти статьи и решения по программному обеспечению.
        </p>
      </div>

      {/* Category and search implementation */}
      <div className="max-w-max mx-auto px-6 mt-6 sm:mt-8">
        <div className="relative text-base font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 sm:mt-0 flex items-center justify-between w-full sm:w-auto">
          {/* Categories */}
          <div className="flex items-center w-full sm:w-auto flex-grow gap-1">
            <div className="relative" style={{ minWidth: `${longestCategory.length + 4}ch` }}>
              <button
                className="sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md flex items-center justify-between w-full relative"
                onClick={() => setShowCategories(!showCategories)}
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-4 h-4 absolute right-2 transform transition-transform duration-300 ${
                    showCategories ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCategories && (
                <div className="absolute z-50 w-full bg-white dark:bg-neutral-700 shadow-md rounded-md mt-2 transition-all ease-in-out duration-300">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => {
                        handleCategoryClick(category.value);
                        setShowCategories(false);
                      }}
                      className="block text-left w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-neutral-600"
                      aria-label={`Выбрать категорию ${category.name}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Static desktop version */}
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

            {/* Search bar for desktop */}
            <div className="hidden sm:flex">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-30 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700"
              />
            </div>
          </div>

          {/* Mobile search icon */}
          <button
            className="ml-auto sm:hidden bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile search bar */}
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
            className="w-full p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700 mt-2"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map(({ title, image, excerpt, link }) => (
            <div
              key={title}
              className="rounded-lg overflow-hidden flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 h-full"
            >
              <Link href={link}>
                <div className="relative h-[200px]">
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className="w-full object-cover"
                    priority={title === paginatedPosts[0].title}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h3
                  style={{
                    minHeight: "3em",
                    lineHeight: "1.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  className="text-lg font-semibold mb-2"
                >
                  {title}
                </h3>
                <p
                  style={{
                    minHeight: "4.5em",
                    lineHeight: "1.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    flexGrow: 1,
                  }}
                  className="text-sm text-neutral-600 dark:text-neutral-400 mb-4"
                >
                  {excerpt}
                </p>
                <div className="mt-auto text-right">
                  <Link href={link}>
                    <button className="bg-red-600 text-white text-sm rounded-md px-4 py-2 transition-colors duration-300 hover:bg-red-500">
                      Читать далее
                    </button>
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

      <div className="max-w-max mx-auto px-6 pb-4">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
          {renderPagination}
        </div>
      </div>

      {showPopover && popoverPosition && (
        <div
          ref={popoverRef}
          className="absolute z-50 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-lg p-4"
          style={{ top: popoverPosition.top, left: popoverPosition.left }}
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
}
