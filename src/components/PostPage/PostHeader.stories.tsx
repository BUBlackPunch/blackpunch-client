import React from 'react';
import PostHeader from './PostHeader';
import { text } from '@storybook/addon-knobs';
import { Post } from './index';

export default {
  'title': 'PostHeader',
  component: PostHeader
};

export const Default = () => {
  const post: Post = {
    id: 1,
    createdAt: '2020.08.08',
    category: { name: '유머', color: 'yellow' },
    title: text('title', '자바스크립트로 먹고살 수 있을까?ㅠㅠㅠ'),
    tags: [
      { id: 1, name: '태그', color: 'green' },
      { id: 2, name: '태그', color: 'green' },
    ],
    user: { name: 'user123', profile: null },
    like: 10,

  };
  return <PostHeader post={post} />;
};
