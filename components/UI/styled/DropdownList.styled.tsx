import styled from "styled-components";

export const DropdownList = styled.div`
  position: absolute;
  top: 70px;
  padding: 23px 16px 0px 16px;
  width: 100%;
  max-height: 150px;
  overflow: auto;
  background: ${({ theme }) => (theme.theme === "light" ? light.bg : dark.bg)};
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
`;

const light = {
  bg: "#ffffff",
};
const dark = {
  bg: "#20212C",
};
