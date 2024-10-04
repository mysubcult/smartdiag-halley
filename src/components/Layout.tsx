import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';
import { ReactNode } from 'react';
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

const Layout = ({ children, image = '/images/seo/halley-banner.png', type = 'website', metadata }: LayoutProps) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {metadata?.title && <title>{metadata.title}</title>}
        {metadata?.description && <meta name="description" content={metadata.description} />}
        {metadata?.keywords && <meta name="keywords" content={metadata.keywords} />}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:image" content={image} />
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
        onAnimationComplete={() => window.scrollTo(0, 0)} // Прокрутка в начало после завершения анимации
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
