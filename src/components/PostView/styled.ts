import styled from '../../lib/styled';

export const PostViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

export const PostHeaderWrapper = styled.header`
  &,
  & > span {
    display: inline-flex;
    align-items: baseline;
  }
  width: 900px;
  line-height: 1.5rem;

  flex-direction: column;
  color: ${({ theme }) => theme.PRIMARY_FONT};
  font-weight: bold;

  span :not(:last-child) {
    margin-bottom: 0.3rem;
  }

  & > span:nth-child(1) {
    justify-content: flex-start;
    font-size: 0.75rem;
  }

  & > span:nth-child(2) {
    max-width: 900px;
    max-lines: 1;
    div:nth-child(1) {
      font-size: 1.5rem;
      white-space: nowrap;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div:nth-child(2) {
      font-size: 0.65rem;
      margin-left: 0.6rem;
    }
  }

  & > span:nth-child(3) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 0.75rem;

    div:last-child {
      display: flex;
      align-items: center;
      margin-top: 3rem & > div {
        margin-right: 0.5rem;
      }
    }
    strong {
      margin-right: 0.5rem;
    }
  }
`;

export const UpVoteWrapper = styled.span`
  &,
  div {
    display: inline-flex;
    align-items: center;
  }
  margin-top: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  align-self: center;
  color: ${({ theme }) => theme.PRIMARY_FONT};
  svg {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;
