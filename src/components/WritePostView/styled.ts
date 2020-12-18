import styled from '@styled';

export const WritePostHeaderWrapper = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.3rem;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }

  & > *:first-child {
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 1rem;
    font-weight: 400;
    margin-right: 2rem;
  }

  & > input {
    box-sizing: border-box;
    width: 5.7rem;
  }
`;

export const WritePostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-bottom: 0.5rem;
  }

  & > *:nth-child(2) {
    background-color: white;
  }

  & > input {
    margin-left: 0;
    margin-right: 0;
    height: 1.8rem;
  }

  & > *:last-child {
    width: auto;
    margin-top: 1rem;
    margin-left: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
