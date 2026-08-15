import styled from "styled-components";
import { HISTORY_CONSTANT } from "../../../../constant/index";
function History() {
  return (
    <S.Wrapper>
      <S.HistoryWrapper>
        <S.HistoryContent>
          <div className="title">경력</div>
          <S.HistoryList>
            {HISTORY_CONSTANT.career.map((item) => (
              <S.HistoryItem key={`${item.name}-${item.date}`}>
                <S.Name>{item.name}</S.Name>
                <hr />
                <S.Info>
                  <p>{item.job}</p>
                  <span>{item.date}</span>
                  {item.workDetail.map((item) => (
                    <span
                      key={item}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </S.Info>
              </S.HistoryItem>
            ))}
          </S.HistoryList>
        </S.HistoryContent>
      </S.HistoryWrapper>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 160px 0;
    background: #0a0a0a;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    @media (max-width: 768px) {
      padding: 96px 16px;
    }
  `,
  HistoryWrapper: styled.div`
    display: flex;

    gap: 24px;
  `,
  HistoryContent: styled.div`
    text-align: center;
    width: min(720px, calc(100vw - 32px));
    color: #ffffff;

    .title {
      margin-bottom: 40px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.4);
    }
  `,
  HistoryList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  HistoryItem: styled.li`
    display: grid;
    grid-template-columns: 180px 24px 180px;
    justify-content: center;

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
      gap: 8px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      hr {
        display: none;
      }
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      margin-bottom: 8px;
    }

    hr {
      width: 2px;
      height: 24px;
      margin: 0;
      margin: 0 11px;

      background: rgba(255, 255, 255, 0.12);
    }
    span {
      display: block;
      font-weight: 200;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      margin-bottom: 16px;

      color: rgba(255, 255, 255, 0.58);

      &:nth-last-child(1) {
        margin: 0;
      }
    }
  `,
  Name: styled.p`
    text-align: right;

    @media (max-width: 560px) {
      text-align: left;
      font-weight: 500;
    }
  `,
  Info: styled.div`
    text-align: left;
  `,
};
export default History;
