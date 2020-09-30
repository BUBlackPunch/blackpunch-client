import React from 'react';

import ListHeaderWrapper from './styled';

const ListHeader = () => (
  <ListHeaderWrapper>
    <div>제목</div>
    <div>태그</div>
    <div>추천</div>
    <div>작성자</div>
    <div>작성 날짜</div>
  </ListHeaderWrapper>
);

export default ListHeader;
