import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import reset from 'emotion-reset';

import theme from '../src/theme';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      body.sb-show-main {
        margin: 0 !important;
        padding: 0 !important;
      }

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

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'app-background',
        value: '#ECF4FB',
      },
    ],
  },
};
