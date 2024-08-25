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
  // остальные посты
];

const categories = [
  { name: "Все", value: "Все" },
  { name: "Ошибки", value: "Ошибки" },
  // остальные категории
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "Все"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory]
  );

  const handleCategoryClick = useCallback(
    (category) => {
      setSelectedCategory(category);
      setIsOpen(false);
    },
    []
  );

  const renderCategoryButton = (category) => (
    <button
      key={category.value}
      onClick={() => handleCategoryClick(category.value)}
      className={classNames(
        category.value === selectedCategory
          ? "bg-red-500 text-white"
          : "text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white",
        "rounded-full m-2 py-2 px-6 transition-colors duration-300 ease-in-out"
      )}
    >
      {category.name}
    </button>
  );

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-6 py-16" id="blog">
      <h2 className="text-4xl font-bold text-center mb-8">Блог 📰</h2>
      <p className="text-base max-w-2xl text-center m-auto dark:text-neutral-400 mb-12">
        Добро пожаловать в наш блог! Здесь вы найдете полезные статьи и советы по использованию наших продуктов и услуг.
      </p>

      {/* Навигация по категориям */}
      <div className="flex justify-center flex-wrap">
        {categories.map(renderCategoryButton)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredPosts.map(({ title, image, excerpt, link }) => (
          <div
            key={title}
            className="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Link href={link}>
              <div className="relative">
                <Image
                  src={image}
                  alt={title}
                  layout="responsive"
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover transform transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {excerpt}
              </p>
              <div className="flex justify-end">
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
