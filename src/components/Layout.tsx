import Head from "next/head";
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
  // Базовые метаданные
  const baseTitle = "SmartDiag - Ваш проводник в мире автодиагностики";
  const baseDescription = "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке.";
  const baseKeywords = "автодиагностика, диагностика автомобилей, оборудование для диагностики, car diagnostics, diagnostic tools, software for diagnostics";
  const baseImage = "/images/seo/halley-banner.png";

  // Используем переданные метаданные или базовые
  const meta = {
    title: title || baseTitle,
    description: description || baseDescription,
    keywords: keywords || baseKeywords,
    image: image || baseImage,
    type: type || "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href="/" />
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
