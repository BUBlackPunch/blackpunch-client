import React, { ReactElement, useState } from 'react';
import LoginModal from './LoginModal';

export default {
  title: 'LoginModal',
  component: LoginModal,
};

export function Default(): ReactElement {
  const [visible, setVisible] = useState(true);
  return <LoginModal visible={visible} setVisible={setVisible} closable={false} />;
}
