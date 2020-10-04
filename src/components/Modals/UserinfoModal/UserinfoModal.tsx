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

const Content = ({ isEditing, setEditing }: ContentProps): ReactElement => {
  return (
    <ContentWrapper>
      <h1>개인정보</h1>
      <form>
        <span>아이디</span>
        <div>{isEditing ? <Input disabled value="id" /> : 'id'}</div>
        {isEditing ? (
          <>
            <span>패스워드</span>
            <div>
              <Input type="password" />
              {isEditing ? <ValidCheck type="VALID_CHECK_DEFAULT">{'test'}</ValidCheck> : null}
            </div>
            <span>
              패스워드
              <br />
              중복확인
            </span>
            <div>
              <Input type="password" />
              {isEditing ? <ValidCheck type="VALID_CHECK_ERROR">{'test'}</ValidCheck> : null}
            </div>
          </>
        ) : null}
        <span>대학 웹메일</span>
        <span>
          {isEditing ? <Input disabled value="id" /> : 'id'}
          <span> @bu.ac.kr</span>
        </span>
        <span>닉네임</span>
        <div>
          {isEditing ? <Input value="nick" /> : 'nick'}
          {isEditing ? <ValidCheck type="VALID_CHECK_DEFAULT">{'sample'}</ValidCheck> : null}
        </div>
        <span>자기소개</span>
        {isEditing ? <Textarea value="nick" /> : '자기소개'}
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
};

const UserinfoModal: React.FC<Props> = ({ visible, setVisible, closable }: Props) => {
  const [editing, setEditing] = useState(false);
  return (
    <ModalFrame width="486px" visible={visible} onClose={() => setVisible(false)} closable={closable}>
      <Content isEditing={editing} setEditing={setEditing} />
    </ModalFrame>
  );
};

export default UserinfoModal;
