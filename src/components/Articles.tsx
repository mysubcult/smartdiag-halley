import React, { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  title: string;
  image: string;
  excerpt: string;
  link: string;
  category: string;
  keywords: string[];
};

const blogPosts: BlogPost[] = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt: "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов.",
    link: "/blog/post1",
    category: "Ошибки",
    keywords: ["ошибки архива", "проблемы с архивом", "ошибка открытия архива"],
  },
  {
    title: "Проблемы с запуском программы",
    image: "/images/blog/post1.jpg",
    excerpt: "Что делать, если программа не запускается или исчезают ярлыки?",
    link: "/blog/post2",
    category: "Ошибки",
    keywords: ["программа не запускается", "ошибки запуска", "исчезают ярлыки"],
  },
  {
    title: "Установка ПО",
    image: "/images/blog/post1.jpg",
    excerpt: "Руководство по установке ПО.",
    link: "/blog/post3",
    category: "Установка ПО",
    keywords: ["установка", "ПО", "установка программы"],
  },
  {
    title: "Советы по безопасности",
    image: "/images/blog/post4.jpg",
    excerpt: "Основные советы по обеспечению безопасности.",
    link: "/blog/post4",
    category: "Безопасность",
    keywords: ["безопасность", "советы"],
  },
  // Add more blog posts here...
];

const categories = [
  { name: "Все", value: "Все" },
  { name: "Ошибки", value: "Ошибки" },
  { name: "Установка ПО", value: "Установка ПО" },
  { name: "Безопасность", value: "Безопасность" },
  { name: "Рекомендации", value: "Рекомендации" },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const postsPerPage = 8; // Количество постов на страницу

  // 1. Фильтрация постов на основе выбранной категории и поискового запроса
  useEffect(() => {
    const filterPosts = () => {
      const filteredByCategory =
        selectedCategory === "Все"
          ? blogPosts
          : blogPosts.filter((post) => post.category === selectedCategory);

      const filteredBySearchTerm = filteredByCategory.filter((post) =>
        [post.title, post.excerpt, ...post.keywords]
          .map((field) => field.toLowerCase())
          .some((field) => field.includes(searchTerm.toLowerCase()))
      );

      setFilteredPosts(filteredBySearchTerm); // Сохраняем отфильтрованные посты
      setCurrentPage(1); // Сбрасываем страницу на первую после фильтрации
    };

    filterPosts();
  }, [selectedCategory, searchTerm]);

  // 2. Рассчитываем количество страниц на основе отфильтрованных постов
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // 3. Получение постов для текущей страницы
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [currentPage, filteredPosts]);

  // 4. Обработчик изменения категории
  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // 5. Обработчик изменения страницы
  const handlePageChange = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  // 6. Логика для рендеринга сокращенной пагинации
  const renderPagination = () => {
    const pagesToShow: (string | number)[] = [];
    const hiddenPagesLeft = currentPage - 1;
    const hiddenPagesRight = totalPages - currentPage;

    pagesToShow.push(1); // Всегда показываем первую страницу

    // Отображаем сокращенную пагинацию с троеточиями
    if (totalPages > 5) {
      if (currentPage === 1) {
        pagesToShow.push(2, 3, "...");
      } else if (currentPage === totalPages) {
        pagesToShow.push("...", totalPages - 2, totalPages - 1);
      } else if (hiddenPagesLeft > hiddenPagesRight) {
        if (currentPage > 3) {
          pagesToShow.push("...");
        }
        pagesToShow.push(currentPage - 1, currentPage);
        if (currentPage + 1 < totalPages) {
          pagesToShow.push(currentPage + 1);
        }
      } else {
        if (currentPage - 1 > 1) {
          pagesToShow.push(currentPage - 1);
        }
        pagesToShow.push(currentPage, currentPage + 1);
        if (currentPage < totalPages - 2) {
          pagesToShow.push("...");
        }
      }
    }

    // Всегда показываем последнюю страницу
    if (totalPages > 1 && !pagesToShow.includes(totalPages)) {
      pagesToShow.push(totalPages);
    }

    return pagesToShow.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        className={`${
          page === currentPage
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
        } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${
          typeof page !== "number" ? "cursor-pointer" : ""
        }`}
      >
        {typeof page === "number" ? page : "..."}
      </button>
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 📰</h2>
      </div>

      <div className="max-w-max mx-auto px-6">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center sm:mt-8 p-1 gap-1">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`${
                category.value === selectedCategory
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
              } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
            >
              {category.name}
            </button>
          ))}

          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-4 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
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
          <div className="text-center text-neutral-600 dark:text-neutral-400">
            Посты не найдены
          </div>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="max-w-max mx-auto px-6 pb-4">
          <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
            {renderPagination()}
          </div>
        </div>
      )}
    </div>
  );
}
