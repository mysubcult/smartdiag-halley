import Script from 'next/script';
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
  let LHC_API: Record<string, any> | undefined;
  return (
    <main className={`${inter.variable} font-sans`}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
        <Script
          strategy="afterInteractive"
          src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js"
          onLoad={() => {
            LHC_API = LHC_API || {};
            LHC_API.args = {mode:'widget',lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'смартдиаг.рф',leaveamessage:true,department:["1"],theme:"1",check_messages:false,lang:'rus/'};
          }}
        />
      </ThemeProvider>
    </main>
  );
}
