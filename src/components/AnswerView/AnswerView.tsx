import React from 'react';
import { Avatar, HeartIcon } from 'evergreen-ui';
import { AnswerViewWrapper, AnswerListWrapper } from './styled';
import Button from '../Button';
import TUIViewer from '../TUIViewer';

interface ListProps {
  items: ItemProps[];
}

export interface ItemProps {
  id?: number;
  // writer: string;
  name: string;
  date: string;
  like: number;
  content: string;
  // content: string;
}

export const AnswerView: React.FC<ItemProps> = ({ name, date, like, content }: ItemProps) => {
  return (
    <AnswerViewWrapper>
      <span>
        <Avatar size={35} />
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
      <span>
        <Avatar size={30} />
        <input />
        <Button type="BUTTON_TYPE_PRIMARY" text="댓글 작성" />
      </span>
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
        />
      ))}
    </AnswerListWrapper>
  );
};

export default AnswerList;
