import React from 'react';
import styled from '../../lib/styled';

import { ButtonType, BUTTON_TYPE_DEFAULT } from './index';

interface Props {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

interface ButtonProps {
  buttonType: ButtonType;
}

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${({ buttonType, theme }) =>
    buttonType === BUTTON_TYPE_DEFAULT ? 'rgba(0,0,0,0)' : theme.BUTTON_PRIMARY};
  color: ${({ buttonType, theme }) => (buttonType === BUTTON_TYPE_DEFAULT ? theme.BUTTON_DEFAULT_FONT : theme.PRIMARY)};
  border: none;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 900;
  transition: opacity 0.5s;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

// type은 default와 private을 import 해서 사용
const Button = ({ type = BUTTON_TYPE_DEFAULT, text, onClick }: Props) => (
  <ButtonWrapper onClick={onClick} buttonType={type}>
    {text}
  </ButtonWrapper>
);

export default Button;
