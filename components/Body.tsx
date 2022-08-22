import React, { useContext } from "react";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import { BodyProps } from "../types";
import { BodyWrapper } from "./styled/BodyWrapper.styled";
import SideBarToggle from "./UI/SideBarToggle";

const Body = ({ children }: BodyProps) => {
  const { state } = useContext(StateManagerCtx);
  const { toggleSidebar } = state;

  return (
    <BodyWrapper>
      {children}
      {!toggleSidebar && <SideBarToggle />}
    </BodyWrapper>
  );
};

export default Body;
