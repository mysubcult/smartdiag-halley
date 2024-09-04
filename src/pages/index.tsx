import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Head from "next/head"; // Importing Head for meta tags

export default function Home() {
  const pageTitle = "SmartDiag - Ваш проводник в мире автодиагностики";

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке." />
      </Head>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
