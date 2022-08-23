import Image from "next/image";
import React, { useContext } from "react";
import { actionValues } from "../defaultValues";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import {
  AddedBoard,
  Board,
  Bottom,
  CreateBoard,
  HideSidebar,
  Logo,
  Moon,
  SidebarWrapper,
  Sun,
  Theme,
  Top,
} from "./styled/SidebarWrapper.styled";
import Toggle from "./UI/Toggle";

const Sidebar = () => {
  const { dispatch, state } = useContext(StateManagerCtx);
  const { SIDEBAR_TOGGLE, THEME_TOGGLE, THEME_TOGGLE_BUTTON, MODAL_TOGGLE } =
    actionValues;
  const { theme, themeButton } = state;

  return (
    <SidebarWrapper>
      <Top>
        <Logo>
          <Image
            src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
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
          <CreateBoard
            onClick={() => {
              dispatch({ type: MODAL_TOGGLE });
            }}
          >
            <i>
              <Image src="/icon-board-purple.svg" width={16} height={16} />
            </i>
            <p>+ Create New Board</p>
          </CreateBoard>
        </Board>
      </Top>
      <Bottom>
        <Theme>
          <Sun>
            <Image src="/icon-light-theme.svg" width={19} height={19} />
          </Sun>
          <Toggle
            value={themeButton}
            onToggle={() => {
              dispatch({ type: THEME_TOGGLE });
              dispatch({ type: THEME_TOGGLE_BUTTON });
            }}
          />
          <Moon>
            <Image src="/icon-dark-theme.svg" width={16} height={16} />
          </Moon>
        </Theme>
        <HideSidebar
          onClick={() => {
            dispatch({ type: SIDEBAR_TOGGLE });
          }}
        >
          <i>
            <Image src="/icon-hide-sidebar.svg" width={18} height={16} />
          </i>
          <p>Hide Sidebar</p>
        </HideSidebar>
      </Bottom>
    </SidebarWrapper>
  );
};

export default Sidebar;
