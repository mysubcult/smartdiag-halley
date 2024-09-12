import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

// Metadata from archive.txt
export const metadata = {
  description: 'Полное руководство по установке программы Autocom 2021.11 с подробными инструкциями по отключению антивирусов, настройке брандмауэра, установке и настройке программы, смене языка и первому подключению.',
  keywords: 'установка Autocom 2021.11, отключение антивирусов, настройка брандмауэра, смена языка, автосканер, диагностическое ПО, руководство по установке',
};

export default function BlogPost() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const baseTitle = "Инструкция по установке Autocom 2021.11";

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
    <Layout title={baseTitle} description={metadata.description} keywords={metadata.keywords}>
      <Head>
        <title>{baseTitle} - Полное руководство по установке Autocom 2021.11</title>
        <meta property="og:title" content="Инструкция по установке Autocom 2021.11" />
        <meta property="og:description" content="Подробная инструкция по установке программы Autocom 2021.11" />
        <meta property="og:image" content="/images/install/og-image.png" />
      </Head>

      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          {/* Navigation */}
          <aside className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}>
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-red-500 mr-[-16px] ml-[-16px]"/>
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
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Отключите все антивирусы, в том числе и стандартный Защитник Windows. Мы неоднократно проверяли все файлы - они не содержат никаких вирусов. Вы можете убедиться в этом, например, скачав, на наш взгляд, достойный антивирус Dr.Web и проверить все файлы программы на вирусы, и вы убедитесь в их отсутствии.
              </p>
              <p className="mb-4">
                <strong className="text-red-500">Шаги для отключения Защитника Windows:</strong>
                <ol className="list-decimal ml-5">
                  <li>Зайдите в <strong className="text-red-500">Параметры</strong>, затем перейдите в <strong className="text-red-500">Безопасность Windows</strong> и отключите ползунки так, как показано на скриншоте. Если у вас есть сторонние антивирусы, то их тоже нужно отключить.</li>
                </ol>
              </p>
              <Image
                src="/images/install/disable-windows-defender-step1.png"
                alt="Параметры безопасности Windows"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
            </section>

            {/* Отключение брандмауэра */}
            <section id="firewall">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Отключение брандмауэра</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                На время установки следует отключить <strong className="text-red-500">брандмауэр Защитника Windows</strong>.
              </p>
              <ol className="list-decimal ml-5 mb-4">
                <li>Откройте <strong className="text-red-500">Панель управления</strong>, далее откройте <strong className="text-red-500">Брандмауэр Защитника Windows</strong> и сделайте все, как ниже на скриншоте, и нажмите Ok.</li>
              </ol>
              <Image
                src="/images/install/disable-firewall-step1.png"
                alt="Открытие Брандмауэра Защитника Windows"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
            </section>

            {/* Установка программы */}
            <section id="install-program">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Установка программы</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Загрузите архив с названием <strong className="text-red-500">Autocom 2021.11.rar</strong> и после завершения загрузки распакуйте его.</li>
                <li>Запустите файл установки.</li>
                <li>Нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Введите пароль: <code className="text-red-500">NewSoftware2021</code> и нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Выберите путь установки.</li>
                <li>Выберите тип вашего прибора: <strong className="text-red-500">Type 1</strong> или <strong className="text-red-500">Type 2</strong>.</li>
                <Image
                  src="/images/install/install-step1.png"
                  alt="Начало установки программы"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Добавьте папку с установленным приложением в список исключений антивируса.</li>
                <li>Запустите программу, щелкнув на ярлыке на рабочем столе.</li>
                <Image
                  src="/images/install/activation-id.png"
                  alt="Окно запроса Activation ID"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
              </ol>
            </section>

            {/* Смена языка в программе */}
            <section id="change-language">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Смена языка в программе</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">Для смены языка интерфейса программы:</p>
              <ol className="list-decimal ml-5 mb-4">
                <li>Нажмите <strong className="text-red-500">Settings</strong>, затем <strong className="text-red-500">Language</strong>.</li>
                <Image
                  src="/images/install/change-language-step1.png"
                  alt="Меню настроек программы"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
              </ol>
            </section>

            {/* Первое подключение */}
            <section id="first-connection">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Первое подключение</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5 mb-4">
                <li>В программе нажмите <strong className="text-red-500">Настройки</strong>, далее <strong className="text-red-500">Установки оборудования</strong>.</li>
                <Image
                  src="/images/install/first-connection-step1.png"
                  alt="Меню настроек подключения"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
              </ol>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">Часто задаваемые вопросы (FAQ)</h2>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc ml-5">
                <li><strong className="text-red-500">Откуда скачать программу?</strong></li>
                <li><strong className="text-red-500">Ошибка при открытии архива</strong></li>
                <li><strong className="text-red-500">Проблемы с запуском на Windows 10, 11</strong></li>
              </ul>
            </section>

            {/* ВНИМАНИЕ */}
            <section id="attention">
              <h2 className="text-2xl font-semibold mt-8 scroll-section">ВНИМАНИЕ!</h2>
              <hr className="border-neutral-300 mb-4" />
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
      </main>
    </Layout>
  );
}
