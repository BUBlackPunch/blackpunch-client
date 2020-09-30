import React from 'react';
import { Icon, DeltaIcon, Heading } from 'evergreen-ui';
import styled from '../../lib/styled';

const LogoWrapper = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: start;
  width: auto;
`;

const Logo: React.FC = () => {
  // /   아이콘 대체 예정.
  return (
    <LogoWrapper onClick={() => (window.location.href = '/')}>
      <Icon icon={DeltaIcon} marginTop="default" marginLeft="1rem" marginRight="1rem" size={18} />
      <Heading display="flex" marginTop="0.8em" marginBottom="0.8em" size={500} color="white">
        BUBLACKPUNCH
      </Heading>
    </LogoWrapper>
  );
};

export default Logo;
