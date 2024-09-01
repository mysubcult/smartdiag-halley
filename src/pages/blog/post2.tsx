// post2.txt
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Head from 'next/head'; // Используем Head для заголовков

export default function BlogPost2() {
  const baseTitle = "Заголовок для поста 2"; // Замените на актуальный заголовок
  const pageDescription = "Описание поста 2"; // Замените на актуальное описание

  return (
    <Layout>
      <Head>
        <title>{baseTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          {/* Содержимое страницы */}
        </div>
      </main>
    </Layout>
  );
}
