import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import { defaultBoards } from "../defaultValues";
import useStateManager from "../hooks/useStateManager";
import { Button, DelButton } from "./UI/styled/Button.styled";
import { Card, ModalCard } from "./UI/styled/Card.styled";
import { toggleModal } from "../features/toggle/toggleSlice";
import { setCurrentBoard } from "../features/boards/boardsSlice";

const Title = styled.h2`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ea5555;
`;
const Content = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #828fa3;
  margin-bottom: 24px;
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

const DeleteBoard = () => {
  const dispatch = useAppDispatch();
  const { currentBoard } = useAppSelector((state) => state.boards);
  const { deleteBoard, deleteBoardLocally } = DataManager();
  // const { state, dispatch, actionValues } = useStateManager();
  // const { currentBoard } = state;
  // const { MODAL_TOGGLE, CURRENT_BOARD } = actionValues;
  return (
    <ModalCard>
      <Title>Delete this board?</Title>
      <Content>
        {`Are you sure you want to delete the ‘${currentBoard.name}’ board? This action
        will remove all columns and tasks and cannot be reversed.`}
      </Content>
      <ButtonWrapper>
        <DelButton
          onClick={() => {
            deleteBoard(currentBoard.id);
            deleteBoardLocally();
            dispatch(toggleModal());

            // dispatch({ type: MODAL_TOGGLE });
            dispatch(
              setCurrentBoard({
                name: "",
                id: "",
                index: -1,
                data: defaultBoards.data,
              })
            );
            // dispatch({
            //   type: CURRENT_BOARD,
            //   currentBoardPayload: {
            //     name: "",
            //     id: "",
            //     index: -1,
            //     data: defaultBoards.data,
            //   },
            // });
          }}
        >
          Delete
        </DelButton>
        <Button
          state="secondary"
          onClick={() => {
            dispatch(toggleModal());
            console.log("called");
            // dispatch({ type: MODAL_TOGGLE });
          }}
        >
          Cancel
        </Button>
      </ButtonWrapper>
    </ModalCard>
  );
};

export default DeleteBoard;
