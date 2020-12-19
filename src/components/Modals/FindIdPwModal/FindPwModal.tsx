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
      <h1>비밀번호 찾기</h1>
      <form>
        <span>아이디</span>
        <Input />
        <p></p>
        <span>이메일 주소</span>
        <div>
          <Input />
          @bu.ac.kr
        </div>
        <Button type="BUTTON_TYPE_PRIMARY" text="메일 전송" />
      </form>
      <span>
        회원님의 이메일로
        <ValidCheck type="VALID_CHECK_ERROR">{' 임시 비밀번호'}</ValidCheck>가 발급되었습니다.
      </span>
      <div>
        <Button text="회원가입" />
        <Button type="BUTTON_TYPE_PRIMARY" text="로그인" />
      </div>
    </ContentWrapper>
  );
};

const FindPwModal: React.FC<Props> = ({ visible, setVisible, closable }: Props) => {
  return (
    <ModalFrame width="370px" visible={visible} onClose={() => setVisible(false)} closable={closable}>
      <Content />
    </ModalFrame>
  );
};

export default FindPwModal;
