import { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import ImageSlideModal from "../ImageSlideModal";

function WorkDetail({ items }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const name = Array.isArray(router.query.name)
    ? router.query.name[0]
    : router.query.name;
  const item = items.find((work) => work.name === name);

  if (!router.isReady) return null;

  if (!item) {
    return (
      <S.Empty role="status">
        <h1>작품을 찾을 수 없습니다.</h1>
        <button type="button" onClick={() => router.back()}>
          이전 페이지로 돌아가기
        </button>
      </S.Empty>
    );
  }

  return (
    <S.Wrapper>
      <Head>
        <title>{item.name} | 이종찬 포트폴리오</title>
        <meta
          name="description"
          content={item.description.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "")}
        />
      </Head>
      <S.ContentWrapper>
        <S.InfoWrapper>
          <div>
            <S.Name>{item.name}</S.Name>
            <S.Text>{item.genre.join(" / ")}</S.Text>
            <S.Date>{item.date}</S.Date>
          </div>
          <S.Toolbox>
            <S.SmallText>Tool Used</S.SmallText>
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
          </S.Toolbox>
          <S.Line />
          <S.GameDesc>
            <S.Text dangerouslySetInnerHTML={{ __html: item.description }} />
            {item.source && (
              <S.SmallText dangerouslySetInnerHTML={{ __html: item.source }} />
            )}
          </S.GameDesc>
        </S.InfoWrapper>

        {(item.keyword || item.keyShape || item.colorPalette) && (
          <S.VisualConcept>
            {item.keyword?.length > 0 && (
              <S.ConceptItem>
                <span>KEYWORD</span>
                <div>
                  {item.keyword.map((keyword) => (
                    <p key={keyword}>{keyword}</p>
                  ))}
                </div>
              </S.ConceptItem>
            )}
            {item.keyShape && (
              <S.ConceptItem>
                <span>KEY SHAPE</span>
                <img src={item.keyShape} alt={`${item.name} 핵심 형태`} />
              </S.ConceptItem>
            )}
            {item.colorPalette && (
              <S.ConceptItem>
                <span>COLOR</span>
                <img src={item.colorPalette} alt={`${item.name} 색상 팔레트`} />
              </S.ConceptItem>
            )}
          </S.VisualConcept>
        )}

        <S.DetailImageWrapper viewType={item.type}>
          {item.detailImage.map((image, index) => (
            <S.DetailImage
              key={image.url}
              type="button"
              onClick={() => {
                setIsOpen(true);
                setSelectedIndex(index);
              }}
              aria-label={`${image.text || item.name} 크게 보기`}
            >
              <S.GameImage
                viewType={image.type}
                src={image.url}
                alt={image.text || `${item.name} 화면 ${index + 1}`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              {image.text && <span>{image.text}</span>}
            </S.DetailImage>
          ))}
        </S.DetailImageWrapper>
      </S.ContentWrapper>

      {item.history?.length > 0 && (
        <S.HistorySection aria-label={`${item.name} 프로젝트 경험`}>
          <S.ProjectHistory>
            {item.history.map((section) => (
              <S.HistoryWrapper key={section.name}>
                <S.HistoryTitle>{section.name}</S.HistoryTitle>
                <S.HistoryLine />
                <S.HistoryContent>
                  {section.list.map((group) => (
                    <div key={group.title}>
                      <h2 dangerouslySetInnerHTML={{ __html: group.title }} />
                      <ul>
                        {group.content.map((content, contentIndex) => (
                          <Fragment key={`${content.text}-${contentIndex}`}>
                            <li
                              dangerouslySetInnerHTML={{ __html: content.text }}
                            />
                            {content.type === "list" && (
                              <ul>
                                {content.content.map((text) => (
                                  <li
                                    key={text}
                                    dangerouslySetInnerHTML={{ __html: text }}
                                  />
                                ))}
                              </ul>
                            )}
                          </Fragment>
                        ))}
                      </ul>
                    </div>
                  ))}
                </S.HistoryContent>
              </S.HistoryWrapper>
            ))}
          </S.ProjectHistory>
        </S.HistorySection>
      )}

      <ImageSlideModal
        images={item.detailImage}
        isOpen={isOpen}
        selectedImageIndex={selectedIndex}
        handleClose={() => setIsOpen(false)}
      />
    </S.Wrapper>
  );
}

export default WorkDetail;

const S = {
  Wrapper: styled.div`
    color: #2b2b2f;
    text-align: center;
  `,
  ContentWrapper: styled.div`
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
    padding: 120px 0 160px;

    @media (max-width: 768px) {
      width: min(calc(100% - 32px), 640px);
      padding: 72px 0 96px;
    }
  `,
  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media (max-width: 768px) {
      gap: 36px;
    }
  `,
  Name: styled.h1`
    font-size: clamp(30px, 5vw, 36px);
    font-weight: 600;
    line-height: 1.25;
  `,
  Text: styled.p`
    margin-top: 12px;
    font-size: clamp(17px, 2.5vw, 20px);
    font-weight: 400;
    line-height: 1.55;

    @media (max-width: 640px) {
      br {
        display: none;
      }
    }
  `,
  Date: styled.p`
    margin-top: 12px;
    font-size: 18px;
    font-weight: 300;
  `,
  SmallText: styled.p`
    max-width: 760px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.65;
  `,
  Toolbox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  IconWrapper: styled.div`
    display: flex;
    gap: 8px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  `,
  Line: styled.hr`
    width: 24px;
    height: 2px;
    background: #e8e8e8;
  `,
  GameDesc: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  `,
  VisualConcept: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    width: 100%;
    margin-top: 120px;
  `,
  ConceptItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    > span {
      font-size: 18px;
      font-weight: 400;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `,
  DetailImageWrapper: styled.div`
    display: grid;
    grid-template-columns: ${({ viewType }) =>
      viewType === "vertical"
        ? "repeat(3, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))"};
    gap: 32px 24px;
    margin-top: 140px;

    @media (max-width: 900px) {
      grid-template-columns: ${({ viewType }) =>
        viewType === "vertical" ? "repeat(2, minmax(0, 1fr))" : "1fr"};
    }

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      margin-top: 88px;
    }
  `,
  DetailImage: styled.button`
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: inherit;
    text-align: center;

    span {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 300;
    }

    &:hover img {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
    }

    &:focus-visible {
      outline: 2px solid #1e1e1e;
      outline-offset: 6px;
    }
  `,
  GameImage: styled.img`
    width: ${({ viewType }) => (viewType === "vertical" ? "65%" : "100%")};
    height: auto;
    background: #ededed;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    @media (max-width: 680px) {
      width: ${({ viewType }) => (viewType === "vertical" ? "78%" : "100%")};
    }
  `,
  HistorySection: styled.section`
    width: 100%;
    padding: 120px 24px 160px;
    background: #f6f6f6;

    @media (max-width: 768px) {
      padding: 88px 16px 104px;
    }
  `,
  ProjectHistory: styled.div`
    display: flex;
    width: min(1200px, 100%);
    margin: 0 auto;
    flex-direction: column;
    gap: 88px;
  `,
  HistoryWrapper: styled.div`
    display: grid;
    grid-template-columns: 344px 2px minmax(0, 1fr);
    gap: 40px;
    font-size: 20px;
    line-height: 1.5;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  `,
  HistoryTitle: styled.h2`
    font-size: 20px;
    font-weight: 500;
    text-align: right;

    @media (max-width: 768px) {
      text-align: left;
    }
  `,
  HistoryLine: styled.hr`
    width: 2px;
    height: 100%;
    background: #d9d9d9;

    @media (max-width: 768px) {
      width: 40px;
      height: 2px;
    }
  `,
  HistoryContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    font-size: 17px;
    font-weight: 300;
    text-align: left;

    h2 {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 500;
    }

    li {
      position: relative;
      padding-left: 18px;
      line-height: 1.7;
    }

    li::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }

    ul ul {
      padding-left: 18px;
    }
  `,
  Empty: styled.div`
    display: flex;
    min-height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button {
      padding: 12px 18px;
      border: 1px solid #1e1e1e;
      border-radius: 4px;
    }
  `,
};
