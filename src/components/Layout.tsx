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

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      {/* Убираем глобальный компонент Head, чтобы избежать конфликта с заголовками страниц */}
      {/* Заменяем Head на использование в конкретных страницах, например, в post1.txt */}
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
