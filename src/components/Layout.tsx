import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children, title, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: title || "SmartDiag - Ваш проводник в мире автодиагностики",
    description: `SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке.`,
    keywords: "автодиагностика, Autocom CDP+, Delphi DS150E, VCDS, Вася, mucar, thinkdiag, Thinkcar, диагностика автомобилей, программы для диагностики, оборудование для диагностики, car diagnostics, diagnostic tools, software for diagnostics, diagnostic equipment, vehicle diagnostics, diagnostic software, installation instructions, BMW, Audi, Mercedes, Toyota, Volkswagen, Ford, Nissan, Honda, Chevrolet, Kia",
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
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
