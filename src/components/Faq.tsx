import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const blogPosts = [
  {
    title: "Как справиться с ошибкой при открытии архива",
    image: "/images/blog/post1.jpg",
    excerpt: "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов и что может вызывать эти проблемы.",
    link: "/blog/post1",
  },
  {
    title: "Проблемы с запуском программы",
    image: "/images/blog/post2.jpg",
    excerpt: "Что делать, если программа не запускается или исчезают ярлыки? Решения и советы.",
    link: "/blog/post2",
  },
  {
    title: "Использование ключа активации на другом устройстве",
    image: "/images/blog/post3.jpg",
    excerpt: "Можно ли использовать один ключ активации на нескольких устройствах? Ответы и рекомендации.",
    link: "/blog/post3",
  },
  {
    title: "Помощь в установке программного обеспечения",
    image: "/images/blog/post4.jpg",
    excerpt: "Как получить помощь при установке программного обеспечения. Контакты и часы работы службы поддержки.",
    link: "/blog/post4",
  },
  {
    title: "Безопасность программ и антивирусы",
    image: "/images/blog/post5.jpg",
    excerpt: "Как антивирусное ПО может влиять на ваши программы и как правильно настраивать исключения.",
    link: "/blog/post5",
  },
  {
    title: "Рекомендации по использованию наших программ",
    image: "/images/blog/post6.jpg",
    excerpt: "Лучшие практики и советы по использованию программного обеспечения для достижения максимальной эффективности.",
    link: "/blog/post6",
  },
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="blog">
        <h2 className="text-5xl font-bold text-center text-red-600">Блог</h2>
        <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Добро пожаловать в наш блог! Здесь вы найдете полезные статьи и советы по использованию наших продуктов и услуг.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogPosts.map(({ title, image, excerpt, link }) => (
            <div key={title} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <Image src={image} alt={title} width={400} height={225} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-600">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{excerpt}</p>
                <Link href={link}>
                  <button className="btn-grad-red mt-4 flex items-center">
                    Читать далее
                    <span className="icon-container ml-2">
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" /* Размер */
                        height="20" /* Размер */
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .btn-grad-red {
          background: linear-gradient(to right, #ff4b2b, #ff416c);
          color: white;
          border: none;
          border-radius: 30px;
          padding: 12px 24px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 15px rgba(255, 65, 108, 0.5);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-grad-red:hover {
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(255, 65, 108, 0.6);
        }

        .btn-grad-red:active {
          transform: scale(0.95);
          box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 20px;
          height: 20px;
          transition: transform 1s ease;
          color: currentColor;
        }

        .btn-grad-red:hover .icon {
          transform: rotate(180deg);
        }
      `}</style>
    </Layout>
  );
}
