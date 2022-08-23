import React from "react";
import { actionValues } from "../defaultValues";
import StateManager from "../stateManager/StateManagerReducer";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card, Title } from "./UI/styled/Card.styled";
import { InputField, Label } from "./UI/styled/InputWrapper.styled";

const AddNewBoard = () => {
  const { COLUMN_INPUT, BOARD_NAME_INPUT } = actionValues;
  const { state, dispatch } = StateManager();
  const { columnInput } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Title>Add New Board</Title>
        <Input
          required
          name="Name"
          marginBottom="20px"
          value={state.boardNameInput}
          onChange={(e) => {
            dispatch({
              type: BOARD_NAME_INPUT,
              boaedNameInputPayload: e.target.value,
            });
          }}
        />

        <Label>Column (Max 3)</Label>
        {columnInput.map((i, index) => {
          let canDelete = false;
          if (columnInput.length !== 1) {
            canDelete = true;
          }
          return (
            <InputField canDelete={canDelete} key={index}>
              <Input
                required
                value={i.column}
                onChange={(e) => {
                  dispatch({
                    type: COLUMN_INPUT,
                    columnInputPayload: {
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
        {columnInput.length < 3 && (
          <Button
            state="secondary"
            marginTop="12px"
            onClick={() => {
              dispatch({ type: COLUMN_INPUT });
            }}
          >
            + Add New Column
          </Button>
        )}
        <Button marginTop="24px" state="primary">
          Create New Board
        </Button>
      </form>
    </Card>
  );
};

export default AddNewBoard;
