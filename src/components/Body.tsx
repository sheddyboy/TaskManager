import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Column from "./Column";
import { Content } from "./styled/Content.styled";
import { EmptyBoard } from "./styled/EmptyBoard.styled";
import { NewColumn } from "./styled/NewColumn.styled";
import SideBarToggle from "./UI/SideBarToggle";
import { AddButton } from "./UI/styled/Button.styled";
import { toggleModal, setModal } from "../features/toggle/toggleSlice";
import {
  overideColumnInput,
  setBoardNameInput,
} from "../features/inputs/inputsSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

const Body = () => {
  const { currentBoardStatus, currentBoardName } = useGetCurrentBoard();
  const { sidebarToggle } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  return (
    <Content length={currentBoardStatus.length}>
      {currentBoardStatus.length === 0 && (
        <EmptyBoard>
          <p>This board is empty. Create a new column to get started.</p>
          <AddButton
            onClick={() => {
              dispatch(toggleModal());
              dispatch(overideColumnInput(currentBoardStatus));
              dispatch(setBoardNameInput(currentBoardName));
              dispatch(setModal("editBoard"));
            }}
          >
            + Add New Column
          </AddButton>
        </EmptyBoard>
      )}
      {currentBoardStatus.map((i) => {
        return <Column key={i.c_id} status={i.name} c_id={i.c_id} />;
      })}
      {currentBoardStatus.length > 0 && (
        <NewColumn
          onClick={() => {
            dispatch(toggleModal());
            dispatch(overideColumnInput(currentBoardStatus));
            dispatch(setBoardNameInput(currentBoardName));

            dispatch(setModal("editBoard"));
          }}
        >
          <p>+ New Column</p>
        </NewColumn>
      )}
      {!sidebarToggle && <SideBarToggle />}
    </Content>
  );
};

export default Body;
