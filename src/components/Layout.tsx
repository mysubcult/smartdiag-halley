// src/components/Layout.tsx

import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';
import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  image?: string;
  type?: string;
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children, image, type, metadata }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    // При сохранении позиции прокрутки страницы
    const handleRouteChangeStart = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    const handleRouteChangeComplete = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Мета-данные страницы */}
        {metadata && (
          <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
          </>
        )}
        {/* Open Graph и другие мета-данные */}
        <meta property="og:type" content={type || 'website'} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:image" content={image || '/images/seo/halley-banner.png'} />
        <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartDiag Team" />
      </Head>
      <Navbar />
      <motion.main
        className="flex-grow"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
