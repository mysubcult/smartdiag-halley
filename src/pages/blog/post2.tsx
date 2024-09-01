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

  // Основной заголовок страницы
  const baseTitle = "Инструкция по установке Autocom 2021.11";

  // Объект для хранения заголовков и текстов пунктов меню с эмодзи
  const titles = {
    '': '🏠 В начало',
    'disable-antivirus': '🛡️ Отключение антивирусов',
    'install-program': '📥 Установка программы',
    'change-language': '🌐 Смена языка в программе',
    'first-connection': '🔌 Первое подключение',
    'faq': '❓ Часто задаваемые вопросы',
    'attention': '⚠️ ВНИМАНИЕ!'
  } as const;

  useEffect(() => {
    setIsClient(true);
    document.title = baseTitle;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  if (!isClient) return null;

  return (
    <Layout>
      <Head>
        <title>{baseTitle}</title>
        <meta name="description" content="Руководство по установке программы Autocom 2021.11" />
        <meta name="keywords" content="установка, Autocom, инструкции, антивирус, подключение" />
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
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-rose-500 mr-[-16px] ml-[-16px]"/>
            <nav className="space-y-3">
              <a onClick={scrollToTop} className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">{titles['']}</a>
              {Object.entries(titles).map(([key, value]) => {
                if (key === '') return null;
                return (
                  <Link key={key} href={`#${key}`} passHref scroll={false}>
                    <a className="flex items-center text-base text-left justify-start text-inherit hover:text-rose-500 cursor-pointer transition-colors duration-300">{value}</a>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0" id="top">
            <h2 className="text-4xl font-bold text-center">Инструкция по установке Autocom 2021.11</h2>
            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              Данная инструкция поможет вам установить программу Autocom 2021.11 на ваш компьютер, избегая возможных проблем.
            </p>
            <Image
              src="/images/blog/autocom-install.jpg"
              alt="Установка Autocom"
              width={1920}
              height={1080}
              quality={75}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="disable-antivirus">Отключение антивирусов</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Перед началом установки программы, отключите все антивирусы, включая стандартный Защитник Windows. Это необходимо для предотвращения ложного срабатывания на установочные файлы.
              </p>
              <p className="mb-4">
                <strong>Шаги для отключения Защитника Windows:</strong>
                <ol className="list-decimal ml-5">
                  <li>Откройте Параметры и перейдите в раздел Безопасность Windows.</li>
                  <li>Отключите все функции защиты в реальном времени, как показано на изображении ниже.</li>
                </ol>
              </p>
              <Image
                src="/images/blog/disable-windows-defender.jpg"
                alt="Отключение Защитника Windows"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="install-program">Установка программы</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Следуйте следующим шагам для установки программы:
              </p>
              <ol className="list-decimal ml-5 mb-4">
                <li>Загрузите архив Autocom 2021.11.rar и распакуйте его.</li>
                <li>Запустите файл установки и следуйте инструкциям мастера установки.</li>
                <li>Введите пароль <code>NewSoftware2021</code> и продолжите установку.</li>
                <li>Выберите тип устройства: <strong>Type 1</strong> для двухплатных, <strong>Type 2</strong> для одноплатных приборов.</li>
                <li>Завершите установку, следуя дальнейшим инструкциям.</li>
              </ol>
              <Image
                src="/images/blog/install-autocom.jpg"
                alt="Процесс установки Autocom"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="change-language">Смена языка в программе</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Для смены языка интерфейса программы, зайдите в <strong>Settings</strong>, выберите <strong>Language</strong> и выберите нужный язык.
              </p>
              <Image
                src="/images/blog/change-language.jpg"
                alt="Смена языка в программе Autocom"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="first-connection">Первое подключение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Подключите прибор к разъему OBD, откройте программу и выполните тестирование и обновление устройства.
              </p>
              <Image
                src="/images/blog/first-connection.jpg"
                alt="Первое подключение устройства"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="faq">Часто задаваемые вопросы (FAQ)</h3>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc ml-5">
                <li><strong>Откуда скачать программу?</strong> - Программу можно скачать с официального сайта.</li>
                <li><strong>Ошибка при открытии архива</strong> - Отключите антивирус и убедитесь в наличии последней версии архиватора.</li>
                <li><strong>Проблемы с запуском на Windows 10, 11</strong> - Удалите обновление .NET Framework 4.8.1.</li>
                <li><strong>Что такое Activation ID?</strong> - Это уникальный идентификатор, необходимый для активации программы.</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 scroll-section" id="attention">ВНИМАНИЕ!</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Запрещено подключать устройство в USB-порт ноутбука, питаемого от бортовой сети автомобиля!
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
