import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { OptionsCard } from "./UI/styled/Card.styled";
import {
  setDescriptionInput,
  setTaskNameInput,
  overideSubtaskInput,
} from "../features/inputs/inputsSlice";
import {
  setModal,
  toggleOptionEditOrDeleteTask,
} from "../features/toggle/toggleSlice";

const OptionEditOrDeleteTaskWrapper = styled.div`
  position: absolute;
  top: 66px;
  right: -65px;
  z-index: 2;
  width: 192px;
`;
const EditTask = styled.p`
  cursor: pointer;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #828fa3;
`;
const DeleteTask = styled.p`
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #ea5555;
`;

const OptionEditOrDeleteTask = () => {
  const dispatch = useAppDispatch();
  const { currentTask } = useAppSelector((state) => state.boards);

  return (
    <OptionEditOrDeleteTaskWrapper>
      <OptionsCard>
        <EditTask
          onClick={() => {
            dispatch(overideSubtaskInput(currentTask.subtasks));
            dispatch(setDescriptionInput(currentTask.tasks.description));
            dispatch(setTaskNameInput(currentTask.tasks.title));
            dispatch(toggleOptionEditOrDeleteTask());
            dispatch(setModal("editTask"));
          }}
        >
          Edit Task
        </EditTask>
        <DeleteTask
          onClick={() => {
            dispatch(toggleOptionEditOrDeleteTask());
            dispatch(setModal("deleteTask"));
          }}
        >
          Delete Task
        </DeleteTask>
      </OptionsCard>
    </OptionEditOrDeleteTaskWrapper>
  );
};

export default OptionEditOrDeleteTask;
