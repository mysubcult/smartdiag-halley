// Layout.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Каждый раз при изменении маршрута обновляем заголовок страницы
      const currentTitle = document.title; // Сохраняем текущий заголовок
      document.title = currentTitle;
    };

    // Слушаем изменения маршрута
    router.events.on("routeChangeComplete", handleRouteChange);
    
    // Чистим слушатели при размонтировании компонента
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
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
