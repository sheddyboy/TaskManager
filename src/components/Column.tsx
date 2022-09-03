import React from "react";
import { useAppSelector } from "../app/hooks";
import { useGetBoardsQuery } from "../features/boards/boardsApi";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";
import useStateManager from "../hooks/useStateManager";
import { ColumnWrapper } from "./styled/ColumnWrapper.styled";
import { StatusWrapper } from "./styled/StatusWrapper.styled";
import Task from "./Task";

interface ColumnProps {
  status: string;
  c_id: string;
}
const Column = ({ status, c_id }: ColumnProps) => {
  const { currentBoardTasks } = useGetCurrentBoard();
  console.log(currentBoardTasks);
  const columnTasks = currentBoardTasks.filter((i) => i.c_id === c_id);

  return (
    <ColumnWrapper>
      <StatusWrapper>
        <i></i>
        <p>{`${status}(${columnTasks.length ? columnTasks?.length : 0})`}</p>
      </StatusWrapper>
      {columnTasks?.map((i, index) => (
        <Task task={i} key={i.t_id} index={index} />
      ))}
    </ColumnWrapper>
  );
};

export default Column;
