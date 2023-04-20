import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "SmartDiag",
    description: `Ваш проводник в мире автодиагностики`,
    image: "/images/seo/halley-banner.png",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('crossorigin','anonymous');
    script.async = true;
    const date = new Date();
    script.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  }, []);

  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://xn--80aajcuv3afm.xn--p1ai${router.asPath}`}
        />
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
