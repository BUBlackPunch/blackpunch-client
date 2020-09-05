import React, { useState } from 'react';
import { SearchInput, Button, SearchIcon } from 'evergreen-ui';
import styled from '../../lib/styled';
import { Interface } from 'readline';

interface WrapperProps {
  isClick: boolean;
}

const SearchWrapper = styled.div<WrapperProps>`
  button {
    display: ${({ isClick }) => (isClick ? 'none' : null)};
  }
  & > div {
    display: ${({ isClick }) => (isClick ? null : 'none')};
  }
`;

interface Props {
  onClick: () => void;
}

function SearchButton({ onClick }: Props) {
  return (
    <Button appearance="minimal" intent="none" onClick={onClick}>
      <SearchIcon color="white" size={16} />
    </Button>
  );
}

/* / 
  MARK 
  SearchBar 일때, 외부 클릭시 Icon으로 변경되게 구현 예정. 
/ */
function SearchBar() {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    const { value } = e.target;
    setValue(value);
  };

  // MARK -- submit구현 예정.
  const onSubmit = (e: any) => {
    const { vaule } = e.target;
  };
  return <SearchInput placeholder="검색할 내용을 입력하세요." width="auto" onChange={onChange} value={value} />;
}

function Search() {
  const [isClick, setBool] = useState<boolean>(false);
  return (
    <SearchWrapper isClick={isClick}>
      <SearchButton onClick={() => setBool(true)} />
      <div>
        <SearchBar />
      </div>
    </SearchWrapper>
  );
}

export default Search;
