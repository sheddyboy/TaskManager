import React from "react";
import useStateManager from "../hooks/useStateManager";
import { ColumnWrapper } from "./styled/ColumnWrapper.styled";
import { StatusWrapper } from "./styled/StatusWrapper.styled";
import Task from "./Task";

interface ColumnProps {
  status: string;
  c_id: string;
}
const Column = ({ status, c_id }: ColumnProps) => {
  const { state } = useStateManager();
  const { currentBoard } = state;

  const tasks = currentBoard?.data.tasks;
  const columnTasks = tasks?.filter((i) => i.c_id === c_id);

  return (
    <ColumnWrapper>
      <StatusWrapper>
        <i></i>
        <p>{`${status}(${columnTasks?.length ? columnTasks?.length : 0})`}</p>
      </StatusWrapper>
      {columnTasks?.map((i, index) => (
        <Task task={i} key={i.t_id} index={index} />
      ))}
    </ColumnWrapper>
  );
};

export default Column;
