import styled from "styled-components";
import { TaskManagerProps } from "../../types";

export const Taskmanager = styled.div<TaskManagerProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ state }) =>
    state.toggleSidebar ? "300px auto" : "auto"};
  grid-template-rows: 97px;
  height: 100vh;
  width: 100%;
`;
