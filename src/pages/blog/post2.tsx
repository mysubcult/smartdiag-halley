import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function InstallationGuide() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для прокрутки страницы наверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title="Инструкция по установке Autocom 2021.11">
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

          {/* Панель навигации */}
          <div
            className={`lg:w-1/6 w-full text-center lg:text-left ${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}
          >
            <h3 className="text-center text-xl font-bold border-b-2 border-rose-500 mb-3">Навигация</h3>
            <nav className="space-y-3">
              <a
                onClick={scrollToTop}
                className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left cursor-pointer"
              >
                🏠 В начало
              </a>
              <Link href="#disable-antivirus" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  🛡️ Отключение антивирусов
                </a>
              </Link>
              <Link href="#installation-steps" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  💾 Шаги установки
                </a>
              </Link>
              <Link href="#language-change" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  🌐 Смена языка
                </a>
              </Link>
              <Link href="#first-connection" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  🔌 Первое подключение
                </a>
              </Link>
              <Link href="#faq" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  ❓ Часто задаваемые вопросы
                </a>
              </Link>
            </nav>
          </div>

          {/* Основной контент инструкции */}
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">Инструкция по установке Autocom 2021.11</h2>

            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.
            </p>

            <Image
              src="/images/blog/installation.jpg"
              alt="Установка Autocom"
              width={1920}
              height={1080}
              quality={75}
              layout="responsive"
              sizes="100vw"
              className="w-full max-w-full mx-auto mb-8"
              priority
            />

            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="disable-antivirus">Отключение антивирусов</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Отключите все антивирусы, в том числе и стандартный Защитник Windows. Это необходимо, чтобы избежать блокировки файлов установки.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="installation-steps">Шаги установки</h3>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal list-inside mb-4">
                <li>Загрузите архив с названием Autocom 2021.11.rar и распакуйте его.</li>
                <li>Запустите файл установки и следуйте инструкциям на экране.</li>
                <li>Введите пароль: <code>NewSoftware2021</code> и нажмите Next.</li>
                <li>Выберите путь установки и тип вашего устройства (Type 1 или Type 2).</li>
                <li>Добавьте папку с установленным приложением в список исключений вашего антивируса.</li>
                <li>Запустите программу, скопируйте Activation ID и отправьте его нам для получения ключа активации.</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="language-change">Смена языка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                После запуска программы нажмите Settings, выберите Language, и выберите нужный язык.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="first-connection">Первое подключение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Подключите устройство к разъему OBD, затем нажмите кнопку Тест, а после этого кнопку Обновить.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="faq">Часто задаваемые вопросы (FAQ)</h3>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc list-inside mb-4">
                <li>Ошибка при открытии архива: Убедитесь, что антивирусное ПО не блокирует архив и используйте актуальную версию программы для разархивации.</li>
                <li>Программа не запускается: Возможно, антивирус удалил файл. Переустановите программу и добавьте её в исключения антивируса.</li>
              </ul>
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
