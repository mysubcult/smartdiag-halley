import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js"
            defer
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var LHC_API = LHC_API||{};
                LHC_API.args = {mode:'widget',lhc_base_url:'https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'смартдиаг.рф',leaveamessage:true,department:["1"],theme:"1",check_messages:false,lang:'rus/'};
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
