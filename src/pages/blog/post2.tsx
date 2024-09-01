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
    'introduction': '🔍 Введение',
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
  };

  if (!isClient) return null;

  return (
    <Layout>
      <Head>
        <title>{baseTitle}</title>
        <meta name="description" content="Полное руководство по установке программы Autocom 2021.11" />
        <meta name="keywords" content="установка, Autocom, инструкции, антивирус, подключение, FAQ" />
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
            
            <h3 className="text-2xl font-semibold mt-8 scroll-section" id="introduction">Введение</h3>
            <hr className="border-neutral-300 mb-4" />
            <p className="pt-6 pb-8 text-base dark:text-neutral-400">
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 scroll-section" id="disable-antivirus">Отключение антивирусов</h3>
            <hr className="border-neutral-300 mb-4" />
            <p className="mb-4">
              Отключите все антивирусы, в том числе и стандартный Защитник Windows. Мы неоднократно проверяли все файлы - они не содержат никаких вирусов. Вы можете убедиться в этом, например, скачав, на наш взгляд, достойный антивирус Dr.Web и проверить все файлы программы на вирусы, и вы убедитесь в их отсутствии.
            </p>
            <p className="mb-4">
              <strong>Шаги для отключения Защитника Windows:</strong>
              <ol className="list-decimal ml-5">
                <li>Зайдите в Параметры, затем перейдите в Безопасность Windows.</li>
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

            <h3 className="text-2xl font-semibold mt-8 scroll-section" id="firewall">Отключение брандмауэра</h3>
            <hr className="border-neutral-300 mb-4" />
            <p className="mb-4">
              На время установки следует отключить брандмауэр Защитника Windows.
            </p>
            <ol className="list-decimal ml-5 mb-4">
              <li>Откройте Панель управления.</li>
              <li>Перейдите в Брандмауэр Защитника Windows и отключите его.</li>
            </ol>
            <Image
              src="/images/blog/disable-firewall.jpg"
              alt="Отключение брандмауэра Windows"
              width={800}
              height={600}
              quality={75}
              layout="responsive"
            />

            <h3 className="text-2xl font-semibold mt-8 scroll-section" id="install-program">Установка программы</h3>
            <hr className="border-neutral-300 mb-4" />
            <ol className="list-decimal ml-5">
              <li>Загрузите архив с названием Autocom 2021.11.rar и после завершения загрузки распакуйте его.</li>
              <li>Если при открытии архива или попытке распаковки возникает ошибка, убедитесь, что архив был полностью загружен.</li>
              <li>Запустите файл установки.</li>
              <li>Нажмите Next.</li>
              <li>Введите пароль: <code>NewSoftware2021</code> и нажмите Next.</li>
              <li>Нажмите Next.</li>
              <li>Выберите путь установки.</li>
              <li>Выберите тип вашего прибора. Если у вас версия прибора с двумя платами или если вы не знаете вариацию вашего прибора, выберите Type 1. Если у вас ОДНОПЛАТНЫЙ прибор, выберите Type 2 и нажмите Next.</li>
              <li>Нажмите Next.</li>
              <li>Оставьте отмеченным пункт 'Создать ярлыки на рабочем столе', затем нажмите Next и далее Install.</li>
              <li>По завершении установки, установите драйверы для устройства и дополнительные файлы.</li>
              <li>Добавьте папку с установленным приложением в список исключений вашего антивируса и Защитника Windows.</li>
              <li>Запустите программу, щелкнув на ярлыке на рабочем столе.</li>
              <li>Появится окно с запросом Activation ID. Скопируйте это сообщение и отправьте его нам для получения ключа активации.</li>
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
              Для смены языка интерфейса программы:
            </p>
            <ol className="list-decimal ml-5 mb-4">
              <li>После запуска программы нажмите Settings.</li>
              <li>Выберите пункт Language.</li>
              <li>Выберите нужный язык и нажмите OK.</li>
            </ol>
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
            <ol className="list-decimal ml-5 mb-4">
              <li>В программе нажмите Настройки, затем Установки оборудования.</li>
              <li>Для обновления прибора подключите его к разъему OBD, затем нажмите кнопку Тест и Обновить.</li>
              <li>Если прибор не подключен, будет выведено сообщение об ошибке: Тест: Ошибка.</li>
            </ol>
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
              <li><strong>Откуда скачать программу?</strong> - Программу можно скачать с нашего официального сайта.</li>
              <li><strong>Ошибка при открытии архива?</strong> - Проверьте настройки антивируса и убедитесь, что у вас последняя версия программы для разархивации.</li>
              <li><strong>Проблемы с запуском на Windows 10, 11?</strong> - Удалите обновление .NET Framework 4.8.1.</li>
              <li><strong>Файл Main.exe не найден?</strong> - Возможно, антивирус удалил файл. Установите программу заново и добавьте в исключения антивируса.</li>
              <li><strong>Что такое Activation ID?</strong> - Это уникальный идентификатор, необходимый для активации программы. Состоит из 43 символов.</li>
              <li><strong>У меня не получается установить ПО?</strong> - Обратитесь в службу поддержки, предоставив описание проблемы.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 scroll-section" id="attention">ВНИМАНИЕ!</h3>
            <hr className="border-neutral-300 mb-4" />
            <p className="mb-4">
              Запрещено подключать автосканер в USB-порт ноутбука, зарядка которого осуществляется от бортовой сети диагностируемого автомобиля (т.е. через адаптер от прикуривателя)!
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/#blog" passHref>
              <a className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                Вернуться в блог
              </a>
            </Link>
          </div>
          <div className="lg:w-1/6 hidden lg:block"></div>
        </div>
      </main>
    </Layout>
  );
}
