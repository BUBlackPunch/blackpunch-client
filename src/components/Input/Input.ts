import styled from '../../lib/styled';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.LIGHT_BLUE};
  outline: none;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px 0px rgba(67, 90, 111, 0.2) inset;
  box-shadow: 0px 0px 0px 1px rgba(67, 90, 111, 0.3) inset;
  border-radius: 3px;
  height: 1.4rem;
  font-size: 0.7rem;
  padding: 0.1rem 0 0.1rem 0.3rem;

  &:disabled {
    background-color: ${({ theme }) => theme.DISABLED_BLUE};
    cursor: not-allowed;
  }

  &:invalid {
    border: 1px ${({ theme }) => theme.ERROR} solid;
    box-shadow: none;
  }
`;

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.LIGHT_BLUE};
  outline: none;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px 0px rgba(67, 90, 111, 0.2) inset;
  box-shadow: 0px 0px 0px 1px rgba(67, 90, 111, 0.3) inset;
  border-radius: 3px;
  font-size: 0.7rem;
  resize: none;

  &:disabled {
    background-color: ${({ theme }) => theme.DISABLED_BLUE};
  }

  &:invalid {
    border: 1px ${({ theme }) => theme.ERROR} solid;
    box-shadow: none;
  }
`;
