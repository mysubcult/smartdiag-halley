// src/pages/_app.tsx

import React from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Layout from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans relative`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          {/* Прямой рендеринг компонента страницы без анимации */}
          <Component {...pageProps} />

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
