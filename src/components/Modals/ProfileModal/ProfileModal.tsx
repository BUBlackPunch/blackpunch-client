/** @jsx jsx */
// import React from 'react';
import { Avatar } from 'evergreen-ui';
import ModalFrame, { MODAL_TYPE_PROFILE } from '../ModalFrame';
import { jsx, css } from '@emotion/core';
import { PostListWrapper, ProfileWrapper } from './styled';

interface Props {
  posts: Post[];
  isPost?: boolean;
}

interface Post {
  categoryColor?: string;
  title: string;
  date: string;
}

interface contentProps {
  closable?: boolean;
  nick: string;
  id: string;
  WrittenPosts: Post[];
  WrittenComments: Post[];
  introduce: string;
}

interface ModalProps extends contentProps {
  visible: boolean;
  setVisible(arg0: boolean): void;
}

const WrittenPostComponent = ({ posts, isPost }: Props) => {
  return (
    <PostListWrapper>
      <span>{isPost ? '최근 작성 글 / 답글' : '최근 작성 댓글'}</span>
      {posts.map((post) => {
        return (
          <div key={post.title}>
            {isPost && (
              <div
                css={css`
                  background-color: ${post.categoryColor};
                `}
              />
            )}
            <span>{post.title}</span>
            <span>{post.date}</span>
          </div>
        );
      })}
    </PostListWrapper>
  );
};

const ProfileContent = ({ nick, id, introduce, WrittenPosts, WrittenComments }: contentProps) => {
  return (
    <ProfileWrapper>
      <div>
        <Avatar size={100} name={nick} color="yellow" marginBottom="1rem" />
        <div>
          {/* 닉네임 / 아이디*/}
          <span>
            {nick} / {id}
          </span>
          <span>{introduce}</span>
        </div>
      </div>
      {/* written posts */}
      <WrittenPostComponent isPost={true} posts={WrittenPosts} />
      {/* written comment */}
      <WrittenPostComponent isPost={false} posts={WrittenComments} />
    </ProfileWrapper>
  );
};

// 출력되는 컴포넌트
const ProfileModal = ({
  visible,
  setVisible,
  closable,
  nick,
  id,
  WrittenPosts,
  WrittenComments,
  introduce,
}: ModalProps): JSX.Element => {
  return (
    <ModalFrame
      visible={visible}
      closable={closable === undefined ? true : closable}
      onClose={() => setVisible(false)}
      type={MODAL_TYPE_PROFILE}
      width="365px"
    >
      <ProfileContent
        introduce={introduce}
        WrittenComments={WrittenComments}
        WrittenPosts={WrittenPosts}
        id={id}
        nick={nick}
      />
    </ModalFrame>
  );
};

export default ProfileModal;
