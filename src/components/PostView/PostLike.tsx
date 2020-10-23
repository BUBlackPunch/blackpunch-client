import React from 'react';
import { UpVoteWrapper } from './styled';
import { ThumbsUpIcon } from 'evergreen-ui';

interface Props {
  num: number;
  // onClickHandler: () => void;
}

const PostLike: React.FC<Props> = ({ num }: Props) => {
  return (
    <UpVoteWrapper>
      이 게시글이 마음에 들었나요?
      <div
      /* 
      추천을 클릭했었는지 판단 후 toggle 수행
      onClick={() => onClickHandler()}
      */
      >
        <ThumbsUpIcon size={20} />
        <div>{num}</div>
      </div>
    </UpVoteWrapper>
  );
};

export default PostLike;
