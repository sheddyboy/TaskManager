import React, { useContext } from "react";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";

const Index = () => {
  const { state } = useContext(StateManagerCtx);
  const { toggleSidebar } = state;

  return (
    <Taskmanager state={state}>
      {toggleSidebar && <Sidebar />}
      <Body />
    </Taskmanager>
  );
};

export default Index;
