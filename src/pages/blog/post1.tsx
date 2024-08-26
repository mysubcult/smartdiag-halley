import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Layout>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
          {/* Кнопка меню навигации на мобильных устройствах */}
          <div className="lg:hidden w-full text-center mb-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-rose-500 text-white text-base rounded-full px-4 py-2 font-medium"
              aria-label="Открыть меню навигации"
            >
              Меню навигации
            </button>
          </div>

          {/* Фиксированная панель навигации через iframe */}
          <div className={`lg:w-1/4 w-full ${isMenuOpen ? 'block' : 'hidden lg:block'} mb-6 lg:mb-0`}>
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html lang="ru">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: white; }
                    .nav-link { display: block; margin-bottom: 10px; color: #333; text-decoration: none; }
                    .nav-link:hover { color: #e63946; }
                    nav { position: sticky; top: 20px; } /* Фиксированное положение панели */
                  </style>
                </head>
                <body>
                  <h3 style="text-align: center;">Навигация</h3>
                  <nav>
                    <a href="#antivirus-issue" target="_parent" class="nav-link">Проблема с антивирусом</a>
                    <a href="#outdated-software" target="_parent" class="nav-link">Устаревшее ПО</a>
                    <a href="#download-errors" target="_parent" class="nav-link">Ошибки при загрузке</a>
                    <a href="#yandex-tips" target="_parent" class="nav-link">Советы для Яндекс Браузера</a>
                    <a href="#support" target="_parent" class="nav-link">Поддержка</a>
                  </nav>
                </body>
                </html>
              `}
              className="w-full h-screen border-0"
              title="Навигация по блогу"
            ></iframe>
          </div>

          {/* Основной контент блога */}
          <div className="w-full lg:w-3/4 mx-auto px-4">
            <h2 className="text-4xl font-bold">Как справиться с ошибкой при открытии архива</h2>

            <p id="introduction" className="pt-6 pb-8 text-base max-w-2xl dark:text-neutral-400">
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

            <div className="max-w-3xl mx-auto text-lg leading-relaxed">
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
