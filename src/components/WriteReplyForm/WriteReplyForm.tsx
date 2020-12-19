import React from 'react';

import { WriteReplyFormWrapper, EditorWrapper } from './styled';
import TUIEditor from '@components/TUIEditor';
import Button, { BUTTON_TYPE_PRIMARY } from '@components/Button';

export interface Props {
  showing: boolean;
}

const WriteReplyForm = ({ showing }: Props) => (
  <WriteReplyFormWrapper className={showing ? '' : 'hidden'}>
    <hr />
    <div>
      <span>답글 작성</span>
      <EditorWrapper>
        <TUIEditor height={200} />
      </EditorWrapper>
      <div>
        <Button type={BUTTON_TYPE_PRIMARY} text="답글 작성" />
        <Button type={BUTTON_TYPE_PRIMARY} text="취소" />
      </div>
    </div>
  </WriteReplyFormWrapper>
);

export default WriteReplyForm;
