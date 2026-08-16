import styled from "styled-components";
import Contact from "../Contact";
import { HISTORY_CONSTANT } from "../../../../constant/index";

function Profile() {
  return (
    <S.Profile>
      <S.ProfileImg
        src="/images/Profile_L.png"
        alt="게임 UI/UX 디자이너 이종찬"
        loading="lazy"
        decoding="async"
      />
      <S.Info>
        <S.Name>이종찬</S.Name>
        <S.Job>Game UI/UX Designer</S.Job>
        <S.Title>{HISTORY_CONSTANT.title}</S.Title>
        <S.SubTitle
          dangerouslySetInnerHTML={{ __html: HISTORY_CONSTANT.subTitle }}
        />
        <S.Hr />
        <Contact />
      </S.Info>
    </S.Profile>
  );
}

export default Profile;

const S = {
  Profile: styled.div`
    display: grid;
    grid-template-columns: 270px minmax(0, 1fr);
    align-items: flex-start;
    justify-content: center;
    color: #ffffff;
    gap: 64px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
  `,
  ProfileImg: styled.img`
    width: 270px;
    height: 270px;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.08);

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    padding-top: 4px;

    @media (max-width: 768px) {
      width: 100%;
      padding-top: 0;
    }
  `,
  Name: styled.p`
    font-family: 'Clash Display', 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: clamp(40px, 5vw, 64px);
    line-height: 0.94;
    letter-spacing: -0.05em;
  `,
  Job: styled.span`
    font-weight: 400;
    font-size: 11px;
    line-height: 29px;
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  `,
  Title: styled.h1`
    font-weight: 600;
    font-size: clamp(28px, 4vw, 52px);
    line-height: 1.08;
    color: #ffffff;

    margin-bottom: 20px;
    margin-top: 28px;

    @media (max-width: 768px) {
      margin-top: 44px;
      font-size: 21px;
      line-height: 1.45;
    }
  `,
  SubTitle: styled.span`
    width: 100%;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.68);

    @media (min-width: 1100px) {
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      font-size: 17px;
      line-height: 1.65;
      white-space: normal;

      br {
        display: none;
      }
    }
  `,
  Hr: styled.hr`
    width: 24px;
    height: 2px;
    margin: 48px 0;
    background-color: rgba(255, 255, 255, 0.18);
  `,
};
