import React from "react";
import { ModalProps } from "../../types";
import { ModalWrapper, Overlay } from "./styled/ModalWrapper.styled";

const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <ModalWrapper>
      <Overlay onClick={onClick} />
      {children}
    </ModalWrapper>
  );
};

export default Modal;
