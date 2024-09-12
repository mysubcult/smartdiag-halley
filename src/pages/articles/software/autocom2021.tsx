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

  // Основной заголовок страницы
  const baseTitle = "Инструкция по установке Autocom 2021.11";

  // Объект для хранения заголовков и текстов пунктов меню с эмодзи
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
  };

  if (!isClient) return null;

  return (
    <Layout>
      <Head>
        <title>{baseTitle} - Полное руководство по установке Autocom 2021.11</title>
        <meta name="description" content="Полное руководство по установке программы Autocom 2021.11 с подробными инструкциями по отключению антивирусов, настройке брандмауэра, установке и настройке программы, смене языка и первому подключению." />
        <meta name="keywords" content="установка Autocom 2021.11, отключение антивирусов, настройка брандмауэра, смена языка, автосканер, диагностическое ПО, руководство по установке" />
        <meta property="og:title" content="Инструкция по установке Autocom 2021.11" />
        <meta property="og:description" content="Следуйте нашей пошаговой инструкции по установке программы Autocom 2021.11. Отключите антивирусы, настройте брандмауэр, установите программу и смените язык интерфейса. Получите поддержку для первого подключения и ответы на частые вопросы." />
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
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
              Меню навигации
            </button>
          </div>
          <aside className={`lg:w-1/6 w-full text-center lg:text-left ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:sticky top-24 h-max self-start bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 px-4 mx-auto shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-700 py-4 transition-all duration-300 ease-in-out`}>
            <h3 className="text-center text-xl font-bold mb-3">Навигация</h3>
            <hr className="border-b-2 border-red-500 mr-[-16px] ml-[-16px]"/>
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
              Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.
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
                quality={75}
                layout="responsive"
              />
            </section>

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
                quality={75}
                layout="responsive"
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="install-program">Установка программы</h2>
              <hr className="border-neutral-300 mb-4" />
              <ol className="list-decimal ml-5">
                <li>Загрузите архив с названием <strong className="text-red-500">Autocom 2021.11.rar</strong> и после завершения загрузки распакуйте его. Если при открытии архива или попытке распаковки возникает ошибка, рекомендуем убедиться, что архив был полностью загружен. (Иногда такие ошибки могут возникать из-за встроенного антивируса в Яндекс.Браузере, поэтому стоит также временно отключить его. Это можно сделать, перейдя в &quot;настройки браузера&quot;, затем в раздел &quot;безопасность&quot; и убрав галочку с опции &quot;Проверять безопасность посещаемых сайтов и загружаемых файлов&quot;. После этого попробуйте снова открыть архив и распаковать его.)</li>
                <li>Запустите файл установки.</li>
                <li>Нажмите <strong className="text-red-500">Next</strong>.</li>
                {/* Убираем картинку после этого пункта */}
                <li>Введите пароль: <code className="text-red-500">NewSoftware2021</code> и нажмите <strong className="text-red-500">Next</strong>.</li>
                <li>Выберите путь установки.</li>
                <li>Выберите тип вашего прибора. Если у вас версия прибора с двумя платами или если вы не знаете вариацию вашего прибора, выберите <strong className="text-red-500">Type 1</strong>. Если у вас ОДНОПЛАТНЫЙ прибор, выберите <strong className="text-red-500">Type 2</strong> и нажмите <strong className="text-red-500">Next</strong>. Этот шаг крайне важен при выборе. Помните, что неправильный выбор типа при установке и последующей перепрошивке может привести к неработоспособности прибора.</li>
                {/* Перемещаем картинку сюда */}
                <Image
                  src="/images/install/install-step1.png"
                  alt="Начало установки программы"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Оставьте отмеченным пункт <strong className="text-red-500">&apos;Создать ярлыки на рабочем столе&apos;</strong>, затем нажмите <strong className="text-red-500">Next</strong> и далее <strong className="text-red-500">Install</strong>. По завершении установки, вам будет предложено установить драйверы для устройства и дополнительные файлы – необходимо выполнить установку. Если установочные файлы дополнительных программ сообщат, что данные программы уже установлены на вашем компьютере и предложат их модифицировать/обновить, пожалуйста, согласитесь.</li>
                <Image
                  src="/images/install/install-step3.png"
                  alt="Создание ярлыков на рабочем столе"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Для обеспечения работы программы, пожалуйста, добавьте папку с установленным приложением в список исключений вашего антивируса (если у вас установлен антивирус) и в список исключений Защитника Windows. Этот шаг крайне важен, иначе после первого запуска программа может быть автоматически удалена антивирусом. Заметьте, стандартный антивирус Защитника Windows имеет свойство самостоятельного включения и может активироваться в любой момент. Если папка с программой не будет включена в список исключений, программа рискует быть удалена.</li>
                <li>Запустите программу, щелкнув на ярлыке на рабочем столе. Появится окно с запросом <strong className="text-red-500">Activation ID</strong>. Пожалуйста, скопируйте это сообщение и отправьте его нам для получения ключа активации. Чтобы связаться с нами, воспользуйтесь удобным для вас способом: через онлайн-чат на нашем сайте, Telegram-бота (@smartdiag_robot), WhatsApp (https://wa.me/message/XVMV4LKBTXB4E1) или заполните форму обратной связи по ссылке (https://смартдиаг.рф/#contact), выбрав тему &quot;активация прибора&quot;. Не забудьте указать номер вашего заказа и ваш Activation ID.</li>
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

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="change-language">Смена языка в программе</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                Для смены языка интерфейса программы:
              </p>
              <ol className="list-decimal ml-5 mb-4">
                <li>После запуска программы нажмите <strong className="text-red-500">Settings</strong>.</li>
                <Image
                  src="/images/install/change-language-step1.png"
                  alt="Меню настроек программы"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Выберите и нажмите на пункт <strong className="text-red-500">Language</strong>.</li>
                <Image
                  src="/images/install/change-language-step2.png"
                  alt="Выбор языка"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
                <li>Выберите нужный язык и нажмите <strong className="text-red-500">OK</strong>.</li>
                <Image
                  src="/images/install/change-language-step3.png"
                  alt="Подтверждение выбора языка"
                  width={800}
                  height={600}
                  quality={75}
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
                  quality={75}
                  layout="responsive"
                />
                <li>Для обновления прибора необходимо сначала подключить его к разъему <strong className="text-red-500">OBD</strong>, затем нажать кнопку <strong className="text-red-500">Тест</strong>, а после этого нажать кнопку <strong className="text-red-500">Обновить</strong> и дождаться окончания процесса обновления. Если прибор не будет подключен к разъему OBD, то после нажатия кнопки Тест будет выведено сообщение об ошибке: <strong className="text-red-500">Тест: Ошибка</strong>.</li>
                <Image
                  src="/images/install/first-connection-step2.png"
                  alt="Процесс обновления устройства"
                  width={800}
                  height={600}
                  quality={75}
                  layout="responsive"
                />
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="faq">Часто задаваемые вопросы (FAQ)</h2>
              <hr className="border-neutral-300 mb-4" />
              <ul className="list-disc ml-5">
                <li><strong className="text-red-500">Откуда скачать программу?</strong> - Вы можете скачать необходимое программное обеспечение вместе с подробной инструкцией по установке на нашем официальном веб-сайте по следующей ссылке. Для этого перейдите в раздел Программы -&gt; Мультимарочные -&gt; Delphi DS150e и нажмите кнопку Скачать.</li>
                <li><strong className="text-red-500">Ошибка при открытии архива</strong> - В случае возникновения ошибки при открытии скачанного архива с программой, есть несколько причин, которые могут вызывать данную проблему. Одной из наиболее частых причин является наличие антивирусного программного обеспечения, которое может блокировать запуск файла архива. Проверьте настройки антивирусной программы и убедитесь, что она не блокирует открытие архива. Также следует убедиться, что у вас установлена последняя версия программы для разархивации архивов, например, WinRAR или WinZip. Устаревшая версия программы также может вызывать проблемы при открытии архивов. Если вы используете для скачивания архива Яндекс Браузер, обратите внимание, что иногда защита в браузере может помешать корректному открытию файлов. Чтобы избежать этой проблемы, рекомендуется отключить функцию проверки безопасности для скачиваемых файлов. Для этого зайдите в настройки браузера, перейдите на вкладку &quot;Безопасность&quot; и снимите галочку с опции &quot;Проверять безопасность посещаемых сайтов и загружаемых файлов&quot;. Если причина не в антивирусной программе и у вас установлена актуальная версия программы для разархивации, попробуйте повторно скачать архив и убедитесь, что он был загружен полностью.</li>
                <li><strong className="text-red-500">Проблемы с запуском на Windows 10, 11</strong> - Была обнаружена проблема с запуском программы на некоторых версиях Windows 10 и Windows 11. Для решения данной проблемы необходимо удалить следующее обновление через панель управления: &quot;Microsoft .NET Framework 4.8.1 в Windows 11 для 64-разрядных систем (KB5011048)&quot;. Кроме того, вам следует выполнить все необходимые действия в соответствии с инструкцией, представленной в папке &quot;Если не запускается программа&quot;.</li>
                <li><strong className="text-red-500">После установки программа не запускается, файл Main.exe не найден</strong> - Наиболее частой причиной такой проблемы является антивирусное ПО. В этом случае вам следует удалить программу полностью с компьютера и затем установить ее заново, следуя инструкции. Не забудьте добавить папку с программой в исключения антивируса после ее установки, чтобы предотвратить повторное блокирование. Если программа не запускается или возникают ошибки, и вы скачали ее из нашего облачного хранилища. В таком случае, там есть папка «Если не запускается программа». Следуйте инструкциям в этой папке, и там же вы найдете подробное руководство по устранению возникших проблем.</li>
                <li><strong className="text-red-500">Что такое Activation ID?</strong> - Activation ID — это уникальный идентификатор, необходимый для активации программы. Он автоматически генерируется при первом запуске программы. Activation ID состоит из 43 символов, которые включают в себя буквы латинского алфавита и цифры. Пример Activation ID: 9FGT8-WX12E-YZ345-ABCDE-67890-12345-FGH67. Это сообщение необходимо скопировать и отправить нам для получения ключа активации. Activation ID уникален для каждого устройства, на котором устанавливается программа, поэтому его нельзя использовать на другом устройстве.</li>
                <li><strong className="text-red-500">Хочу установить ПО на другое устройство</strong> - Нет, для каждого устройства генерируется уникальный ключ активации. Если вы хотите установить программное обеспечение на другое устройство, вам нужно обратиться в техническую поддержку, чтобы мы могли сгенерировать для вас новый ключ активации. Обращайтесь к нам в любое время, мы всегда готовы помочь вам с любыми вопросами по нашему ПО.</li>
                <li><strong className="text-red-500">У меня не получается установить ПО</strong> - Наша команда готова оказать помощь всем нашим клиентам с установкой и настройкой программного обеспечения. Наши операторы доступны: ПН-ПТ: 10:00 - 19:00 (по МСК), СБ-ВС: 10:00 -18:00 (по МСК). Чтобы получить необходимую помощь, вам необходимо сначала попробовать установить программу согласно инструкциям. После этого, поделитесь подробным описанием ваших действий и того, что вы делали, и почему у вас в итоге ничего не получилось. Мы готовы решить эту проблему вместе с вами. Помимо попытки самостоятельной установки, убедитесь, что вы посмотрели раздел FAQ и не нашли там ответ на ваш вопрос. Чтобы связаться с нами, воспользуйтесь удобным для вас способом: через онлайн-чат на нашем сайте, Telegram-бота (https://смартдиаг-поддержка.рф/telegram), WhatsApp (https://смартдиаг-поддержка.рф/whatsapp) или заполните форму обратной связи по ссылке (https://смартдиаг.рф/#contact)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 scroll-section" id="attention">ВНИМАНИЕ!</h2>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4">
                <strong className="text-red-500">Запрещено</strong> подключать автосканер в USB-порт ноутбука, зарядка которого осуществляется от бортовой сети диагностируемого автомобиля (т.е. через адаптер от прикуривателя)!
              </p>
            </section>
            
            {/* Кнопка "Вернуться в блог" перемещена сюда, чтобы быть внизу страницы */}
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
