// Layout.txt
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <>
      <Head>
        {/* Общие мета-теги */}
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
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
