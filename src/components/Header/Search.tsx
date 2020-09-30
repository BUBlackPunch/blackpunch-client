import React, { useState, useRef } from 'react';
import { SearchIcon } from 'evergreen-ui';
import { SearchWrapper } from './styled';

const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const inputEl = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onBlurHandler = () => {
    if (value === '') {
      inputEl.current.className = '';
    }
  };
  const onClickHandler = () => {
    inputEl.current.className = 'search-enable';
    inputEl.current.focus();
  };

  return (
    <SearchWrapper>
      <SearchIcon size={18} onClick={onClickHandler} />
      <input
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onBlur={onBlurHandler}
        type="text"
        ref={inputEl}
      />
    </SearchWrapper>
  );
};

export default Search;
