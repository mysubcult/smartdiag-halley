import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

export const metadata = {
  title: 'Как справиться с ошибкой при открытии архива',
  description: 'Руководство по устранению ошибок при открытии архивов, связанных с антивирусами, устаревшим ПО и другими проблемами.',
  keywords: 'ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО',
};

export default function BlogPost() {
  const [pageTitle, setPageTitle] = useState(metadata.title);

  useEffect(() => {
    const handleFocus = () => {
      setPageTitle(metadata.title);
    };

    // Устанавливаем слушатель на событие фокусировки вкладки
    window.addEventListener('focus', handleFocus);
    
    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <Layout title={metadata.title} description={metadata.description} keywords={metadata.keywords}>
        <main className="bg-white">
          <h1>{metadata.title}</h1>
          {/* Your content goes here */}
        </main>
      </Layout>
    </>
  );
}
