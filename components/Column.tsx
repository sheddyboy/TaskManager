import React from "react";
import useStateManager from "../hooks/useStateManager";
import { ColumnWrapper } from "./styled/ColumnWrapper.styled";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";
import { StatusWrapper } from "./styled/StatusWrapper.styled";

interface ColumnProps {
  status: string;
  c_id: string;
}
const Column = ({ status, c_id }: ColumnProps) => {
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TRACKER, MODAL_TOGGLE, CURRENT_TASK } = actionValues;
  const { currentBoard, boards } = state;

  const selectedBoardData = boards.find((i) => i.id === currentBoard.id);
  const tasks = selectedBoardData?.data.tasks;
  const subtasks = selectedBoardData?.data.subtasks;
  const columnTasks = tasks?.filter((i) => i.c_id === c_id);
  const columnSubtasks = subtasks?.filter((i) => i.c_id === c_id);
  return (
    <>
      <ColumnWrapper>
        <StatusWrapper>
          <i></i>
          <p>{`${status} (${columnTasks?.length})`}</p>
        </StatusWrapper>
        {columnTasks?.map((i) => (
          <MiniCardWrapper
            key={i.t_id}
            onClick={() => {
              const currentSubtasks = columnSubtasks?.filter(
                (st) => st.t_id === i.t_id
              );
              console.log(currentSubtasks);
              dispatch({ type: MODAL_TOGGLE });
              dispatch({
                type: MODAL_TRACKER,
                modalTrackerPayload: { name: "viewTask", value: true },
              });
              currentSubtasks &&
                dispatch({
                  type: CURRENT_TASK,
                  currentTaskPayload: {
                    tasks: i,
                    subtasks: currentSubtasks,
                  },
                });
            }}
          >
            <p>{i.title}</p>
            <span>{`0 of ${columnSubtasks?.length} substasks`}</span>
          </MiniCardWrapper>
        ))}
      </ColumnWrapper>
    </>
  );
};

export default Column;
