import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DataManager from "../dataManager";
import { defaultBoards } from "../defaultValues";
import useStateManager from "../hooks/useStateManager";
import { Button, DelButton } from "./UI/styled/Button.styled";
import { Card, ModalCard } from "./UI/styled/Card.styled";
import { toggleModal } from "../features/toggle/toggleSlice";
import { setCurrentBoardIndex } from "../features/boards/boardsSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

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
  const { currentBoardName, currentBoardId } = useGetCurrentBoard();
  const dispatch = useAppDispatch();
  const { deleteBoard } = DataManager();
  return (
    <ModalCard>
      <Title>Delete this board?</Title>
      <Content>
        {`Are you sure you want to delete the ‘${currentBoardName}’ board? This action
        will remove all columns and tasks and cannot be reversed.`}
      </Content>
      <ButtonWrapper>
        <DelButton
          onClick={() => {
            deleteBoard(currentBoardId);
            // deleteBoardLocally();
            dispatch(toggleModal());
            dispatch(setCurrentBoardIndex(0));
          }}
        >
          Delete
        </DelButton>
        <Button
          state="secondary"
          onClick={() => {
            dispatch(toggleModal());
          }}
        >
          Cancel
        </Button>
      </ButtonWrapper>
    </ModalCard>
  );
};

export default DeleteBoard;
