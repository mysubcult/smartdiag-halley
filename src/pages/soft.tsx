import Head from "next/head";
import Layout from "../components/Layout";
import Soft from "../components/Soft"; // Импорт компонента Soft без деструктуризации

const SoftPage: React.FC = () => {
  return (
    <Layout title="Программы - SmartDiag">
      <Head>
        {/* Мета-теги для SEO */}
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
    </Layout>
  );
};

export default SoftPage;