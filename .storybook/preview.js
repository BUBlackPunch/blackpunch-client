import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import reset from 'emotion-reset';

import theme from '../src/theme';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

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
