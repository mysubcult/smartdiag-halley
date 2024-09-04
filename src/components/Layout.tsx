import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ children, title, description, keywords }: LayoutProps) => {
  const defaultTitle = "SmartDiag - Ваш проводник в мире автодиагностики";
  const defaultDescription = "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей.";
  const defaultKeywords = "автодиагностика, диагностика автомобилей";

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
      </Head>
      <div>
        {/* Add Navbar, Footer, and main content here */}
        {children}
      </div>
    </>
  );
};

export default Layout;
