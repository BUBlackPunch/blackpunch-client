import React from 'react';
import { HeartIcon } from 'evergreen-ui';
import UserAvatar from '../UserAvatar';
import { AnswerViewWrapper, AnswerListWrapper } from './styled';
import CommentView from './CommentView';
import { AnswerProps } from './index';
import TUIViewer from '../TUIViewer';

interface ListProps {
  items: AnswerProps[];
}

export const AnswerView: React.FC<AnswerProps> = ({ name, date, like, content, comments }: AnswerProps) => {
  return (
    <AnswerViewWrapper>
      <span>
        <UserAvatar size={35} />
        <div>
          <span>{name}</span>
          <span>{date}</span>
        </div>
        <div>
          <HeartIcon />
          <div>{like}</div>
        </div>
      </span>
      {/* Content */}
      <TUIViewer content={content} />
      {/* {comments ? <CommentView items={comments} /> : <CommentView />} */}
      <CommentView items={comments} />
    </AnswerViewWrapper>
  );
};

const AnswerList = ({ items }: ListProps): JSX.Element => {
  return (
    <AnswerListWrapper>
      <span>답글 {items.length}</span>
      {items.map((item) => (
        <AnswerView
          key={item.id ?? undefined}
          date={item.date}
          name={item.name}
          like={item.like}
          content={item.content}
          comments={item.comments}
        />
      ))}
    </AnswerListWrapper>
  );
};

export default AnswerList;
