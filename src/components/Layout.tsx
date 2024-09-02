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

  const meta = {
    title: title || "SmartDiag - Ваш проводник в мире автодиагностики",
    description: description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей.",
    keywords: keywords || "автодиагностика, сканеры, диагностика автомобилей",
    image: image || "/images/seo/halley-banner.png",
    type: type || "website",
  };

  useEffect(() => {
    // Обновляем заголовок только если изменился title
    if (document.title !== meta.title) {
      document.title = meta.title;
    }
  }, [meta.title]);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
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
