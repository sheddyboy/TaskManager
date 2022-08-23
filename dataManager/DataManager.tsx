import axios from "axios";
import useStateManager from "../hooks/useStateManager";
import { AddBoardProps } from "../types";

const DataManager = () => {
  const { dispatch, actionValues } = useStateManager();
  const { BOARDS, IS_LOADING } = actionValues;

  const getBoards = () => {
    axios("/api/boards").then((data) => {
      dispatch({ type: IS_LOADING, isLoadingPayload: true });
      dispatch({ type: BOARDS, boardsPayload: data.data });
    });
  };

  const addBoard = ({ ...body }: AddBoardProps) => {
    let id;
    axios.post("/api/boards", body).then((data) => (id = data.data));

    return { id };
  };
  return { getBoards, addBoard };
};

export default DataManager;
