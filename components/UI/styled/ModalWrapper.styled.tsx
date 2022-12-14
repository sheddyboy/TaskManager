import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 1;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* display: grid;
  grid-template-columns: 480px;
  justify-content: center;
  align-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
