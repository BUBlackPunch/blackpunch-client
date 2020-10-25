import React from 'react';
import { Menu, Popover, Button } from 'evergreen-ui';
import UserAvatar from '../UserAvatar';
// import styled from '../../lib/styled';

function PopMenu() {
  return (
    <div>
      <Menu>
        <Menu.Item onSelect={() => alert('구현 예정')}>내 정보</Menu.Item>
        <Menu.Item intent="danger" onSelect={() => alert('구현 예정')}>
          로그 아웃
        </Menu.Item>
      </Menu>
    </div>
  );
}

function Profile(): JSX.Element {
  return (
    <Popover content={<PopMenu />}>
      <Button appearance="minimal" width="1rem" justifyContent="center" marginRight="1rem">
        <UserAvatar size={20} />
      </Button>
    </Popover>
  );
}

export default Profile;
