import React, { ReactElement, useState } from 'react';
import ModalFrame from '../ModalFrame';
import { ContentWrapper } from './styled';
import Button from '../../Button';
import ValidCheck from '../../ValidCheck';
import { Input, Textarea } from '../../Input';

interface Props {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  closable: boolean;
}
interface ContentProps {
  isEditing: boolean;
  setEditing: (arg0: boolean) => void;
}

function Content({ isEditing, setEditing }: ContentProps): ReactElement {
  return (
    <ContentWrapper>
      <h1>개인정보</h1>
      <form>
        <span>아이디</span>
        <div>
          <Input disabled />
        </div>
        <span>패스워드</span>
        <div>
          <Input type="password" disabled={!isEditing} />
          <ValidCheck type="VALID_CHECK_DEFAULT">{'test'}</ValidCheck>
        </div>
        <span>
          패스워드
          <br />
          중복확인
        </span>
        <div>
          <Input type="password" disabled={!isEditing} />
          <ValidCheck type="VALID_CHECK_ERROR">{'test'}</ValidCheck>
        </div>
        <span>대학 웹메일</span>
        <span>
          <Input disabled />
          <span>@bu.ac.kr</span>
        </span>
        <span>닉네임</span>
        <div>
          <Input disabled={!isEditing} />
          <ValidCheck type="VALID_CHECK_DEFAULT">{'sample'}</ValidCheck>
        </div>
        <span>자기소개</span>
        <Textarea disabled={!isEditing} />
      </form>
      <div>
        <Button
          type={isEditing ? 'BUTTON_TYPE_PRIMARY' : 'BUTTON_TYPE_DEFAULT'}
          text="정보수정"
          onClick={isEditing ? () => alert('submit') : () => setEditing(true)}
        />
      </div>
    </ContentWrapper>
  );
}

export default function UserinfoModal({ visible, setVisible, closable }: Props): ReactElement {
  const [editing, setEditing] = useState(false);
  return (
    <ModalFrame width="486px" visible={visible} onClose={() => setVisible(false)} closable={closable}>
      <Content isEditing={editing} setEditing={setEditing} />
    </ModalFrame>
  );
}
