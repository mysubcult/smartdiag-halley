// src/components/Layout.tsx

import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Meta tags and SEO configurations */}
        {metadata && (
          <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
          </>
        )}
        {/* Open Graph and other meta tags */}
        <meta property="og:type" content={type || 'website'} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta
          property="og:image"
          content={image || '/images/seo/halley-banner.png'}
        />
        <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartDiag Team" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence exitBeforeEnter mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
