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
  z-index: 100;

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
`;

export default WriteFixButtonWrapper;
