import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const Layout = ({ children, title, description, keywords, image, type }: LayoutProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  
  const [pageTitle, setPageTitle] = useState(title || "SmartDiag - Ваш проводник в мире автодиагностики");

  useEffect(() => {
    // Устанавливаем заголовок страницы в зависимости от переданного props.title
    if (title) {
      setPageTitle(title);
    }
  }, [title]);

  useEffect(() => {
    // Обновляем заголовок документа только если он отличается
    if (document.title !== pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  const meta = {
    title: pageTitle,
    description: description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке.",
    keywords: keywords || "автодиагностика, Autocom CDP+, Delphi DS150E, VCDS, Вася, mucar, thinkdiag, Thinkcar, диагностика автомобилей, программы для диагностики, оборудование для диагностики, car diagnostics, diagnostic tools, software for diagnostics, diagnostic equipment, vehicle diagnostics, diagnostic software, installation instructions, BMW, Audi, Mercedes, Toyota, Volkswagen, Ford, Nissan, Honda, Chevrolet, Kia",
    image: image || "/images/seo/halley-banner.png",
    type: type || "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${siteUrl}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href={`${siteUrl}`} />
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
