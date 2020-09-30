import React from 'react';
import { text } from '@storybook/addon-knobs';

import AppLayout from './index';

export default {
  title: 'AppLayout',
  component: AppLayout,
};

export const Default = (): JSX.Element => {
  const content = text('content', '');

  return <AppLayout isLogin={true}>{content}</AppLayout>;
};
export const SignIn = (): JSX.Element => {
  const content = text('content', '');

  return <AppLayout isLogin={false}>{content}</AppLayout>;
};
