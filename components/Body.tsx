import React, { useContext } from "react";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import Column from "./Column";
import Navbar from "./Navbar";
import { BodyWrapper } from "./styled/BodyWrapper.styled";
import { Content } from "./styled/Content.styled";
import { EmptyBoard } from "./styled/EmptyBoard.styled";
import { NewColumn } from "./styled/NewColumn.styled";
import SideBarToggle from "./UI/SideBarToggle";
import { AddButton } from "./UI/styled/Button.styled";

const Body = () => {
  const { state } = useContext(StateManagerCtx);
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
      </Content>
      {!toggleSidebar && <SideBarToggle />}
    </BodyWrapper>
  );
};

export default Body;
