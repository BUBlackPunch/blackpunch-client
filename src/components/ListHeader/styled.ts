import styled from '@styled';

const ListHeaderWrapper = styled.div`
  width: 876px;
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
      text-align: center;
      width: 6%;
    }
    &:nth-child(4),
    &:last-child {
      width: 11%;
      text-align: center;
    }
  }
`;

export default ListHeaderWrapper;
