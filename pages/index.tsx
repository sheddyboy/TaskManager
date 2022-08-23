import React, { useContext, useEffect } from "react";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import DataManager from "../dataManager/DataManager";

const Index = () => {
  const { getBoards } = DataManager();
  const { state } = useContext(StateManagerCtx);
  const { toggleSidebar } = state;

  useEffect(() => {
    // getBoards();
  }, []);

  return (
    <Taskmanager state={state}>
      {toggleSidebar && <Sidebar />}
      <Body />
    </Taskmanager>
  );
};

export default Index;
