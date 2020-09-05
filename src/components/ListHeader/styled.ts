import styled from '../../lib/styled';

const ListHeaderWrapper = styled.div`
  width: 900px;
  background-color: ${({ theme }) => theme.WHITE};
  display: flex;
  padding: 8px 12px;

  & > div {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.PRIMARY_FONT};

    &:nth-child(1) {
      width: 44%;
    }
    &:nth-child(2) {
      width: 28%;
    }
    &:nth-child(3) {
      width: 6%;
    }
    &:nth-child(4),
    &:last-child {
      width: 11%;
      text-align: center;
    }
  }

  @media (${({ theme }) => theme.BP.TABLET}) {
    width: calc(100% - 24px);
  }

  @media (${({ theme }) => theme.BP.MOBILE}) {
    & > div {
      font-size: 12px;

      &:nth-child(1) {
        width: 80%;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3),
      &:last-child {
        display: none;
      }
      &:nth-child(4) {
        width: 20%;
        text-align: center;
      }
    }
  }
`;

export default ListHeaderWrapper;
