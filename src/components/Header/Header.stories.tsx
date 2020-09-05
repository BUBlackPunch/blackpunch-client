import React from 'react';
// import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => <Header />;
