import Head from "next/head"; // Importing Head for meta tags
import Layout from "../../components/Layout";

const metadata = {
  title: "Название поста - Мой блог",
  description: "Описание поста. Это краткое описание содержимого поста.",
  keywords: "ключевое слово1, ключевое слово2, ключевое слово3",
};

const Post1 = () => {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <article>
        <h1>{metadata.title}</h1>
        <p>Это содержимое поста...</p>
      </article>
    </Layout>
  );
};

export default Post1;
