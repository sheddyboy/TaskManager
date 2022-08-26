import React from "react";
import { defaultSubTasksProps } from "../defaultValues";
import useStateManager from "../hooks/useStateManager";
import { ColumnWrapper } from "./styled/ColumnWrapper.styled";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";
import { StatusWrapper } from "./styled/StatusWrapper.styled";
import Task from "./Task";

interface ColumnProps {
  status: string;
  c_id: string;
}
const Column = ({ status, c_id }: ColumnProps) => {
  const { state } = useStateManager();
  const { currentBoard, boards } = state;

  const selectedBoardData = boards.find((i) => i.id === currentBoard.id);
  const tasks = selectedBoardData?.data.tasks;
  const columnTasks = tasks?.filter((i) => i.c_id === c_id);

  return (
    <>
      <ColumnWrapper>
        <StatusWrapper>
          <i></i>
          <p>{`${status} (${columnTasks?.length})`}</p>
        </StatusWrapper>
        {columnTasks?.map((i) => (
          <Task task={i} key={i.t_id} />
        ))}
      </ColumnWrapper>
    </>
  );
};

export default Column;
