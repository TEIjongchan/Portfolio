import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const S = {
  Wrapper: styled(motion.nav)`
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 180px;
    background: rgba(246, 246, 246, 0.96);
    backdrop-filter: blur(14px);
    transition: height 0.25s ease, background-color 0.25s ease;

    ${({ isMain, isSticky }) =>
      isMain &&
      css`
        position: fixed;
        background: ${isSticky ? "rgba(246, 246, 246, 0.96)" : "transparent"};
        backdrop-filter: ${isSticky ? "blur(14px)" : "none"};
      `}

    ${({ isSticky }) =>
      isSticky &&
      css`
        height: 80px;
      `}

    @media (max-width: 768px) {
      height: ${({ isSticky }) => (isSticky ? "64px" : "96px")};
    }
  `,
  Menu: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: min(588px, 100%);
    height: 100%;
    margin: 0 auto;
    padding: ${({ isSticky }) => (isSticky ? "0 16px" : "24px 16px")};

    li {
      min-width: 0;
    }

    @media (max-width: 768px) {
      padding: ${({ isSticky }) => (isSticky ? "0 8px" : "12px 8px")};
    }
  `,
  MenuItem: styled.a`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({ isDark }) => (isDark ? "#2b2b2f" : "#ffffff")};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.48)};
    transition: opacity 0.2s ease, transform 0.2s ease;

    img {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 20px;
      font-weight: 300;
    }

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: -4px;
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      gap: 4px;

      img {
        width: 28px;
        height: 28px;
      }

      span {
        font-size: 14px;
      }
    }
  `,
};
