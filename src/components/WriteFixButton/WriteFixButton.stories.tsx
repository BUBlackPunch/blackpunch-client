import React from 'react';
import { action } from '@storybook/addon-actions';

import WriteFixButton from './index';

export default {
  title: 'WriteFixButton',
  component: WriteFixButton,
};

export const Default = () => {
  return <WriteFixButton onClick={action('clicked')} />;
};
