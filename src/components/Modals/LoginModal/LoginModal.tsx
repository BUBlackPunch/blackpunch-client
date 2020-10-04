import React from 'react';
import ModalFrame from '../ModalFrame';
import { Input } from '../../Input';
import { ContentWrapper } from './styled';
import Button from '../../Button';

interface Props {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  closable: boolean;
}

const Content = () => {
  return (
    <ContentWrapper>
      <h1>로그인</h1>
      <form>
        <div>
          <span>아이디</span>
          <Input />
        </div>
        <div>
          <span>패스워드</span>
          <Input />
        </div>
        <span>아이디를 분실하셨나요?</span>
        <span>패스워드를 분실하셨나요?</span>
      </form>
      <div>
        <Button text="회원가입" />
        <Button type="BUTTON_TYPE_PRIMARY" text="로그인" />
      </div>
    </ContentWrapper>
  );
};

const LoginModal: React.FC<Props> = ({ visible, setVisible, closable }: Props) => {
  return (
    <ModalFrame width="340px" visible={visible} onClose={() => setVisible(false)} closable={closable}>
      <Content />
    </ModalFrame>
  );
};

export default LoginModal;
