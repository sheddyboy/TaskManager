import { useReducer } from "react";
import { ActionReducerProps, StateReducerProps } from "../types";
import {
  defaultReducerStates,
  actionValues,
  defaultBoard,
} from "../defaultValues";

const {
  SIDEBAR_TOGGLE,
  THEME_TOGGLE,
  THEME_TOGGLE_BUTTON,
  BOARDS,
  IS_LOADING,
  MODAL_TOGGLE,
  COLUMN_INPUT,
  BOARD_NAME_INPUT,
  CURRENT_BOARD,
  OPTION_EDIT_OR_DELETE_BOARD_TOGGLE,
  MODAL_TRACKER,
  SUBTASK_INPUT,
  DROPDOWN_INPUT,
  DESCRIPTION_INPUT,
  TASK_NAME_INPUT,
  CURRENT_TASK,
  CHECKBOX_INPUT,
  OPTION_EDIT_OR_DELETE_TASK_TOGGLE,
} = actionValues;
const reducer = (state: StateReducerProps, action: ActionReducerProps) => {
  switch (action.type) {
    case BOARDS: {
      if (action.boardsPayload?.function === "add") {
        console.log("add called");

        const dummyArray = [...state.boards, ...action.boardsPayload.data];
        return { ...state, boards: dummyArray };
      }
      if (action.boardsPayload?.function === "mount") {
        console.log("mount called");

        const dummyArray = [...action.boardsPayload.data];
        return { ...state, boards: dummyArray };
      }
      if (action.boardsPayload?.function === "update") {
        console.log("update called");
        const dummyArray = [...action.boardsPayload.data];
        return { ...state, boards: dummyArray };
      }
    }
    case CURRENT_BOARD:
      if (action.currentBoardPayload !== undefined)
        return { ...state, currentBoard: action.currentBoardPayload };
    case CURRENT_TASK:
      if (action.currentTaskPayload !== undefined)
        return { ...state, currentTask: action.currentTaskPayload };
    case BOARD_NAME_INPUT:
      if (action.boardNameInputPayload !== undefined) {
        return {
          ...state,
          boardNameInput: action.boardNameInputPayload,
        };
      }
    case TASK_NAME_INPUT:
      if (action.taskNameInputPayload !== undefined)
        return { ...state, taskNameInput: action.taskNameInputPayload };
    case DESCRIPTION_INPUT:
      if (action.descriptionInputPayload !== undefined)
        return { ...state, descriptionInput: action.descriptionInputPayload };
    case DROPDOWN_INPUT:
      if (action.dropdownInputPayload)
        return { ...state, dropdownInput: action.dropdownInputPayload };
    case CHECKBOX_INPUT: {
      let subtasks = [...state.currentTask.subtasks];
      let tasks = state.currentTask.tasks;
      if (action.checkBoxInputPayload) {
        subtasks[action.checkBoxInputPayload.index].isCompleted =
          action.checkBoxInputPayload.value;
      }
      return {
        ...state,
        checkBoxInput: subtasks,
        currentTask: {
          tasks,
          subtasks,
          status: state.currentTask.status,
          index: state.currentTask.index,
        },
      };
    }
    case COLUMN_INPUT: {
      let dummyArray = [...state.columnInput, { name: "", c_id: "" }];
      if (
        action.columnInputPayload?.function === "delete" &&
        action.columnInputPayload.index !== undefined
      ) {
        dummyArray = [...state.columnInput];
        dummyArray.splice(action.columnInputPayload.index, 1);
      } else if (
        action.columnInputPayload?.function === "update" &&
        action.columnInputPayload.index !== undefined
      ) {
        dummyArray = [...state.columnInput];
        if (action.columnInputPayload.name !== undefined) {
          dummyArray[action.columnInputPayload.index].name =
            action.columnInputPayload.name;
        }
      } else if (action.columnInputPayload?.function === "reset") {
        dummyArray = [{ name: "", c_id: "" }];
      } else if (
        action.columnInputPayload?.function === "override" &&
        action.columnInputPayload.value
      ) {
        dummyArray = action.columnInputPayload.value;
      }
      return {
        ...state,
        columnInput: dummyArray,
      };
    }
    case SUBTASK_INPUT: {
      let dummyArray = [
        ...state.subtaskInput,
        { s_title: "", t_id: "", s_id: "", isCompleted: false, c_id: "" },
      ];
      if (
        action.subtaskInputPayload?.function === "delete" &&
        action.subtaskInputPayload.index !== undefined
      ) {
        dummyArray = [...state.subtaskInput];
        dummyArray.splice(action.subtaskInputPayload.index, 1);
      } else if (
        action.subtaskInputPayload?.function === "update" &&
        action.subtaskInputPayload.index !== undefined
      ) {
        dummyArray = [...state.subtaskInput];
        if (action.subtaskInputPayload.name !== undefined) {
          dummyArray[action.subtaskInputPayload.index].s_title =
            action.subtaskInputPayload.name;
        }
      } else if (action.subtaskInputPayload?.function === "reset") {
        dummyArray = [
          { s_title: "", t_id: "", s_id: "", isCompleted: false, c_id: "" },
        ];
      } else if (
        action.subtaskInputPayload?.function === "override" &&
        action.subtaskInputPayload.value
      ) {
        dummyArray = action.subtaskInputPayload.value;
      }
      return { ...state, subtaskInput: dummyArray };
    }
    case SIDEBAR_TOGGLE:
      return { ...state, toggleSidebar: !state.toggleSidebar };
    case MODAL_TOGGLE:
      return { ...state, toggleModal: !state.toggleModal };
    case THEME_TOGGLE:
      const theme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: theme };
    case THEME_TOGGLE_BUTTON:
      return { ...state, themeButton: !state.themeButton };

    case OPTION_EDIT_OR_DELETE_BOARD_TOGGLE:
      return {
        ...state,
        toggleOptionEditOrDeleteBoard: !state.toggleOptionEditOrDeleteBoard,
      };
    case OPTION_EDIT_OR_DELETE_TASK_TOGGLE:
      return {
        ...state,
        toggleOptionEditOrDeleteTask: !state.toggleOptionEditOrDeleteTask,
      };
    case MODAL_TRACKER: {
      const dummyArray = [...state.modalTracker];
      dummyArray.map((i) => {
        i.value = false;
        if (action.modalTrackerPayload?.name === i.name) {
          i.value = true;
        }
      });
      return { ...state, modalTracker: dummyArray };
    }
    case IS_LOADING:
      if (action.isLoadingPayload)
        return { ...state, isLoading: action.isLoadingPayload };
    default:
      return state;
  }
};

const StateManager = () => {
  const [state, dispatch] = useReducer(reducer, defaultReducerStates);
  return { state, dispatch };
};

export default StateManager;
