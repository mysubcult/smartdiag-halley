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
      <Script
        strategy="lazyOnload"
        src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js"
        onLoad={() => {
          var LHC_API: any = LHC_API||{};
          LHC_API.args = {mode:'widget',lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'смартдиаг.рф',department:["1"],theme:"5",check_messages:false,lang:'rus/'};
          LHC_API.init();
        }}
      />
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
