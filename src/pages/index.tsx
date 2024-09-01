// index.tsx
import { Hero } from '../components/Hero'; // Предполагается, что Hero — это именованный экспорт
import Soft from '../components/Soft'; // Импорт по умолчанию для Soft
import Faq from '../components/Faq'; // Импорт по умолчанию для Faq
import Layout from '../components/Layout';
import Head from 'next/head'; // Используем Head для задания заголовка и мета-данных

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SmartDiag - Ваш проводник в мире автодиагностики</title>
        <meta name="description" content="Основная информация о SmartDiag, новейшие технологии и поддержка в мире автодиагностики" />
      </Head>
      <Hero />
      <Soft />
      <Faq />
      {/* Другие компоненты главной страницы */}
    </Layout>
  );
}
