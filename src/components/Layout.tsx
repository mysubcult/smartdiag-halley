import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const Layout = ({ children, title, description, keywords, image, type }: LayoutProps) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  // Стандартные метаданные
  const defaultTitle = "SmartDiag - Ваш проводник в мире автодиагностики";
  const defaultDescription = "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей.";
  const defaultKeywords = "автодиагностика, диагностика автомобилей, car diagnostics";
  const defaultImage = "/images/seo/halley-banner.png";
  const defaultType = "website";

  // Метаданные текущей страницы
  const meta = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    type: type || defaultType,
  };

  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = meta.title;
  }, [meta.title]);

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartDiag Team" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
