import axios from "axios";
import useStateManager from "../hooks/useStateManager";
import {
  AddBoardProps,
  BoardsProps,
  PostBoardBody,
  SubTaskProps,
  TaskProps,
} from "../types";

const DataManager = () => {
  const { state, dispatch, actionValues } = useStateManager();
  const { boards, currentBoard } = state;
  const { BOARDS, IS_LOADING } = actionValues;

  const getBoards = () => {
    axios("/api/boards").then((data) => {
      dispatch({ type: IS_LOADING, isLoadingPayload: true });
      dispatch({
        type: BOARDS,
        boardsPayload: { data: data.data, function: "mount" },
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

  const addTaskLocally = (tasks: TaskProps, subtasks: SubTaskProps[]) => {
    let currentBoardIndex = -1;
    const currentBoardDetails = boards.find((i, index) => {
      currentBoardIndex = index;
      return i.id === currentBoard.id;
    });
    if (currentBoardDetails) {
      let prevTasks = currentBoardDetails.data.tasks
        ? currentBoardDetails.data.tasks
        : [];
      let prevSubTasks = currentBoardDetails.data.subtasks
        ? currentBoardDetails.data.subtasks
        : [];
      const updatedCurrentBoard: BoardsProps = {
        id: currentBoard.id,
        data: {
          name: currentBoardDetails?.data.name,
          status: currentBoardDetails?.data.status,
          tasks: [...prevTasks, tasks],
          subtasks: [...prevSubTasks, ...subtasks],
        },
      };
      const dummyBoards = [...boards];
      dummyBoards[currentBoardIndex] = updatedCurrentBoard;
      dispatch({
        type: BOARDS,
        boardsPayload: {
          data: dummyBoards,
          function: "update",
        },
      });
    }
  };

  return { getBoards, addBoard, deleteBoard, addTask, addTaskLocally };
};

export default DataManager;
