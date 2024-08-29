import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogPost() {
  return (
    <Layout title="Блог - Как справиться с ошибкой при открытии архива">
      <div className="w-full px-4 pt-24 pb-16">
        <div className="container mx-auto">
          {/* Основной контент блога */}
          <div className="w-full max-w-4xl px-4">
            <h2 className="text-4xl font-bold text-center">Как справиться с ошибкой при открытии архива</h2>

            <p className="pt-6 pb-8">
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
            />

            <div className="text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mt-8">Проблема с антивирусом</h3>
              <hr className="mb-4" />
              <p className="mb-4">Часто проблемы с открытием архивов вызваны антивирусным программным обеспечением.</p>

              <h3 className="text-2xl font-semibold mt-8">Устаревшее программное обеспечение</h3>
              <hr className="mb-4" />
              <p className="mb-4">Если вы используете старую версию программы для работы с архивами, она может не поддерживать новые форматы архивов.</p>

              <h3 className="text-2xl font-semibold mt-8">Ошибки при загрузке</h3>
              <hr className="mb-4" />
              <p className="mb-4">Иногда архив может не открываться из-за ошибок при его загрузке.</p>

              <h3 className="text-2xl font-semibold mt-8">Советы для пользователей Яндекс Браузера</h3>
              <hr className="mb-4" />
              <p className="mb-4">В Яндекс Браузере может быть включена защита, блокирующая загрузку определенных файлов, включая архивы.</p>

              <h3 className="text-2xl font-semibold mt-8">Поддержка</h3>
              <hr className="mb-4" />
              <p className="mb-4">Если перечисленные выше шаги не помогают, обратитесь в службу поддержки для получения дополнительной помощи.</p>
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/#blog" passHref>
                <a className="px-10 py-3 font-medium">Вернуться в блог</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
