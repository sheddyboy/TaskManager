import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  toggleTheme,
  toggleModal,
  setModal,
  toggleThemeButton,
  toggleSidebar,
} from "../features/toggle/toggleSlice";
import { setCurrentBoardIndex } from "../features/boards/boardsSlice";
import useStateManager from "../hooks/useStateManager";
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
import { useGetBoardsQuery } from "../features/boards/boardsApi";

const Sidebar = () => {
  const { data, isSuccess } = useGetBoardsQuery();
  const { theme, themeToggle } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  return (
    <SidebarWrapper>
      <Top>
        <Logo>
          <Image
            alt=""
            src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
            width={153}
            height={26}
          />
        </Logo>
        <Board>
          <span>ALL BOARDS ({data?.length})</span>
          {data?.map((i, index) => (
            <AddedBoard key={i.id} active={false}>
              <label>
                <input
                  type="radio"
                  name="board"
                  value={i.data.name}
                  onChange={(e) => {
                    dispatch(setCurrentBoardIndex(index));
                  }}
                />
                <div></div>
                <i>
                  <Image alt="" src="/icon-board.svg" width={16} height={16} />
                </i>
                <p>{i.data.name}</p>
              </label>
            </AddedBoard>
          ))}
        </Board>
      </Top>
      <Bottom>
        <CreateBoard
          onClick={() => {
            dispatch(toggleModal());
            dispatch(setModal("addNewBoard"));
          }}
        >
          <i>
            <Image alt="" src="/icon-board-purple.svg" width={16} height={16} />
          </i>
          <p>+ Create New Board</p>
        </CreateBoard>
        <Theme>
          <Sun>
            <Image alt="" src="/icon-light-theme.svg" width={19} height={19} />
          </Sun>
          <Toggle
            value={themeToggle}
            onToggle={() => {
              dispatch(toggleTheme());
              dispatch(toggleThemeButton());
            }}
          />
          <Moon>
            <Image alt="" src="/icon-dark-theme.svg" width={16} height={16} />
          </Moon>
        </Theme>
        <HideSidebar
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <i>
            <Image alt="" src="/icon-hide-sidebar.svg" width={18} height={16} />
          </i>
          <p>Hide Sidebar</p>
        </HideSidebar>
      </Bottom>
    </SidebarWrapper>
  );
};

export default Sidebar;
