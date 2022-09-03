import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import useStateManager from "../hooks/useStateManager";
import OptionEditOrDeleteTask from "./OptionEditOrDeleteTask";
import Checkbox from "./UI/Checkbox";
import Dropdown, { Options } from "./UI/Dropdown";
import { Card, ModalCard } from "./UI/styled/Card.styled";
import { updateSubtask } from "../features/boards/boardsSlice";
import { toggleOptionEditOrDeleteTask } from "../features/toggle/toggleSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
  }
  i {
    cursor: pointer;
    padding-left: 24px;
  }
`;
const Content = styled.div`
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
    margin-bottom: 24px;
  }

  label {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => (theme.theme === "light" ? "#828fa3" : "#FFFFFF")};
    display: block;
  }
`;

const ViewTask = () => {
  const { currentBoardStatus } = useGetCurrentBoard();
  const dispatch = useAppDispatch();
  const { currentTask, checkBoxInput } = useAppSelector(
    (state) => state.boards
  );
  const { optionEditOrDeleteTask } = useAppSelector((state) => state.toggle);
  const { changeStatus } = DataManager();
  const { tasks, subtasks } = currentTask;

  const completedSubtasks = subtasks.filter((i) => i.isCompleted === true);
  return (
    <ModalCard>
      <TitleWrapper>
        <h2>{tasks.title}</h2>
        <i
          onClick={() => {
            dispatch(toggleOptionEditOrDeleteTask());
          }}
        >
          <Image
            alt=""
            src="/icon-vertical-ellipsis.svg"
            width={5}
            height={20}
          />
        </i>
        {optionEditOrDeleteTask && <OptionEditOrDeleteTask />}
      </TitleWrapper>
      <Content>
        <p>{tasks.description}</p>
        <label>{`Subtasks (${completedSubtasks.length} of ${subtasks.length})`}</label>
        {checkBoxInput.map((i, index) => (
          <Checkbox
            key={i.s_id}
            name={i.s_title}
            value={i.isCompleted}
            onChange={() => {
              dispatch(updateSubtask({ index: index, value: !i.isCompleted }));
              // dispatch({
              //   type: CHECKBOX_INPUT,
              //   checkBoxInputPayload: { index: index, value: !i.isCompleted },
              // });
            }}
          />
        ))}
      </Content>
      <Dropdown
        label="Current Status"
        options={currentBoardStatus}
        onChange={(option: Options) => {
          changeStatus(option);
        }}
        value={currentTask.tasks.status}
        marginTop="20px"
      />
    </ModalCard>
  );
};

export default ViewTask;
