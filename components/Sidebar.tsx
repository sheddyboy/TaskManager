import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  AddedBoard,
  Board,
  Bottom,
  CreateBoard,
  Logo,
  SidebarWrapper,
  Top,
} from "./styled/SidebarWrapper.styled";

const Sidebar = () => {
  const theme = useContext(ThemeContext);

  return (
    <SidebarWrapper>
      <Top>
        <Logo>
          <Image
            src={theme.theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
            width={153}
            height={26}
          />
        </Logo>
        <Board>
          <span>ALL BOARDS</span>
          <AddedBoard active={true}>
            <i>
              <Image src="/icon-board-white.svg" width={16} height={16} />
            </i>
            <p>Platform Launch</p>
          </AddedBoard>
          <CreateBoard>
            <i>
              <Image src="/icon-board-purple.svg" width={16} height={16} />
            </i>
            <p>+ Create New Board</p>
          </CreateBoard>
        </Board>
      </Top>
      <Bottom></Bottom>
    </SidebarWrapper>
  );
};

export default Sidebar;
