import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import styled from '../../lib/styled';

interface Props {
  children: React.ReactNode;
  isLogin: boolean;
}

const AppSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 170px);
`;

function AppLayout({ children, isLogin }: Props): JSX.Element {
  return (
    <>
      <Header isLogin={isLogin} />
      <AppSection>{children}</AppSection>
      <Footer />
    </>
  );
}

export default AppLayout;
