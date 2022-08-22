import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import SideBarToggle from "../components/UI/SideBarToggle";

const Index = () => {
  const { state } = useContext(StateManagerCtx);
  const { toggleSidebar } = state;

  return (
    <Taskmanager state={state}>
      {toggleSidebar && <Sidebar />}
      <Body>
        <Navbar />
      </Body>
    </Taskmanager>
  );
};

export default Index;
