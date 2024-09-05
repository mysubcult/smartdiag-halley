import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

const blogPosts = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt:
      "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов и что может вызывать эти проблемы.",
    link: "/blog/post1",
    category: "Ошибки",
  },
  {
    title: "Проблемы с запуском программы",
    image: "/images/blog/post2.jpg",
    excerpt:
      "Что делать, если программа не запускается или исчезают ярлыки? Решения и советы.",
    link: "/blog/post2",
    category: "Ошибки",
  },
  {
    title: "Использование ключа активации на другом устройстве",
    image: "/images/blog/post3.jpg",
    excerpt:
      "Можно ли использовать один ключ активации на нескольких устройствах? Ответы и рекомендации.",
    link: "/blog/post3",
    category: "Рекомендации",
  },
  {
    title: "Помощь в установке программного обеспечения",
    image: "/images/blog/post4.jpg",
    excerpt:
      "Как получить помощь при установке программного обеспечения. Контакты и часы работы службы поддержки.",
    link: "/blog/post4",
    category: "Установка ПО",
  },
  {
    title: "Безопасность программ и антивирусы",
    image: "/images/blog/post5.jpg",
    excerpt:
      "Как антивирусное ПО может влиять на ваши программы и как правильно настраивать исключения.",
    link: "/blog/post5",
    category: "Безопасность",
  },
  {
    title: "Рекомендации по использованию наших программ",
    image: "/images/blog/post6.jpg",
    excerpt:
      "Лучшие практики и советы по использованию программного обеспечения для достижения максимальной эффективности.",
    link: "/blog/post6",
    category: "Рекомендации",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = useMemo(() => [
    { name: "Все", value: "Все" },
    { name: "Ошибки", value: "Ошибки" },
    { name: "Установка ПО", value: "Установка ПО" },
    { name: "Безопасность", value: "Безопасность" },
    { name: "Рекомендации", value: "Рекомендации" },
  ], []);

  const filteredPosts = useMemo(() => {
    return selectedCategory === "Все"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const renderCategoryButton = useCallback(
    (category: { name: string; value: string }) => (
      <button
        key={category.value}
        onClick={() => handleCategoryClick(category.value)}
        className={`
          ${category.value === selectedCategory
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"}
          rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out
        `}
      >
        {category.name}
      </button>
    ),
    [handleCategoryClick, selectedCategory]
  );

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 📰</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В нашем блоге вы найдете полезные статьи и советы по использованию наших продуктов и услуг.
        </p>
      </div>

      <div className="max-w-max mx-auto px-6">
        {/* Меню категорий с уменьшенными отступами */}
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-col sm:flex-row sm:flex-wrap justify-center sm:mt-8 p-1 gap-1">
          {categories.map(renderCategoryButton)}
        </div>
      </div>

      {/* Сетка статей */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {filteredPosts.map(({ title, image, excerpt, link }) => (
          <div
            key={title}
            className="rounded-lg overflow-hidden flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300"
          >
            <Link href={link}>
              <div className="relative">
                <Image
                  src={image}
                  alt={title}
                  layout="responsive"
                  width={400}
                  height={225}
                  className="w-full object-cover"
                  priority={title === filteredPosts[0].title} // Priority для первого изображения
                  placeholder="blur" // Эффект размытия
                  blurDataURL="/images/placeholder.png" // Заглушка
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-6 line-clamp-3 h-16">
                {title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                {excerpt}
              </p>
              <div className="flex justify-end mt-auto">
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
    </div>
  );
}
