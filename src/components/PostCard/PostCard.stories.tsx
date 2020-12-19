import React from 'react';
import { text } from '@storybook/addon-knobs';

import PostCard from './index';
import ListHeader from '@components/ListHeader';
import { Post } from './PostCard';

export default {
  title: 'PostCard',
  component: PostCard,
};

export const Default = () => {
  const post: Post = {
    id: 1,
    title: text('title', '비가오면 머리가 아픈 이유'),
    category: { name: text('category', '공지사항'), color: '#1070CA' },
    tags: [
      { id: 1, name: 'test', color: 'neutral' },
      { id: 2, name: 'test2', color: 'green' },
    ],
    like: 10,
    user: { name: text('username', 'name'), profile: null },
    createdAt: '2020.05.05',
  };

  return <PostCard post={post} />;
};

export const HasImage = () => {
  const post: Post = {
    id: 1,
    title: text('title', '비가오면 머리가 아픈 이유'),
    category: { name: text('category', '공지사항'), color: '#FBE6A2' },
    tags: [
      { id: 1, name: 'test', color: 'blue' },
      { id: 2, name: 'test2', color: 'red' },
    ],
    like: 10,
    user: { name: text('username', 'name'), profile: null },
    createdAt: '2020.05.05',
    hasImage: true,
  };

  return <PostCard post={post} />;
};

export const HasListHeader = () => {
  const post: Post = {
    id: 1,
    title: text('title', '비가오면 머리가 아픈 이유'),
    category: { name: text('category', '공지사항'), color: '#FBE6A2' },
    tags: [
      { id: 1, name: 'test', color: 'blue' },
      { id: 2, name: 'test2', color: 'red' },
    ],
    like: 10,
    user: { name: text('username', 'name'), profile: null },
    createdAt: '2020.05.05',
    hasImage: true,
  };

  return (
    <>
      <ListHeader />
      <PostCard post={post} />
    </>
  );
};
