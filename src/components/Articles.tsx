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
    excerpt: "Полноценная, подробная инструкция по усатнвоке программного обеспечения.",
    link: "/articles/software/autocom2021",
    category: "Установка ПО",
    keywords: ["ошибки архива", "проблемы с архивом", "ошибка открытия архива", "архив"],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const postsPerPage = 8;

  const filteredPosts = useMemo(() => {
    const filteredByCategory =
      selectedCategory === "Все"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);
    return filteredByCategory.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [selectedCategory, searchTerm]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, filteredPosts]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 💻</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете найти статьи и решения по программному обеспечению.
        </p>
      </div>

      <div className="max-w-max mx-auto px-6 mt-6 sm:mt-8">
        <div className="relative text-base font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 sm:mt-0 flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-auto flex-grow gap-1">
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
                  className="text-lg font-semibold mb-2 line-clamp-2 h-12 flex items-center justify-center"
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 h-auto min-h-[4.5rem] max-h-[4.5rem] flex items-center"
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
    </div>
  );
}
