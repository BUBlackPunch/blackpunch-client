import styled from '@styled';

export default styled.footer`
  width: 100%;

  & > hr {
    width: 80%;
    border: 1px solid ${({ theme }) => theme.LIGHT_BLUE};
  }

  & > section {
    width: 900px;
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 10px;
    padding: 14px 0;
    margin: 0 auto;

    & .footer-header {
      margin-bottom: 30px;

      & > .footer-title {
        font-size: 12px;
        font-weight: 700;
        margin-right: 8px;
      }
    }

    & .footer-bottom {
      display: flex;
      flex-direction: column;
      line-height: 14px;

      & > .footer-admin {
        font-weight: 700;
      }
    }
  }
`;
