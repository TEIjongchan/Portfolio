import { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

function WorkList({ items, basePath }) {
  const getMobileImage = (url) =>
    url.toLowerCase().endsWith(".webp")
      ? url.replace(/\.webp$/i, ".mobile.webp")
      : null;

  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <Fragment key={item.name}>
          <Link href={`${basePath}/${encodeURIComponent(item.name)}`} passHref>
            <S.Card>
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
                  <picture key={image}>
                    {getMobileImage(image) && (
                      <source
                        media="(max-width: 768px)"
                        srcSet={getMobileImage(image)}
                      />
                    )}
                    <S.GameImage
                      src={image}
                      alt={`${item.name} 대표 화면 ${imageIndex + 1}`}
                      viewType={item.type}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </picture>
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
    color: #ffffff;

    @media (max-width: 768px) {
      width: min(calc(100% - 32px), 640px);
      padding: 72px 0 120px;
    }
  `,
  Card: styled.a`
    display: flex;
    position: relative;
    gap: 56px;
    color: #ffffff;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 -24px;
      width: 4px;
      background: #ffffff;
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
      outline: 2px solid #ffffff;
      outline-offset: 12px;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 28px;
    }
  `,
  Info: styled.div`
    display: flex;
    min-width: 360px;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: clamp(28px, 2.5vw, 36px);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.055em;
      white-space: nowrap;
    }

    p {
      font-size: clamp(13px, 1.2vw, 15px);
      font-weight: 400;
      line-height: 1.65;
      color: rgba(255, 255, 255, 0.58);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      width: 100%;
      min-width: 0;

      h1 {
        font-size: clamp(20px, 5.8vw, 36px);
      }
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
    overflow: hidden;

    picture {
      display: block;
      width: 100%;
    }

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
    background: #0a0a0a;
    filter: saturate(0.86);

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
    height: 1px;
    margin: 72px 0;
    background: rgba(255, 255, 255, 0.11);
  `,
};
