import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { BUTTON_TYPE_PRIMARY } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => {
  const content = text('content', 'default');

  return <Button text={content} onClick={action('clicked')} />;
};

export const Primary = () => {
  const content = text('content', 'primary');

  return <Button text={content} type={BUTTON_TYPE_PRIMARY} onClick={action('clicked')} />;
};
