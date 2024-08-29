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
              <Link href="#disable-firewall" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  🔒 Отключение брандмауэра
                </a>
              </Link>
              <Link href="#installation-steps" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  💾 Установка программы
                </a>
              </Link>
              <Link href="#activation" passHref scroll={false}>
                <a className="flex items-center text-base text-inherit hover:text-rose-500 transition duration-300 text-left">
                  🔑 Активация программы
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
                Отключите все антивирусы, включая стандартный Защитник Windows. Мы неоднократно проверяли все файлы — они не содержат вирусов.
              </p>
              <p className="mb-4">
                Для отключения стандартного Защитника Windows: зайдите в Параметры, далее в Безопасность Windows и отключите ползунки.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="disable-firewall">Отключение брандмауэра</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                На время установки следует отключить брандмауэр Защитника Windows. Откройте Панель управления, найдите Брандмауэр Защитника Windows и отключите его.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="installation-steps">Установка программы</h3>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal list-inside mb-4">
                <li>Загрузите архив Autocom 2021.11.rar и распакуйте его.</li>
                <li>Запустите файл установки. Следуйте инструкциям на экране, нажимая Next.</li>
                <li>Введите пароль: <code>NewSoftware2021</code> и нажмите Next.</li>
                <li>Выберите путь установки.</li>
                <li>Выберите тип вашего прибора: Type 1 или Type 2. Этот шаг важен для правильной работы устройства.</li>
                <li>Отметьте пункт 'Создать ярлыки на рабочем столе' и нажмите Install.</li>
                <li>Добавьте папку с программой в список исключений антивируса и Защитника Windows.</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="activation">Активация программы</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Запустите программу и скопируйте Activation ID. Отправьте его нам через онлайн-чат, Telegram-бота или WhatsApp для получения ключа активации.
              </p>
              <p className="mb-4">
                После получения ключа активации вставьте его в программу и нажмите Activate.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="language-change">Смена языка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                После запуска программы нажмите Settings, выберите Language и выберите нужный язык.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="first-connection">Первое подключение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Подключите устройство к разъему OBD, затем нажмите кнопку Тест, а после этого кнопку Обновить. Дождитесь окончания процесса.
              </p>

              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="faq">Часто задаваемые вопросы (FAQ)</h3>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc list-inside mb-4">
                <li>Откуда скачать программу? Вы можете скачать ПО на нашем официальном сайте.</li>
                <li>Ошибка при открытии архива? Проверьте антивирусные настройки и используйте актуальную версию программы для разархивации.</li>
                <li>Проблема с запуском на Windows 10, 11? Удалите обновление "Microsoft .NET Framework 4.8.1" и следуйте инструкциям в папке "Если не запускается программа".</li>
                <li>Программа не запускается, файл Main.exe не найден? Возможно, антивирус удалил файл. Переустановите программу и добавьте её в исключения антивируса.</li>
                <li>Что такое Activation ID? Это уникальный идентификатор для активации вашего устройства.</li>
                <li>Хочу установить ПО на другое устройство? Обратитесь в техническую поддержку для получения нового ключа активации.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 scroll-section">ВНИМАНИЕ!</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Запрещено подключать автосканер в USB-порт ноутбука, зарядка которого осуществляется от бортовой сети автомобиля!
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
