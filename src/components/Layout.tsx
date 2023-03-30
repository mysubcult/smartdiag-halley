
SEO meta tags Layout.


mysubcult1@gmail.com
В эту страницу мне нужно будет вставить дополнительный скрипт: import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "SmartDiag",
    description: Ваш проводник в мире автодиагностики,
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
          content={https://halley.vercel.app${router.asPath}}
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

Данный скрипт представляет собой React-компонент, который определяет макет (layout) страницы и добавляет метаданные для оптимизации SEO.

Чтобы использовать этот компонент в своем проекте, необходимо импортировать его из файла, где он определен, и передать ему нужные свойства, включая дочерние компоненты. Например, для создания страницы с заголовком "Пример страницы" и содержимым "Это мой первый пример страницы" можно использовать следующий код:

jsx
Copy code
import Layout from './Layout';

const ExamplePage = () => (
  <Layout title="Пример страницы">
    <h1>Это мой первый пример страницы</h1>
  </Layout>
);

export default ExamplePage;
Здесь мы передаем компоненту `Layout




mysubcult1@gmail.com
У меня есть код страницы: import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "SmartDiag",
    description: Ваш проводник в мире автодиагностики,
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
          content={https://halley.vercel.app${router.asPath}}
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

Добавь в этот код скрипт: <script>var LHC_API = LHC_API||{};
LHC_API.args = {mode:'widget',lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'смартдиаг.рф',leaveamessage:true,department:["1"],theme:"1",check_messages:false,lang:'rus/'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
var date = new Date();po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>

И сделай так, чтобы скрипт загружался после загрузки всей страницы 

2 / 2


Чтобы добавить скрипт в этот код и загрузить его после загрузки всей страницы, можно использовать хук useEffect из React. Вот пример, как это можно сделать:

jsx
Copy code
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
    description: "Ваш проводник в мире автодиагностики",
    image: "/images/seo/halley-banner.png",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      var LHC_API = LHC_API||{};
      LHC_API.args = {
        mode:'widget',
        lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',
        wheight:450,
        wwidth:350,
        pheight:520,
        pwidth:500,
        domain:'смартдиаг.рф',
        leaveamessage:true,
        department:["1"],
        theme:"1",
        check_messages:false,
        lang:'rus/'
      };
      (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.setAttribute('crossorigin','anonymous');
        po.async = true;
        var date = new Date();
        po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?' + (""+date.getFullYear() + date.getMonth() + date.getDate());
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
      })();
    `;
    document.body.appendChild(script);
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
          content={`https://halley.vercel.app${router.asPath}`}
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
