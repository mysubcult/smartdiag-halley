import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function BlogPost() {
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
    <Layout>
      <div className="bg-white dark:bg-neutral-900 w-full pt-32 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
          {/* Боковая панель */}
          <aside className="hidden lg:flex lg:flex-col lg:w-1/4 fixed top-32 left-0 h-full overflow-auto bg-white dark:bg-neutral-900 shadow-lg p-4">
            <h3 className="text-lg font-bold mb-4 text-center">Навигация</h3>
            <nav className="space-y-4 text-center">
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
          </aside>

          {/* Основной контент */}
          <main className="flex-grow lg:ml-[25%] p-4">
            <div className="max-w-full lg:max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">
                Как справиться с ошибкой при открытии архива
              </h2>

              <p id="introduction" className="pt-6 pb-8 text-base max-w-2xl mx-auto dark:text-neutral-400 text-center leading-relaxed">
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

              <article className="max-w-full lg:max-w-3xl mx-auto text-lg leading-relaxed text-center">
                <section id="antivirus-issue" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Проблема с антивирусом:</h3>
                  <p className="mb-4">
                    Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением...
                  </p>
                </section>

                <section id="outdated-software" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Устаревшее программное обеспечение:</h3>
                  <p className="mb-4">
                    Если вы используете старую версию программного обеспечения для работы с архивами...
                  </p>
                </section>

                <section id="download-errors" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Ошибки при загрузке:</h3>
                  <p className="mb-4">
                    Иногда архив может не открываться из-за ошибок при его загрузке...
                  </p>
                </section>

                <section id="yandex-tips" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Советы для пользователей Яндекс Браузера:</h3>
                  <p className="mb-4">
                    В Яндекс Браузере может быть включена защита, блокирующая некоторые файлы...
                  </p>
                </section>

                <section id="support" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Поддержка:</h3>
                  <p>
                    Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи...
                  </p>
                </section>
              </article>

              <div className="mt-16 text-center">
                <Link href="/#blog">
                  <button className="bg-rose-500 text-white text-base rounded-full px-16 py-3 font-medium">
                    Вернуться в блог
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
