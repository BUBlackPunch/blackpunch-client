import styled from '@styled';

export const WriteReplyFormWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 0;
  transition: height 0.5s;
  height: 420px;
  overflow: hidden;
  box-sizing: border-box;

  & > hr {
    width: 100%;
    border-top: 10px solid ${({ theme }) => theme.PRIMARY};
  }

  & > div {
    width: 900px;
    margin: 40px 0;

    & > span {
      font-size: 14px;
      font-weight: bold;
      color: ${({ theme }) => theme.PRIMARY};
    }

    & > div > button {
      width: 72px;
      margin-right: 8px;
    }
  }

  &.hidden {
    height: 0px;
    border-top: 0px;
  }
`;

export const EditorWrapper = styled.div`
  margin: 12px 0;
`;
