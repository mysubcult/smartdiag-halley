import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const baseTitle = "Инструкция по установке Autocom 2021.11";
  const titles = {
    '': '🏠 В начало',
    'disable-antivirus': '🛡️ Отключение антивирусов',
    'firewall': '🔥 Отключение брандмауэра',
    'install-program': '📥 Установка программы',
    'change-language': '🌐 Смена языка в программе',
    'first-connection': '🔌 Первое подключение',
    'faq': '❓ Часто задаваемые вопросы',
    'attention': '⚠️ ВНИМАНИЕ!'
  };

  useEffect(() => {
    setIsClient(true);
    document.title = baseTitle;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isClient) return null;

  return (
    <Layout title={baseTitle} description="Полное руководство по установке Autocom 2021.11 с подробными инструкциями">
      <Head>
        <title>{baseTitle} - Полное руководство по установке Autocom 2021.11</title>
        <meta name="description" content="Подробные инструкции по отключению антивирусов, настройке брандмауэра, установке программы, смене языка и первому подключению." />
        <meta name="keywords" content="установка Autocom 2021.11, отключение антивирусов, настройка брандмауэра, смена языка, автосканер, диагностическое ПО, руководство по установке" />
        <meta property="og:title" content="Инструкция по установке Autocom 2021.11" />
        <meta property="og:description" content="Следуйте нашей пошаговой инструкции по установке программы Autocom 2021.11." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://смартдиаг.рф${router.asPath}`} />
        <meta property="og:image" content="/images/install/og-image.png" />
        <link rel="canonical" href={`https://смартдиаг.рф${router.asPath}`} />
      </Head>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          <div className="lg:hidden w-full flex justify-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-r from-black to-red-500 text-white text-base rounded-full px-6 py-3 font-medium shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
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
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
              </svg>
              Меню навигации
            </button>
          </div>
          <aside className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg py-4`}>
            <h3 className="text-xl font-bold mb-3">Навигация</h3>
            <nav className="space-y-3">
              <a onClick={scrollToTop} className="cursor-pointer transition-colors duration-300">{titles['']}</a>
              {Object.entries(titles).map(([key, value]) => {
                if (key === '') return null;
                return (
                  <Link key={key} href={`#${key}`} passHref scroll={false}>
                    <a className="cursor-pointer transition-colors duration-300">{value}</a>
                  </Link>
                );
              })}
            </nav>
          </aside>
          <article className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0" id="top">
            <h1 className="text-4xl font-bold text-center">Инструкция по установке Autocom 2021.11</h1>
            <p className="pt-6 pb-8 text-base dark:text-neutral-400">
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.
            </p>

            {/* Отключение антивирусов */}
            <section id="disable-antivirus">
              <h2 className="text-2xl font-semibold">Отключение антивирусов</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Отключите все антивирусы, в том числе и стандартный Защитник Windows. Мы неоднократно проверяли все файлы - они не содержат никаких вирусов.
              </p>
              <p className="mb-4">
                <strong className="text-red-500">Шаги для отключения Защитника Windows:</strong>
                <ol className="list-decimal ml-5">
                  <li>Зайдите в <strong className="text-red-500">Параметры</strong>, затем перейдите в <strong className="text-red-500">Безопасность Windows</strong> и отключите ползунки так, как показано на скриншоте.</li>
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
              <h2 className="text-2xl font-semibold">Отключение брандмауэра</h2>
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
              <h2 className="text-2xl font-semibold">Установка программы</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Загрузите архив с названием <strong className="text-red-500">Autocom 2021.11.rar</strong> и распакуйте его.</li>
                <li>Запустите файл установки.</li>
                <li>Введите пароль: <code className="text-red-500">NewSoftware2021</code> и нажмите <strong>Next</strong>.</li>
                <li>Выберите тип вашего прибора: <strong className="text-red-500">Type 1</strong> для приборов с двумя платами, или <strong className="text-red-500">Type 2</strong> для одноплатных приборов.</li>
                <Image
                  src="/images/install/install-step1.png"
                  alt="Начало установки программы"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Установите драйверы для устройства и добавьте программу в исключения антивируса.</li>
              </ol>
            </section>

            {/* Смена языка */}
            <section id="change-language">
              <h2 className="text-2xl font-semibold">Смена языка в программе</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>После запуска программы выберите <strong>Settings</strong>, затем <strong>Language</strong>.</li>
                <li>Выберите нужный язык и подтвердите выбор.</li>
              </ol>
              <Image
                src="/images/install/change-language-step1.png"
                alt="Меню настроек программы"
                width={800}
                height={600}
                quality={75}
                layout="responsive"
              />
            </section>

            {/* Первое подключение */}
            <section id="first-connection">
              <h2 className="text-2xl font-semibold">Первое подключение</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Подключите прибор к разъему OBD и выполните тест устройства.</li>
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
              <h2 className="text-2xl font-semibold">Часто задаваемые вопросы (FAQ)</h2>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc ml-5">
                <li><strong>Ошибка при открытии архива:</strong> Проверьте антивирус и попробуйте скачать архив заново.</li>
                <li><strong>Проблемы с запуском на Windows 10, 11:</strong> Удалите обновление KB5011048 для решения проблемы.</li>
              </ul>
            </section>

            {/* Внимание */}
            <section id="attention">
              <h2 className="text-2xl font-semibold">ВНИМАНИЕ!</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                <strong className="text-red-500">Запрещено</strong> подключать автосканер к ноутбуку, заряжаемому от бортовой сети автомобиля.
              </p>
            </section>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog" passHref>
                <a className="bg-gradient-to-r from-black to-red-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </a>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
}
