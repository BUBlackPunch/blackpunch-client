import React from 'react';
import { Input, Textarea } from './Input';

export default { title: 'Input & Textarea', component: Input };
export const Default = (): JSX.Element => {
  return (
    <>
      <h5>Input</h5>
      <Input />
      <br />
      <h5>Textarea</h5>
      <Textarea />
    </>
  );
};
