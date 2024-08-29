import Head from 'next/head';
import React from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google"; // Заменяем Inter на Roboto
import Script from 'next/script';

const roboto = Roboto({
  subsets: ["latin", "cyrillic"], // Поддержка латиницы и кириллицы
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-sans relative`}>
      <Head>
      </Head>
      <ThemeProvider attribute="class">
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
                domain: 'смартдиаг.рф',
                leaveamessage: true,
                department: ["1"],
                theme: "9",
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
            `,
          }}
        />
      </ThemeProvider>
    </main>
  );
}
