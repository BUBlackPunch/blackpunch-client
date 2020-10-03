import React, { ReactElement, useState } from 'react';
import FindIdModal from './FindIdModal';
import FindPwModal from './FindPwModal';

export default {
  title: 'FindIdModal',
  // component: FindIdModal,
};

export function Default(): ReactElement {
  const [visible, setVisible] = useState(true);
  return <FindIdModal visible={visible} setVisible={setVisible} closable={false} />;
}
export function FindPWModal(): ReactElement {
  const [visible, setVisible] = useState(true);
  return <FindPwModal visible={visible} setVisible={setVisible} closable={false} />;
}
