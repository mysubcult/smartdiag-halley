import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function BlogPost() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const introSection = document.querySelector("#introduction");
      const introOffsetTop = introSection ? introSection.getBoundingClientRect().top + window.scrollY : 0;

      const viewportHeight = window.innerHeight;
      const buffer = 100; // Можно настроить как угодно, добавляет пространство для срабатывания

      if (scrollTop + viewportHeight - buffer >= introOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Добавим вызов функции при первом рендеринге
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    // This effect ensures the styles are applied correctly when navigating to this page
    const applyStyles = () => {
      const toc = document.querySelector("aside");
      if (toc) {
        toc.classList.add("border", "border-neutral-300", "dark:border-neutral-700", "rounded-lg", "p-4", "bg-white", "dark:bg-neutral-900", "shadow-lg");
      }
    };

    applyStyles();
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row">
          {/* Основной контент и боковая панель */}
          <div className="relative lg:flex lg:space-x-8">
            {/* Боковая панель */}
            <aside className={`lg:w-1/4 px-4 sticky top-32 h-auto ${isSticky ? 'fixed' : 'relative'}`}>
              <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-900 shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-center">Навигация</h3>
                <nav className="space-y-4">
                  <a href="#antivirus-issue" className="block text-neutral-900 dark:text-neutral-400 hover:text-red-500">
                    Проблема с антивирусом
                  </a>
                  <a href="#outdated-software" className="block text-neutral-900 dark:text-neutral-400 hover:text-red-500">
                    Устаревшее ПО
                  </a>
                  <a href="#download-errors" className="block text-neutral-900 dark:text-neutral-400 hover:text-red-500">
                    Ошибки при загрузке
                  </a>
                  <a href="#yandex-tips" className="block text-neutral-900 dark:text-neutral-400 hover:text-red-500">
                    Советы для Яндекс Браузера
                  </a>
                  <a href="#support" className="block text-neutral-900 dark:text-neutral-400 hover:text-red-500">
                    Поддержка
                  </a>
                </nav>
              </div>
            </aside>

            {/* Основной контент */}
            <div className="w-full lg:w-3/4 mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold">
                Как справиться с ошибкой при открытии архива
              </h2>

              <p id="introduction" className="pt-6 pb-8 text-base max-w-2xl m-auto dark:text-neutral-400">
                В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения...
              </p>

              <Image
                src="/images/blog/post1.jpg"
                alt="Ошибки при открытии архива"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                className="w-full max-w-xl mx-auto mb-8"
              />

              <div className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
                <p className="mb-4" id="antivirus-issue">
                  <strong>Проблема с антивирусом:</strong> Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением...
                </p>

                <p className="mb-4" id="outdated-software">
                  <strong>Устаревшее программное обеспечение:</strong> Если вы используете старую версию программного обеспечения для работы с архивами...
                </p>

                <p className="mb-4" id="download-errors">
                  <strong>Ошибки при загрузке:</strong> Иногда архив может не открываться из-за ошибок при его загрузке...
                </p>

                <p className="mb-4" id="yandex-tips">
                  <strong>Советы для пользователей Яндекс Браузера:</strong> В Яндекс Браузере может быть включена защита, блокирующая некоторые файлы...
                </p>

                <p className="mb-4" id="support">
                  Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи...
                </p>
              </div>

              <div className="mt-16">
                <Link href="/#blog">
                  <button className="bg-rose-500 text-white text-base rounded-full px-16 py-3 font-medium">
                    Вернуться в блог
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}