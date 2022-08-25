import React from "react";
import useStateManager from "../hooks/useStateManager";
import AddNewBoard from "./AddNewBoard";
import Column from "./Column";
import Navbar from "./Navbar";
import { BodyWrapper } from "./styled/BodyWrapper.styled";
import { Content } from "./styled/Content.styled";
import { EmptyBoard } from "./styled/EmptyBoard.styled";
import { NewColumn } from "./styled/NewColumn.styled";
import Modal from "./UI/Modal";
import SideBarToggle from "./UI/SideBarToggle";
import { AddButton } from "./UI/styled/Button.styled";

const Body = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TOGGLE } = actionValues;
  const { toggleSidebar } = state;

  return (
    <BodyWrapper>
      <Navbar />
      <Content>
        {false && (
          <EmptyBoard>
            <p>This board is empty. Create a new column to get started.</p>
            <AddButton>+ Add New Column</AddButton>
          </EmptyBoard>
        )}
        <Column />
        <NewColumn>
          <p>+ New Column</p>
        </NewColumn>
        {state.toggleModal && (
          <Modal
            onClick={() => {
              dispatch({ type: MODAL_TOGGLE });
            }}
          />
        )}
      </Content>
      {!toggleSidebar && <SideBarToggle />}
    </BodyWrapper>
  );
};

export default Body;
