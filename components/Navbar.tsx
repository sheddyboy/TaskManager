import Image from "next/image";
import React from "react";
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

const Navbar = () => {
  const { windowWidth } = useGetWindowWidth();
  const { state, dispatch, actionValues } = useStateManager();
  const {
    OPTION_EDIT_OR_DELETE_BOARD_TOGGLE,
    MODAL_TOGGLE,
    MODAL_TRACKER,
    SIDEBAR_TOGGLE,
  } = actionValues;

  const { theme, toggleSidebar, toggleOptionEditOrDeleteBoard, currentBoard } =
    state;

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
        <TitleWrapper
          onClick={() => {
            dispatch({ type: SIDEBAR_TOGGLE });
          }}
        >
          {windowWidth <= 580 && (
            <Image src="/logo-mobile.svg" width={24} height={25} />
          )}
          <Title>{currentBoard.name}</Title>
          {windowWidth <= 580 && (
            <Image src="/icon-chevron-down.svg" width={10} height={7} />
          )}
        </TitleWrapper>
        {currentBoard.id !== "" && (
          <Actions>
            <NavButton
              onClick={() => {
                dispatch({ type: MODAL_TOGGLE });
                dispatch({
                  type: MODAL_TRACKER,
                  modalTrackerPayload: { name: "addNewTask", value: true },
                });
              }}
              state="primary"
              size="large"
            >
              + Add New Task
            </NavButton>
            <NavButtonMobile
              onClick={() => {
                dispatch({ type: MODAL_TOGGLE });
                dispatch({
                  type: MODAL_TRACKER,
                  modalTrackerPayload: { name: "addNewTask", value: true },
                });
              }}
            >
              <Image src="/icon-add-task-mobile.svg" width={12} height={12} />
            </NavButtonMobile>
            <i
              onClick={() => {
                dispatch({ type: OPTION_EDIT_OR_DELETE_BOARD_TOGGLE });
              }}
            >
              <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
            </i>
            {toggleOptionEditOrDeleteBoard && <OptionEditOrDeleteBoard />}
          </Actions>
        )}
      </Content>
    </NavbarWrapper>
  );
};

export default Navbar;
