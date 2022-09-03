import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useGetWindowWidth from "../hooks/useGetWindowWidth";
import useStateManager from "../hooks/useStateManager";
import OptionEditOrDeleteBoard from "./OptionEditOrDeleteBoard";
import {
  Actions,
  Content,
  Logo,
  NavbarWrapper,
  Title,
  TitleWrapper,
} from "./styled/NavbarWrapper.styled";
import {
  AddButton,
  NavButton,
  NavButtonMobile,
} from "./UI/styled/Button.styled";
import {
  toggleOptionEditOrDeleteBoard,
  setModal,
  toggleSidebar,
  toggleModal,
} from "../features/toggle/toggleSlice";
import { useGetBoardsQuery } from "../features/boards/boardsAPI";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

const Navbar = () => {
  const { currentBoardName } = useGetCurrentBoard();

  const dispatch = useAppDispatch();
  const { theme, sidebarToggle, optionEditOrDeleteBoard } = useAppSelector(
    (state) => state.toggle
  );
  const { windowWidth } = useGetWindowWidth();
  // const { state, dispatch, actionValues } = useStateManager();
  // const {
  //   OPTION_EDIT_OR_DELETE_BOARD_TOGGLE,
  //   MODAL_TOGGLE,
  //   MODAL_TRACKER,
  //   SIDEBAR_TOGGLE,
  // } = actionValues;

  // const { theme, toggleSidebar, toggleOptionEditOrDeleteBoard, currentBoard } =
  //   state;

  return (
    <NavbarWrapper>
      {!sidebarToggle && (
        <Logo>
          <Image
            alt=""
            src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
            width={153}
            height={26}
          />
        </Logo>
      )}
      <Content>
        <TitleWrapper
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          {windowWidth <= 580 && (
            <Image alt="" src="/logo-mobile.svg" width={24} height={25} />
          )}
          <Title>{currentBoardName}</Title>
          {windowWidth <= 580 && (
            <Image alt="" src="/icon-chevron-down.svg" width={10} height={7} />
          )}
        </TitleWrapper>
        {/* {currentBoard.id !== "" && ( */}
        <Actions>
          <NavButton
            onClick={() => {
              dispatch(toggleModal());
              dispatch(setModal("addNewTask"));
            }}
            state="primary"
            size="large"
          >
            + Add New Task
          </NavButton>
          <NavButtonMobile
            onClick={() => {
              dispatch(toggleModal());
              dispatch(setModal("addNewTask"));
            }}
          >
            <Image
              alt=""
              src="/icon-add-task-mobile.svg"
              width={12}
              height={12}
            />
          </NavButtonMobile>
          <i
            onClick={() => {
              dispatch(toggleOptionEditOrDeleteBoard());
            }}
          >
            <Image
              alt=""
              src="/icon-vertical-ellipsis.svg"
              width={5}
              height={20}
            />
          </i>
          {optionEditOrDeleteBoard && <OptionEditOrDeleteBoard />}
        </Actions>
        {/* )} */}
      </Content>
    </NavbarWrapper>
  );
};

export default Navbar;
