/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias, addDecoratorsLegacy, disableEsLint } = require('customize-cra');
const path = require('path');

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@styled': path.resolve(__dirname, 'src/lib/styled'),
  }),
);
