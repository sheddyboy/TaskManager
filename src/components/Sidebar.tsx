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
import { setCurrentBoard } from "../features/boards/boardsSlice";
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
import { useGetBoardsQuery } from "../features/boards/boardsAPI";

const Sidebar = () => {
  const { data, isSuccess } = useGetBoardsQuery();
  // console.log(data, isSuccess);
  const { theme, themeToggle } = useAppSelector((state) => state.toggle);
  const { boards } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();
  // const { state, dispatch, actionValues } = useStateManager();
  // const {
  //   SIDEBAR_TOGGLE,
  //   THEME_TOGGLE,
  //   THEME_TOGGLE_BUTTON,
  //   MODAL_TOGGLE,
  //   CURRENT_BOARD,
  //   MODAL_TRACKER,
  // } = actionValues;
  // const { theme, themeButton, boards } = state;
  // console.log(boards);

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
          <span>ALL BOARDS ({data?.length})</span>
          {data?.map((i, index) => (
            <AddedBoard key={i.id} active={false}>
              <label>
                <input
                  type="radio"
                  name="board"
                  value={i.data.name}
                  onChange={(e) => {
                    dispatch(
                      setCurrentBoard({
                        name: e.target.value,
                        id: i.id,
                        index: index,
                        data: i.data,
                      })
                    );
                    // dispatch({
                    //   type: CURRENT_BOARD,
                    // currentBoardPayload: {
                    //   name: e.target.value,
                    //   id: i.id,
                    //   index: index,
                    //   data: i.data,
                    // },
                    // });
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
        </Board>
      </Top>
      <Bottom>
        <CreateBoard
          onClick={() => {
            // dispatch({ type: MODAL_TOGGLE });
            dispatch(toggleModal());
            // dispatch({
            //   type: MODAL_TRACKER,
            //   modalTrackerPayload: { name: "addNewBoard", value: true },
            // });
            dispatch(setModal("addNewBoard"));
          }}
        >
          <i>
            <Image src="/icon-board-purple.svg" width={16} height={16} />
          </i>
          <p>+ Create New Board</p>
        </CreateBoard>
        <Theme>
          <Sun>
            <Image src="/icon-light-theme.svg" width={19} height={19} />
          </Sun>
          <Toggle
            value={themeToggle}
            onToggle={() => {
              // dispatch({ type: THEME_TOGGLE });
              dispatch(toggleTheme());
              dispatch(toggleThemeButton());
              // dispatch({ type: THEME_TOGGLE_BUTTON });
            }}
          />
          <Moon>
            <Image src="/icon-dark-theme.svg" width={16} height={16} />
          </Moon>
        </Theme>
        <HideSidebar
          onClick={() => {
            dispatch(toggleSidebar());
            // dispatch({ type: SIDEBAR_TOGGLE });
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
