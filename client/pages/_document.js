import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const siteDescription = "인스타그램 유명 수제케이크 지도";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="description" content={siteDescription} />
          <meta
            name="naver-site-verification"
            content="3ea05ed2aa4dd196b25557ca12aff0ac8a6202ae"
          />
          <meta property="og:title" content={"MyCake"} />
          <meta property="og:description" content={siteDescription} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
