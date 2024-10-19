// src/pages/_app.tsx

import React, { useEffect } from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Определение вариантов анимации
const pageVariants = {
  initial: {
    opacity: 0,
    y: '-100vh', // Новая страница начинает за пределами экрана сверху
  },
  animate: {
    opacity: 1,
    y: '0vh', // Новая страница перемещается в свою нормальную позицию
  },
  exit: {
    opacity: 0,
    y: '0vh', // Текущая страница просто затухает без изменения позиции
  },
};

// Настройки перехода
const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const currentPathname = router.pathname;

  return (
    <main className={`${inter.variable} font-sans relative overflow-hidden`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          {/* AnimatePresence управляет присутствием компонентов */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>

          <Script
            id="lhc-widget-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var LHC_API = LHC_API||{};
                LHC_API.args = {
                  mode: 'widget',
                  lhc_base_url: 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',
                  wheight: 450,
                  wwidth: 350,
                  pheight: 520,
                  pwidth: 500,
                  domain: 'xn--80aajcuv3afm.xn--p1ai',
                  leaveamessage: true,
                  department: ["1"],
                  theme: "9",
                  check_messages: false,
                  lang: 'rus/'
                };
                (function() {
                  var po = document.createElement('script');
                  po.type = 'text/javascript';
                  po.setAttribute("crossorigin", "anonymous");
                  po.async = true;
                  var date = new Date();
                  po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?' + ("" + date.getFullYear() + date.getMonth() + date.getDate());
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(po, s);
                })();
              `,
            }}
          />
        </Layout>
      </ThemeProvider>
    </main>
  );
}
