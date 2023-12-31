import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const S = {
  Wrapper: styled(motion.nav)`
    position: sticky;
    width: 100%;
    height: 180px;
    background: #f6f6f6;
    top: 0;
    z-index: 1;
    visibility: visible;

    transition: height 0.3s ease;

    ${({ isMain }) =>
      isMain &&
      css`
        position: fixed;
        background: transparent;
        ${({ isSticky }) =>
          isSticky &&
          css`
            background: #f6f6f6;
          `}
        li {
          color: white;

          span {
            margin-top: 10px;
          }
        }
      `}

    ${({ isSticky }) =>
      isSticky &&
      css`
        height: 80px;
      `}
  `,
  Menu: styled.ul`
    display: grid;
    width: 588px;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;

    ${({ isSticky }) =>
      !isSticky &&
      css`
        padding-top: 24px;
        padding-bottom: 24px;
      `}
  `,
  MenuItem: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2b2b2f;
    opacity: 0.4;
    cursor: pointer;

    span {
      font-weight: 200;
      font-size: 20px;
    }
    ${({ isSelected }) =>
      isSelected &&
      css`
        opacity: 1;
      `}
  `,
};
