import React from 'react';
import ValidCheck from './index';
import { text } from '@storybook/addon-knobs';

export default { title: 'ValidCheck', component: ValidCheck };

export const Default = (): JSX.Element => {
  const data: string = text('children', 'valid');
  return <ValidCheck type="VALID_CHECK_DEFAULT">{data}</ValidCheck>;
};

export const Error = (): JSX.Element => {
  const data: string = text('children', 'invalid');
  return <ValidCheck type="VALID_CHECK_ERROR">{data}</ValidCheck>;
};
