import Head from 'next/head';
import React from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Добавляем импорт

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans relative`}>
      <Head>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
