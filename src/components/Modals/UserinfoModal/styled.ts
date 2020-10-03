import styled from '../../../lib/styled';

export const ContentWrapper = styled.div`
  &,
  & > div {
    display: flex;
  }
  font-size: 0.7rem;
  flex-direction: column;
  padding: 1rem 3.5rem 0 2rem;
  h1 {
    font-weight: bold;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.PRIMARY};
    margin-bottom: 2rem;
  }

  textarea {
    height: 5rem;
  }

  & > form {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-row-gap: 1rem;

    /* input with valid check  */
    & > div {
      display: flex;
      flex-direction: column;
      input {
        width: 11rem;
      }
      span {
        margin-top: 0.2rem;
        font-weight: bold;
        font-size: 0.5rem;
        padding-left: 0.2rem;
      }
    }
    /* email-auth */
    & > span {
      display: inline-flex;
      input {
        width: 7rem;
      }    
      size: 0.6rem;
      font-weight: 500;

      button {
        margin-left: auto;
        font-size: 0.6rem;
      }

      span {
        margin-left: 0.1rem;
        font-weight: normal;
        align-self: center;
      }
    }
  }

  & > div {
    margin-top: 1rem;
    justify-content: center;
  }
`;
