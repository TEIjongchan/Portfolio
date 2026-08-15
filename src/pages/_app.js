import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../feature/layout";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isMobilePreview = router.query.mobilePreview === "1";

  if (isMobilePreview) {
    return (
      <>
        <Head>
          <title>모바일 미리보기 | 이종찬 포트폴리오</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            background: "#111",
          }}
        >
          <iframe
            src="/"
            title="포트폴리오 모바일 미리보기"
            style={{
              width: "390px",
              height: "844px",
              maxHeight: "calc(100vh - 64px)",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "18px",
              background: "#050505",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </>
    );
  }

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
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/TEIjongchan/Portfolio/main/public/images/og-portfolio.png?v=20260815-2"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="849" />
        <meta property="og:image:height" content="329" />
        <meta
          property="og:image:alt"
          content="네온 라인과 JC PORTFOLIO 타이틀이 표시된 포트폴리오 메인 화면"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="이종찬 | Game UI/UX Designer" />
        <meta
          name="twitter:description"
          content="게임 UI/UX 디자이너 이종찬의 프로젝트와 개인 포트폴리오입니다."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/TEIjongchan/Portfolio/main/public/images/og-portfolio.png?v=20260815-2"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
