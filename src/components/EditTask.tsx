import React from "react";
import { useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";
import useStateManager from "../hooks/useStateManager";
import { Label, Title } from "./AddNewTask";
import Dropdown from "./UI/Dropdown";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card, ModalCard } from "./UI/styled/Card.styled";
import { InputField } from "./UI/styled/InputWrapper.styled";
import { Textarea } from "./UI/styled/Textarea.styled";
import {
  updateSubtaskInput,
  setTaskNameInput,
  setDescriptionInput,
  deleteSubtaskInput,
  addSubtaskInput,
} from "../features/inputs/inputsSlice";

const EditTask = () => {
  const { currentBoardStatus } = useGetCurrentBoard();
  const { subtaskInput, descriptionInput, dropdownInput, taskNameInput } =
    useAppSelector((state) => state.inputs);
  const { editTask } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  // const {
  //   subtaskInput,
  //   descriptionInput,
  //   currentBoard,
  //   dropdownInput,
  //   taskNameInput,
  // } = state;
  // const { SUBTASK_INPUT, TASK_NAME_INPUT, DESCRIPTION_INPUT } = actionValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTask();
  };
  return (
    <ModalCard>
      <form onSubmit={handleSubmit}>
        <Title>Edit Task</Title>
        <Label>Title</Label>
        <Input
          value={taskNameInput}
          onChange={(e) => {
            dispatch(setTaskNameInput(e.target.value));
          }}
          required
          placeholder="e.g. Take coffee break"
          marginBottom="24px"
        />
        <Label>Description</Label>
        <Textarea
          onChange={(e) => {
            dispatch(setDescriptionInput(e.target.value));
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
                  dispatch(updateSubtaskInput({ name: e.target.value, index }));
                }}
                canDelete={canDelete}
              />
              <i
                onClick={() => {
                  dispatch(deleteSubtaskInput(index));
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
            dispatch(addSubtaskInput());
          }}
          state="secondary"
        >
          + Add New Subtask
        </Button>
        <Dropdown
          marginBottom="24px"
          value={dropdownInput.name}
          options={currentBoardStatus}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </ModalCard>
  );
};

export default EditTask;
