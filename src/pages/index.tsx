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
        id="live-helper-chat-script" // Добавьте атрибут id
        dangerouslySetInnerHTML={{
          __html: `
            var LHC_API = LHC_API||{};
            LHC_API = {
              "args": {
                "mode": "widget",
                "lhc_base_url": "//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/",
                "wheight": 450,
                "wwidth": 350,
                "pheight": 520,
                "pwidth": 500,
                "department": [
                  1
                ],
                "leaveamessage": true,
                "check_messages": false,
                "theme": 9
              }
            };
          `
        }}
      />
    </Layout>
  );
}
