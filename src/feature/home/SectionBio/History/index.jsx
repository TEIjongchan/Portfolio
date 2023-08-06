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
              <S.HistoryItem key={item.name}>
                <S.Nmae>{item.name}</S.Nmae>
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
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 160px 0;
    background: #f6f6f6;
  `,
  HistoryWrapper: styled.div`
    display: flex;

    gap: 24px;
  `,
  HistoryContent: styled.div`
    text-align: center;
    width: 400px;
    color: #1e1e1e;

    .title {
      margin-bottom: 40px;
      font-size: 20px;
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

      background: #d9d9d9;
    }
    span {
      display: block;
      font-weight: 200;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      margin-bottom: 16px;

      color: #1e1e1e;

      &:nth-last-child(1) {
        margin: 0;
      }
    }
  `,
  Nmae: styled.p`
    text-align: right;
  `,
  Info: styled.div`
    text-align: left;
  `,
};
export default History;
