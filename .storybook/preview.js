import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import reset from 'emotion-reset';

import theme from '../src/theme';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

      body.sb-show-main * {
        font-family: 'Noto Sans KR', sans-serif !important;
      }
    `}
  />
);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
