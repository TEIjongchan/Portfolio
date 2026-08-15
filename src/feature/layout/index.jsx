import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Footer from "./footer";
import Header from "./Header";

function Layout({ children }) {
  const router = useRouter();
  const isMain = router.pathname === "/";

  return (
    <div>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <Header />
      <S.Container id="main-content" isMain={isMain}>
        {children}
      </S.Container>
      {!isMain && <Footer />}
    </div>
  );
}

export default Layout;

const S = {
  Container: styled.main`
    box-sizing: border-box;

    ${({ isMain }) =>
      isMain
        ? css`
            margin: 0 auto;
          `
        : css`
            min-height: calc(100vh - 180px - 232px);
          `}
  `,
};
