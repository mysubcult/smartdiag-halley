import Script from 'next/script'
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
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
<script>
var LHC_API = LHC_API||{};
LHC_API = {
  "args": {
    "mode": "widget",
    "lhc_base_url": "//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/",
    "wheight": 450,
    "wwidth": 350,
    "pheight": 520,
    "pwidth": 500,
    "department": [
      1
    ],
    "leaveamessage": true,
    "check_messages": false,
    "theme": 9
  }
}
</script>
    </main>
  );
}
