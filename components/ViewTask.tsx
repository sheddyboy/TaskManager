import Image from "next/image";
import React from "react";
import styled from "styled-components";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import OptionEditOrDeleteTask from "./OptionEditOrDeleteTask";
import Checkbox from "./UI/Checkbox";
import Dropdown, { Options } from "./UI/Dropdown";
import { Card, ModalCard } from "./UI/styled/Card.styled";

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
  const { changeStatus } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const { CHECKBOX_INPUT, OPTION_EDIT_OR_DELETE_TASK_TOGGLE } = actionValues;
  const {
    currentTask,
    checkBoxInput,
    currentBoard,
    toggleOptionEditOrDeleteTask,
  } = state;
  const { tasks, subtasks } = currentTask;

  const completedSubtasks = subtasks.filter((i) => i.isCompleted === true);
  return (
    <ModalCard>
      <TitleWrapper>
        <h2>{tasks.title}</h2>
        <i
          onClick={() => {
            dispatch({ type: OPTION_EDIT_OR_DELETE_TASK_TOGGLE });
          }}
        >
          <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
        </i>
        {toggleOptionEditOrDeleteTask && <OptionEditOrDeleteTask />}
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
              dispatch({
                type: CHECKBOX_INPUT,
                checkBoxInputPayload: { index: index, value: !i.isCompleted },
              });
            }}
          />
        ))}
      </Content>
      <Dropdown
        label="Current Status"
        options={currentBoard.data.status}
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
