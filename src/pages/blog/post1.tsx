import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentHash, setCurrentHash] = useState(''); // Храним текущий якорь

  const baseTitle = "Как справиться с ошибкой при открытии архива";

  useEffect(() => {
    setIsClient(true); // Устанавливаем флаг, что код выполняется на клиенте
  }, []);

  // Общие классы для кнопок и ссылок
  const commonLinkClass = "flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300";

  // Функция прокрутки наверх и сброса заголовка
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentHash(''); // Сбрасываем текущий якорь
    document.title = baseTitle; // Сбрасываем заголовок страницы на основной

    // Используем replaceState для удаления якоря из URL
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  if (!isClient) return null; // Возвращаем null, если код выполняется на сервере

  return (
    <Layout>
      <Head>
        <meta name="description" content="Руководство по устранению ошибок при открытии архивов" />
        <meta name="keywords" content="ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО" />
      </Head>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
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
          <div className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}>
            <h3 className="text-center text-xl font-bold border-b-2 border-rose-500 mb-3">Навигация</h3>
            <nav className="space-y-3">
              <a onClick={scrollToTop} className={commonLinkClass}>{titles['']}</a>
              {Object.entries(titles).map(([key, value]) => {
                if (key === '') return null;
                return (
                  <Link key={key} href={`#${key}`} passHref scroll={false}>
                    <a className={commonLinkClass}>{value}</a>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0" id="top">
            <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>
            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения.
            </p>
            <Image
              src="/images/blog/post1.jpg"
              alt="Ошибки при открытии архива"
              width={1920}
              height={1080}
              quality={75}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="antivirus-issue">Проблема с антивирусом</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="outdated-software">Устаревшее программное обеспечение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="download-errors">Ошибки при загрузке</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Иногда архив может не открываться из-за ошибок при его загрузке.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="yandex-tips">Советы для пользователей Яндекс Браузера</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="support">Поддержка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи.
              </p>
            </div>
            <div className="mt-16 flex justify-center">
              <Link href="/#blog" passHref>
                <a className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/6 hidden lg:block"></div>
        </div>
      </main>
    </Layout>
  );
}
