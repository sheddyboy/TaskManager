import styled from "styled-components";

interface InputWrapperProps {
  canDelete: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;

  input {
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    background: ${({ theme }) =>
      theme.theme === "light" ? light.bgColor : dark.bgColor};
    padding-left: 16px;
    padding-right: 25px;
    /* margin-top: 8px; */
    color: ${({ theme }) =>
      theme.theme === "light" ? light.inputColor : dark.inputColor};
    height: 40px;
    width: 100%;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;

    color: ${({ theme }) =>
      theme.theme === "light" ? light.placeholderColor : dark.placeholderColor};

    mix-blend-mode: normal;
    opacity: 0.25;
  }

  span {
    color: #ea5555;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    position: absolute;
    bottom: 8px;
    right: ${({ canDelete }) => (canDelete ? "47px" : "16px")};
  }
`;

interface InputFieldProps {
  canDelete: boolean;
}

export const InputField = styled.div<InputFieldProps>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ canDelete }) =>
    canDelete ? "auto 31px" : "auto"};
  i {
    cursor: pointer;
    margin-left: 16px;
    display: ${({ canDelete }) => (canDelete ? "block" : "none")};
  }
`;
export const Label = styled.label`
  display: block;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) =>
    theme.theme === "light" ? light.labelColor : dark.labelColor};
`;

const light = {
  inputColor: "#000112",
  labelColor: "#828FA3",
  bgColor: "#FFFFFF",
  placeholderColor: "#000112",
};
const dark = {
  inputColor: "#FFFFFF",
  labelColor: "#FFFFFF",
  bgColor: "#2B2C37",
  placeholderColor: "#FFFFFF",
};
