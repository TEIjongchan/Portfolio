import styled from "styled-components";

function Contact() {
  return (
    <S.ContactWrapper>
      <S.Title>Contact me</S.Title>
      <S.Email>
        <img src={"/images/icon/Icon_Mail.svg"} />
        rkato0128@naver.com
      </S.Email>
      <S.ContactList>
        <a
          href="https://do-workspace.tistory.com/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <hr />
        <a
          href="https://www.linkedin.com/in/동엽-정-42ba44206/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </S.ContactList>
    </S.ContactWrapper>
  );
}

export default Contact;

const S = {
  ContactWrapper: styled.div`
    display: flex;
    flex-direction: column;
    color: #1e1e1e;
    text-align: left;
  `,
  Title: styled.p`
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;
  `,
  Email: styled.span`
    display: flex;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-top: 24px;
    align-items: center;
    gap: 16px;
  `,
  ContactList: styled.ul`
    display: flex;
    font-size: 20px;
    font-weight: 200;
    line-height: 24px;
    color: #2b2b2f;
    align-items: center;
    margin-top: 60px;

    hr {
      width: 2px;
      height: 20px;
      background: rgba(43, 43, 47, 0.1);
      margin: 0;
      margin: 0 24px;
    }
  `,
  ContactMe: styled.button`
    position: relative;
    width: 256px;
    height: 48px;

    background: #ffffff;
    border: 1px solid rgba(30, 30, 30, 0.5);
    border-radius: 4px;
    margin-top: 64px;

    img {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 8px;
      right: 8px;
    }
  `,
};
