import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  font-family: "Plus Jakarta Sans";
  background-color: ${({ theme }) =>
    theme.theme === "light" ? light.bgColor : dark.bgColor};
  display: block;
  position: relative;
  padding-left: 42px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
  cursor: pointer;
  font-size: 12px;
  user-select: none;

  &:hover {
    mix-blend-mode: normal;
    background-color: ${({ theme }) =>
      theme.theme === "light" ? light.bgColorHover : dark.bgColorHover};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  label {
    font-family: "Plus Jakarta Sans";
    color: ${({ theme }) =>
      theme.theme === "light" ? light.color : dark.color};
  }

  span {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
    background: ${({ theme }) =>
      theme.theme === "light" ? light.bgColorCheckbox : dark.bgColorCheckbox};
    border: 1px solid rgba(130, 143, 163, 0.248914);
    border-radius: 2px;
  }

  & input:checked ~ span {
    background-color: #635fc7;
    border: 1px solid transparent;
  }
  & input:checked ~ label {
    text-decoration: line-through;
    mix-blend-mode: normal;
    color: #8f9095;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const light = {
  bgColor: "#F4F7FD",
  bgColorHover: "rgba(99, 95, 199, 0.25)",
  bgColorCheckbox: "#FFFFFF",
  color: "#000112",
};
const dark = {
  bgColor: "#20212C",
  bgColorHover: "#39395B",
  bgColorCheckbox: "#2B2C37",
  color: "#FFFFFF",
};
