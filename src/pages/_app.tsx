import Head from 'next/head';
import React from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
      <Script id="lhc-widget">
        {`
          var LHC_API = LHC_API || {};
          LHC_API.args = {
            mode: 'widget',
            lhc_base_url: 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',
            wheight: 450,
            wwidth: 350,
            pheight: 520,
            pwidth: 500,
            department: ["1"],
            check_messages: false,
            lang: 'rus/'
          };
          (function() {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.setAttribute('crossorigin', 'anonymous');
            po.async = true;
            var date = new Date();
            po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?' + ("" + date.getFullYear() + date.getMonth() + date.getDate());
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
          })();
        `}
      </Script>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </main>
  );
}
