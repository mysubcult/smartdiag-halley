import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function BlogPost() {
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="blog-post"
      >
        <h2 className="text-4xl font-bold text-center">
          Как справиться с ошибкой при открытии архива
        </h2>

        <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этой статье мы рассмотрим наиболее частые причины ошибок при
          открытии архивов и предложим решения для их устранения. Если у вас
          возникли проблемы с открытием архивов, следуйте нашим советам.
        </p>
        
        <Image
          src="/images/blog/post1.jpg"
          alt="Ошибки при открытии архива"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-full max-w-xl mx-auto mb-8"
        />

        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">
            <strong>Проблема с антивирусом:</strong> Часто проблемы с открытием
            архивов вызваны антивирусным программным обеспечением, которое
            блокирует файлы. Проверьте настройки вашего антивируса и убедитесь,
            что архив не был помечен как вредоносный. Если это так, добавьте
            архив в список исключений.
          </p>

          <p className="mb-4">
            <strong>Устаревшее программное обеспечение:</strong> Если вы
            используете старую версию программного обеспечения для работы с
            архивами, это может быть причиной ошибки. Обновите ваш архиватор до
            последней версии. Популярные программы включают WinRAR и WinZip.
          </p>

          <p className="mb-4">
            <strong>Ошибки при загрузке:</strong> Иногда архив может не
            открываться из-за ошибок при его загрузке. Попробуйте загрузить
            файл повторно и убедитесь, что соединение с интернетом стабильное.
          </p>

          <p className="mb-4">
            <strong>Советы для пользователей Яндекс Браузера:</strong> В Яндекс
            Браузере может быть включена защита, блокирующая некоторые файлы.
            Чтобы временно отключить эту защиту, перейдите в настройки браузера,
            выберите вкладку &quot;Безопасность&quot; и снимите галочку с опции
            &quot;Проверять безопасность загружаемых файлов&quot;.
          </p>

          <p className="mb-4">
            Если перечисленные выше шаги не помогают, обратитесь в службу
            поддержки для получения дополнительной помощи. Мы всегда готовы
            помочь вам с любыми вопросами, связанными с нашим программным
            обеспечением.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog">
            <button className="bg-rose-500 text-white text-base rounded-full px-16 py-3 font-medium">
              Вернуться в блог
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
