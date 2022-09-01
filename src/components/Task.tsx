import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useGetBoardsQuery } from "../features/boards/boardsAPI";
import useStateManager from "../hooks/useStateManager";
import { TaskProps } from "../types";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";
import { toggleModal, setModal } from "../features/toggle/toggleSlice";
import { setCurrentTask, showSubtasks } from "../features/boards/boardsSlice";

interface CurrentTaskProps {
  task: TaskProps;
  index: number;
}

const Task = ({ task, index }: CurrentTaskProps) => {
  const dispatch = useAppDispatch();

  const { currentBoard } = useAppSelector((state) => state.boards);
  const { data } = useGetBoardsQuery();

  // const { state, dispatch, actionValues } = useStateManager();
  // const { MODAL_TRACKER, MODAL_TOGGLE, CURRENT_TASK, CHECKBOX_INPUT } =
  //   actionValues;
  // const { boards, currentBoard } = state;

  const currentBoardData = data?.find((i) => i.id === currentBoard.id);
  const currentSubtasksData = currentBoardData?.data.subtasks?.filter(
    (i) => i.t_id === task.t_id
  );

  const currentBoardStatus = currentBoardData?.data.status;

  const numberOfCompletedTasks = currentSubtasksData?.filter(
    (i) => i.isCompleted === true
  );

  return (
    <MiniCardWrapper
      onClick={() => {
        dispatch(toggleModal());
        dispatch(setModal("viewTask"));
        currentSubtasksData &&
          currentBoardStatus &&
          dispatch(
            setCurrentTask({
              tasks: task,
              subtasks: currentSubtasksData,
              status: currentBoardStatus,
              index: index,
            })
          );
        // dispatch({
        //   type: CURRENT_TASK,
        //   currentTaskPayload: {
        //     tasks: task,
        //     subtasks: currentSubtasksData,
        //     status: currentBoardStatus,
        //     index: index,
        //   },
        // });
        dispatch(showSubtasks());
        // dispatch({ type: CHECKBOX_INPUT });
      }}
    >
      <p>{task.title}</p>
      <span>{`${numberOfCompletedTasks?.length} of ${currentSubtasksData?.length} substasks`}</span>
    </MiniCardWrapper>
  );
};

export default Task;
