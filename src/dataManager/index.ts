import { useAppDispatch, useAppSelector } from "../app/hooks";
import { v4 as uuidv4 } from "uuid";

import { Options } from "../components/UI/Dropdown";
import {
  useGetBoardsQuery,
  useAddBoardMutation,
  useAddTaskMutation,
  useDeleteBoardMutation,
} from "../features/boards/boardsAPI";
import useStateManager from "../hooks/useStateManager";
import {
  AddBoardProps,
  BoardsProps,
  PostBoardBody,
  SubTaskProps,
  TaskProps,
} from "../types";
import {
  setCurrentBoardIndex,
  updateBoard,
} from "../features/boards/boardsSlice";

import { toggleModal } from "../features/toggle/toggleSlice";
import {
  resetColumnInput,
  resetSubtaskInput,
  setDropdownInput,
  setBoardNameInput,
  setDescriptionInput,
  setTaskNameInput,
} from "../features/inputs/inputsSlice";
import useGetCurrentBoard from "../hooks/useGetCurrentBoard";

const DataManager = () => {
  const { currentBoardId } = useGetCurrentBoard();
  // const { refetch } = useGetBoardsQuery();

  const dispatch = useAppDispatch();
  const { boards, currentTask } = useAppSelector((state) => state.boards);
  const {
    boardNameInput,
    columnInput,
    descriptionInput,
    dropdownInput,
    subtaskInput,
    taskNameInput,
  } = useAppSelector((state) => state.inputs);
  // const { state, dispatch, actionValues } = useStateManager();
  // const {
  //   boards,
  //   currentBoard,
  //   currentTask,
  //   boardNameInput,
  //   columnInput,
  //   descriptionInput,
  //   dropdownInput,
  //   taskNameInput,
  //   subtaskInput,
  // } = state;
  // const {
  //   BOARDS,
  //   IS_LOADING,
  //   MODAL_TOGGLE,
  //   CURRENT_BOARD,
  //   BOARD_NAME_INPUT,
  //   COLUMN_INPUT,
  //   TASK_NAME_INPUT,
  //   DESCRIPTION_INPUT,
  //   SUBTASK_INPUT,
  // } = actionValues;

  const { data, isSuccess } = useGetBoardsQuery();
  // console.log(data, "out-out");
  const getBoards = () => {
    // console.log(data, "out");
    // if (isSuccess) {
    //   console.log(data, "in");
    // dispatch(updateBoard(data));
    // dispatch(
    //   setCurrentBoard({
    //     name: data[0].data.name,
    //     id: data[0].id,
    //     index: 0,
    //     data: data[0].data,
    //   })
    // );
    // }
    // axios("/api/boards").then((data) => {
    //   dispatch({ type: IS_LOADING, isLoadingPayload: true });
    //   dispatch({
    //     type: BOARDS,
    //     boardsPayload: { data: data.data, function: "mount" },
    //   });
    //   dispatch({
    //     type: CURRENT_BOARD,
    //     currentBoardPayload: {
    //       name: data.data[0].data.name,
    //       id: data.data[0].id,
    //       index: 0,
    //       data: data.data[0].data,
    //     },
    //   });
    // });
  };

  const [addBoardMutation] = useAddBoardMutation();
  const addBoard = ({ ...body }: AddBoardProps) => {
    let data = addBoardMutation(body).then((data) => data);
    // let data: Promise<string> = axios
    //   .post("/api/boards", body)
    //   .then((data) => data.data);

    return { data };
  };

  const [deleteBoardMutation] = useDeleteBoardMutation();
  const deleteBoard = (id: string) => {
    deleteBoardMutation(id);
    // axios.delete(`/api/boards/${id}`);
  };
  const [addTaskMutation] = useAddTaskMutation();
  const addTask = () => {
    console.log("called");
    const t_id = uuidv4();
    const tasks = {
      t_id: t_id,
      description: descriptionInput,
      status: dropdownInput.name,
      c_id: dropdownInput.c_id,
      title: taskNameInput,
    };
    const subtasks = subtaskInput.map((i) => ({
      isCompleted: false,
      s_id: uuidv4(),
      c_id: dropdownInput.c_id,
      s_title: i.s_title,
      t_id: t_id,
    }));
    addTaskMutation({
      id: currentBoardId,
      subtasks,
      tasks,
    });
    // if (isSuccess) {
    //   dispatch(
    //     setCurrentBoard({
    //       name: currentBoard.name,
    //       id: currentBoard.id,
    //       index: currentBoard.index,
    //       data: data[currentBoard.index].data,
    //     })
    //   );
    // }
    // refetch();
    taskInputReset();

    // axios.put(`/api/boards/${id}`, body);
  };

  // const addTaskLocally = (tasks: TaskProps, subtasks: SubTaskProps[]) => {
  //   let prevTasks = currentBoard.data.tasks ? currentBoard.data.tasks : [];
  //   let prevSubTasks = currentBoard.data.subtasks
  //     ? currentBoard.data.subtasks
  //     : [];
  //   const updatedCurrentBoard: BoardsProps = {
  //     id: currentBoard.id,
  //     data: {
  //       name: currentBoard.data?.name,
  //       status: currentBoard.data?.status,
  //       tasks: [...prevTasks, tasks],
  //       subtasks: [...prevSubTasks, ...subtasks],
  //     },
  //   };
  //   const dummyBoards = [...boards];
  //   dummyBoards[currentBoard.index] = updatedCurrentBoard;
  //   dispatch(updateBoard(dummyBoards));
  //   // dispatch({
  //   //   type: BOARDS,
  //   //   boardsPayload: {
  //   //     data: dummyBoards,
  //   //     function: "update",
  //   //   },
  //   // });
  //   dispatch(
  //     setCurrentBoard({
  //       name: currentBoard.name,
  //       id: currentBoard.id,
  //       index: currentBoard.index,
  //       data: updatedCurrentBoard.data,
  //     })
  //   );

  //   //   dispatch({
  //   //     type: CURRENT_BOARD,
  //   //     currentBoardPayload: {
  //   //       name: currentBoard.name,
  //   //       id: currentBoard.id,
  //   //       index: currentBoard.index,
  //   //       data: updatedCurrentBoard.data,
  //   //     },
  //   //   });
  //   // };
  // };

  // const deleteBoardLocally = () => {
  //   const dummyBoards = [...boards];
  //   dummyBoards.splice(currentBoard.index, 1);

  //   dispatch(updateBoard(dummyBoards));

  //   // dispatch({
  //   //   type: BOARDS,
  //   //   boardsPayload: {
  //   //     data: dummyBoards,
  //   //     function: "update",
  //   //   },
  //   // });
  // };

  const changeStatus = (option: Options) => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoardId) {
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

    dispatch(updateBoard(dummyBoards));

    // dispatch({
    //   type: BOARDS,
    //   boardsPayload: {
    //     data: dummyBoards,
    //     function: "update",
    //   },
    // });
  };

  const deleteTask = () => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoardId) {
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
    dispatch(updateBoard(dummyBoards));

    // dispatch({
    //   type: BOARDS,
    //   boardsPayload: {
    //     data: dummyBoards,
    //     function: "update",
    //   },
    // });
  };
  const editBoard = () => {
    // dispatch(
    //   setCurrentBoard({
    //     name: boardNameInput,
    //     data: currentBoard.data,
    //     id: currentBoard.id,
    //     index: currentBoard.index,
    //   })
    // );
    // dispatch(
    //   setCurrentBoardIndex()
    // );

    // dispatch({
    //   type: CURRENT_BOARD,
    //   currentBoardPayload: {
    //     name: boardNameInput,
    //     data: currentBoard.data,
    //     id: currentBoard.id,
    //     index: currentBoard.index,
    //   },
    // });
    dispatch(toggleModal());
    // dispatch({
    //   type: MODAL_TOGGLE,
    // });
    const dummyBoards = [...boards];
    dummyBoards.map((i) => {
      if (i.id === currentBoardId) {
        i.data.name = boardNameInput;
        i.data.status = columnInput;
      }
    });

    dispatch(updateBoard(dummyBoards));

    // dispatch({
    //   type: BOARDS,
    //   boardsPayload: {
    //     data: dummyBoards,
    //     function: "update",
    //   },
    // });
  };

  const editTask = () => {
    const dummyBoards = [...boards];
    dummyBoards.map((i, index, array) => {
      if (i.id === currentBoardId) {
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
    dispatch(updateBoard(dummyBoards));

    // dispatch({
    //   type: BOARDS,
    //   boardsPayload: {
    //     data: dummyBoards,
    //     function: "update",
    //   },
    // });
    dispatch(toggleModal);
    // dispatch({ type: MODAL_TOGGLE });
  };

  const boardInputReset = () => {
    dispatch(setBoardNameInput(""));

    // dispatch({
    //   type: BOARD_NAME_INPUT,
    //   boardNameInputPayload: "",
    // });
    dispatch(resetColumnInput());

    // dispatch({
    //   type: COLUMN_INPUT,
    //   columnInputPayload: {
    //     function: "reset",
    //   },
    // });
  };
  const taskInputReset = () => {
    dispatch(setTaskNameInput(""));

    // dispatch({
    //   type: TASK_NAME_INPUT,
    //   taskNameInputPayload: "",
    // });
    dispatch(setDescriptionInput(""));

    // dispatch({
    //   type: DESCRIPTION_INPUT,
    //   descriptionInputPayload: "",
    // });
    dispatch(resetSubtaskInput());

    // dispatch({
    //   type: SUBTASK_INPUT,
    //   subtaskInputPayload: {
    //     function: "reset",
    //   },
    // });

    dispatch(setDropdownInput({ name: "", c_id: "" }));
    // dispatch({
    //   type: DROPDOWN_INPUT,
    //   dropdownInputPayload: { name: "", c_id: "" },
    // });
  };

  return {
    getBoards,
    addBoard,
    deleteBoard,
    addTask,
    changeStatus,
    deleteTask,
    editBoard,
    editTask,
    boardInputReset,
    taskInputReset,
  };
};

export default DataManager;
