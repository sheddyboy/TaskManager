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
  const { addBoard } = DataManager();
  const { columnInput } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: MODAL_TOGGLE });
    e.preventDefault();

    const status = state.columnInput.map((i) => {
      return { name: i.column, c_id: uuidv4() };
    });
    const addBoardData = {
      name: state.boardNameInput,
      status: status,
    };
    const { data } = addBoard(addBoardData);

    data.then((id) => {
      dispatch({
        type: BOARDS,
        boardsPayload: {
          data: [
            { id: id, data: { name: state.boardNameInput, status: status } },
          ],
          function: "add",
        },
      });
    });
    // Reset form inputs
    dispatch({
      type: BOARD_NAME_INPUT,
      boardNameInputPayload: "",
    });
    dispatch({
      type: COLUMN_INPUT,
      columnInputPayload: {
        function: "reset",
      },
    });
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
              boardNameInputPayload: e.target.value,
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
                marginBottom="12px"
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
        <Button type="submit" marginTop="24px" state="primary">
          Create New Board
        </Button>
      </form>
    </Card>
  );
};

export default AddNewBoard;
