import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';

// Metadata from archive.txt
export const metadata = {
  description: 'Полное руководство по установке программы Autocom 2021.11 с подробными инструкциями по отключению антивирусов, настройке брандмауэра, установке и настройке программы, смене языка и первому подключению.',
  keywords: 'установка Autocom 2021.11, отключение антивирусов, настройка брандмауэра, смена языка, автосканер, диагностическое ПО, руководство по установке',
};

export default function BlogPost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const baseTitle = "Инструкция по установке Autocom 2021.11";

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // Modal functionality for image
  const openModal = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout title={baseTitle} description={metadata.description} keywords={metadata.keywords}>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          
          {/* Navigation */}
          <aside className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}>
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-4 border-gray-500 mr-[-16px] ml-[-16px]"/>
            <nav className="space-y-3">
              <a onClick={scrollToTop} className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                🏠 В начало
              </a>
              <Link href="#disable-antivirus" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  🛡️ Отключение антивирусов
                </a>
              </Link>
              <Link href="#firewall" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  🔥 Отключение брандмауэра
                </a>
              </Link>
              <Link href="#install-program" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  📥 Установка программы
                </a>
              </Link>
              <Link href="#change-language" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  🌐 Смена языка в программе
                </a>
              </Link>
              <Link href="#first-connection" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  🔌 Первое подключение
                </a>
              </Link>
              <Link href="#faq" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  ❓ Часто задаваемые вопросы
                </a>
              </Link>
              <Link href="#attention" scroll={false}>
                <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">
                  ⚠️ ВНИМАНИЕ!
                </a>
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <article className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0" id="top">
            <h1 className="text-4xl font-bold text-center">Инструкция по установке Autocom 2021.11</h1>
            <p className="pt-6 pb-8 text-base dark:text-neutral-400">
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.
            </p>

            {/* Отключение антивирусов */}
            <section id="disable-antivirus">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Отключение антивирусов</h2>
              <hr className="border-gray-500 border-b-4 mb-4" />
              <p className="mb-4">
                Отключите все антивирусы, в том числе и стандартный Защитник Windows. Мы неоднократно проверяли все файлы - они не содержат никаких вирусов. Вы можете убедиться в этом, скачав антивирус Dr.Web и проверив все файлы программы на вирусы.
              </p>
              <p className="mb-4">
                <strong className="text-red-500">Шаги для отключения Защитника Windows:</strong>
                <ol className="list-decimal ml-5">
                  <li>Зайдите в <strong className="text-red-500">Параметры</strong>, затем перейдите в <strong className="text-red-500">Безопасность Windows</strong> и отключите ползунки так, как показано на скриншоте.</li>
                </ol>
              </p>
              <div className="my-4">
                <Image
                  src="/images/install/disable-windows-defender-step1.png"
                  alt="Параметры безопасности Windows"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                  className="cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                  onClick={() => openModal('/images/install/disable-windows-defender-step1.png')}
                />
              </div>
            </section>

            {/* Отключение брандмауэра */}
            <section id="firewall">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Отключение брандмауэра</h2>
              <hr className="border-gray-500 border-b-4 mb-4" />
              <p className="mb-4">
                На время установки следует отключить <strong className="text-red-500">брандмауэр Защитника Windows</strong>.
              </p>
              <ol className="list-decimal ml-5 mb-4">
                <li>Откройте <strong className="text-red-500">Панель управления</strong>, далее откройте <strong className="text-red-500">Брандмауэр Защитника Windows</strong> и сделайте все, как показано на скриншоте.</li>
              </ol>
              <div className="my-4">
                <Image
                  src="/images/install/disable-firewall-step1.png"
                  alt="Открытие Брандмауэра Защитника Windows"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                  className="cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                  onClick={() => openModal('/images/install/disable-firewall-step1.png')}
                />
              </div>
            </section>

            {/* Установка программы */}
            <section id="install-program">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Установка программы</h2>
              <hr className="border-gray-500 border-b-4 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Загрузите архив с названием <strong className="text-red-500">Autocom 2021.11.rar</strong> и после завершения загрузки распакуйте его. Если возникает ошибка при распаковке, убедитесь, что архив загружен полностью.</li>
                <li>Запустите файл установки и следуйте инструкциям на экране.</li>
                <li>Введите пароль <code className="text-red-500">NewSoftware2021</code> и нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Выберите путь установки и тип вашего прибора (Type 1 или Type 2).</li>
                <div className="my-4">
                  <Image
                    src="/images/install/install-step1.png"
                    alt="Начало установки программы"
                    width={800}
                    height={600}
                    quality={75}
                    layout="responsive"
                    className="cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    onClick={() => openModal('/images/install/install-step1.png')}
                  />
                </div>
              </ol>
            </section>

            {/* FAQ - Accordion */}
            <section id="faq">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Часто задаваемые вопросы (FAQ)</h2>
              <hr className="border-gray-500 border-b-4 mb-4" />
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold cursor-pointer text-red-500 group-hover:underline">Откуда скачать программу?</summary>
                  <p className="mt-2 text-base text-gray-700 dark:text-neutral-400">
                    Вы можете скачать необходимое программное обеспечение на нашем официальном веб-сайте.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold cursor-pointer text-red-500 group-hover:underline">Ошибка при открытии архива</summary>
                  <p className="mt-2 text-base text-gray-700 dark:text-neutral-400">
                    Проверьте настройки антивируса и убедитесь, что архив был загружен полностью.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold cursor-pointer text-red-500 group-hover:underline">Проблемы с запуском на Windows 10, 11</summary>
                  <p className="mt-2 text-base text-gray-700 dark:text-neutral-400">
                    Удалите обновление .NET Framework 4.8.1 или следуйте инструкциям в папке "Если не запускается программа".
                  </p>
                </details>
              </div>
            </section>

            {/* ВНИМАНИЕ */}
            <section id="attention">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">ВНИМАНИЕ!</h2>
              <hr className="border-gray-500 border-b-4 mb-4" />
              <p className="mb-4">
                <strong className="text-red-500">Запрещено</strong> подключать автосканер в USB-порт ноутбука, зарядка которого осуществляется от бортовой сети автомобиля.
              </p>
            </section>

            {/* Return button */}
            <div className="mt-16 flex justify-center">
              <Link href="/#blog" passHref>
                <a className="bg-gradient-to-r from-black to-red-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </a>
              </Link>
            </div>
          </article>
          <div className="lg:w-1/6 hidden lg:block"></div>
        </div>

        {/* Modal for images */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={currentImage}
                alt="Просмотр изображения"
                width={1920}
                height={1080}
                quality={100}
                layout="responsive"
                className="rounded-lg"
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
      </main>
    </Layout>
  );
}
