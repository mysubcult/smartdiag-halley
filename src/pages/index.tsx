// Файл: src/pages/index.tsx

import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SmartDiag - Ваш проводник в мире автодиагностики</title>
        <meta name="description" content="Главная страница SmartDiag" />
      </Head>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
