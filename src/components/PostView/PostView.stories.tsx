import React from 'react';
import { storiesOf } from '@storybook/react';
import PostHeader from './PostHeader';
import PostView from './PostView';
import { number } from '@storybook/addon-knobs';
import { Post } from './index';
import PostLike from './PostLike';
import AnswerView, { AnswerProps, CommentProps } from '@components/AnswerView';
import CommentView from '@components/AnswerView/CommentView';
import TUIViewer from '@components/TUIViewer';

const content = `
<h2>hi</h2>
<ul>
<li>a</li>
<li>b</li>
<li>c</li>
<li>d</li>
<li>e</li>
</ul>
<pre><code data-language="javascript" class="lang-javascript">const a = 'javascript';
</code></pre>`;

const post: Post = {
  id: 1,
  createdAt: '2020.08.08',
  category: { name: '유머', color: 'yellow' },
  title: '자바스크립트로 먹고살 수 있을까?ㅠㅠㅠ',
  tags: [
    { id: 1, name: '김장', color: 'purple' },
    { id: 2, name: '태그', color: 'teal' },
  ],
  user: { name: 'user123', profile: null },
  like: 10,
  content: content,
};

const comments: CommentProps[] = [
  {
    id: 1,
    user: 'user1',
    date: '2020.08.01.',
    content: '반갑습니다.',
  },
  {
    id: 2,
    user: 'user2',
    date: '2020.08.01.',
    content: '반갑습니다.',
  },
  {
    id: 3,
    user: 'user3',
    date: '2020.08.01.',
    content: '반갑습니다.',
  },
];

const AnswerData: AnswerProps[] = [
  {
    id: 1,
    name: 'name',
    like: 10,
    date: '2020.08.08',
    content: content,
  },
  {
    id: 2,
    name: 'name',
    like: 10,
    date: '2020.08.08',
    content: content,
    comments: comments,
  },
  {
    id: 4,
    name: 'name',
    like: 10,
    date: '2020.08.08',
    content: content,
    comments: comments,
  },
  {
    id: 5,
    name: 'name',
    like: 10,
    date: '2020.08.08',
    content: content,
  },
  {
    id: 6,
    name: 'name',
    like: 10,
    date: '2020.08.08',
    content: content,
  },
];

storiesOf('Post & Answer', module)
  .add('PostView', () => <PostView post={post} />)
  .add('PostHeader', () => <PostHeader post={post} />)
  .add('TUIView', () => <TUIViewer content={content} />)
  .add('PostLike', () => {
    return <PostLike num={number('num', 10)} />;
  })
  .add('Answer', () => <AnswerView items={AnswerData} />)
  // .add('AnswerView', () => <AnswerView content={content} name="name" date="2020.08.08" like={10} />)
  .add('CommentView', () => <CommentView items={comments} />);
