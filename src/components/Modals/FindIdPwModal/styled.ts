import styled from '@styled';

export const ContentWrapper = styled.div`
  &,
  div {
    display: flex;
  }
  font-size: 0.7rem;
  flex-direction: column;
  align-items: center;
  /* padding: 1rem 1rem 0 1rem; */

  h1 {
    font-weight: bold;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.PRIMARY};
    margin-bottom: 1.3rem;
  }

  & > form {
    padding: 0 1rem 0 1rem;
    display:grid;
    grid-template-columns: 3fr 5fr 3fr;
    grid-row-gap: 0.6rem;
    grid-column-gap: 0.3rem;
    align-items: center;
    span {
      font-weight: bold;
    }

    span:nth-child(3){
      font-weight: normal;
    }
    input {
      width: 7rem;
      margin-right: 0.1rem;
    }
    div{
      align-items: baseline;
    }
    button {
      font-size: 0.7rem;
    }

  }
  & > span{
    margin-top: 0.5rem;
    font-size: 0.5rem;
    font-weight: bold;
  }
  & > div {
    margin-top: 1.7em;
    justify-content: center;
    align-items: center;
  }
`;