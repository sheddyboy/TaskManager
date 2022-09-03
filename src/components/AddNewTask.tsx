import React from "react";
import styled from "styled-components";
import Dropdown from "./UI/Dropdown";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { ModalCard } from "./UI/styled/Card.styled";
import { InputField } from "./UI/styled/InputWrapper.styled";
import { Textarea } from "./UI/styled/Textarea.styled";
import DataManager from "../dataManager";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  updateSubtaskInput,
  deleteSubtaskInput,
  setTaskNameInput,
  setDescriptionInput,
  addSubtaskInput,
} from "../features/inputs/inputsSlice";
import { toggleModal } from "../features/toggle/toggleSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
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
  const { currentBoardStatus } = useGetCurrentBoard();
  const dispatch = useAppDispatch();
  const { subtaskInput, descriptionInput, dropdownInput, taskNameInput } =
    useAppSelector((state) => state.inputs);
  const { addTask } = DataManager();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();

    dispatch(toggleModal());
  };

  return (
    <ModalCard>
      <form onSubmit={handleSubmit}>
        <Title>Add New Task</Title>
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
                  dispatch(
                    updateSubtaskInput({ name: e.target.value, index: index })
                  );
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
        <Button type="submit">Create Task</Button>
      </form>
    </ModalCard>
  );
};

export default AddNewTask;
