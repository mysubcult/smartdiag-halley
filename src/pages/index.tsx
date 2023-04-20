import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Customers from "../components/Customers";
import Script from 'next/script';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
      <Script
        src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js"
        strategy="lazyOnload"
        data-mode="widget"
        data-lhc_base_url="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/"
        data-wheight="450"
        data-wwidth="350"
        data-pheight="520"
        data-pwidth="500"
        data-domain="смартдиаг.рф"
        data-leaveamessage="true"
        data-department="1"
        data-theme="1"
        data-check_messages="false"
        data-lang="rus/"
      />
    </Layout>
  );
}
