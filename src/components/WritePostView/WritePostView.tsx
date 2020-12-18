import React, { useState } from 'react';
import { WritePostHeaderWrapper, WritePostContentWrapper } from './styled';
import TUIEditor from '@components/TUIEditor';
import Button from '@components/Button';
import { Badge } from 'evergreen-ui';

interface props {
  id?: number;
  title: string;
  content: string;
  tagName: string;
  tags: tag[];
}

interface tag {
  id: number;
  name: string;
  color: TagColor;
}

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

const WritePostView = (): JSX.Element => {
  const [state, setState] = useState<props>({
    title: '',
    content: '',
    tagName: '',
    tags: [],
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const tagInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && state.tagName != '') {
      const { tags } = state;

      const id = state.tags.length == 0 ? 0 : state.tags[0].id + 1;
      tags.unshift({ id: id, name: state.tagName, color: 'red' });

      setState({
        ...state,
        tagName: '',
        tags,
      });
    }
  };

  const tagClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const { tags } = state;
    // console.log(e.target);
    const index = tags.findIndex((tag) => tag.id.toString() == e.currentTarget.id);
    tags.splice(index, 1);
    setState({
      ...state,
      tags,
    });
  };

  return (
    <>
      <WritePostHeaderWrapper>
        {/* 메뉴 버튼 필요 */}
        <div>카테고리</div>
        <input
          name="tagName"
          type="text"
          placeholder="태그"
          onChange={onChangeHandler}
          value={state.tagName}
          onKeyPress={tagInputHandler}
        />
        {state.tags?.map((tag) => (
          <Badge key={tag.id} id={tag.id.toString()} color={tag.color} onDoubleClick={tagClickHandler}>
            {tag.name}
          </Badge>
        ))}
      </WritePostHeaderWrapper>

      <WritePostContentWrapper>
        <input name="title" type="text" placeholder="제목" value={state.title} onChange={onChangeHandler} />
        <TUIEditor height={500} />
        {/* 등록 버튼 */}
        <Button type="BUTTON_TYPE_PRIMARY" text="등록" onClick={undefined /* 구현 예정 */} />
      </WritePostContentWrapper>
    </>
  );
};

export default WritePostView;
