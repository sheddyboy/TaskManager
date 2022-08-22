import styled from "styled-components";

export const ToggleWrapper = styled.label`
  position: relative;
  display: block;
  border-radius: 12px;
  width: 40px;
  height: 20px;
  background-color: #635fc7;

  input {
    opacity: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    cursor: pointer;
    border-radius: 14px;
    background-color: #635fc7;
  }

  span::before {
    position: absolute;
    left: 3px;
    bottom: 3px;
    content: "";
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border-radius: 14px;
    transition: ease 0.4s;
  }

  input:checked ~ span::before {
    transform: translateX(20px);
  }
`;
