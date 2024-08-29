import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title="Блог - Как справиться с ошибкой при открытии архива">
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center lg:space-x-6">
          {/* Основной контент блога */}
          <div className="lg:w-4/6 w-full lg:max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>

            <p id="introduction" className="pt-6 pb-8 text-base dark:text-neutral-400">
              В этой статье мы рассмотрим наиболее частые причины ошибок при открытии архивов и предложим решения для их устранения.
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
              priority
            />

            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
              {[
                { id: 'antivirus-issue', title: 'Проблема с антивирусом', text: 'Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением.' },
                { id: 'outdated-software', title: 'Устаревшее программное обеспечение', text: 'Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов.' },
                { id: 'download-errors', title: 'Ошибки при загрузке', text: 'Иногда архив может не открываться из-за ошибок при его загрузке.' },
                { id: 'yandex-tips', title: 'Советы для пользователей Яндекс Браузера', text: 'В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы.' },
                { id: 'support', title: 'Поддержка', text: 'Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи.' }
              ].map(({ id, title, text }) => (
                <section key={id} id={id}>
                  <h3 className="text-2xl font-semibold mt-8">{title}</h3>
                  <hr className="border-neutral-300 mb-4" />
                  <p className="mb-4">{text}</p>
                </section>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog" passHref>
                <a className="bg-gradient-to-r from-black to-rose-500 text-white text-base rounded-full px-10 py-3 font-medium shadow-lg transition-transform duration-300 hover:scale-105">
                  Вернуться в блог
                </a>
              </Link>
            </div>
          </div>

          {/* Добавляем отступ справа для больших экранов, чтобы контент не растягивался на всю ширину */}
          <div className="lg:w-1/6 hidden lg:block"></div>
        </div>
      </main>
    </Layout>
  );
}
