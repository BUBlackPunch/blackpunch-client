import React from 'react';
import styled from '../../lib/styled';
import { ModalType, MODAL_TYPE_DEAFULT } from './index';
import Portal from '../../lib/Portal';
// import { createPortal } from 'react-dom';

/* 
  property:
  - closable 닫을 수 있게 할지 없게 할지
  - visible : toggle 
  - onClose: state 관리
  - type: ModalType - 색 관리
*/
type WrapperProps = {
  visible?: boolean;
  type?: ModalType;
  width?: string;
};

type Props = {
  // className: string;
  // maskClosable: boolean;
  closable: boolean;
  visible: boolean;
  children: React.ReactNode;
  onClose(e: React.MouseEvent): void;
  type: ModalType;
  width?: string;
};

const ModalWrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  backdrop-filter: blur(3px);
  @supports not (backdrop-filter: blur(3px)) {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const ModalInner = styled.div<WrapperProps>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 16px 24px rgba(67, 90, 111, 0.301);
  background-color: #fff;
  border-radius: 3px;
  min-width: 360px;
  max-width: ${({ width }) => (width ? width : '380px')};
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: ${({ type, theme }) => (type === MODAL_TYPE_DEAFULT ? theme.WHITE : theme.LIGHT_BLUE)};
  padding: 30px 10px;
`;

const Modal = ({ width, visible, children, onClose, closable, type }: Props): JSX.Element => {
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  return (
    // <Portal elementId="modal-root">
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        // className={className}
        // closable={closable}
        // onClose={onClose}
        onClick={closable ? onMaskClick : undefined}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner width={width} className="modal-inner" type={type}>
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
    // </Portal>
  );
};

export default Modal;
