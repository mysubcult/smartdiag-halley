// src/pages/articles.tsx

import Head from "next/head";
import Articles from "../components/Articles";

const ArticlesPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Мета-теги для SEO */}
        <title>Статьи - SmartDiag</title>
        <meta
          name="description"
          content="Читайте наши статьи и получайте советы по диагностике автомобилей и программному обеспечению от SmartDiag."
        />
        <meta
          name="keywords"
          content="статьи, автодиагностика, программное обеспечение, советы, SmartDiag"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Статьи - SmartDiag" />
        <meta
          property="og:description"
          content="Читайте наши статьи и получайте советы по диагностике автомобилей и программному обеспечению от SmartDiag."
        />
        {/* Дополнительные мета-теги можно добавить по необходимости */}
      </Head>

      {/* Компонент Статей */}
      <Articles />
    </>
  );
};

export default ArticlesPage;
