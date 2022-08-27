import React from "react";
import useStateManager from "../hooks/useStateManager";
import { TaskProps } from "../types";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";

interface CurrentTaskProps {
  task: TaskProps;
  index: number;
}

const Task = ({ task, index }: CurrentTaskProps) => {
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TRACKER, MODAL_TOGGLE, CURRENT_TASK, CHECKBOX_INPUT } =
    actionValues;
  const { boards, currentBoard } = state;

  const currentBoardData = boards.find((i) => i.id === currentBoard.id);
  const currentSubtasksData = currentBoardData?.data.subtasks?.filter(
    (i) => i.t_id === task.t_id
  );

  const numberOfCompletedTasks = currentSubtasksData?.filter(
    (i) => i.isCompleted === true
  );

  return (
    <MiniCardWrapper
      onClick={() => {
        dispatch({ type: MODAL_TOGGLE });
        dispatch({
          type: MODAL_TRACKER,
          modalTrackerPayload: { name: "viewTask", value: true },
        });
        currentSubtasksData &&
          dispatch({
            type: CURRENT_TASK,
            currentTaskPayload: {
              tasks: task,
              subtasks: currentSubtasksData,
              index: index,
            },
          });
        dispatch({ type: CHECKBOX_INPUT });
      }}
    >
      <p>{task.title}</p>
      <span>{`${numberOfCompletedTasks?.length} of ${currentSubtasksData?.length} substasks`}</span>
    </MiniCardWrapper>
  );
};

export default Task;
