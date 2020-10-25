import React from 'react';
import UserAvatar from './index';

export default { title: 'UserAvatar', component: UserAvatar };

export const Default = () => {
  return <UserAvatar />;
};

export const Image = () => {
  return <UserAvatar image="https://picsum.photos/30" />;
};
