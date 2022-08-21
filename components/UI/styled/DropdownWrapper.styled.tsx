import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;

  span {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: ${({ theme }) =>
      theme.theme === "light" ? light.color : dark.color};
  }
`;

const light = {
  color: "#828fa3",
};
const dark = {
  color: "#FFFFFF",
};
