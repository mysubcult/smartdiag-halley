import Image from "next/image";
import Link from "next/link";

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
  return (
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
        id="blog"
      >
        <h2 className="text-4xl font-bold text-center">Блог 📰</h2>
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
              <Image
                src={image}
                alt={title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
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
