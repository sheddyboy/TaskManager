import React from "react";
import styled from "styled-components";
import useStateManager from "../hooks/useStateManager";
import { OptionsCard } from "./UI/styled/Card.styled";

const OptionEditOrDeleteBoardWrapper = styled.div`
  position: absolute;
  top: 90px;
  width: 192px;
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
  const { state, dispatch, actionValues } = useStateManager();
  const { currentBoard } = state;
  const {
    MODAL_TOGGLE,
    MODAL_TRACKER,
    OPTION_EDIT_OR_DELETE_BOARD_TOGGLE,
    BOARD_NAME_INPUT,
    COLUMN_INPUT,
  } = actionValues;
  return (
    <OptionEditOrDeleteBoardWrapper>
      <OptionsCard>
        <EditBoard
          onClick={() => {
            dispatch({
              type: COLUMN_INPUT,
              columnInputPayload: {
                function: "override",
                value: currentBoard.data.status,
              },
            });
            dispatch({
              type: BOARD_NAME_INPUT,
              boardNameInputPayload: currentBoard.name,
            });
            dispatch({ type: MODAL_TOGGLE });
            dispatch({ type: OPTION_EDIT_OR_DELETE_BOARD_TOGGLE });
            dispatch({
              type: MODAL_TRACKER,
              modalTrackerPayload: { name: "editBoard", value: true },
            });
          }}
        >
          Edit Board
        </EditBoard>
        <DeleteBoard
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
            dispatch({ type: OPTION_EDIT_OR_DELETE_BOARD_TOGGLE });
            dispatch({
              type: MODAL_TRACKER,
              modalTrackerPayload: { name: "deleteBoard", value: true },
            });
          }}
        >
          Delete Board
        </DeleteBoard>
      </OptionsCard>
    </OptionEditOrDeleteBoardWrapper>
  );
};

export default OptionEditOrDeleteBoard;
