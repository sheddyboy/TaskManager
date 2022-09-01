import styled from "styled-components";
import { TaskManagerProps } from "../../types";

export const Taskmanager = styled.div<TaskManagerProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ sidebarToggle }) =>
    sidebarToggle ? "300px auto" : "auto"};
  grid-template-rows: 97px auto;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: ${({ sidebarToggle }) =>
      sidebarToggle ? "261px auto" : "auto"};
    grid-template-rows: 81px auto;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-template-rows: 64px auto;
  }
`;
