import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "SmartDiag - Ваш проводник в мире автодиагностики",
    description: "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей.",
    keywords: "автодиагностика, диагностика автомобилей",
    image: "/images/seo/halley-banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
