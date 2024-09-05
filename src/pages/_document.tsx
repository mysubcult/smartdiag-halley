import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru"> {/* Changed from 'en' to 'ru' for Russian content */}
      <Head>
        <meta charSet="UTF-8" />
        {/* Additional meta tags can be added here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
