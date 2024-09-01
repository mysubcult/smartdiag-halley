// Layout.txt
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string; // Добавляем опциональное свойство title
  description?: string; // Добавляем опциональное свойство description
  keywords?: string;
  image?: string;
  type?: string;
}

const Layout = ({ children, title, description, keywords, image, type }: LayoutProps) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <>
      <Head>
        <title>{title || "SmartDiag - Ваш проводник в мире автодиагностики"}</title>
        <meta name="description" content={description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS."} />
        <meta name="keywords" content={keywords || "автодиагностика, Autocom CDP+, Delphi DS150E, VCDS, диагностика автомобилей"} />
        <meta property="og:type" content={type || "website"} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:title" content={title || "SmartDiag - Ваш проводник в мире автодиагностики"} />
        <meta property="og:description" content={description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей."} />
        <meta property="og:image" content={image || "/images/seo/halley-banner.png"} />
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
