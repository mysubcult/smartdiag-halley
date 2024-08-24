import Head from 'next/head';
import React from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import CookieConsent from '../components/CookieConsent'; // Импортируем компонент

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <CookieConsent /> {/* Добавляем компонент здесь */}
        <Analytics />
      </ThemeProvider>
    </main>
  );
}
