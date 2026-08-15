import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";

function WorkList({ items, basePath }) {
  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <Fragment key={item.name}>
          <Link href={`${basePath}/${encodeURIComponent(item.name)}`} passHref>
            <S.Card whileHover={{ y: -3 }}>
              <S.Info>
                <h1>{item.name}</h1>
                <p>{item.genre.join(" / ")}</p>
                <p>{item.date}</p>
                {item.listDescription && <p>{item.listDescription}</p>}
                <S.IconWrapper aria-label="사용 도구">
                  {item.iconUrl.map((icon) => (
                    <img
                      key={icon}
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </S.IconWrapper>
              </S.Info>
              <S.ImageWrapper viewType={item.type}>
                {item.imageUrl.map((image, imageIndex) => (
                  <S.GameImage
                    key={image}
                    src={image}
                    alt={`${item.name} 대표 화면 ${imageIndex + 1}`}
                    viewType={item.type}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
              </S.ImageWrapper>
            </S.Card>
          </Link>
          {items.length - 1 !== index && <S.Divider />}
        </Fragment>
      ))}
    </S.Wrapper>
  );
}

export default WorkList;

const S = {
  Wrapper: styled.div`
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
    padding: 120px 0 240px;

    @media (max-width: 768px) {
      width: min(calc(100% - 32px), 640px);
      padding: 72px 0 120px;
    }
  `,
  Card: styled(motion.a)`
    display: flex;
    position: relative;
    gap: 32px;
    color: #1e1e1e;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 -24px;
      width: 4px;
      background: #1e1e1e;
      opacity: 0;
      transform: scaleY(0.6);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    &:hover::before,
    &:focus-visible::before {
      opacity: 1;
      transform: scaleY(1);
    }

    &:focus-visible {
      outline: 2px solid #1e1e1e;
      outline-offset: 12px;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 28px;
    }
  `,
  Info: styled.div`
    display: flex;
    min-width: 260px;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: clamp(26px, 3vw, 32px);
      font-weight: 500;
      line-height: 1.25;
    }

    p {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 300;
      line-height: 1.4;
    }
  `,
  ImageWrapper: styled.div`
    display: grid;
    grid-template-columns: ${({ viewType }) =>
      viewType === "vertical"
        ? "repeat(4, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))"};
    gap: 24px;
    width: min(792px, 100%);
    margin-left: auto;

    @media (max-width: 560px) {
      grid-template-columns: ${({ viewType }) =>
        viewType === "vertical"
          ? "repeat(2, minmax(0, 1fr))"
          : "1fr"};
      gap: 12px;
    }
  `,
  GameImage: styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: ${({ viewType }) =>
      viewType === "vertical" ? "9 / 16" : "16 / 9"};
    object-fit: cover;
    background: #ededed;
  `,
  IconWrapper: styled.div`
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding-top: 20px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  `,
  Divider: styled.hr`
    width: 100%;
    height: 2px;
    margin: 48px 0;
    background: #d9d9d9;
  `,
};
