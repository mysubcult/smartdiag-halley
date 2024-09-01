// /src/components/Layout.tsx

import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "SmartDiag - Ваш проводник в мире автодиагностики" }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Здесь можно добавить другие мета-теги */}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
