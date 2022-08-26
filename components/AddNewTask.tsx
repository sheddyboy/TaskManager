import React, { useRef } from "react";
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

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #000112;
  margin-bottom: 24px;
`;
const Label = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #828fa3;
`;

const AddNewTask = () => {
  const { addTask, getBoards } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const {
    subtaskInput,
    descriptionInput,
    boards,
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
    BOARDS,
  } = actionValues;
  const currentBoardDetails = boards.find((i) => i.id === currentBoard.id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const t_id = uuidv4();
    const subtasks = subtaskInput.map((i) => ({
      isCompleted: false,
      s_id: uuidv4(),
      c_id: dropdownInput.c_id,
      s_title: i.subtask,
      t_id: t_id,
    }));
    const body: PostBoardBody = {
      tasks: {
        t_id: t_id,
        description: descriptionInput,
        status: dropdownInput.name,
        c_id: dropdownInput.c_id,
        title: taskNameInput,
      },

      subtasks: subtasks,
    };
    addTask(currentBoard.id, body);
    getBoards();
    // dispatch({
    //   type: BOARDS,
    //   boardsPayload: [
    //     {
    //       id: currentBoard.id,
    //       data: { name: state.boardNameInput, status: status },
    //     },
    //   ],
    // });
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
                value={i.subtask}
                onChange={(e) => {
                  dispatch({
                    type: SUBTASK_INPUT,
                    subtaskInputPayload: {
                      function: "update",
                      index: index,
                      value: e.target.value,
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
        {subtaskInput.length < 3 && (
          <Button
            marginBottom="24px"
            onClick={() => {
              dispatch({ type: SUBTASK_INPUT });
            }}
            state="secondary"
          >
            + Add New Subtask
          </Button>
        )}
        {currentBoardDetails && (
          <Dropdown
            marginBottom="24px"
            value={dropdownInput.name}
            options={currentBoardDetails.data.status}
          />
        )}
        <Button type="submit">Create Task</Button>
      </form>
    </Card>
  );
};

export default AddNewTask;
