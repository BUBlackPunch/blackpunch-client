import styled from '../../lib/styled';

const WriteFixButtonWrapper = styled.button`
  position: fixed;
  right: 56px;
  bottom: 56px;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.LIGHT_BLUE};
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media (${({ theme }) => theme.BP.MOBILE}) {
    right: 16px;
    bottom: 16px;
    width: 40px;
    height: 40px;

    & svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export default WriteFixButtonWrapper;
