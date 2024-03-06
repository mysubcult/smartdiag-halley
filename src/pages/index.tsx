import Head from 'next/head';
import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Customers from "../components/Customers";

export default function Home() {
  return (
    <Layout>
      <Head>
        {/* Вставляем скрипт Yandex.RTB */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.yaContextCb = window.yaContextCb || [];
              window.yaContextCb.push(function() {
                Ya.Context.AdvManager.render({
                  blockId: "R-A-6538583-1",
                  type: "floorAd",
                  platform: "desktop"
                });
              });
            `,
          }}
        />
      </Head>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var LHC_API = LHC_API||{};
            LHC_API.args = {
              mode: 'widget',
              lhc_base_url: 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',
              wheight: 450,
              wwidth: 350,
              pheight: 520,
              pwidth: 500,
              domain: 'смартдиаг.рф',
              leaveamessage: true,
              department: ["1"],
              theme: "9",
              check_messages: false,
              lang: 'rus/'
            };
            (function() {
              var po = document.createElement('script');
              po.type = 'text/javascript';
              po.setAttribute('crossorigin', 'anonymous');
              po.async = true;
              var date = new Date();
              po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?' + ("" + date.getFullYear() + date.getMonth() + date.getDate());
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(po, s);
            })();
          `,
        }}
      />
    </Layout>
  );
}
