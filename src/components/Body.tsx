import React from "react";
import useStateManager from "../hooks/useStateManager";
import Column from "./Column";
import { Content } from "./styled/Content.styled";
import { EmptyBoard } from "./styled/EmptyBoard.styled";
import { NewColumn } from "./styled/NewColumn.styled";
import Modal from "./UI/Modal";
import SideBarToggle from "./UI/SideBarToggle";
import { AddButton } from "./UI/styled/Button.styled";

const Body = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TOGGLE, MODAL_TRACKER, COLUMN_INPUT, BOARD_NAME_INPUT } =
    actionValues;
  const { toggleSidebar, currentBoard, currentTask } = state;

  const columns = currentBoard.data.status;

  return (
    <Content length={columns.length}>
      {columns.length === 0 && (
        <EmptyBoard>
          <p>This board is empty. Create a new column to get started.</p>
          <AddButton
            onClick={() => {
              dispatch({ type: MODAL_TOGGLE });
              dispatch({
                type: COLUMN_INPUT,
                columnInputPayload: {
                  function: "override",
                  value: currentBoard.data.status,
                },
              });
              dispatch({
                type: BOARD_NAME_INPUT,
                boardNameInputPayload: currentBoard.name,
              });
              dispatch({
                type: MODAL_TRACKER,
                modalTrackerPayload: { name: "editBoard", value: true },
              });
            }}
          >
            + Add New Column
          </AddButton>
        </EmptyBoard>
      )}
      {columns?.map((i) => {
        return <Column key={i.c_id} status={i.name} c_id={i.c_id} />;
      })}
      {columns.length > 0 && (
        <NewColumn
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
            dispatch({
              type: COLUMN_INPUT,
              columnInputPayload: {
                function: "override",
                value: currentBoard.data.status,
              },
            });
            dispatch({
              type: BOARD_NAME_INPUT,
              boardNameInputPayload: currentBoard.name,
            });
            dispatch({
              type: MODAL_TRACKER,
              modalTrackerPayload: { name: "editBoard", value: true },
            });
          }}
        >
          <p>+ New Column</p>
        </NewColumn>
      )}
      {/* {state.toggleModal && (
        <Modal
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
          }}
        />
      )} */}
      {!toggleSidebar && <SideBarToggle />}
    </Content>
  );
};

export default Body;
