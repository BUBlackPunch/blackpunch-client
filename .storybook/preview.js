import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme';

import GlobalStyle from '../src/theme/global';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
