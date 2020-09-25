/** @jsx jsx */
import React from 'react';
import { Avatar } from 'evergreen-ui';
import Modal, { MODAL_TYPE_PROFILE } from '../Modal';
import { jsx, css } from '@emotion/core';
import theme from '../../theme';

type Props = {
  posts: Post[];
  isPost?: boolean;
};

type Post = {
  categoryColor?: string;
  title: string;
  date: string;
};

type ModalProps = {
  closable?: boolean;
  name: string;
  WrittenPosts: Post[];
  WrittenComments: Post[];
  introduce: string;
  visible: boolean;
  setVisible(arg0: boolean): void;
};

type contentProps = {
  closable?: boolean;
  name: string;
  WrittenPosts: Post[];
  WrittenComments: Post[];
  introduce: string;
};

const WrittenPostComponent = ({ posts, isPost }: Props) => {
  return (
    <div
      css={css`
        &,
        * {
          display: flex;
        }
        width: 100%;
        flex-direction: column;
        & > span {
          margin-top: 2rem;
          color: ${theme.PRIMARY};
          font-weight: bold;
          font-size: 12px;
          margin-bottom: 0.7rem;
        }
        & > div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-right: 0;
          flex-wrap: nowrap;
          margin-bottom: 0.25rem;
          text-overflow: ellipsis;

          & > div {
            width: 3px;
            height: 1rem;
            margin-right: 7px;
          }

          & > span {
            display: inline-block;
            max-width: 260px;
            font-size: 0.76rem;
            font-weight: 300;

            color: ${theme.PRIMARY_FONT};
            line-height: 1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          & > span:last-child {
            flex: none;
            margin-left: auto;
            padding-left: 3px;
            width: 5rem;
            font-size: 0.7rem;
            color: gray;
            margin-right: 3%;
            flex-shrink: 0;
          }
        }
      `}
    >
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
    </div>
  );
};

const ProfileContent = ({ name, introduce, WrittenPosts, WrittenComments }: contentProps) => {
  return (
    <div
      css={css`
        padding: 1rem 1rem 1rem 1rem;
        justify-content: center;
        width: 365px;
        max-width: 365px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          & > div + div {
            margin-left: 2rem;
            line-height: 200%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            & > span {
              font-size: 1rem;
              line-height: 1.2rem;
              margin-bottom: 1.2rem;
            }
            & > span:last-child {
              margin-right: 4rem;
              font-size: 0.7rem;
              color: gray;
            }
          }
        `}
      >
        <Avatar size={100} name={name} color="yellow" marginBottom="1rem" />
        <div>
          {/* 닉네임 / 아이디*/}
          <span>{name} / 아이디</span>
          <span>{introduce}</span>
        </div>
      </div>
      {/* <span>최근 작성 글 / 답글</span> */}
      {/* written posts */}
      <WrittenPostComponent isPost={true} posts={WrittenPosts} />
      {/* written comment */}
      {/* <span>최근 작성 댓글</span> */}
      <WrittenPostComponent isPost={false} posts={WrittenComments} />
    </div>
  );
};

// 출력되는 컴포넌트
const ProfileModal = ({
  visible,
  setVisible,
  closable,
  name,
  WrittenPosts,
  WrittenComments,
  introduce,
}: ModalProps): JSX.Element => {
  return (
    <Modal
      visible={visible}
      closable={closable === undefined ? true : closable}
      onClose={() => setVisible(false)}
      type={MODAL_TYPE_PROFILE}
      width="365px"
    >
      <ProfileContent introduce={introduce} WrittenComments={WrittenComments} WrittenPosts={WrittenPosts} name={name} />
    </Modal>
  );
};

export default ProfileModal;
