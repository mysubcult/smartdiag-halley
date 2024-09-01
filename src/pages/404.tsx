// /src/pages/404.tsx

import Layout from '../components/Layout';

const Custom404 = () => {
  const pageTitle = "Страница не найдена - SmartDiag";
  const pageDescription = "Извините, страница, которую вы ищете, не найдена.";

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16" id="faq">
        <h1 className="text-center text-4xl">404 - Страница не найдена</h1>
        <p className="text-center">Похоже, вы потерялись. Попробуйте вернуться на главную.</p>
      </div>
    </Layout>
  );
};

export default Custom404;
