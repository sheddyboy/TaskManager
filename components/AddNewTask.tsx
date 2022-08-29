import React from "react";
import styled from "styled-components";
import useStateManager from "../hooks/useStateManager";
import Dropdown from "./UI/Dropdown";
import { v4 as uuidv4 } from "uuid";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card } from "./UI/styled/Card.styled";
import { InputField } from "./UI/styled/InputWrapper.styled";
import { Textarea } from "./UI/styled/Textarea.styled";
import DataManager from "../dataManager/DataManager";
import { PostBoardBody } from "../types";

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #000112;
  margin-bottom: 24px;
`;
export const Label = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #828fa3;
`;

const AddNewTask = () => {
  const { addTask, addTaskLocally } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const {
    subtaskInput,
    descriptionInput,
    currentBoard,
    dropdownInput,
    taskNameInput,
  } = state;
  const {
    SUBTASK_INPUT,
    MODAL_TOGGLE,
    TASK_NAME_INPUT,
    DESCRIPTION_INPUT,
    DROPDOWN_INPUT,
  } = actionValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const t_id = uuidv4();
    const tasks = {
      t_id: t_id,
      description: descriptionInput,
      status: dropdownInput.name,
      c_id: dropdownInput.c_id,
      title: taskNameInput,
    };
    const subtasks = subtaskInput.map((i) => ({
      isCompleted: false,
      s_id: uuidv4(),
      c_id: dropdownInput.c_id,
      s_title: i.s_title,
      t_id: t_id,
    }));
    const body: PostBoardBody = {
      tasks: tasks,
      subtasks: subtasks,
    };
    addTask(currentBoard.id, body);
    addTaskLocally(tasks, subtasks);

    dispatch({ type: MODAL_TOGGLE });
    // Reset form inputs
    dispatch({
      type: TASK_NAME_INPUT,
      taskNameInputPayload: "",
    });
    dispatch({
      type: DESCRIPTION_INPUT,
      descriptionInputPayload: "",
    });
    dispatch({
      type: SUBTASK_INPUT,
      subtaskInputPayload: {
        function: "reset",
      },
    });
    dispatch({
      type: DROPDOWN_INPUT,
      dropdownInputPayload: { name: "", c_id: "" },
    });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Title>Add New Task</Title>
        <Label>Title</Label>
        <Input
          value={taskNameInput}
          onChange={(e) => {
            dispatch({
              type: TASK_NAME_INPUT,
              taskNameInputPayload: e.target.value,
            });
          }}
          required
          placeholder="e.g. Take coffee break"
          marginBottom="24px"
        />
        <Label>Description</Label>
        <Textarea
          onChange={(e) => {
            dispatch({
              type: DESCRIPTION_INPUT,
              descriptionInputPayload: e.target.value,
            });
          }}
          value={descriptionInput}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
        <Label>Subtasks</Label>
        {subtaskInput.map((i, index) => {
          let canDelete = false;
          if (subtaskInput.length !== 1) {
            canDelete = true;
          }
          return (
            <InputField canDelete={canDelete} key={index}>
              <Input
                marginBottom="12px"
                required
                value={i.s_title}
                onChange={(e) => {
                  dispatch({
                    type: SUBTASK_INPUT,
                    subtaskInputPayload: {
                      function: "update",
                      index: index,
                      name: e.target.value,
                    },
                  });
                }}
                canDelete={canDelete}
              />
              <i
                onClick={() => {
                  dispatch({
                    type: SUBTASK_INPUT,
                    subtaskInputPayload: { function: "delete", index: index },
                  });
                }}
              >
                <img src="/icon-cross.svg" />
              </i>
            </InputField>
          );
        })}
        <Button
          marginBottom="24px"
          onClick={() => {
            dispatch({ type: SUBTASK_INPUT });
          }}
          state="secondary"
        >
          + Add New Subtask
        </Button>
        <Dropdown
          marginBottom="24px"
          value={dropdownInput.name}
          options={currentBoard.data.status}
        />
        <Button type="submit">Create Task</Button>
      </form>
    </Card>
  );
};

export default AddNewTask;
