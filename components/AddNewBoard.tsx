import React from "react";
import { v4 as uuidv4 } from "uuid";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import Input from "./UI/Input";
import { Button } from "./UI/styled/Button.styled";
import { Card, Title } from "./UI/styled/Card.styled";
import { InputField, Label } from "./UI/styled/InputWrapper.styled";

const AddNewBoard = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { COLUMN_INPUT, BOARD_NAME_INPUT, MODAL_TOGGLE, BOARDS } = actionValues;
  const { addBoard, boardInputReset } = DataManager();
  const { columnInput, boardNameInput } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: MODAL_TOGGLE });
    e.preventDefault();

    const status = columnInput.map((i) => {
      return { name: i.name, c_id: uuidv4() };
    });
    const addBoardData = {
      name: boardNameInput,
      status: status,
    };
    const { data } = addBoard(addBoardData);

    data.then((id) => {
      dispatch({
        type: BOARDS,
        boardsPayload: {
          data: [{ id: id, data: { name: boardNameInput, status: status } }],
          function: "add",
        },
      });
    });
    boardInputReset();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Title>Add New Board</Title>
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
          Create New Board
        </Button>
      </form>
    </Card>
  );
};

export default AddNewBoard;
