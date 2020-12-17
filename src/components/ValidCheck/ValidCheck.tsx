/** @jsx jsx */
import React from 'react';
import { ValidCheckType, VALID_CHECK_DEFAULT } from './index';
import { jsx, css } from '@emotion/core';
import theme from '@/theme';

interface Props {
  children: React.ReactNode;
  type: ValidCheckType;
}

const ValidCheck = ({ type, children }: Props): JSX.Element => {
  return (
    <span
      css={css`
        color: ${type === VALID_CHECK_DEFAULT ? theme.PRIMARY_FONT : theme.ERROR};
      `}
    >
      {children}
    </span>
  );
};

export default ValidCheck;
