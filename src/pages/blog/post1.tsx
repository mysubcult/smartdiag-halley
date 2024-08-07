import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Head from "next/head"; // Для управления заголовками

export default function BlogPost() {
  const [isSticky, setIsSticky] = useState(false);

  // Эффект для залипания боковой панели
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const introSection = document.querySelector("#introduction");
      const introOffsetTop = introSection
        ? introSection.getBoundingClientRect().top + window.scrollY
        : 0;

      const viewportHeight = window.innerHeight;
      const buffer = 100;

      if (scrollTop + viewportHeight - buffer >= introOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Эффект для плавного скролла
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const anchor = document.querySelector(target.getAttribute("href")!);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Как справиться с ошибкой при открытии архива</title>
        <meta
          name="description"
          content="В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения."
        />
        {/* Подключаем стили */}
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <Layout>
        <div className="container mx-auto">
          <header className="my-8">
            <h1 className="text-3xl font-bold">
              Как справиться с ошибкой при открытии архива
            </h1>
            <p className="text-gray-600 mt-4">
              В этой статье мы рассмотрим наиболее частые причины ошибок при
              открытии архивов и предложим решения для их устранения.
            </p>
          </header>

          <div className="flex">
            <nav
              className={`sticky top-4 h-full max-w-[300px] border-r-2 border-gray-200 pr-4 ${
                isSticky ? "fixed" : ""
              }`}
              style={{ height: "100vh", top: "10px" }} // Добавляем высоту и отступ сверху
            >
              <h2 className="font-semibold mb-4">Содержание:</h2>
              <ul>
                <li>
                  <a href="#introduction" className="text-blue-600 hover:underline">
                    Введение
                  </a>
                </li>
                <li>
                  <a href="#common-errors" className="text-blue-600 hover:underline">
                    Распространенные ошибки
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-blue-600 hover:underline">
                    Способы устранения
                  </a>
                </li>
                <li>
                  <a href="#prevention" className="text-blue-600 hover:underline">
                    Профилактика ошибок
                  </a>
                </li>
              </ul>
            </nav>

            <main className="flex-1 pl-8">
              <section id="introduction">
                <h2 className="text-2xl font-semibold mb-2">Введение</h2>
                <p className="mb-4">
                  Открытие архивов – это повседневная задача для многих
                  пользователей, но иногда возникают ошибки, которые мешают
                  доступу к содержимому архива.
                </p>
                <Image
                  src="/images/archive-error.png"
                  alt="Ошибка при открытии архива"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </section>

              <section id="common-errors">
                <h2 className="text-2xl font-semibold mb-2">Распространенные ошибки</h2>
                <p className="mb-4">
                  Наиболее частые ошибки включают повреждение файлов, проблемы с
                  совместимостью и ошибки программного обеспечения.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Неправильный формат архива</li>
                  <li>Проблемы с кодировкой</li>
                  <li>Поврежденные файлы</li>
                </ul>
              </section>

              <section id="solutions">
                <h2 className="text-2xl font-semibold mb-2">Способы устранения</h2>
                <p className="mb-4">
                  Для решения этих проблем вы можете воспользоваться
                  специализированными программами, обновить архиваторы или
                  восстановить файлы из резервной копии.
                </p>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Используйте актуальные версии программ</li>
                  <li>Проверьте целостность архивов</li>
                  <li>Попробуйте альтернативные программы</li>
                </ol>
              </section>

              <section id="prevention">
                <h2 className="text-2xl font-semibold mb-2">Профилактика ошибок</h2>
                <p className="mb-4">
                  Чтобы избежать проблем с архивами, регулярно обновляйте
                  программы и делайте резервные копии важных данных.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Регулярно обновляйте ПО</li>
                  <li>Создавайте резервные копии</li>
                  <li>Используйте надежные источники файлов</li>
                </ul>
              </section>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
