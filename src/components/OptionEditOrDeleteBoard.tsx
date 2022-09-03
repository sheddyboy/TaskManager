import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { OptionsCard } from "./UI/styled/Card.styled";
import {
  toggleOptionEditOrDeleteBoard,
  setModal,
  toggleModal,
} from "../features/toggle/toggleSlice";
import {
  setBoardNameInput,
  overideColumnInput,
} from "../features/inputs/inputsSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

const OptionEditOrDeleteBoardWrapper = styled.div`
  position: absolute;
  top: 90px;
  width: 192px;

  @media (max-width: 580px) {
    top: 54px;
    right: -10px;
  }
`;
const EditBoard = styled.p`
  cursor: pointer;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #828fa3;
`;
const DeleteBoard = styled.p`
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #ea5555;
`;

const OptionEditOrDeleteBoard = () => {
  const { currentBoardName, currentBoardStatus } = useGetCurrentBoard();
  const dispatch = useAppDispatch();
  return (
    <OptionEditOrDeleteBoardWrapper>
      <OptionsCard>
        <EditBoard
          onClick={() => {
            dispatch(overideColumnInput(currentBoardStatus));
            dispatch(setBoardNameInput(currentBoardName));
            dispatch(toggleModal());
            dispatch(toggleOptionEditOrDeleteBoard());
            dispatch(setModal("editBoard"));
          }}
        >
          Edit Board
        </EditBoard>
        <DeleteBoard
          onClick={() => {
            dispatch(toggleModal());
            dispatch(toggleOptionEditOrDeleteBoard());
            dispatch(setModal("deleteBoard"));
          }}
        >
          Delete Board
        </DeleteBoard>
      </OptionsCard>
    </OptionEditOrDeleteBoardWrapper>
  );
};

export default OptionEditOrDeleteBoard;
