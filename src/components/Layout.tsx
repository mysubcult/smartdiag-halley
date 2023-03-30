import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title: "SmartDiag",
    description: `Ваш проводник в мире автодиагностики`,
    image: "/images/seo/halley-banner.png",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "");
    script.setAttribute("id", "lhcChatWidget");
    script.setAttribute("data-pnkey", "your_public_key"); // replace with your actual public key
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://halley.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main id="skip" className="bg-white dark:bg-neutral-900">
        <Navbar />
        {children}
        <Prefooter />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
