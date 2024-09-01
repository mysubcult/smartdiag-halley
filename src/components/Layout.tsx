// /src/components/Layout.tsx

import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const Layout = ({ children, title, description, keywords, image, type }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    // Обновляем заголовок при изменении маршрута
    document.title = title || "SmartDiag - Ваш проводник в мире автодиагностики";
  }, [title, router.pathname]);

  return (
    <>
      <Head>
        <title>{title || "SmartDiag - Ваш проводник в мире автодиагностики"}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {image && <meta property="og:image" content={image} />}
        {type && <meta property="og:type" content={type} />}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
