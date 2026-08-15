import styled from "styled-components";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const SectionCover = forwardRef((props, ref) => {
  return (
    <S.SectionCoverWrapper ref={ref} aria-label="포트폴리오 소개 영상">
      <S.SectionImgWrapper>
        <video autoPlay loop muted playsInline preload="metadata" width="100%">
          <source
            src="/images/main.mp4"
            type="video/mp4"
          />
        </video>
      </S.SectionImgWrapper>
      <S.ArrowWrapper
        as="a"
        href="#profile"
        aria-label="프로필과 경력 보기"
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      >
        <img src="/images/icon/mouse.svg" alt="" aria-hidden="true" />
      </S.ArrowWrapper>
    </S.SectionCoverWrapper>
  );
});

SectionCover.displayName = "sectionCover";

export default SectionCover;

const S = {
  SectionCoverWrapper: styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #131317;
    overflow: hidden;

  `,
  SectionImgWrapper: styled.div`
    height: 100%;
    margin: 0 auto;

    video {
      position: absolute;
      inset: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  ArrowWrapper: styled(motion.div)`
    position: absolute;
    width: 16px;
    height: 16px;
    left: 50%;
    bottom: 80px;
    transform: translate(-50%, -50%);
    z-index: 2;

    img {
      width: 16px;
      height: 24px;
    }

    @media (max-width: 768px) {
      bottom: 40px;
    }
  `,
};
