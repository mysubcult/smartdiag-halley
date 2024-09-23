// src/pages/articles.tsx

import Head from "next/head";
import Layout from "../components/Layout";
import { Blog } from "../components/articles"; // Предполагая, что ваш компонент называется Blog и экспортируется по умолчанию

const ArticlesPage: React.FC = () => {
  return (
    <Layout title="Статьи - SmartDiag">
      <Head>
        {/* Мета-теги для SEO */}
        <meta
          name="description"
          content="Читайте полезные статьи и руководства по диагностическому оборудованию и программному обеспечению для автомобилей."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Статьи - SmartDiag"
        />
        <meta
          property="og:description"
          content="Читайте полезные статьи и руководства по диагностическому оборудованию и программному обеспечению для автомобилей."
        />
      </Head>

      {/* Компонент Статей */}
      <Blog />
    </Layout>
  );
};

export default ArticlesPage;
