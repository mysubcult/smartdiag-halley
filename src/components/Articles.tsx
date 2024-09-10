import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Все", value: "Все" },
  { name: "Ошибки", value: "Ошибки" },
  { name: "Установка ПО", value: "Установка ПО" },
  { name: "Безопасность", value: "Безопасность" },
  { name: "Рекомендации", value: "Рекомендации" },
];

const blogPosts = [
  {
    "title": "Как справиться с ошибкой при открытии архива",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов.",
    "link": "/blog/post1",
    "category": "Ошибки",
    "keywords": ["ошибки архива", "проблемы с архивом", "ошибка открытия архива", "архив"]
  },
  {
    "title": "Проблемы с запуском программы",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Что делать, если программа не запускается или исчезают ярлыки?",
    "link": "/blog/post2",
    "category": "Ошибки",
    "keywords": ["программа не запускается", "исчезают ярлыки", "причины ошибок запуска"]
  },
  {
    "title": "Как справиться с зависанием программы во время установки",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Пошаговое руководство для устранения проблем, связанных с зависанием программ.",
    "link": "/blog/post8",
    "category": "Ошибки",
    "keywords": ["зависание программы", "ошибка установки", "проблемы с установкой"]
  },
  {
    "title": "Ошибки в программном обеспечении",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Типичные ошибки при работе с программным обеспечением и способы их устранения.",
    "link": "/blog/post11",
    "category": "Ошибки",
    "keywords": ["ошибки в ПО", "проблемы с ПО"]
  },
  {
    "title": "Непредвиденные сбои программ при работе",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Решения для устранения непредвиденных сбоев программного обеспечения.",
    "link": "/blog/post12",
    "category": "Ошибки",
    "keywords": ["сбои программ", "непредвиденные ошибки", "сбой ПО"]
  },
  {
    "title": "Нестабильная работа приложений",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Как исправить нестабильную работу программных приложений?",
    "link": "/blog/post13",
    "category": "Ошибки",
    "keywords": ["нестабильная работа приложений", "ошибки приложений"]
  },
  {
    "title": "Как устранить ошибку установки драйверов",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Узнайте, как справиться с ошибками при установке драйверов.",
    "link": "/blog/post15",
    "category": "Ошибки",
    "keywords": ["ошибки драйверов", "установка драйверов"]
  },
  {
    "title": "Ошибки совместимости программного обеспечения",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Решения для устранения проблем совместимости программ.",
    "link": "/blog/post16",
    "category": "Ошибки",
    "keywords": ["совместимость программ", "ошибки совместимости"]
  },
  {
    "title": "Обновление ПО вызывает сбои",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Как справиться с проблемами после обновления программного обеспечения?",
    "link": "/blog/post17",
    "category": "Ошибки",
    "keywords": ["сбои обновлений", "ошибки после обновления"]
  },
  {
    "title": "Ошибка при подключении к серверу",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Что делать, если программа не может подключиться к серверу?",
    "link": "/blog/post18",
    "category": "Ошибки",
    "keywords": ["подключение к серверу", "ошибка сервера"]
  },
  {
    "title": "Зависание программ в процессе работы",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Руководство по решению проблем зависания программ.",
    "link": "/blog/post19",
    "category": "Ошибки",
    "keywords": ["зависание программ", "проблемы с программами"]
  },
  {
    "title": "Сбой при сохранении файлов",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Что делать, если программа не может сохранить файлы?",
    "link": "/blog/post20",
    "category": "Ошибки",
    "keywords": ["сохранение файлов", "ошибки сохранения"]
  },
  {
    "title": "Ошибки в интерфейсе программ",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Как справиться с проблемами интерфейса программ?",
    "link": "/blog/post21",
    "category": "Ошибки",
    "keywords": ["интерфейс программ", "ошибки интерфейса"]
  },
  {
    "title": "Ошибка при установке обновлений",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Как исправить ошибки при установке обновлений программ?",
    "link": "/blog/post23",
    "category": "Ошибки",
    "keywords": ["ошибки обновлений", "установка обновлений"]
  },
  {
    "title": "Частые проблемы с установкой",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Советы по устранению проблем с установкой программ.",
    "link": "/blog/post12",
    "category": "Установка ПО",
    "keywords": ["проблемы с установкой", "установка ПО"]
  },
  {
    "title": "Как выбрать правильный установочный файл",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Советы по выбору правильных установочных файлов для вашего устройства.",
    "link": "/blog/post24",
    "category": "Установка ПО",
    "keywords": ["установочный файл", "выбор установочного файла"]
  },
  {
    "title": "Как исправить ошибку установки",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Решение распространенных проблем с установкой программ.",
    "link": "/blog/post25",
    "category": "Установка ПО",
    "keywords": ["ошибка установки", "проблемы с установкой программ"]
  },
  {
    "title": "Установка программ на внешние носители",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Руководство по установке программ на внешние носители.",
    "link": "/blog/post26",
    "category": "Установка ПО",
    "keywords": ["установка на внешний носитель", "программы на внешнем носителе"]
  },
  {
    "title": "Обновление установленных программ",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Как обновить установленные программы до последней версии.",
    "link": "/blog/post27",
    "category": "Установка ПО",
    "keywords": ["обновление программ", "установленные программы"]
  },
  {
    "title": "Как установить антивирус",
    "image": "/images/blog/post1.jpg",
    "excerpt": "Шаги по установке антивирусных программ для вашего устройства.",
    "link": "/blog/post28",
    "category": "Установка ПО",
    "keywords": ["установка антивируса", "антивирусное ПО"],
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle click outside for both dropdown and search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const longestCategory = categories.reduce(
    (max, category) => (category.name.length > max.length ? category.name : max),
    categories[0].name
  );

  const postsPerPage = 8;

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
  }, [totalPages]);

  const renderPagination = () => {
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
        onClick={() => typeof page === "number" ? handlePageChange(page) : null}
        className={`${
          page === currentPage
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
        } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${typeof page !== "number" ? "cursor-pointer" : ""}`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Программы для оборудования 💻</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе вы можете найти статьи и решения по программному обеспечению.
        </p>
      </div>

      {/* Categories and search */}
      <div className="max-w-max mx-auto px-6 mt-6 sm:mt-8">
        <div className="relative text-base font-semibold bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 flex justify-between items-center">
          <div ref={categoryRef} className="relative">
            <button
              className="bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md flex items-center justify-between w-full"
              onClick={() => setShowCategories(!showCategories)}
              style={{ minWidth: `${longestCategory.length + 4}ch` }}
            >
              <span>{selectedCategory}</span>
              <div className="ml-auto">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showCategories ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {showCategories && (
              <div className="absolute z-50 w-full bg-white dark:bg-neutral-700 shadow-md rounded-md mt-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      handleCategoryClick(category.value);
                      setShowCategories(false);
                    }}
                    className="block text-left w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-neutral-600"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div ref={searchRef} className="relative flex-1">
            <button
              className="bg-transparent text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-md flex items-center justify-end w-full"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z" />
              </svg>
            </button>
            {showSearch && (
              <div className="absolute w-full top-full left-0 mt-1">
                <input
                  type="text"
                  placeholder="Поиск..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-700"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedPosts.map(({ title, image, excerpt, link }) => (
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
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-max mx-auto px-6 pb-4">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
}
