import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Sidebar from "./Sidebar";
import {
  Actions,
  Content,
  Logo,
  NavbarWrapper,
  Title,
} from "./styled/NavbarWrapper.styled";
import { Button, NewTaskButton } from "./UI/styled/Button.styled";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  return (
    <NavbarWrapper>
      {false && (
        <Logo>
          <Image
            src={theme.theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
            width={153}
            height={26}
          />
        </Logo>
      )}
      {/* <Sidebar /> */}
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
