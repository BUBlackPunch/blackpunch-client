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

export const Invalid = (): JSX.Element => {
  return (
    <>
      <h5>Input</h5>
      <Input required />
      <br />
      <h5>Textarea</h5>
      <Textarea required />
    </>
  );
};

export const Disabled = (): JSX.Element => {
  return (
    <>
      <h5>Input</h5>
      <Input disabled />
      <br />
      <h5>Textarea</h5>
      <Textarea disabled />
    </>
  );
};
