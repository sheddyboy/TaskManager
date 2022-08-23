import styled from "styled-components";

interface ButtonProps {
  size?: "small" | "large";
  state?: "primary" | "secondary";
  marginTop?: string;
  marginBottom?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ size }) => (size === "small" ? "13px" : "15px")};
  padding: ${({ size }) =>
    size === "small" ? "15px 70px 12px 70px" : "19px 63px 14px 63px"};
  border-radius: 24px;
  background-color: ${({ state, theme }) =>
    state === "primary"
      ? theme.theme === "light"
        ? light.pryBg
        : dark.pryBg
      : theme.theme === "light"
      ? light.secBg
      : dark.secBg};
  color: ${({ state }) => (state === "primary" ? "#FFFFFF" : "#635FC7")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ state, theme }) =>
      state === "primary"
        ? theme.theme === "light"
          ? light.pryBgHover
          : dark.pryBgHover
        : theme.theme === "light"
        ? light.secBgHover
        : dark.secBgHover};
  }
`;

const light = {
  pryBg: "#635FC7",
  secBg: "rgba(99, 95, 199, 0.1)",
  pryBgHover: "#A8A4FF",
  secBgHover: "rgba(99, 95, 199, 0.25)",
};
const dark = {
  pryBg: "#635FC7",
  secBg: "#FFFFFF",
  pryBgHover: "#A8A4FF",
  secBgHover: "#FFFFFF",
};

Button.defaultProps = {
  size: "small",
  state: "primary",
  marginTop: "0px",
  marginBottom: "0px",
};

export const DelButton = styled(Button)`
  background-color: #ea5555;
  color: #ffffff;

  &:hover {
    background-color: #ff9898;
  }
`;
export const AddButton = styled(Button)`
  padding: 15px 25px 15px 25px;
`;
