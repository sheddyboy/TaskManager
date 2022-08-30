import React from "react";
import styled from "styled-components";
import useStateManager from "../hooks/useStateManager";
import { OptionsCard } from "./UI/styled/Card.styled";

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
  const { state, dispatch, actionValues } = useStateManager();
  const { currentTask, currentBoard } = state;
  const {
    MODAL_TRACKER,
    OPTION_EDIT_OR_DELETE_TASK_TOGGLE,
    TASK_NAME_INPUT,
    DESCRIPTION_INPUT,
    SUBTASK_INPUT,
  } = actionValues;

  return (
    <OptionEditOrDeleteTaskWrapper>
      <OptionsCard>
        <EditTask
          onClick={() => {
            dispatch({
              type: SUBTASK_INPUT,
              subtaskInputPayload: {
                function: "override",
                value: currentTask.subtasks,
              },
            });
            dispatch({
              type: DESCRIPTION_INPUT,
              descriptionInputPayload: currentTask.tasks.description,
            });
            dispatch({
              type: TASK_NAME_INPUT,
              taskNameInputPayload: currentTask.tasks.title,
            });

            dispatch({ type: OPTION_EDIT_OR_DELETE_TASK_TOGGLE });
            dispatch({
              type: MODAL_TRACKER,
              modalTrackerPayload: {
                name: "editTask",
                value: true,
              },
            });
          }}
        >
          Edit Task
        </EditTask>
        <DeleteTask
          onClick={() => {
            dispatch({ type: OPTION_EDIT_OR_DELETE_TASK_TOGGLE });
            dispatch({
              type: MODAL_TRACKER,
              modalTrackerPayload: { name: "deleteTask", value: true },
            });
          }}
        >
          Delete Task
        </DeleteTask>
      </OptionsCard>
    </OptionEditOrDeleteTaskWrapper>
  );
};

export default OptionEditOrDeleteTask;
