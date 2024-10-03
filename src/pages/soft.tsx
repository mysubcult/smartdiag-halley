// src/pages/soft.tsx

import Head from "next/head";
import Soft from "../components/Soft"; // Импорт компонента Soft без деструктуризации

const SoftPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Мета-теги для SEO */}
        <title>Программы - SmartDiag</title>
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
          content="Программы - SmartDiag"
        />
        <meta
          property="og:description"
          content="SmartDiag предлагает качественные диагностические решения для автомобилей. Узнайте больше о наших услугах."
        />
        {/* Указываем favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Компонент Программ */}
      <Soft />
    </>
  );
};

export default SoftPage;
