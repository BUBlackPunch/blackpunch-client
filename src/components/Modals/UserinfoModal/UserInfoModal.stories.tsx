import React, { ReactElement, useState } from 'react';
import UserinfoModal from './UserinfoModal';

export default {
  title: 'UserinfoModal',
  component: UserinfoModal,
};

export function Default(): ReactElement {
  const [visible, setVisible] = useState(true);
  const [editing, setEditing] = useState(false);
  return <UserinfoModal visible={visible} setVisible={setVisible} closable={false} />;
}
