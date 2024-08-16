import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const categories = [
  { name: "Все", value: "Все" },
  { name: "Ошибки", value: "Ошибки" },
  { name: "Установка ПО", value: "Установка ПО" },
  { name: "Безопасность", value: "Безопасность" },
  { name: "Рекомендации", value: "Рекомендации" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPosts =
    selectedCategory === "Все"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="blog">
      <h2 className="text-4xl font-bold text-center">Блог 📰(в разработке)</h2>
      <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Добро пожаловать в наш блог! Здесь вы найдете полезные статьи и советы по использованию наших продуктов и услуг.
      </p>

      {/* Панель навигации по разделам блога */}
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md w-full text-left"
        >
          {isOpen ? "Закрыть разделы" : selectedCategory}
        </button>
        {isOpen && (
          <div className="mt-2 space-y-1">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setIsOpen(false); // Закрыть меню после выбора категории
                }}
                className={classNames(
                  category.value === selectedCategory
                    ? "bg-red-500 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white transition-colors duration-300",
                  "block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hidden sm:block">
        <nav className="flex justify-center">
          <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center sm:mt-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={classNames(
                  category.value === selectedCategory
                    ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-900 dark:text-neutral-400",
                  "rounded-md m-1 py-2 px-4 whitespace-nowrap hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
        {filteredPosts.map(({ title, image, excerpt, link }) => (
          <div
            key={title}
            className="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:shadow-lg duration-300 ease-in-out flex flex-col min-h-[450px]" // Увеличенная минимальная высота карточек
          >
            <Link href={link}>
              <div className="border-4 border-neutral-300 dark:border-neutral-700 p-1 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-300">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between p-6 h-full">
              <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {excerpt}
                </p>
              </div>
              <div className="flex justify-end mt-auto">
                <Link href={link}>
                  <button className="bg-red-500 text-white text-sm rounded-md px-4 py-2 transition-colors duration-300 hover:bg-red-600">
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
