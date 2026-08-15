import { useCallback, useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PortalContainer from "../PortalContainer";
import ArrowLine from "../icon/ArrowLine";

function ImageSlideModal({ images, selectedImageIndex, isOpen, handleClose }) {
  const [index, setIndex] = useState(selectedImageIndex || 0);
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);

  const handlePrev = useCallback(() => {
    setIndex((current) => Math.max(0, current - 1));
  }, []);

  const handleNext = useCallback(() => {
    setIndex((current) => Math.min(images.length - 1, current + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    setIndex(selectedImageIndex);
    const previousActiveElement = document.activeElement;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [handleClose, handleNext, handlePrev, isOpen, selectedImageIndex]);

  if (!isOpen || !images[index]) return null;

  const image = images[index];

  return (
    <PortalContainer className="modalContainer">
      <S.ModalGlobalStyle />
      <S.Wrapper
        role="dialog"
        aria-modal="true"
        aria-label={`${image.text || "작품 이미지"} 확대 보기`}
      >
        <S.Background onClick={handleClose} aria-hidden="true" />
        <S.Content
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const distance = endX - touchStartX.current;
            if (distance > 50) handlePrev();
            if (distance < -50) handleNext();
            touchStartX.current = null;
          }}
        >
          <S.GameImg src={image.url} alt={image.text || "작품 이미지"} />
          <S.Caption aria-live="polite">
            <span>{image.text}</span>
            <small>
              {index + 1} / {images.length}
            </small>
          </S.Caption>
        </S.Content>
        <S.Prev
          type="button"
          onClick={handlePrev}
          disabled={index === 0}
          aria-label="이전 이미지"
        >
          <ArrowLine width={16} height={32} />
        </S.Prev>
        <S.Next
          type="button"
          onClick={handleNext}
          disabled={index === images.length - 1}
          aria-label="다음 이미지"
        >
          <ArrowLine width={16} height={32} />
        </S.Next>
        <S.Close
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          aria-label="확대 이미지 닫기"
        >
          <img src="/images/close.png" alt="" aria-hidden="true" />
        </S.Close>
      </S.Wrapper>
    </PortalContainer>
  );
}

export default ImageSlideModal;

const controlStyles = `
  position: absolute;
  z-index: 2;
  top: 50%;
  width: 48px;
  height: 72px;
  transform: translateY(-50%);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.28);

  &:disabled {
    opacity: 0.2;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
`;

const S = {
  ModalGlobalStyle: createGlobalStyle`
    body {
      overflow: hidden;
    }
  `,
  Wrapper: styled.div`
    position: fixed;
    inset: 0;
    z-index: 1171;
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100dvh;
    padding: 72px 96px 48px;

    @media (max-width: 768px) {
      padding: 72px 16px 96px;
    }
  `,
  Background: styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
  `,
  Content: styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    width: min(1200px, 100%);
    max-height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `,
  GameImg: styled.img`
    display: block;
    max-width: 100%;
    max-height: calc(100dvh - 180px);
    object-fit: contain;
  `,
  Caption: styled.div`
    display: flex;
    min-height: 24px;
    align-items: center;
    gap: 16px;
    color: #fff;
    font-size: 16px;

    small {
      opacity: 0.65;
    }
  `,
  Close: styled.button`
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 20px;
    width: 52px;
    height: 52px;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 3px;
    }

    @media (max-width: 768px) {
      top: 12px;
      right: 12px;
      width: 44px;
      height: 44px;
    }
  `,
  Prev: styled.button`
    ${controlStyles}
    left: 24px;

    svg {
      transform: rotate(180deg);
    }

    @media (max-width: 768px) {
      top: auto;
      bottom: 16px;
      left: calc(50% - 72px);
      transform: none;
    }
  `,
  Next: styled.button`
    ${controlStyles}
    right: 24px;

    @media (max-width: 768px) {
      top: auto;
      right: calc(50% - 72px);
      bottom: 16px;
      transform: none;
    }
  `,
};
