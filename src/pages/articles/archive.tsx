import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import articles from '../../components/Articles'; // Импорт статей

export const metadata = {
  title: 'Как справиться с ошибкой при открытии архива',
  description: 'Руководство по устранению ошибок при открытии архивов, связанных с антивирусами, устаревшим ПО и другими проблемами.',
  keywords: 'ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО',
};

export default function BlogPost() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<string>(metadata.title);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);

  const closeModal = () => setIsModalOpen(false);

  const handleMenuClick = (titleSuffix: string | null) => {
    if (titleSuffix) {
      setCurrentTitle(`${metadata.title} | ${titleSuffix}`);
    } else {
      setCurrentTitle(metadata.title);
    }
  };

  if (!isClient) return null;

  // Фильтруем статьи по категории "Ошибки"
  const recommendedArticles = articles.filter(article => article.category === "Ошибки").slice(0, 5); // Отбираем 3-5 статей

  return (
    <Layout title={metadata.title} description={metadata.description} keywords={metadata.keywords}>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          
          {/* Навигация слева */}
          <div className="lg:w-1/6 w-full text-center lg:text-left lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out">
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-rose-500 mr-[-16px] ml-[-16px]" />
            <nav className="space-y-3">
              <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                🏠 В начало
              </a>
              <Link href="#antivirus-issue" scroll={false}>
                <a onClick={() => handleMenuClick('🛡️ Проблема с антивирусом')} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                  🛡️ Проблема с антивирусом
                </a>
              </Link>
              <Link href="#outdated-software" scroll={false}>
                <a onClick={() => handleMenuClick('⏳ Устаревшее программное обеспечение')} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                  ⏳ Устаревшее программное обеспечение
                </a>
              </Link>
              <Link href="#download-errors" scroll={false}>
                <a onClick={() => handleMenuClick('📥 Ошибки при загрузке')} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                  📥 Ошибки при загрузке
                </a>
              </Link>
              <Link href="#yandex-tips" scroll={false}>
                <a onClick={() => handleMenuClick('🌐 Советы для пользователей Яндекс Браузера')} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                  🌐 Советы для пользователей Яндекс Браузера
                </a>
              </Link>
              <Link href="#support" scroll={false}>
                <a onClick={() => handleMenuClick('📞 Поддержка')} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">
                  📞 Поддержка
                </a>
              </Link>
            </nav>
          </div>

          {/* Контент статьи */}
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0">
            <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>
            <p className="pt-6 pb-8 text-base dark:text-neutral-400">
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

            {/* Основное содержание статьи */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="antivirus-issue">Проблема с антивирусом</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением. Многие антивирусы могут блокировать доступ к архивным файлам, считая их потенциально опасными.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="outdated-software">Устаревшее программное обеспечение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов. Убедитесь, что ваше ПО обновлено.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="download-errors">Ошибки при загрузке</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Иногда архив может не открываться из-за ошибок при его загрузке. Попробуйте загрузить файл снова или использовать другой источник загрузки.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="yandex-tips">Советы для пользователей Яндекс Браузера</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы. Отключите эту функцию в настройках безопасности браузера.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="support">Поддержка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи.
              </p>
            </div>

            {/* Кнопка возврата в блог */}
            <div className="mt-16 flex justify-center">
              <Link href="/#blog">
                <a className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </a>
              </Link>
            </div>
          </div>

          {/* Панель "Рекомендуемые статьи" справа */}
          <div className="lg:w-1/6 hidden lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out">
            <h3 className="text-center text-xl font-bold mb-3">Рекомендуемые статьи</h3>
            <hr className="border-b-2 border-rose-500 mr-[-16px] ml-[-16px]" />
            {recommendedArticles.map((article) => (
              <div key={article.title} className="mb-4">
                <Link href={article.link}>
                  <div className="flex items-start hover:text-rose-500 cursor-pointer transition-colors duration-300">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={80}
                      height={80}
                      className="rounded-lg mr-3"
                    />
                    <div>
                      <h4 className="font-semibold">{article.title}</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
