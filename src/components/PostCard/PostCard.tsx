import React from 'react';
import { Avatar, Badge } from 'evergreen-ui';

import image from './media.svg';

import PostCardWrapper, { PostTitleWrapper, TagsWrapper, LikeWrapper, WriterOrCreatedWrapper } from './styled';

type TagColor =
  | 'automatic'
  | 'neutral'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'purple'
  | undefined;

// 더미 타입 (나중에 교체)
export interface Post {
  id: number;
  title: string;
  category: { name: string; color: string };
  tags: { id: number; name: string; color: TagColor }[];
  like: number;
  user: { name: string; profile: string | null };
  hasImage?: boolean;
  createdAt: string;
}

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => (
  <PostCardWrapper borderColor={post.category.color}>
    <PostTitleWrapper>
      <div>
        <span>{post.title}</span>
        {post.hasImage && <img src={image} alt="post has img"></img>}
      </div>
      <span>{post.category.name}</span>
    </PostTitleWrapper>
    <TagsWrapper>
      {post.tags.map((tag) => (
        <Badge color={tag.color} key={`post-${post.id}-tag-${tag.id}`}>
          {tag.name}
        </Badge>
      ))}
    </TagsWrapper>
    <LikeWrapper>{post.like}</LikeWrapper>
    <WriterOrCreatedWrapper>
      <Avatar name={post.user.name} color="blue" />
      <span>{post.user.name}</span>
    </WriterOrCreatedWrapper>
    <WriterOrCreatedWrapper>{post.createdAt}</WriterOrCreatedWrapper>
  </PostCardWrapper>
);

export default PostCard;
