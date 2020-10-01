import React, { useState } from 'react';
import SignUpModal from './index';
export default { title: 'SignUp Modal', component: SignUpModal };

export const Default = (): JSX.Element => {
  // visible, closable, setVisible
  const [visible, setVisible] = useState(true);

  return <SignUpModal closable={false} visible={visible} setVisible={setVisible} />;
};
