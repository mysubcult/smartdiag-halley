import React, { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Очистка текста от HTML-тегов
const stripHtmlTags = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

type BlogPost = {
  title: string;
  image: string;
  excerpt: string;
  link: string;
  category: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt: "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов.",
    link: "/blog/post1",
    category: "Ошибки",
    slug: "archive",
  },
  {
    title: "Проблемы с запуском программы",
    image: "/images/blog/post1.jpg",
    excerpt: "Что делать, если программа не запускается или исчезают ярлыки?",
    link: "/blog/post2",
    category: "Ошибки",
    slug: "launch-issue",
  },
  {
    title: "Как справиться с зависанием программы во время установки",
    image: "/images/blog/post1.jpg",
    excerpt: "Пошаговое руководство для устранения проблем, связанных с зависанием программ во время установки.",
    link: "/blog/post8",
    category: "Ошибки",
    slug: "installation-freeze",
  },
  {
    title: "Ошибки в программном обеспечении",
    image: "/images/blog/post1.jpg",
    excerpt: "Типичные ошибки при работе с программным обеспечением и способы их устранения.",
    link: "/blog/post11",
    category: "Ошибки",
    slug: "software-errors",
  },
  {
    title: "Непредвиденные сбои программ при работе",
    image: "/images/blog/post1.jpg",
    excerpt: "Решения для устранения непредвиденных сбоев программного обеспечения.",
    link: "/blog/post12",
    category: "Ошибки",
    slug: "unexpected-failures",
  },
  {
    title: "Нестабильная работа приложений",
    image: "/images/blog/post1.jpg",
    excerpt: "Как исправить нестабильную работу программных приложений?",
    link: "/blog/post13",
    category: "Ошибки",
    slug: "unstable-applications",
  },
  {
    title: "Ошибки при запуске программ",
    image: "/images/blog/post1.jpg",
    excerpt: "Советы по устранению ошибок, возникающих при запуске программ.",
    link: "/blog/post14",
    category: "Ошибки",
    slug: "startup-errors",
  },
  {
    title: "Как устранить ошибку установки драйверов",
    image: "/images/blog/post1.jpg",
    excerpt: "Узнайте, как справиться с ошибками при установке драйверов.",
    link: "/blog/post15",
    category: "Ошибки",
    slug: "driver-installation-error",
  },
  {
    title: "Ошибки совместимости программного обеспечения",
    image: "/images/blog/post1.jpg",
    excerpt: "Решения для устранения проблем совместимости программ.",
    link: "/blog/post16",
    category: "Ошибки",
    slug: "compatibility-issues",
  },
  {
    title: "Обновление ПО вызывает сбои",
    image: "/images/blog/post1.jpg",
    excerpt: "Как справиться с проблемами, возникающими после обновления программного обеспечения?",
    link: "/blog/post17",
    category: "Ошибки",
    slug: "update-failures",
  },
  {
    title: "Ошибка при подключении к серверу",
    image: "/images/blog/post1.jpg",
    excerpt: "Что делать, если программа не может подключиться к серверу?",
    link: "/blog/post18",
    category: "Ошибки",
    slug: "server-connection-error",
  },
  {
    title: "Зависание программ в процессе работы",
    image: "/images/blog/post1.jpg",
    excerpt: "Руководство по решению проблем зависания программ.",
    link: "/blog/post19",
    category: "Ошибки",
    slug: "app-freezes",
  },
  {
    title: "Сбой при сохранении файлов",
    image: "/images/blog/post1.jpg",
    excerpt: "Что делать, если программа не может сохранить файлы?",
    link: "/blog/post20",
    category: "Ошибки",
    slug: "file-save-error",
  },
  {
    title: "Ошибки в интерфейсе программ",
    image: "/images/blog/post1.jpg",
    excerpt: "Как справиться с проблемами интерфейса программ?",
    link: "/blog/post21",
    category: "Ошибки",
    slug: "interface-errors",
  },
  {
    title: "Проблемы с лицензированием ПО",
    image: "/images/blog/post1.jpg",
    excerpt: "Решение типичных проблем с лицензированием программ.",
    link: "/blog/post22",
    category: "Ошибки",
    slug: "licensing-issues",
  },
  {
    title: "Ошибка при установке обновлений",
    image: "/images/blog/post1.jpg",
    excerpt: "Как исправить ошибки, возникающие при установке обновлений программ?",
    link: "/blog/post23",
    category: "Ошибки",
    slug: "update-installation-error",
  },
  {
    title: "Помощь в установке программного обеспечения",
    image: "/images/blog/post1.jpg",
    excerpt: "Как получить помощь при установке программного обеспечения.",
    link: "/blog/post4",
    category: "Установка ПО",
    slug: "software-installation-help",
  },
  {
    title: "Частые проблемы с установкой",
    image: "/images/blog/post1.jpg",
    excerpt: "Советы по устранению проблем с установкой программ.",
    link: "/blog/post12",
    category: "Установка ПО",
    slug: "installation-issues",
  },
  {
    title: "Как выбрать правильный установочный файл",
    image: "/images/blog/post1.jpg",
    excerpt: "Советы по выбору правильных установочных файлов для вашего устройства.",
    link: "/blog/post24",
    category: "Установка ПО",
    slug: "select-install-file",
  },
  {
    title: "Как исправить ошибку установки",
    image: "/images/blog/post1.jpg",
    excerpt: "Решение распространенных проблем с установкой программ.",
    link: "/blog/post25",
    category: "Установка ПО",
    slug: "installation-error-fix",
  },
  {
    title: "Установка программ на внешние носители",
    image: "/images/blog/post1.jpg",
    excerpt: "Руководство по установке программ на внешние носители.",
    link: "/blog/post26",
    category: "Установка ПО",
    slug: "external-device-install",
  },
  {
    title: "Обновление установленных программ",
    image: "/images/blog/post1.jpg",
    excerpt: "Как обновить установленные программы до последней версии.",
    link: "/blog/post27",
    category: "Установка ПО",
    slug: "update-installed-programs",
  },
  {
    title: "Как установить антивирус",
    image: "/images/blog/post1.jpg",
    excerpt: "Шаги по установке антивирусных программ для вашего устройства.",
    link: "/blog/post28",
    category: "Установка ПО",
    slug: "antivirus-installation",
  },
  {
    title: "Ошибки при установке ПО на Mac",
    image: "/images/blog/post1.jpg",
    excerpt: "Как справиться с ошибками при установке ПО на устройствах Apple.",
    link: "/blog/post29",
    category: "Установка ПО",
    slug: "mac-installation-errors",
  },
  {
    title: "Как установить драйвера",
    image: "/images/blog/post1.jpg",
    excerpt: "Руководство по установке драйверов для различных устройств.",
    link: "/blog/post30",
    category: "Установка ПО",
    slug: "driver-installation-guide",
  },
  {
    title: "Проблемы с правами администратора",
    image: "/images/blog/post1.jpg",
    excerpt: "Как справиться с проблемами установки, требующими прав администратора.",
    link: "/blog/post31",
    category: "Установка ПО",
    slug: "admin-rights-issues",
  },
  {
    title: "Как установить программы из магазина приложений",
    image: "/images/blog/post1.jpg",
    excerpt: "Руководство по установке приложений из официальных магазинов.",
    link: "/blog/post32",
    category: "Установка ПО",
    slug: "app-store-installation",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articleContents, setArticleContents] = useState<{ [key: string]: string }>({});
  const postsPerPage = 8;

  // Категории
  const categories = useMemo(() => [
    { name: "Все", value: "Все" },
    { name: "Ошибки", value: "Ошибки" },
    { name: "Установка ПО", value: "Установка ПО" },
    { name: "Безопасность", value: "Безопасность" },
    { name: "Рекомендации", value: "Рекомендации" },
  ], []);

  // Загрузка текста статьи по slug (асинхронно)
  const loadArticleContent = async (slug: string) => {
    if (!articleContents[slug]) {
      const response = await fetch(`/api/articles/loadArticle?slug=${slug}`);
      const data = await response.json();
      // Очищаем текст от HTML-тегов
      const strippedContent = stripHtmlTags(data.content);
      setArticleContents((prev) => ({ ...prev, [slug]: strippedContent }));
    }
  };

  // Фильтрация по категории и строке поиска
  const filteredPosts = useMemo(() => {
    const filteredByCategory = selectedCategory === "Все"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

    // Поиск по заголовкам, кратким описаниям и загруженному контенту
    return filteredByCategory.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (articleContents[post.slug] && articleContents[post.slug].toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [selectedCategory, searchTerm, articleContents]);

  // При изменении поискового запроса загружаем статьи, если нужно
  useEffect(() => {
    blogPosts.forEach((post) => {
      if (searchTerm && !articleContents[post.slug]) {
        loadArticleContent(post.slug);
      }
    });
  }, [searchTerm]);

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
    setCurrentPage(page);
  }, []);

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

          {/* Строка поиска */}
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
        {paginatedPosts.map(({ title, image, excerpt, link }) => (
          <div key={title} className="rounded-lg overflow-hidden flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 h-full">
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
                  minHeight: '3em',
                  lineHeight: '1.5em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
                className="text-lg font-semibold mb-2"
              >
                {title}
              </h3>
              <p
                style={{
                  minHeight: '4.5em',
                  lineHeight: '1.5em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
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

      {/* Пагинация */}
      <div className="max-w-max mx-auto px-6 pb-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className={`p-2 ${page === currentPage ? 'bg-blue-600 text-white' : ''}`}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
