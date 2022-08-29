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
  const {
    boards,
    currentBoard,
    currentTask,
    boardNameInput,
    columnInput,
    descriptionInput,
    dropdownInput,
    taskNameInput,
    subtaskInput,
  } = state;
  const {
    BOARDS,
    IS_LOADING,
    MODAL_TOGGLE,
    CURRENT_BOARD,
    BOARD_NAME_INPUT,
    COLUMN_INPUT,
    TASK_NAME_INPUT,
    DESCRIPTION_INPUT,
    SUBTASK_INPUT,
  } = actionValues;

  const getBoards = () => {
    axios("/api/boards").then((data) => {
      console.log("then called");

      dispatch({ type: IS_LOADING, isLoadingPayload: true });
      dispatch({
        type: BOARDS,
        boardsPayload: { data: data.data, function: "mount" },
      });
      dispatch({
        type: CURRENT_BOARD,
        currentBoardPayload: {
          name: data.data[0].data.name,
          id: data.data[0].id,
          index: 0,
          data: data.data[0].data,
        },
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
    let prevTasks = currentBoard.data.tasks ? currentBoard.data.tasks : [];
    let prevSubTasks = currentBoard.data.subtasks
      ? currentBoard.data.subtasks
      : [];
    const updatedCurrentBoard: BoardsProps = {
      id: currentBoard.id,
      data: {
        name: currentBoard.data?.name,
        status: currentBoard.data?.status,
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
    dispatch({
      type: CURRENT_BOARD,
      currentBoardPayload: {
        name: currentBoard.name,
        id: currentBoard.id,
        index: currentBoard.index,
        data: updatedCurrentBoard.data,
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

  const deleteTask = () => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoard.id) {
        i.data.tasks.map((t, tIndex) => {
          if (t.t_id === currentTask.tasks.t_id) {
            array[index].data.tasks.splice(tIndex, 1);
          }
        });
        for (let fl = array[index].data.subtasks.length - 1; fl >= 0; fl--) {
          if (array[index].data.subtasks[fl].t_id === currentTask.tasks.t_id) {
            array[index].data.subtasks.splice(fl, 1);
          }
        }
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
  const editBoard = () => {
    dispatch({
      type: CURRENT_BOARD,
      currentBoardPayload: {
        name: boardNameInput,
        data: currentBoard.data,
        id: currentBoard.id,
        index: currentBoard.index,
      },
    });
    dispatch({
      type: MODAL_TOGGLE,
    });
    const dummyBoards = [...boards];
    dummyBoards.map((i) => {
      if (i.id === currentBoard.id) {
        i.data.name = boardNameInput;
        i.data.status = columnInput;
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

  const editTask = () => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoard.id) {
        i.data.tasks.map((t, tIndex) => {
          if (t.t_id === currentTask.tasks.t_id) {
            array[index].data.tasks[tIndex].title = taskNameInput;
            array[index].data.tasks[tIndex].description = descriptionInput;
            array[index].data.tasks[tIndex].status = dropdownInput.name;
            array[index].data.tasks[tIndex].c_id = dropdownInput.c_id;
          }
        });
        const dummySubtasks = i.data.subtasks.filter(
          (st) => st.t_id !== currentTask.tasks.t_id
        );
        array[index].data.subtasks = [...dummySubtasks, ...subtaskInput];
      }
    });

    dispatch({
      type: BOARDS,
      boardsPayload: {
        data: dummyBoards,
        function: "update",
      },
    });
    dispatch({ type: MODAL_TOGGLE });
  };

  const boardInputReset = () => {
    dispatch({
      type: BOARD_NAME_INPUT,
      boardNameInputPayload: "",
    });
    dispatch({
      type: COLUMN_INPUT,
      columnInputPayload: {
        function: "reset",
      },
    });
  };
  const taskInputReset = () => {
    dispatch({
      type: TASK_NAME_INPUT,
      taskNameInputPayload: "",
    });
    dispatch({
      type: DESCRIPTION_INPUT,
      descriptionInputPayload: "",
    });
    dispatch({
      type: SUBTASK_INPUT,
      subtaskInputPayload: {
        function: "reset",
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
    deleteTask,
    editBoard,
    editTask,
    boardInputReset,
    taskInputReset,
  };
};

export default DataManager;
