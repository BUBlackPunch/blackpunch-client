import React from 'react';
import Logo from './Logo';
// import Search from './Search';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import { SigninButton } from './SigninButton';
import styled from '../../lib/styled';

/* /
  ### 예정 사항
  - 검색 화면
    - [ ] 검색 중일 때와 버튼만 보일 때 toggle 구현
    - [ ] 애니메이션 구현
    - [ ] Autocomplete, hash tag 표시. 고민.
/ */

type Props = {
  isLogin: boolean;
};

const HeaderWrapper = styled.div`
  &,
  div {
    display: flex;
  }
  width: 100%;
  min-width: 588px;
  height: 2.5rem;
  display: flex;
  color: white;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.PRIMARY};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

  div:last-child {
    margin-left: auto;
  }
`;

function Header({ isLogin }: Props): JSX.Element {
  return (
    <HeaderWrapper>
      <Logo />
      <Search />

      {isLogin ? (
        <div>
          <Notification data={undefined} /> <Profile />
        </div>
      ) : (
        <SigninButton />
      )}
    </HeaderWrapper>
  );
}

export default Header;
