import styled from "styled-components";

interface ContentProps {
  length: number;
}

export const Content = styled.div<ContentProps>`
  width: auto;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#F4F7FD" : "#20212C"};
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: ${({ length }) => length === 0 && "center"};
  align-items: ${({ length }) => length === 0 && "center"};
  padding-bottom: 50px;
`;
