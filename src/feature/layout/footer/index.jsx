import styled from "styled-components";

function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProfileImg
          src="/images/Profile.png"
          alt="이종찬 프로필"
          loading="lazy"
          decoding="async"
        />
        <S.ProfileInfo>
          <S.Name>이종찬</S.Name>
          <S.Job>Game UI/UX Designer</S.Job>
          <S.Email href="mailto:hshshs6349@gmail.com">
            <img src="/images/icon/Icon_Mail.svg" alt="mail icon" />
            hshshs6349@gmail.com
          </S.Email>
        </S.ProfileInfo>
        <S.ContactList>
          <a
            href="https://01093305815.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <hr />
          <a
            href="https://www.linkedin.com/in/%EC%A2%85%EC%B0%AC-%EC%9D%B4-27a91b19a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </S.ContactList>
      </S.Wrapper>
    </S.Container>
  );
}

export default Footer;

const S = {
  Container: styled.footer`
    width: 100%;
    background: #0a0a0a;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  `,
  Wrapper: styled.div`
    display: flex;
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
    padding: 24px 0 48px 0;

    @media (max-width: 768px) {
      width: min(calc(100% - 32px), 560px);
      flex-wrap: wrap;
      gap: 24px;
      padding: 32px 0;
    }
  `,
  ProfileImg: styled.img`
    width: 160px;
    height: 160px;

    border-radius: 4px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 96px;
      height: 96px;
    }
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    color: #ffffff;

    justify-content: end;
    gap: 8px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  `,
  Name: styled.p`
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
  `,
  Job: styled.span`
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;
  `,
  Email: styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;

    margin-top: 24px;
    margin-bottom: 8px;

    img {
      filter: brightness(0) invert(1);
      opacity: 0.72;
    }

    &:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 4px;
    }

    @media (max-width: 560px) {
      font-size: 15px;
    }
  `,
  ContactInfo: styled.div`
    display: flex;

    margin-left: auto;
    margin-top: auto;
    align-items: center;
    gap: 10px;
    img {
      width: 32px;
      height: 32px;
    }
  `,
  ContactMe: styled.button`
    position: relative;
    width: 196px;
    height: 48px;

    background: #ffffff;
    border: 1px solid rgba(30, 30, 30, 0.5);
    border-radius: 4px;

    img {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 8px;
      right: 8px;
    }
  `,
  ContactList: styled.ul`
    display: flex;
    font-size: 20px;
    font-weight: 200;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.55);
    align-items: flex-end;
    margin-left: auto;
    margin-bottom: 8px;

    a:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 4px;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }

    hr {
      width: 2px;
      height: 20px;
      background: rgba(255, 255, 255, 0.1);
      margin: 0;
      margin: 0 24px;
    }
  `,
};
