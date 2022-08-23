import axios from "axios";
import { useContext } from "react";
import { actionValues } from "../defaultValues";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";
import { AddBoardProps } from "../types";

const DataManager = () => {
  const { BOARDS, IS_LOADING } = actionValues;
  const { dispatch } = useContext(StateManagerCtx);

  const getBoards = () => {
    axios("/api/boards").then((data) => {
      dispatch({ type: IS_LOADING, isLoadingPayload: true });
      dispatch({ type: BOARDS, boardsPayload: data.data });
    });
  };

  const addBoard = ({ body }: AddBoardProps) => {
    let id;
    axios.post("/api/boards", body).then((data) => (id = data.data));

    return { id };
  };
  return { getBoards, addBoard };
};

export default DataManager;
