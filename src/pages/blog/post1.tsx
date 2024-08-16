import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.documentElement.style.cssText = document.documentElement.style.cssText;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const introSection = document.querySelector("#introduction");
      const introOffsetTop = introSection ? introSection.getBoundingClientRect().top + window.scrollY : 0;

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

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const href = target.getAttribute("href");
        try {
          if (href && document.querySelector(href)) {
            event.preventDefault();
            const anchor = document.querySelector(href);
            if (anchor) {
              anchor.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        } catch (e) {
          console.error("Invalid selector or element not found:", href, e);
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
      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="relative lg:flex lg:space-x-8">
            <aside className={`lg:w-1/4 px-4 sticky top-24 h-auto ${isSticky ? 'fixed' : 'relative'} hidden lg:block border-r border-neutral-300`}>
              <div className="fixed w-56 p-4 bg-white dark:bg-neutral-900 shadow-lg">
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

            <div className="w-full lg:w-3/4 mx-auto px-4 lg:ml-8">
              <h2 className="text-4xl font-bold">
                Как справиться с ошибкой при открытии архива
              </h2>

              <p id="introduction" className="pt-6 pb-8 text-base max-w-2xl dark:text-neutral-400">
                В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения. Архивы являются удобным способом хранения и передачи больших объемов данных, однако иногда они могут не открываться, что вызывает неудобства. Ниже приведены основные причины этих проблем и рекомендации по их решению.
              </p>

              <Image
                src="/images/blog/post1.jpg"
                alt="Ошибки при открытии архива"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                className="w-full max-w-full mx-auto mb-8"
              />

              <div className="max-w-3xl mx-auto text-lg leading-relaxed">
                <p className="mb-4 scroll-section border-b border-neutral-300 pb-2" id="antivirus-issue">
                  <strong>Проблема с антивирусом:</strong> Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением. Некоторые антивирусы могут блокировать доступ к архиву, считая его потенциально опасным, особенно если в нем содержатся исполняемые файлы (.exe). Чтобы решить эту проблему, попробуйте временно отключить антивирус или добавить архив в список исключений. Обратите внимание, что это может увеличить риск заражения компьютера, поэтому действуйте с осторожностью.
                </p>

                <p className="mb-4 scroll-section border-b border-neutral-300 pb-2" id="outdated-software">
                  <strong>Устаревшее программное обеспечение:</strong> Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов или использовать устаревшие алгоритмы распаковки. Рекомендуется обновить программное обеспечение до последней версии, чтобы избежать подобных проблем. Например, если вы используете WinRAR или 7-Zip, проверьте сайт разработчика на наличие обновлений.
                </p>

                <p className="mb-4 scroll-section border-b border-neutral-300 pb-2" id="download-errors">
                  <strong>Ошибки при загрузке:</strong> Иногда архив может не открываться из-за ошибок при его загрузке. Это может быть вызвано нестабильным интернет-соединением или перерывами в загрузке. Если вы столкнулись с этой проблемой, попробуйте загрузить файл повторно. Также можно использовать менеджер загрузок, который поддерживает возобновление загрузок, чтобы избежать повреждения файла.
                </p>

                <p className="mb-4 scroll-section border-b border-neutral-300 pb-2" id="yandex-tips">
                  <strong>Советы для пользователей Яндекс Браузера:</strong> В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы. Чтобы решить эту проблему, можно отключить эту защиту в настройках браузера или добавить сайт, с которого производится загрузка, в список доверенных. Однако будьте осторожны при отключении защиты, так как это может повысить риски загрузки потенциально вредоносных файлов.
                </p>

                <p className="mb-4 scroll-section border-b border-neutral-300 pb-2" id="support">
                  Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи. Возможно, проблема связана с конкретным файлом или настройками вашего компьютера. Служба поддержки сможет предоставить вам более детальные инструкции или предложить альтернативные решения.
                </p>
              </div>

              <div className="mt-16 flex justify-center">
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
