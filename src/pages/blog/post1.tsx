import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="w-full px-4 pt-24 pb-16">
      <div className="container mx-auto flex flex-col items-center">
        {/* Основной контент блога */}
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>

          <p id="introduction" className="pt-6 pb-8">
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
            className="w-full mb-8"
            priority
          />

          <div className="text-lg leading-relaxed">
            {[
              { id: 'antivirus-issue', title: 'Проблема с антивирусом', text: 'Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением.' },
              { id: 'outdated-software', title: 'Устаревшее программное обеспечение', text: 'Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов.' },
              { id: 'download-errors', title: 'Ошибки при загрузке', text: 'Иногда архив может не открываться из-за ошибок при его загрузке.' },
              { id: 'yandex-tips', title: 'Советы для пользователей Яндекс Браузера', text: 'В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы.' },
              { id: 'support', title: 'Поддержка', text: 'Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи.' }
            ].map(({ id, title, text }) => (
              <section key={id} id={id}>
                <h3 className="text-2xl font-semibold mt-8">{title}</h3>
                <hr className="mb-4" />
                <p className="mb-4">{text}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/#blog" passHref>
              <a className="px-10 py-3 font-medium">
                Вернуться в блог
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
