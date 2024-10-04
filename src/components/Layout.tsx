// src/components/Layout.tsx

import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';
import { ReactNode, useEffect, useState } from 'react';
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

const Layout = ({ children, image, type, metadata }: LayoutProps) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  // State to store the current scroll position
  const [scrollY, setScrollY] = useState(0);

  // Get current scroll position on component mount
  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  // Variants for animation with scroll position as initial
  const variants = {
    initial: { opacity: 0, y: scrollY }, // Start from current scroll position
    animate: { opacity: 1, y: 0 },       // Animate to the normal position
    exit: { opacity: 0, y: 50 },         // Animate to move down on exit
  };

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
