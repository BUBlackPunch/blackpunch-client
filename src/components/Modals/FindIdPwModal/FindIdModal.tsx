import React from 'react';
import ModalFrame from '../ModalFrame';
import { Input } from '@components/Input';
import { ContentWrapper } from './styled';
import Button from '@components/Button';
import ValidCheck from '@components/ValidCheck';

interface Props {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  closable: boolean;
}

const Content = () => {
  return (
    <ContentWrapper>
      <h1>아이디 찾기</h1>
      <form>
        <span>이메일 주소</span>
        <Input />
        <span>@bu.ac.kr</span>
        <span>인증번호</span>
        <Input />
        <Button text="확인" />
      </form>
      <span>
        회원님의 아이디는
        <ValidCheck type="VALID_CHECK_ERROR">qwerty</ValidCheck>입니다.
      </span>
      <div>
        <Button text="회원가입" />
        <Button type="BUTTON_TYPE_PRIMARY" text="로그인" />
      </div>
    </ContentWrapper>
  );
};

const FindIdModal: React.FC<Props> = ({ visible, setVisible, closable }: Props) => {
  return (
    <ModalFrame width="370px" visible={visible} onClose={() => setVisible(false)} closable={closable}>
      <Content />
    </ModalFrame>
  );
};

export default FindIdModal;
