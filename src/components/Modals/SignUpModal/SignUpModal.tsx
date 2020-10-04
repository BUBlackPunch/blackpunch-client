import React from 'react';
import ModalFrame from '../ModalFrame';
import { ContentWrapper } from './styled';
import Button from '../../Button';
import ValidCheck from '../../ValidCheck';
import { Input, Textarea } from '../../Input';

/*
  회원가입 Modal 화면
  - View만 구현 
  - input required, state 구현 예정
*/
type Props = {
  visible: boolean;
  closable: boolean;
  setVisible: (arg0: boolean) => void;
};

interface SignUpInfo {
  id: string;
  passwd: string;
  passwdcheck?: string;
  mailId: string;
  authcode: string;
  nick: string;
  introduce: string;
}

interface ContentProps {
  info: SignUpInfo;
}

const Content = () => {
  return (
    <ContentWrapper>
      <h1> 회원가입</h1>
      <form>
        <span>아이디</span>
        <div>
          <Input />
          <ValidCheck type="VALID_CHECK_DEFAULT">{'test'}</ValidCheck>
        </div>
        <span>패스워드</span>
        <div>
          <Input type="password" />
          <ValidCheck type="VALID_CHECK_DEFAULT">{'test'}</ValidCheck>
        </div>
        <span>
          패스워드
          <br />
          중복확인
        </span>
        <div>
          <Input type="password" />
          <ValidCheck type="VALID_CHECK_ERROR">{'test'}</ValidCheck>
        </div>
        <span>대학 웹메일</span>
        <span>
          <Input />
          <span>@bu.ac.kr</span>
          <Button type="BUTTON_TYPE_PRIMARY" text="메일 전송" onClick={() => alert('noti')} />
        </span>
        <p></p>
        <span>
          <Input />
          <Button type="BUTTON_TYPE_PRIMARY" text="인증 확인" onClick={() => alert('noti')} />
        </span>
        <span>닉네임</span>
        <div>
          <Input />
          <ValidCheck type="VALID_CHECK_DEFAULT">{'sample'}</ValidCheck>
        </div>
        <span>자기소개</span>
        <Textarea />
      </form>
      <div>
        <Button type="BUTTON_TYPE_PRIMARY" text="회원가입" onClick={() => alert('noti')} />
      </div>
    </ContentWrapper>
  );
};

const SignUpModal: React.FC<Props> = ({ visible, closable, setVisible }: Props) => {
  return (
    <ModalFrame
      width="486px"
      onClose={() => setVisible(false)}
      closable={closable}
      visible={visible}
      type="MODAL_TYPE_DEAFULT"
    >
      <Content />
    </ModalFrame>
  );
};

export default SignUpModal;
