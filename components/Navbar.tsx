import Image from "next/image";
import React from "react";
import useStateManager from "../hooks/useStateManager";
import OptionEditOrDeleteBoard from "./OptionEditOrDeleteBoard";
import {
  Actions,
  Content,
  Logo,
  NavbarWrapper,
  Title,
} from "./styled/NavbarWrapper.styled";
import { AddButton } from "./UI/styled/Button.styled";

const Navbar = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { OPTION_EDIT_OR_DELETE_BOARD_TOGGLE, MODAL_TOGGLE, MODAL_TRACKER } =
    actionValues;

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
        <Title>{currentBoard.name}</Title>
        {currentBoard.id !== "" && (
          <Actions>
            <AddButton
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
            </AddButton>
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
