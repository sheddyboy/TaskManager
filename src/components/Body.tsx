import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useStateManager from "../hooks/useStateManager";
import Column from "./Column";
import { Content } from "./styled/Content.styled";
import { EmptyBoard } from "./styled/EmptyBoard.styled";
import { NewColumn } from "./styled/NewColumn.styled";
import Modal from "./UI/Modal";
import SideBarToggle from "./UI/SideBarToggle";
import { AddButton } from "./UI/styled/Button.styled";
import { toggleModal, setModal } from "../features/toggle/toggleSlice";
import {
  overideColumnInput,
  setBoardNameInput,
} from "../features/inputs/inputsSlice";

const Body = () => {
  // const { state, dispatch, actionValues } = useStateManager();
  // const { MODAL_TOGGLE, MODAL_TRACKER, COLUMN_INPUT, BOARD_NAME_INPUT } =
  //   actionValues;
  // const { toggleSidebar,  currentTask } = state;
  const { currentBoard } = useAppSelector((state) => state.boards);
  const { sidebarToggle } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  const columns = currentBoard.data.status;

  return (
    <Content length={columns.length}>
      {columns.length === 0 && (
        <EmptyBoard>
          <p>This board is empty. Create a new column to get started.</p>
          <AddButton
            onClick={() => {
              dispatch(toggleModal());
              dispatch(overideColumnInput(currentBoard.data.status));
              // dispatch({
              //   type: COLUMN_INPUT,
              // columnInputPayload: {
              //   function: "override",
              //   value: currentBoard.data.status,
              // },
              // });
              dispatch(setBoardNameInput(currentBoard.name));
              // dispatch({
              //   type: BOARD_NAME_INPUT,
              //   boardNameInputPayload: currentBoard.name,
              // });
              dispatch(setModal("editBoard"));
              // dispatch({
              //   type: MODAL_TRACKER,
              //   modalTrackerPayload: { name: "editBoard", value: true },
              // });
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
            dispatch(toggleModal());
            dispatch(overideColumnInput(currentBoard.data.status));
            // dispatch({
            //   type: COLUMN_INPUT,
            //   columnInputPayload: {
            //     function: "override",
            //     value: currentBoard.data.status,
            //   },
            // });
            dispatch(setBoardNameInput(currentBoard.name));

            // dispatch({
            //   type: BOARD_NAME_INPUT,
            //   boardNameInputPayload: currentBoard.name,
            // });
            dispatch(setModal("editBoard"));

            // dispatch({
            //   type: MODAL_TRACKER,
            //   modalTrackerPayload: { name: "editBoard", value: true },
            // });
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
      {!sidebarToggle && <SideBarToggle />}
    </Content>
  );
};

export default Body;
