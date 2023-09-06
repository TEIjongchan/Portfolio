import { useRouter } from "next/router";
import { PORTFOLIO_CONSTANT } from "../../../constant/portfolio";
import styled from "styled-components";
import { useState } from "react";
import ImageSlideModal from "../../../components/ImageSlideModal";

function PortfolioDetail() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const name = router.query.name;

  return (
    <S.Container>
      {PORTFOLIO_CONSTANT.map(
        (portfolio) =>
          portfolio.name === name && (
            <S.Wrapper>
              <S.InfoWrapper>
                <S.GameInfo>
                  <S.Name>{portfolio.name}</S.Name>
                  <S.Text style={{ margin: "12px 0" }}>
                    {portfolio.genre.join(" / ")}
                  </S.Text>
                  <S.Text style={{ marginTop: "12px", fontWeight: 200 }}>
                    {portfolio.date}
                  </S.Text>
                </S.GameInfo>
                <S.Toolbox>
                  <S.SmallText>Tool Used</S.SmallText>
                  <S.IconWrapper>
                    {portfolio.iconUrl.map((item) => (
                      <img key={item} src={item} alt="logo" />
                    ))}
                  </S.IconWrapper>
                </S.Toolbox>
                <S.Line />
                <S.GameDesc>
                  <S.Text
                    dangerouslySetInnerHTML={{ __html: portfolio.description }}
                  />
                  {portfolio.source.length > 0 && (
                    <S.SmallText dangerouslySetInnerHTML={{ __html: portfolio.source }}/>
                  )}
                </S.GameDesc>
              </S.InfoWrapper>
              {(portfolio.keyword ||
                portfolio.keyShape ||
                portfolio.colorPalette) && (
                <S.VisualConcept>
                  {portfolio.keyword && (
                    <S.Keyword>
                      <span>KEYWORD</span>
                      <div>
                        {portfolio.keyword?.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </S.Keyword>
                  )}
                  {portfolio.keyShape && (
                    <S.KeyShapre>
                      <span>KEY SHAPE</span>
                      <img src={portfolio.keyShape} alt={"keyShape"} />
                    </S.KeyShapre>
                  )}
                  {portfolio.colorPalette && (
                    <S.ColorPalette>
                      <span>COLOR</span>
                      <img src={portfolio.colorPalette} alt={"colorPalette"} />
                    </S.ColorPalette>
                  )}
                </S.VisualConcept>
              )}
              <S.DetailImageWrapper>
                {portfolio.detailImage.map((item, index) => (
                  <S.DetailImage
                    key={index}
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedIndex(index);
                    }}
                  >
                    <S.GameImage
                      viewType={item.type}
                      src={item.url}
                      alt="게임 이미지"
                    />
                    <span>{item.text}</span>
                  </S.DetailImage>
                ))}
              </S.DetailImageWrapper>
              <ImageSlideModal
                images={portfolio.detailImage}
                isOpen={isOpen}
                selectedImageIndex={selectedIndex}
                handleClose={() => setIsOpen(false)}
              />
            </S.Wrapper>
          )
      )}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 120px 0 320px 0;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2b2b2f;
    text-align: center;
  `,
  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  Name: styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
  `,
  Text: styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  SmallText: styled.span`
    font-weight: 200;
    font-size: 16px;
    line-height: 19px;
  `,
  GameInfo: styled.div``,
  Toolbox: styled.div`
    gap: 16px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    gap: 24px;
    margin-left: auto;
  `,
  GameImage: styled.img`
    width: ${(props) => (props.viewType === "vertical" ? "384px" : "588px")};
    height: auto;
  `,
  IconWrapper: styled.ul`
    display: flex;
    gap: 8px;

    img {
      width: 40px;
      height: 40px;
    }
  `,
  Line: styled.hr`
    width: 24px;
    height: 2px;
    background-color: #e8e8e8;
  `,
  GameDesc: styled.div`
    gap: 36px;
  `,
  VisualConcept: styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 160px;

    span {
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;

      margin-bottom: 32px;
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 384px;
    }
  `,
  Keyword: styled.div`
    div {
      display: flex;
      gap: 8px;
    }
  `,
  KeyShapre: styled.div`
    img {
      width: 104px;
      height: 104px;
    }
  `,
  ColorPalette: styled.div`
    img {
      width: 100%;
      height: 104px;
    }
  `,
  DetailImageWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 160px;

    span {
      font-weight: 200;
      font-size: 20px;
      line-height: 24px;
    }
  `,
  DetailImage: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
  `,
};

export default PortfolioDetail;
