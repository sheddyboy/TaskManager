import styled from "styled-components";

export const SideBarToggleWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 48px;
  background: #635fc7;
  border-radius: 0px 100px 100px 0px;
  @media (max-width: 580px) {
    display: none;
  }
`;
