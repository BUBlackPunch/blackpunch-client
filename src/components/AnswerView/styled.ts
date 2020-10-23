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
  /* background-color: #fff; */

  & > span:first-child {
    justify-content: flex-start;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;

    & > div:first-child {
      margin-right: 0.5rem;
    }

    & > div:last-child {
      justify-self: flex-end;
      margin-left: auto;
      flex-direction: column;
      align-items: center;
    }
  }

  & > div {
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 70px;
  }

  & > span:last-child {
    width: 100%;
    input {
      height: 1.5rem;
      flex-grow: 2;
      width: max-content;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    margin-left: 0;
  }
`;

export const AnswerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem 0.75rem 1rem;
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
