import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="preconnect" href="https://api.fontshare.com" />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=inter@300,400,500,600,700&display=swap"
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
