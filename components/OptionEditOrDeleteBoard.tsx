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
  const { dispatch, actionValues } = useStateManager();
  const { MODAL_TOGGLE, MODAL_TRACKER, OPTION_EDIT_OR_DELETE_BOARD_TOGGLE } =
    actionValues;
  return (
    <OptionEditOrDeleteBoardWrapper>
      <OptionsCard>
        <EditBoard>Edit Board</EditBoard>
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
