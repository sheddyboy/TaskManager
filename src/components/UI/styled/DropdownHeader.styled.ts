import styled from "styled-components";

export const DropdownHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 16px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: ${({ theme }) => (theme.theme === "light" ? light.color : dark.color)};
  background: ${({ theme }) => (theme.theme === "light" ? light.bg : dark.bg)};

  &:hover {
    border: 1px solid #635fc7;
  }

  i {
    position: absolute;
    right: 16px;
  }
`;

const light = {
  bg: "#ffffff",
  color: "#000112",
};
const dark = {
  bg: "#2B2C37",
  color: "#ffffff",
};
