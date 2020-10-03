import styled from '../../../lib/styled';

export const ContentWrapper = styled.div`
  &,
  form,
  div {
    display: flex;
  }
  &,
  form {
    flex-direction: column;
    align-items: center;
  }

  font-size: 0.7rem;

  h1 {
    font-weight: bold;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.PRIMARY};
    margin-bottom: 1rem;

  }

  & > form {
    padding: 0 1rem 0 1rem;
    & > div {
      width: 100%;
      display: flex;
      flex-flow: row, nowrap;
      font-size: 0.7rem;
      font-weight: bold;
      align-items: center;
      justify-content: flex-end;
      margin: 0.5rem 0 0.5rem 0;
      input {
        margin-left: 1rem;
        width: 9rem;
      }
    }

    & > span {
        margin-top: 0.5rem;
        font-size: 0.5rem;
      }
  }
  & > div {
    margin-top: 1.3em;
    justify-content: center;
    align-items: center;
  }
`;