import React from "react";
import styled from "styled-components";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import { Button, DelButton } from "./UI/styled/Button.styled";
import { Card, ModalCard } from "./UI/styled/Card.styled";

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

const DeleteTask = () => {
  const { deleteTask } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const { currentTask } = state;
  const { MODAL_TOGGLE, CURRENT_BOARD } = actionValues;

  return (
    <ModalCard>
      <Title>Delete this task?</Title>
      <Content>
        {`Are you sure you want to delete the ‘${currentTask.tasks.title}’ board? This action
        will remove all columns and tasks and cannot be reversed.`}
      </Content>
      <ButtonWrapper>
        <DelButton
          onClick={() => {
            deleteTask();
            dispatch({ type: MODAL_TOGGLE });
          }}
        >
          Delete
        </DelButton>
        <Button
          state="secondary"
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
          }}
        >
          Cancel
        </Button>
      </ButtonWrapper>
    </ModalCard>
  );
};

export default DeleteTask;
