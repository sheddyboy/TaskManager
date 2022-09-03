import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { ModalCard, Title } from "./UI/styled/Card.styled";
import { InputField, Label } from "./UI/styled/InputWrapper.styled";
import {
  setBoardNameInput,
  updateColumnInput,
  deleteColumnInput,
  addColumnInput,
} from "../features/inputs/inputsSlice";

const EditBoard = () => {
  const { boardNameInput, columnInput } = useAppSelector(
    (state) => state.inputs
  );
  const dispatch = useAppDispatch();
  const { editBoard } = DataManager();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editBoard();
  };

  return (
    <ModalCard>
      <form onSubmit={handleSubmit}>
        <Title>Edit Board</Title>
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
          let canDelete = true;
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
          Save Changes
        </Button>
      </form>
    </ModalCard>
  );
};

export default EditBoard;
