import axios from "axios";
import useStateManager from "../hooks/useStateManager";
import { AddBoardProps, PostBoardBody } from "../types";

const DataManager = () => {
  const { dispatch, actionValues } = useStateManager();
  const { BOARDS, IS_LOADING } = actionValues;

  const getBoards = () => {
    axios("/api/boards").then((data) => {
      dispatch({ type: IS_LOADING, isLoadingPayload: true });
      dispatch({
        type: BOARDS,
        boardsPayload: { data: data.data, onMount: true },
      });
    });
  };

  const addBoard = ({ ...body }: AddBoardProps) => {
    let data: Promise<string> = axios
      .post("/api/boards", body)
      .then((data) => data.data);

    return { data };
  };

  const deleteBoard = (id: string) => {
    axios.delete(`/api/boards/${id}`);
  };
  const addTask = (id: string, body: PostBoardBody) => {
    axios.put(`/api/boards/${id}`, body);
  };

  return { getBoards, addBoard, deleteBoard, addTask };
};

export default DataManager;
