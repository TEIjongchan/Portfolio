import styled from "styled-components";
import Contact from "../Contact";
import { HISTORY_CONSTANT } from "../../../../constant/index";

function Profile() {
  return (
    <S.Profile>
      <S.ProfileImg src={"/images/Profile_L.png"} alt="profile" />
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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: #1e1e1e;
    gap: 64px;
  `,
  ProfileImg: styled.img`
    width: 256px;
    height: 256px;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Name: styled.p`
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
  `,
  Job: styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-top: 16px;
  `,
  Title: styled.h1`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #1e1e1e;

    margin-bottom: 24px;
    margin-top: 60px;
  `,
  SubTitle: styled.span`
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;

    color: #1e1e1e;
  `,
  Hr: styled.hr`
    width: 24px;
    height: 2px;
    margin: 48px 0;
    background-color: #d9d9d9;
  `,
};
