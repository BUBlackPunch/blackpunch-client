import styled from '../../../lib/styled';
export const PostListWrapper = styled.div`
  &,
  * {
    display: flex;
  }
  width: 100%;
  flex-direction: column;
  & > span {
    margin-top: 2rem;
    color: ${({theme})=> theme.PRIMARY};
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0.7rem;
  }
  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 0;
    flex-wrap: nowrap;
    margin-bottom: 0.25rem;
    text-overflow: ellipsis;

    & > div {
      width: 3px;
      height: 1rem;
      margin-right: 7px;
    }

    & > span {
      display: inline-block;
      max-width: 260px;
      font-size: 0.76rem;
      font-weight: 300;

      color: ${({theme}) => theme.PRIMARY_FONT};
      line-height: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & > span:last-child {
      flex: none;
      margin-left: auto;
      padding-left: 3px;
      width: 5rem;
      font-size: 0.7rem;
      color: gray;
      margin-right: 3%;
      flex-shrink: 0;
    }
  }
`;


export const ProfileWrapper = styled.div`
  &,
  div {
    display:flex;
  }
  padding: 1rem 1rem 1rem 1rem;
  flex-direction: column;
  justify-content: center;
  width: 365px;
  max-width: 365px;

  & > div:first-child{
    flex-direction: row;
    justify-content: flex-start;

    & > div:nth-child(2) {
      margin-left: 2rem;
      line-height: 200%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      & > span {
        font-size: 1rem;
        line-height: 1.2rem;
        margin-bottom: 1.2rem;
      }
      & > span:last-child {
        margin-right: 4rem;
        font-size: 0.7rem;
        color: gray;
      }
    }
  }
`;