// src/pages/about.tsx

import Head from "next/head";
import { About } from "../components/About";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Мета-теги для SEO */}
        <title>О нас - SmartDiag</title>
        <meta
          name="description"
          content="SmartDiag предлагает широкий выбор диагностических приборов и программ для автосервиса. Узнайте больше о наших услугах."
        />
        <meta
          name="keywords"
          content="автодиагностика, диагностическое оборудование, услуги диагностики, SmartDiag"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="О нас - SmartDiag"
        />
        <meta
          property="og:description"
          content="SmartDiag предлагает качественные диагностические решения для автомобилей. Узнайте больше о наших услугах."
        />
      </Head>

      {/* Компонент Услуг */}
      <About />
    </>
  );
};

export default AboutPage;
