import React from 'react';
import PostHeader from './PostHeader';
import UpVote from './PostLike';
import { PostViewWrapper } from './styled';
import { Post } from './index';
import TUIViewer from '../TUIViewer';

interface Props {
  post: Post;
}

const PostView: React.FC<Props> = ({ post }: Props) => {
  return (
    <PostViewWrapper>
      <PostHeader post={post} />
      {/* Content 내용이 들어갈 것.*/}
      <TUIViewer content={post.content} />
      <UpVote num={post.like} />
    </PostViewWrapper>
  );
};

export default PostView;
