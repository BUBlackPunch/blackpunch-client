import styled from '../../lib/styled';

export const AnswerViewWrapper = styled.div`
  &,
  & > span {
    display: flex;
    flex-wrap: nowrap;
  }
  width: 900px;
  flex-direction: column;
  color: ${({ theme }) => theme.PRIMARY_FONT};
  background-color: #fff;
  border: solid 0.5px #dddddd;
  padding: 0.75rem 1rem 0.75rem 1rem;

  & > span:first-child {
    justify-content: flex-start;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;

    & > div:first-child {
      margin-right: 0.5rem;
    }
    & > div:nth-child(2) {
      display: flex;
      line-height: 1rem;
      flex-direction: column;
    }
    & > div:last-child {
      justify-self: flex-end;
      margin-left: auto;
      align-items: center;
    }
  }
`;

export const AnswerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0.75rem 1rem 0.75rem 1rem; */
  width: 900px;
  & > span {
    font-size: 0.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.PRIMARY_FONT};
    margin-bottom: 1rem;
  }

  & > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.PRIMARY_FONT};
  margin-top: 1rem;
  width: 100%;
  /* each Row */
  & > div {
    display: flex;
    justify-content: flex-start;

    & > div {
      & > div {
        margin-right: 0.5rem;
      }
      & > span {
        display: flex;
        flex-wrap: nowrap;
        font-size: 0.75rem;
        & > div:first-child {
          font-weight: bold;
          margin-right: 0.5rem;
        }
      }
      & > span:last-child {
        font-size: 0.65rem;
      }
    }
    margin-bottom: 0.75rem;
  }
`;

export const CommentButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    height: 1.5rem;
    flex-grow: 2;
    width: max-content;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  margin-left: 0;
`;
