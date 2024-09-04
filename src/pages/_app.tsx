import Head from 'next/head';
import React from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Using Script tag correctly

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans relative`}>
      <ThemeProvider attribute="class">
        {/* React.StrictMode could be added in development */}
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
            `,
          }}
        />
      </ThemeProvider>
    </main>
  );
}
