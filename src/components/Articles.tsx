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
    title: "Установка программы на Windows",
    image: "/images/blog/post.jpg",
    excerpt: "Руководство по установке программы на Windows для начинающих.",
    link: "/blog/post1",
    category: "Установка ПО",
    keywords: ["установка", "Windows", "ПО"],
  },
  {
    title: "Советы по безопасности онлайн",
    image: "/images/blog/post.jpg",
    excerpt: "Основные правила безопасности в интернете.",
    link: "/blog/post2",
    category: "Безопасность",
    keywords: ["безопасность", "интернет"],
  },
  {
    title: "Ошибки при запуске программ",
    image: "/images/blog/post.jpg",
    excerpt: "Как исправить распространенные ошибки при запуске программ.",
    link: "/blog/post3",
    category: "Ошибки",
    keywords: ["ошибки", "программы", "запуск"],
  },
  {
    title: "Рекомендации по настройке компьютера",
    image: "/images/blog/post.jpg",
    excerpt: "Лучшие советы по настройке компьютера для максимальной производительности.",
    link: "/blog/post4",
    category: "Рекомендации",
    keywords: ["настройка", "компьютер", "рекомендации"],
  },
  {
    title: "Как защитить свой аккаунт",
    image: "/images/blog/post.jpg",
    excerpt: "Узнайте, как правильно защитить свой аккаунт в социальных сетях.",
    link: "/blog/post5",
    category: "Безопасность",
    keywords: ["аккаунт", "безопасность", "социальные сети"],
  },
  {
    title: "Решение проблемы с установкой драйверов",
    image: "/images/blog/post.jpg",
    excerpt: "Инструкции по решению проблем с установкой драйверов на компьютер.",
    link: "/blog/post6",
    category: "Установка ПО",
    keywords: ["драйверы", "установка", "проблемы"],
  },
  {
    title: "Как исправить ошибки операционной системы",
    image: "/images/blog/post.jpg",
    excerpt: "Пошаговое руководство по исправлению системных ошибок.",
    link: "/blog/post7",
    category: "Ошибки",
    keywords: ["ошибки", "операционная система", "исправление"],
  },
  {
    title: "Обзор лучших антивирусных программ",
    image: "/images/blog/post.jpg",
    excerpt: "Как выбрать лучший антивирус для защиты вашего устройства.",
    link: "/blog/post8",
    category: "Безопасность",
    keywords: ["антивирус", "безопасность", "обзор"],
  },
  {
    title: "Рекомендации по выбору ноутбука",
    image: "/images/blog/post.jpg",
    excerpt: "Какие параметры учитывать при выборе ноутбука?",
    link: "/blog/post9",
    category: "Рекомендации",
    keywords: ["ноутбук", "выбор", "рекомендации"],
  },
  {
    title: "Установка операционной системы Linux",
    image: "/images/blog/post.jpg",
    excerpt: "Пошаговое руководство по установке Linux на ваш компьютер.",
    link: "/blog/post10",
    category: "Установка ПО",
    keywords: ["Linux", "установка", "операционная система"],
  },
  {
    title: "Как защитить данные на смартфоне",
    image: "/images/blog/post.jpg",
    excerpt: "Лучшие советы по защите данных на мобильных устройствах.",
    link: "/blog/post11",
    category: "Безопасность",
    keywords: ["смартфон", "данные", "защита"],
  },
  {
    title: "Решение проблем с подключением к интернету",
    image: "/images/blog/post.jpg",
    excerpt: "Что делать, если интернет не работает?",
    link: "/blog/post12",
    category: "Ошибки",
    keywords: ["интернет", "ошибки", "подключение"],
  },
  {
    title: "Рекомендации по защите дома от взлома",
    image: "/images/blog/post.jpg",
    excerpt: "Основные советы по защите вашего дома от злоумышленников.",
    link: "/blog/post13",
    category: "Рекомендации",
    keywords: ["дом", "защита", "взлом"],
  },
  {
    title: "Установка программного обеспечения для графики",
    image: "/images/blog/post.jpg",
    excerpt: "Как установить лучшие программы для работы с графикой.",
    link: "/blog/post14",
    category: "Установка ПО",
    keywords: ["графика", "ПО", "установка"],
  },
  {
    title: "Ошибки при установке обновлений Windows",
    image: "/images/blog/post.jpg",
    excerpt: "Как решить проблемы с установкой обновлений в Windows.",
    link: "/blog/post15",
    category: "Ошибки",
    keywords: ["ошибки", "обновления", "Windows"],
  },
  {
    title: "Рекомендации по настройке сети Wi-Fi",
    image: "/images/blog/post.jpg",
    excerpt: "Как настроить вашу домашнюю сеть Wi-Fi для максимальной производительности.",
    link: "/blog/post16",
    category: "Рекомендации",
    keywords: ["Wi-Fi", "сеть", "настройка"],
  },
  {
    title: "Лучшие советы по безопасности для детей",
    image: "/images/blog/post.jpg",
    excerpt: "Как обезопасить детей в интернете и за его пределами.",
    link: "/blog/post17",
    category: "Безопасность",
    keywords: ["дети", "безопасность", "интернет"],
  },
  {
    title: "Установка программ для редактирования видео",
    image: "/images/blog/post.jpg",
    excerpt: "Как выбрать и установить лучшие программы для редактирования видео.",
    link: "/blog/post18",
    category: "Установка ПО",
    keywords: ["видео", "редактирование", "установка"],
  },
  {
    title: "Ошибки сети и как их исправить",
    image: "/images/blog/post.jpg",
    excerpt: "Инструкции по решению проблем с сетью.",
    link: "/blog/post19",
    category: "Ошибки",
    keywords: ["ошибки", "сеть", "интернет"],
  },
  {
    title: "Рекомендации по выбору клавиатуры и мыши",
    image: "/images/blog/post.jpg",
    excerpt: "Как выбрать клавиатуру и мышь для вашего компьютера?",
    link: "/blog/post20",
    category: "Рекомендации",
    keywords: ["клавиатура", "мышь", "выбор"],
  }
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
  const maxVisiblePages = 5; // Максимальное количество видимых страниц в пагинации

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

    if (totalPages <= maxVisiblePages) {
      // Если страниц меньше или равно максимальному числу отображаемых страниц
      for (let i = 2; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    } else {
      // Если страниц больше, показываем сокращенную версию с троеточиями
      if (currentPage > 3) {
        pagesToShow.push("...");
      }

      // Показать 2 страницы до и после текущей, если они существуют
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pagesToShow.push(i);
      }

      if (currentPage < totalPages - 2) {
        pagesToShow.push("...");
      }

      pagesToShow.push(totalPages); // Всегда показываем последнюю страницу
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
