import React from 'react';
import { CommentListWrapper, CommentButtonWrapper } from './styled';
import { CommentProps } from './index';
import UserAvatar from '@components/UserAvatar';

import Button from '@components/Button';

interface Props {
  items?: CommentProps[];
}

const CommentRow = ({ user, content, date }: CommentProps) => (
  <div>
    <div>
      <UserAvatar />
    </div>
    <div>
      <span>
        <div>{user}</div>
        <div>{content}</div>
      </span>
      <span>{date}</span>
    </div>
  </div>
);

const WriteButton = () => {
  return (
    <>
      <UserAvatar size={30} />
      <input />
      <Button type="BUTTON_TYPE_PRIMARY" text="댓글 작성" />
    </>
  );
};

const CommentView: React.FC<Props> = ({ items }: Props) => {
  return (
    <>
      <CommentListWrapper>
        {items?.map((item) => (
          <CommentRow key={item.id} user={item.user} date={item.date} content={item.content} />
        ))}
      </CommentListWrapper>

      <CommentButtonWrapper>
        <WriteButton />
      </CommentButtonWrapper>
    </>
  );
};

export default CommentView;
