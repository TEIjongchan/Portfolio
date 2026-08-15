import styled from "styled-components";
import Profile from "./Profile";
import { forwardRef } from "react";

const SectionBio = forwardRef((props, ref) => {
  return (
    <S.SectionBioWrapper id="profile" ref={ref}>
      <Profile />
    </S.SectionBioWrapper>
  );
});

SectionBio.displayName = "sectionBio";

export default SectionBio;

const S = {
  SectionBioWrapper: styled.section`
    width: min(1200px, calc(100% - 48px));
    padding: 160px 0 120px 0;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: min(calc(100% - 32px), 560px);
      padding: 96px 0 80px;
      scroll-margin-top: 64px;
    }
  `,
};
