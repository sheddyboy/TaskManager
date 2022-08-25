import React, { useEffect } from "react";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";

const Index = () => {
  const { getBoards } = DataManager();
  const { state } = useStateManager();
  const { toggleSidebar } = state;

  useEffect(() => {
    console.log("Mounted");
    getBoards();
  }, []);

  return (
    <Taskmanager state={state}>
      {toggleSidebar && <Sidebar />}
      <Body />
    </Taskmanager>
  );
};

export default Index;
