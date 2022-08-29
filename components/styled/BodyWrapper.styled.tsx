import styled from "styled-components";

export const BodyWrapper = styled.div`
  /* display: grid;
  grid-template-rows: 97px auto; */
  width: auto;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#F4F7FD" : "#20212C"};
`;
