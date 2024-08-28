import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeEnabled);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const darkMode = document.documentElement.classList.contains('dark');
          setIsDarkMode(darkMode);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title="Блог - Как справиться с ошибкой при открытии архива">
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">

          {/* Кнопка меню навигации на мобильных устройствах */}
          <div className="lg:hidden w-full flex justify-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-6 py-3 font-medium shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
              aria-label="Открыть меню навигации"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 mr-2 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
              Меню навигации
            </button>
          </div>

          {/* Панель навигации с рамкой и поддержкой темной темы */}
          <div className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block transition-all duration-300 ease-in-out lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto mb-6 lg:mb-0 shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700`}>
            <h3 className="text-center py-2 text-xl font-bold border-b-2 border-rose-500 mb-6">Навигация</h3>
            <nav className="space-y-4">
              <a onClick={scrollToTop} className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left cursor-pointer">
                {/* SVG для "В начало" */}
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M9 6l-6 6 6 6"></path>
                </svg>
                В начало
              </a>
              <Link href="#antivirus-issue" scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  {/* SVG для "Проблема с антивирусом" */}
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15M6 9l6-4.5 6 4.5"></path>
                  </svg>
                  Проблема с антивирусом
                </a>
              </Link>
              <Link href="#outdated-software" scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  {/* SVG для "Устаревшее ПО" */}
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9v4m0 0v4m0-4h4"></path>
                  </svg>
                  Устаревшее ПО
                </a>
              </Link>
              <Link href="#download-errors" scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  {/* SVG для "Ошибки при загрузке" */}
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z"></path>
                  </svg>
                  Ошибки при загрузке
                </a>
              </Link>
              <Link href="#yandex-tips" scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  {/* SVG для "Советы для Яндекс Браузера" */}
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l8.5 5v10l-8.5 5-8.5-5v-10z"></path>
                  </svg>
                  Советы для Яндекс Браузера
                </a>
              </Link>
              {/* Пример выпадающего списка для раздела "Поддержка" */}
              <div className="group relative">
                <button className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left w-full">
                  {/* SVG для "Поддержка" */}
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l5-5m0 10l-5-5"></path>
                  </svg>
                  Поддержка
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-full bg-white dark:bg-neutral-900 rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                  <Link href="#faq">
                    <a className="block px-4 py-2 text-sm text-neutral-900 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Часто задаваемые вопросы
                    </a>
                  </Link>
                  <Link href="#contact">
                    <a className="block px-4 py-2 text-sm text-neutral-900 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Связаться с нами
                    </a>
                  </Link>
                  <Link href="#guides">
                    <a className="block px-4 py-2 text-sm text-neutral-900 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Руководства
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Основной контент блога */}
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>

            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения. Архивы являются удобным способом хранения и передачи больших объемов данных, однако иногда они могут не открываться, что вызывает неудобства. Ниже приведены основные причины этих проблем и рекомендации по их решению.
            </p>

            <Image
              src="/images/blog/post1.jpg"
              alt="Ошибки при открытии архива"
              width={1920}
              height={1080}
              quality={75}
              layout="responsive"
              sizes="100vw"
              className="w-full max-w-full mx-auto mb-8"
            />

            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="antivirus-issue">Проблема с антивирусом</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением. Некоторые антивирусы могут блокировать доступ к архиву, считая его потенциально опасным, особенно если в нем содержатся исполняемые файлы (.exe). Чтобы решить эту проблему, попробуйте временно отключить антивирус или добавить архив в список исключений. Обратите внимание, что это может увеличить риск заражения компьютера, поэтому действуйте с осторожностью.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="outdated-software">Устаревшее программное обеспечение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов или использовать устаревшие алгоритмы распаковки. Рекомендуется обновить программное обеспечение до последней версии, чтобы избежать подобных проблем. Например, если вы используете WinRAR или 7-Zip, проверьте сайт разработчика на наличие обновлений.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="download-errors">Ошибки при загрузке</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Иногда архив может не открываться из-за ошибок при его загрузке. Это может быть вызвано нестабильным интернет-соединением или перерывами в загрузке. Если вы столкнулись с этой проблемой, попробуйте загрузить файл повторно. Также можно использовать менеджер загрузок, который поддерживает возобновление загрузок, чтобы избежать повреждения файла.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="yandex-tips">Советы для пользователей Яндекс Браузера</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы. Чтобы решить эту проблему, можно отключить эту защиту в настройках браузера или добавить сайт, с которого производится загрузка, в список доверенных. Однако будьте осторожны при отключении защиты, так как это может повысить риски загрузки потенциально вредоносных файлов.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="support">Поддержка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи. Возможно, проблема связана с конкретным файлом или настройками вашего компьютера. Служба поддержки сможет предоставить вам более детальные инструкции или предложить альтернативные решения.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog" scroll={false}>
                <button className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </button>
              </Link>
            </div>
          </div>

          {/* Пустое пространство справа */}
          <div className="lg:w-1/6 hidden lg:block"></div>

        </div>
      </main>
    </Layout>
  );
}
