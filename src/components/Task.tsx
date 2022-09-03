import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { TaskProps } from "../types";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";
import { toggleModal, setModal } from "../features/toggle/toggleSlice";
import { setCurrentTask, showSubtasks } from "../features/boards/boardsSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

interface CurrentTaskProps {
  task: TaskProps;
  index: number;
}

const Task = ({ task, index }: CurrentTaskProps) => {
  const { currentBoardSubtasks, currentBoardStatus } = useGetCurrentBoard();
  const dispatch = useAppDispatch();

  const currentSubtasksData = currentBoardSubtasks.filter(
    (i) => i.t_id === task.t_id
  );

  const numberOfCompletedTasks = currentSubtasksData?.filter(
    (i) => i.isCompleted === true
  );

  return (
    <MiniCardWrapper
      onClick={() => {
        dispatch(toggleModal());
        dispatch(setModal("viewTask"));
        dispatch(
          setCurrentTask({
            tasks: task,
            subtasks: currentSubtasksData,
            status: currentBoardStatus,
            index: index,
          })
        );
        dispatch(showSubtasks());
      }}
    >
      <p>{task.title}</p>
      <span>{`${numberOfCompletedTasks.length} of ${currentSubtasksData.length} substasks`}</span>
    </MiniCardWrapper>
  );
};

export default Task;
