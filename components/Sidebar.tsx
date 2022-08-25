import Image from "next/image";
import React from "react";
import useStateManager from "../hooks/useStateManager";
import {
  Active,
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
  const { state, dispatch, actionValues } = useStateManager();
  const {
    SIDEBAR_TOGGLE,
    THEME_TOGGLE,
    THEME_TOGGLE_BUTTON,
    MODAL_TOGGLE,
    CURRENT_BOARD,
    MODAL_TRACKER,
  } = actionValues;
  const { theme, themeButton, boards } = state;

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
          <span>ALL BOARDS ({boards.length})</span>
          {boards.map((i) => (
            <AddedBoard key={i.id} active={false}>
              <label>
                <input
                  type="radio"
                  name="board"
                  value={i.data.name}
                  onChange={(e) => {
                    dispatch({
                      type: CURRENT_BOARD,
                      currentBoardPayload: { name: e.target.value, id: i.id },
                    });
                  }}
                />
                <div></div>
                <i>
                  <Image src="/icon-board.svg" width={16} height={16} />
                </i>
                <p>{i.data.name}</p>
              </label>
            </AddedBoard>
          ))}
          <CreateBoard
            onClick={() => {
              dispatch({ type: MODAL_TOGGLE });
              dispatch({
                type: MODAL_TRACKER,
                modalTrackerPayload: { name: "addNewBoard", value: true },
              });
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
