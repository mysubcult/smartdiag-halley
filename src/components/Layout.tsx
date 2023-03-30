import { useRouter } from "next/router";
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

  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://halley.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <script
          type="text/javascript"
          src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js"
          async
          defer
          crossOrigin="anonymous"
        ></script>
        <style jsx global>{`
          .lhc_widget_container {
            background-color: transparent !important;
            box-shadow: none !important;
          }
        `}</style>
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
