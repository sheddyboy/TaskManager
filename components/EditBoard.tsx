import React from "react";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card, ModalCard, Title } from "./UI/styled/Card.styled";
import { InputField, Label } from "./UI/styled/InputWrapper.styled";

const EditBoard = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { COLUMN_INPUT, BOARD_NAME_INPUT, MODAL_TOGGLE, BOARDS } = actionValues;
  const { editBoard } = DataManager();
  const { columnInput, boardNameInput } = state;

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
            dispatch({
              type: BOARD_NAME_INPUT,
              boardNameInputPayload: e.target.value,
            });
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
                  dispatch({
                    type: COLUMN_INPUT,
                    columnInputPayload: {
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
                    type: COLUMN_INPUT,
                    columnInputPayload: { function: "delete", index: index },
                  });
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
            dispatch({ type: COLUMN_INPUT });
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
