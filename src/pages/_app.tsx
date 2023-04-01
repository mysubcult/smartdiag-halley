import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/rus/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/1/(theme)/1";
    script.async = true;
    const referrer = encodeURIComponent(
      document.referrer.substr(document.referrer.indexOf("://") + 1)
    );
    const location = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    script.src += `?r=${referrer}&l=${location}`;
    document.body.appendChild(script);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
