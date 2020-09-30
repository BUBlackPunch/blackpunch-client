/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import reset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #ecf4fb;
      }
    `}
  />
);

export default GlobalStyle;
