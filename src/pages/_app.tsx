import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
