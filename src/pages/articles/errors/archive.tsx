import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';

export const metadata = {
  title: 'Как справиться с ошибкой при открытии архива',
  description: 'Руководство по устранению ошибок при открытии архивов, связанных с антивирусами, устаревшим ПО и другими проблемами.',
  keywords: 'ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО',
};

// Панель навигации и пункты меню
const navItems = [
  { href: "#introduction", label: "🏠 В начало" },
  { href: "#antivirus-issue", label: "🛡️ Проблема с антивирусом" },
  { href: "#outdated-software", label: "⏳ Устаревшее программное обеспечение" },
  { href: "#download-errors", label: "📥 Ошибки при загрузке" },
  { href: "#yandex-tips", label: "🌐 Советы для пользователей Яндекс Браузера" },
  { href: "#support", label: "📞 Поддержка" },
];

export default function BlogPost() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(metadata.title);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  if (!isClient) return null;

  return (
    <Layout title={currentTitle} description={metadata.description} keywords={metadata.keywords}>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          
          {/* Панель навигации */}
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
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-rose-500 mr-[-16px] ml-[-16px]" />
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  <a
                    onClick={() => setCurrentTitle(`${metadata.title} | ${item.label}`)}
                    className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0">
            {/* Статичный заголовок */}
            <div id="introduction" className="scroll-section">
              <h2 className="text-4xl font-bold text-center">{metadata.title}</h2>
              <p className="pt-6 pb-8 text-base dark:text-neutral-400">
                В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения.
              </p>
            </div>

            {/* Изображение с одинаковой рамкой */}
            <div className="border-4 border-neutral-300 rounded-lg overflow-hidden">
              <Image
                src="/images/blog/post1.jpg"
                alt="Ошибки при открытии архива"
                width={1920}
                height={1080}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                <div className="relative max-w-3xl w-full border-4 border-neutral-300 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src="/images/blog/post1.jpg"
                    alt="Ошибки при открытии архива"
                    width={1920}
                    height={1080}
                    quality={100}
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 active:scale-90 transition-all focus:outline-none"
                    style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                  >
                    &#x2715;
                  </button>
                </div>
              </div>
            )}

            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="antivirus-issue">Проблема с антивирусом</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Одной из наиболее частых причин, почему архив не открывается, может быть блокировка со стороны антивирусного программного обеспечения. Некоторые антивирусы могут определять архивы как потенциальную угрозу и блокировать их запуск. Рекомендуется проверить настройки антивируса и убедиться, что он не блокирует открытие архивов.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="outdated-software">Устаревшее программное обеспечение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Еще одной причиной может быть использование устаревшего программного обеспечения для работы с архивами, например, старых версий WinRAR или WinZip. Убедитесь, что у вас установлена актуальная версия программы для разархивации. Обновления программ часто включают поддержку новых форматов архивов.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="download-errors">Ошибки при загрузке</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Ошибки при загрузке файла также могут стать причиной проблемы с открытием архива. Проверьте, что архив был загружен полностью. Попробуйте перезагрузить его в случае ошибок при первой попытке.
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="yandex-tips">Советы для пользователей Яндекс Браузера</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если вы используете Яндекс Браузер, иногда защита может блокировать архивы при скачивании. Для решения этой проблемы, попробуйте отключить проверку безопасности скачиваемых файлов в настройках браузера. Перейдите в настройки, откройте вкладку «Безопасность», и снимите галочку с опции «Проверять безопасность скачиваемых файлов».
              </p>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="support">Поддержка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Если указанные выше шаги не помогли, обратитесь в службу поддержки или попробуйте скачать архив снова.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog">
                <a className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в статьи
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
