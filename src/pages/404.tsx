import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  const pageTitle = "404 - Упс! Что-то пошло не так";
  const pageDescription = "Страница, которую вы ищете, не найдена.";

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16" id="faq">
        <h2 className="text-4xl font-bold text-center">Упс! Что-то пошло не так.</h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Страница не найдена.
        </p>
        <Image
          src="/images/404/404.svg"
          alt="Image 404"
          layout="responsive" // Example usage of 'layout'
          width={350} // Consistent width with layout
          height={196} // Maintain aspect ratio
          quality={75}
          className="mx-auto"
        />
        <div className="mt-16 text-center">
          <Link href="/" passHref>
            <a className="bg-rose-500 text-white text-base rounded-full px-16 p-3 font-medium">
              Вернуться на главную
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
