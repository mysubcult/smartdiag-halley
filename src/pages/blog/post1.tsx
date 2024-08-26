import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Определение текущей темы
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeEnabled);

    // Слушаем изменения класса на элементе <html> для динамической смены темы
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const darkMode = document.documentElement.classList.contains('dark');
          setIsDarkMode(darkMode);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center lg:space-x-6"> {/* Центрируем содержимое и уменьшаем отступ */}
          
          {/* Кнопка меню навигации на мобильных устройствах */}
          <div className="lg:hidden w-full text-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-rose-500 text-white text-base rounded-full px-4 py-2 font-medium"
              aria-label="Открыть меню навигации"
            >
              Меню навигации
            </button>
          </div>

          {/* Панель навигации как часть компонента */}
          <div className={`lg:w-1/6 ${isMenuOpen ? 'block' : 'hidden lg:block'} fixed lg:relative top-20 lg:top-0 left-4 lg:left-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 overflow-y-auto h-[calc(100vh-5rem)] px-4`}> {/* Фиксированная панель навигации */}
            <h3 className="text-center py-2 text-xl font-bold">Навигация</h3>
            <nav className="space-y-2">
              <Link href="#antivirus-issue">
                <a className="block text-base text-inherit hover:text-rose-500">Проблема с антивирусом</a>
              </Link>
              <Link href="#outdated-software">
                <a className="block text-base text-inherit hover:text-rose-500">Устаревшее ПО</a>
              </Link>
              <Link href="#download-errors">
                <a className="block text-base text-inherit hover:text-rose-500">Ошибки при загрузке</a>
              </Link>
              <Link href="#yandex-tips">
                <a className="block text-base text-inherit hover:text-rose-500">Советы для Яндекс Браузера</a>
              </Link>
              <Link href="#support">
                <a className="block text-base text-inherit hover:text-rose-500">Поддержка</a>
              </Link>
            </nav>
          </div>

          {/* Основной контент блога, центрированный и широкий */}
          <div className="lg:w-5/6 w-full lg:max-w-4xl mx-auto px-4"> {/* Центрируем и увеличиваем ширину */}
            <h2 className="text-4xl font-bold">Как справиться с ошибкой при открытии архива</h2>

            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения. Архивы являются удобным способом хранения и передачи больших объемов данных, однако иногда они могут не открываться, что вызывает неудобства. Ниже приведены основные причины этих проблем и рекомендации по их решению.
            </p>

            <Image
              src="/images/blog/post1.jpg"
              alt="Ошибки при открытии архива"
              width={1920}
              height={1080}
              quality={75}
              layout="responsive"
              sizes="100vw"
              className="w-full max-w-full mx-auto mb-8"
            />

            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8" id="antivirus-issue">Проблема с антивирусом</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4 scroll-section">
                Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением. Некоторые антивирусы могут блокировать доступ к архиву, считая его потенциально опасным, особенно если в нем содержатся исполняемые файлы (.exe). Чтобы решить эту проблему, попробуйте временно отключить антивирус или добавить архив в список исключений. Обратите внимание, что это может увеличить риск заражения компьютера, поэтому действуйте с осторожностью.
              </p>

              <h3 className="text-2xl font-semibold mt-8" id="outdated-software">Устаревшее программное обеспечение</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4 scroll-section">
                Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов или использовать устаревшие алгоритмы распаковки. Рекомендуется обновить программное обеспечение до последней версии, чтобы избежать подобных проблем. Например, если вы используете WinRAR или 7-Zip, проверьте сайт разработчика на наличие обновлений.
              </p>

              <h3 className="text-2xl font-semibold mt-8" id="download-errors">Ошибки при загрузке</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4 scroll-section">
                Иногда архив может не открываться из-за ошибок при его загрузке. Это может быть вызвано нестабильным интернет-соединением или перерывами в загрузке. Если вы столкнулись с этой проблемой, попробуйте загрузить файл повторно. Также можно использовать менеджер загрузок, который поддерживает возобновление загрузок, чтобы избежать повреждения файла.
              </p>

              <h3 className="text-2xl font-semibold mt-8" id="yandex-tips">Советы для пользователей Яндекс Браузера</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4 scroll-section">
                В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы. Чтобы решить эту проблему, можно отключить эту защиту в настройках браузера или добавить сайт, с которого производится загрузка, в список доверенных. Однако будьте осторожны при отключении защиты, так как это может повысить риски загрузки потенциально вредоносных файлов.
              </p>

              <h3 className="text-2xl font-semibold mt-8" id="support">Поддержка</h3>
              <hr className="border-neutral-300 mb-4" />
              <p className="mb-4 scroll-section">
                Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи. Возможно, проблема связана с конкретным файлом или настройками вашего компьютера. Служба поддержки сможет предоставить вам более детальные инструкции или предложить альтернативные решения.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog">
                <button className="bg-rose-500 text-white text-base rounded-full px-16 py-3 font-medium">
                  Вернуться в блог
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
