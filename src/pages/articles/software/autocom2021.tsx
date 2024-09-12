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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<string>('Инструкция по установке Autocom 2021.11');

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
  } as const;

  useEffect(() => {
    setIsClient(true);
    document.title = baseTitle;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, document.title, window.location.pathname);
    setCurrentTitle(baseTitle);
  };

  const closeModal = () => setIsModalOpen(false);

  if (!isClient) return null;

  return (
    <Layout title={baseTitle} description="Полное руководство по установке Autocom 2021.11 с инструкциями." keywords="установка Autocom, руководство по установке">
      <Head>
        <title>{baseTitle}</title>
        {/* SEO Meta Tags */}
      </Head>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          <div className="lg:hidden w-full flex justify-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-r from-black to-red-500 text-white text-base rounded-full px-6 py-3 font-medium shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
              aria-label="Открыть меню навигации"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 mr-2 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
              Меню навигации
            </button>
          </div>

          <aside className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}>
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-red-500 mr-[-16px] ml-[-16px]" />
            <nav className="space-y-3">
              <a onClick={scrollToTop} className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">{titles['']}</a>
              {Object.entries(titles).map(([key, value]) => {
                if (key === '') return null;
                return (
                  <Link key={key} href={`#${key}`} passHref scroll={false}>
                    <a className="flex items-center text-base text-left justify-start text-inherit hover:text-red-500 cursor-pointer transition-colors duration-300">{value}</a>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <article className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4 pt-6 lg:pt-0" id="top">
            <h1 className="text-4xl font-bold text-center">Инструкция по установке Autocom 2021.11</h1>
            <p className="pt-6 pb-8 text-base dark:text-neutral-400">
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Пожалуйста, внимательно следуйте всем пунктам инструкции.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="disable-antivirus">Отключение антивирусов</h2>
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
                layout="responsive"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              />
            </section>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src="/images/install/disable-windows-defender-step1.png"
                    alt="Параметры безопасности Windows"
                    width={1920}
                    height={1080}
                    layout="responsive"
                  />
                  <button onClick={closeModal} className="absolute top-4 right-4 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 active:scale-90 transition-all focus:outline-none">
                    &#x2715;
                  </button>
                </div>
              </div>
            )}

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="firewall">Отключение брандмауэра</h2>
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
                layout="responsive"
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="install-program">Установка программы</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Загрузите архив с названием <strong className="text-red-500">Autocom 2021.11.rar</strong> и после завершения загрузки распакуйте его. Если при открытии архива или попытке распаковки возникает ошибка, убедитесь, что архив был полностью загружен.</li>
                <li>Запустите файл установки.</li>
                <li>Нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Введите пароль: <code className="text-red-500">NewSoftware2021</code> и нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Выберите путь установки.</li>
                <li>Выберите тип вашего прибора. Если у вас версия прибора с двумя платами, выберите <strong className="text-red-500">Type 1</strong>. Если у вас ОДНОПЛАТНЫЙ прибор, выберите <strong className="text-red-500">Type 2</strong> и нажмите <strong className="text-red-500">Next</strong>.</li>
                <Image
                  src="/images/install/install-step1.png"
                  alt="Начало установки программы"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                <li>Оставьте отмеченным пункт <strong className="text-red-500">&apos;Создать ярлыки на рабочем столе&apos;</strong>, затем нажмите <strong className="text-red-500">Next</strong> и далее <strong className="text-red-500">Install</strong>. По завершении установки, вам будет предложено установить драйверы для устройства.</li>
                <Image
                  src="/images/install/install-step3.png"
                  alt="Создание ярлыков на рабочем столе"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="change-language">Смена языка в программе</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5 mb-4">
                <li>После запуска программы нажмите <strong className="text-red-500">Settings</strong>.</li>
                <Image
                  src="/images/install/change-language-step1.png"
                  alt="Меню настроек программы"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                <li>Выберите и нажмите на пункт <strong className="text-red-500">Language</strong>.</li>
                <Image
                  src="/images/install/change-language-step2.png"
                  alt="Выбор языка"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                <li>Выберите нужный язык и нажмите <strong className="text-red-500">OK</strong>.</li>
                <Image
                  src="/images/install/change-language-step3.png"
                  alt="Подтверждение выбора языка"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="first-connection">Первое подключение</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5 mb-4">
                <li>В программе нажмите <strong className="text-red-500">Настройки</strong> и далее <strong className="text-red-500">Установки оборудования</strong>.</li>
                <Image
                  src="/images/install/first-connection-step1.png"
                  alt="Меню настроек подключения"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                <li>Для обновления прибора подключите его к разъему <strong className="text-red-500">OBD</strong>, нажмите кнопку <strong className="text-red-500">Тест</strong>, затем <strong className="text-red-500">Обновить</strong>.</li>
                <Image
                  src="/images/install/first-connection-step2.png"
                  alt="Процесс обновления устройства"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="faq">Часто задаваемые вопросы (FAQ)</h2>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc ml-5">
                <li><strong className="text-red-500">Откуда скачать программу?</strong> - Вы можете скачать программу на нашем сайте в разделе Программы.</li>
                <li><strong className="text-red-500">Ошибка при открытии архива</strong> - Проверьте настройки антивируса, убедитесь, что у вас установлена последняя версия программы для разархивации.</li>
                <li><strong className="text-red-500">Проблемы с запуском на Windows 10, 11</strong> - Удалите обновление "Microsoft .NET Framework 4.8.1".</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="attention">ВНИМАНИЕ!</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                <strong className="text-red-500">Запрещено</strong> подключать автосканер в USB-порт ноутбука, зарядка которого осуществляется от бортовой сети автомобиля!
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

          <div className="lg:w-1/6 hidden lg:block"></div>
        </div>
      </main>
    </Layout>
  );
}
