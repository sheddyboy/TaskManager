import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#F4F7FD" : "#20212C"};
`;
