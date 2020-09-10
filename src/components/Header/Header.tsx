import React from 'react';
import Logo from './Logo';
import { Pane } from 'evergreen-ui';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';

/* /
  ### 예정 사항
  - Header: 반응형 고려하여 Pane -> styled.div 변경 예정
  - Logo -> LogoWrapper -> onClick (mainpage) 구현 예정.
  - 검색 화면
    - 모바일 레이아웃을 다시 정할 필요가 있음.
    - 검색 중일 때와 버튼만 보일 때 toggle 구현
  - isLogin: 로그인 상태 공유
  - Profile, Notification: Popover 컴포넌트 구현 예정.
/ */

function Header(): JSX.Element {
  return (
    <Pane
      width="100%"
      height="2.5rem"
      display="flex"
      color="white"
      alignItems="center"
      justifyContent="start"
      backgroundColor="#084B8A"
      marginLeft="1px"
      marginRight="1px"
      boxShadow="0px 5px 5px rgba(0, 0, 0, 0.25)"
    >
      <Logo />

      <Search />
      <Notification />
      <Profile />
    </Pane>
  );
}

export default Header;
