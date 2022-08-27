import axios from "axios";
import { Options } from "../components/UI/Dropdown";
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
  const { boards, currentBoard, checkBoxInput, currentTask } = state;
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
    let prevTasks = currentBoard.data.data.tasks
      ? currentBoard.data.data.tasks
      : [];
    let prevSubTasks = currentBoard.data.data.subtasks
      ? currentBoard.data.data.subtasks
      : [];
    const updatedCurrentBoard: BoardsProps = {
      id: currentBoard.id,
      data: {
        name: currentBoard.data?.data.name,
        status: currentBoard.data?.data.status,
        tasks: [...prevTasks, tasks],
        subtasks: [...prevSubTasks, ...subtasks],
      },
    };
    const dummyBoards = [...boards];
    dummyBoards[currentBoard.index] = updatedCurrentBoard;
    dispatch({
      type: BOARDS,
      boardsPayload: {
        data: dummyBoards,
        function: "update",
      },
    });
  };

  const deleteBoardLocally = () => {
    const dummyBoards = [...boards];
    dummyBoards.splice(currentBoard.index, 1);
    dispatch({
      type: BOARDS,
      boardsPayload: {
        data: dummyBoards,
        function: "update",
      },
    });
  };

  const changeStatus = (option: Options) => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoard.id) {
        i.data.tasks.map((t, tIndex) => {
          if (t.t_id === currentTask.tasks.t_id) {
            array[index].data.tasks[tIndex].status = option.name;
            array[index].data.tasks[tIndex].c_id = option.c_id;
          }
        });
        i.data.subtasks.map((st, stIndex) => {
          if (st.t_id === currentTask.tasks.t_id) {
            array[index].data.subtasks[stIndex].c_id = option.c_id;
          }
        });
      }
    });

    dispatch({
      type: BOARDS,
      boardsPayload: {
        data: dummyBoards,
        function: "update",
      },
    });
  };

  return {
    getBoards,
    addBoard,
    deleteBoard,
    addTask,
    addTaskLocally,
    deleteBoardLocally,
    changeStatus,
  };
};

export default DataManager;
