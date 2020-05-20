import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const siteDescription = "인스타그램 유명 수제케이크 지도";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

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
          <meta property="og:title" content={"Cake Map"} />
          <meta property="og:description" content={siteDescription} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
        `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '230857404953495');
      fbq('track', 'PageView');`
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=230857404953495&ev=PageView&noscript=1" />`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
