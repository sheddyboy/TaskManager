import styled from "styled-components";

export const Content = styled.div`
  width: auto;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#F4F7FD" : "#20212C"};
  overflow: auto;
  height: 100%;
  display: flex;
  padding-bottom: 50px;
`;
