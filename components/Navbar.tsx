import Image from "next/image";
import React, { useContext } from "react";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import {
  Actions,
  Content,
  Logo,
  NavbarWrapper,
  Title,
} from "./styled/NavbarWrapper.styled";
import { NewTaskButton } from "./UI/styled/Button.styled";

const Navbar = () => {
  const { state } = useContext(StateManagerCtx);

  const { theme, toggleSidebar } = state;

  return (
    <NavbarWrapper>
      {!toggleSidebar && (
        <Logo>
          <Image
            src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
            width={153}
            height={26}
          />
        </Logo>
      )}
      <Content>
        <Title>Platform Launch</Title>
        <Actions>
          <NewTaskButton state="primary" size="large">
            + Add New Task
          </NewTaskButton>
          <i>
            <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
          </i>
        </Actions>
      </Content>
    </NavbarWrapper>
  );
};

export default Navbar;
