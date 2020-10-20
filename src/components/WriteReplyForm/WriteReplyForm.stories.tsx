import React, { useState } from 'react';
import WriteReplyForm from './index';
import WriteFixButton from '../WriteFixButton';

export default { title: 'WriteReplyForm', component: WriteReplyForm };

export const Default = (): JSX.Element => {
  const [showing, setShowing] = useState(true);

  const onClickShowing = () => {
    setShowing(!showing);
  };

  return (
    <>
      <WriteFixButton onClick={onClickShowing} />
      <WriteReplyForm showing={showing} />
    </>
  );
};
