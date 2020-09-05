import React from 'react';
import { Icon, DeltaIcon, Heading } from 'evergreen-ui';
import styled from '../../lib/styled';


const LogoWrapper = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: start;
  width: auto;

  @media (${({ theme }) => theme.BP.MOBILE}) {
    h2 {
      display: none;
    }
  }

  @media (${({ theme }) => theme.BP.TABLET}) {
    h2 {
      font-size: 0.9em;
      margin-right: 2.5em;
    }
  }
`;

function Logo(): JSX.Element {
  // /   아이콘 대체 예정.
  return (
    <LogoWrapper>
      <Icon icon={DeltaIcon} marginTop="default" marginLeft="1rem" marginRight="1rem" size={18} />
      {
        <Heading display="flex" marginTop="0.8em" marginBottom="0.8em" size={500} marginRight="3em" color="white">
          BUBLACKPUNCH
        </Heading>
      }
    </LogoWrapper>
  );
}

export default Logo;
