import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import useStateManager from "../hooks/useStateManager";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card, ModalCard, Title } from "./UI/styled/Card.styled";
import { InputField, Label } from "./UI/styled/InputWrapper.styled";
import { toggleModal } from "../features/toggle/toggleSlice";
import {
  addColumnInput,
  deleteColumnInput,
  updateColumnInput,
  setBoardNameInput,
} from "../features/inputs/inputsSlice";
import {
  useAddBoardMutation,
  useGetBoardsQuery,
} from "../features/boards/boardsAPI";

const AddNewBoard = () => {
  const [addBoard] = useAddBoardMutation();
  const dispatch = useAppDispatch();
  const { columnInput, boardNameInput } = useAppSelector(
    (state) => state.inputs
  );
  const { boardInputReset } = DataManager();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(toggleModal());

    const status = columnInput.map((i) => {
      return { name: i.name, c_id: uuidv4() };
    });
    const addBoardData = {
      name: boardNameInput,
      status: status,
    };
    addBoard(addBoardData);
    boardInputReset();
  };

  return (
    <ModalCard>
      <form onSubmit={handleSubmit}>
        <Title>Add New Board</Title>
        <Input
          required
          name="Name"
          marginBottom="20px"
          value={boardNameInput}
          onChange={(e) => {
            dispatch(setBoardNameInput(e.target.value));
          }}
        />

        <Label>Column</Label>
        {columnInput.map((i, index) => {
          let canDelete = false;
          if (columnInput.length !== 1) {
            canDelete = true;
          }
          return (
            <InputField canDelete={canDelete} key={index}>
              <Input
                required
                value={i.name}
                marginBottom="12px"
                onChange={(e) => {
                  dispatch(
                    updateColumnInput({ name: e.target.value, index: index })
                  );
                }}
                canDelete={canDelete}
              />
              <i
                onClick={() => {
                  dispatch(deleteColumnInput(index));
                }}
              >
                <img src="/icon-cross.svg" />
              </i>
            </InputField>
          );
        })}
        <Button
          state="secondary"
          marginTop="12px"
          onClick={() => {
            dispatch(addColumnInput());
          }}
        >
          + Add New Column
        </Button>
        <Button type="submit" marginTop="24px" state="primary">
          Create New Board
        </Button>
      </form>
    </ModalCard>
  );
};

export default AddNewBoard;
