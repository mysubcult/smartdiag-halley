import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  const meta = {
    title: title || "SmartDiag - Ваш проводник в мире автодиагностики",
    description: description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке.",
    keywords: keywords || "автодиагностика, Autocom CDP+, Delphi DS150E, VCDS, Вася, mucar, thinkdiag, Thinkcar, диагностика автомобилей, программы для диагностики, оборудование для диагностики, car diagnostics, diagnostics software",
    image: image || `${siteUrl}/default-image.png`,
    url: `${siteUrl}${router.asPath}`,
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
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={meta.url} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
