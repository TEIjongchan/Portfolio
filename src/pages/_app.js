import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Layout from "../feature/layout";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>이종찬 | Game UI/UX Designer</title>
        <meta
          name="description"
          content="게임 UI/UX 디자이너 이종찬의 프로젝트와 개인 포트폴리오입니다."
        />
        <meta property="og:title" content="이종찬 | Game UI/UX Designer" />
        <meta
          property="og:description"
          content="게임 UI/UX 디자이너 이종찬의 프로젝트와 개인 포트폴리오입니다."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6f6f6" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
