import styled from '../../lib/styled';

const PostCardWrapper = styled.div<{ borderColor: string }>`
  width: 876px;
  height: 44px;
  display: flex;
  padding: 0 12px 0 9px;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER_BOTTOM};
  border-left: 3px solid ${({ borderColor }) => borderColor};
  color: ${({ theme }) => theme.PRIMARY_FONT};
  cursor: pointer;

  & > div {
    height: 100%;
  }
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 44%;
  font-size: 14px;
  line-height: 16px;

  & > div {
    display: flex;

    & > span {
      display: block;
      max-width: 340px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  & img {
    margin-left: 8px;
  }

  & > span {
    font-size: 10px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  width: 28%;
  align-items: center;

  & > strong {
    margin-right: 9px;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 6%;
  text-align: center;
`;

export const WriterOrCreatedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 11%;
  text-align: center;

  & > div {
    margin-right: 4px;
  }
`;

export default PostCardWrapper;
