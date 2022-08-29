import React from "react";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import { Label, Title } from "./AddNewTask";
import Dropdown from "./UI/Dropdown";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card } from "./UI/styled/Card.styled";
import { InputField } from "./UI/styled/InputWrapper.styled";
import { Textarea } from "./UI/styled/Textarea.styled";

const EditTask = () => {
  const { editTask } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const {
    subtaskInput,
    descriptionInput,
    currentBoard,
    dropdownInput,
    taskNameInput,
  } = state;
  const { SUBTASK_INPUT, TASK_NAME_INPUT, DESCRIPTION_INPUT } = actionValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTask();
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Title>Edit Task</Title>
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
        <Label>Subtasks Max(3)</Label>
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
        <Button type="submit">Save Changes</Button>
      </form>
    </Card>
  );
};

export default EditTask;
