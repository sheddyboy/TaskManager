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
  const { dispatch, actionValues } = useStateManager();
  const { MODAL_TRACKER, OPTION_EDIT_OR_DELETE_TASK_TOGGLE } = actionValues;

  return (
    <OptionEditOrDeleteTaskWrapper>
      <OptionsCard>
        <EditTask>Edit Task</EditTask>
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
