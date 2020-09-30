import React from 'react';

import FooterWrapper from './styled';

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <hr />
      <section>
        <div className="footer-header">
          <span className="footer-title">BLACKPUNCH</span>
          <span>개인정보 처리 방침</span>
        </div>
        <div className="footer-bottom">
          <span className="footer-admin">관리자</span>
          <span>BU BLACKPUNCH TEAM</span>
          <span>Copyright ⓒ 2020 BUBlackPunch All Rights Reserved.</span>
        </div>
      </section>
    </FooterWrapper>
  );
}

export default Footer;
