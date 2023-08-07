import styled from "styled-components";
import ArrowLine from "../../../components/icon/ArrowLine";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const SectionCover = forwardRef(({ onClick }, ref) => {
  return (
    <S.SectionCoverWrapper ref={ref}>
      <S.SectionImgWrapper>
        <S.TextWrapper>
          <S.Title>
          </S.Title>
          <S.SubTilte></S.SubTilte>
        </S.TextWrapper>
        <video autoPlay loop muted playsInline width="100%">
          <source
            key="/images/main.mp4"
            src="/images/main.mp4"
            type="video/mp4"
          />
        </video>
      </S.SectionImgWrapper>
      <S.ArrowWrapper
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      >
        <img src="/images/icon/mouse.svg" />
      </S.ArrowWrapper>
    </S.SectionCoverWrapper>
  );
});

SectionCover.displayName = "sectionCover";

export default SectionCover;

const S = {
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    text-align: right;
    width: 1200px;
    gap: 24px;
  `,
  SectionCoverWrapper: styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #131317;
    overflow: hidden;

    cursor: pointer;
  `,
  Title: styled.h1`
    font-weight: 900;
    font-size: 96px;
    line-height: 115px;
    text-align: right;

    color: #ffffff;
    display: flex;
    flex-direction: column;
  `,
  SubTilte: styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    text-align: right;
  `,
  SectionImgWrapper: styled.div`
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    color: #fff;

    video {
      position: absolute;
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

    cursor: pointer;

    svg {
      transform: rotate(90deg);
    }
  `,
};
