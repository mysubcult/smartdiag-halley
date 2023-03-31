import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var LHC_API = LHC_API||{};
              LHC_API.args = {mode:'widget',lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'смартдиаг.рф',leaveamessage:true,department:["1"],theme:"1",check_messages:false,lang:'rus/'};
              (function() {
                var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
                var date = new Date();po.src = 'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
              })();
            `
          }}
          defer
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
