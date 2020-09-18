import React from 'react';
// import { text } from '@storybook/addon-knobs';

import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => <Header isLogin={true} />;
export const SignIn = (): JSX.Element => <Header isLogin={false} />;
