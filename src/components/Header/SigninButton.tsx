/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from 'react';
import { css, jsx } from '@emotion/core';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonWrapper: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button
      onClick={() => alert('none')}
      css={css`
        color: white;
        border: none;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        background: none;
        font-size: 14px;
        border: none;
        outline: none;
        /* font-weight: 500; */

        &:hover {
          cursor: pointer;
        }
      `}
    >
      {children}
    </button>
  );
};

export const SigninButton = (): JSX.Element => {
  return (
    <div
      css={css`
        margin-left: auto;
      `}
    >
      <ButtonWrapper>로그인</ButtonWrapper>
      <ButtonWrapper>회원가입</ButtonWrapper>
    </div>
  );
};
