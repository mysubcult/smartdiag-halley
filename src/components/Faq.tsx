import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const blogPosts = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt:
      "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов и что может вызывать эти проблемы.",
    link: "/blog/post1",
  },
  {
    title: "Проблемы с запуском программы",
    image: "/images/blog/post2.jpg",
    excerpt:
      "Что делать, если программа не запускается или исчезают ярлыки? Решения и советы.",
    link: "/blog/post2",
  },
  {
    title: "Использование ключа активации на другом устройстве",
    image: "/images/blog/post3.jpg",
    excerpt:
      "Можно ли использовать один ключ активации на нескольких устройствах? Ответы и рекомендации.",
    link: "/blog/post3",
  },
  {
    title: "Помощь в установке программного обеспечения",
    image: "/images/blog/post4.jpg",
    excerpt:
      "Как получить помощь при установке программного обеспечения. Контакты и часы работы службы поддержки.",
    link: "/blog/post4",
  },
  {
    title: "Безопасность программ и антивирусы",
    image: "/images/blog/post5.jpg",
    excerpt:
      "Как антивирусное ПО может влиять на ваши программы и как правильно настраивать исключения.",
    link: "/blog/post5",
  },
  {
    title: "Рекомендации по использованию наших программ",
    image: "/images/blog/post6.jpg",
    excerpt:
      "Лучшие практики и советы по использованию программного обеспечения для достижения максимальной эффективности.",
    link: "/blog/post6",
  },
];

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-neutral-900 shadow-lg fixed w-full z-10 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-xl font-bold text-gray-800 dark:text-white">
                  Мой сайт
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Главная
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    О нас
                  </a>
                </Link>
                <Link href="/services">
                  <a className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Услуги
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Контакты
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Открыть меню</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="text-gray-800 dark:text-white hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Главная</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 dark:text-white hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">О нас</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-800 dark:text-white hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Услуги</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-800 dark:text-white hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Контакты</a>
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16" id="blog">
        <h2 className="text-4xl font-bold text-center">Блог 📰(в разработке)</h2>
        <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Добро пожаловать в наш блог! Здесь вы найдете полезные статьи и советы
          по использованию наших продуктов и услуг.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogPosts.map(({ title, image, excerpt, link }) => (
            <div
              key={title}
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:shadow-lg duration-300 ease-in-out flex flex-col"
            >
              <Link href={link}>
                <div className="border-4 border-neutral-300 dark:border-neutral-700 p-1 hover:border-red-500 dark:hover:border-red-500">
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
    </>
  );
}
