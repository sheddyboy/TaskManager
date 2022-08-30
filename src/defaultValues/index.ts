import { Options } from "../components/UI/Dropdown";
import {
  ActionReducerTypeProps,
  BoardProps,
  BoardsProps,
  StateManagerCtxProps,
  StateReducerProps,
  SubTaskProps,
} from "../types";

export const defaultBoard: BoardProps = {
  name: "",
  status: [{ name: "", c_id: "" }],
  tasks: [{ title: "", status: "", t_id: "", description: "", c_id: "" }],
  subtasks: [{ s_title: "", t_id: "", s_id: "", isCompleted: false, c_id: "" }],
};

export const defaultBoards: BoardsProps = {
  id: "",
  data: defaultBoard,
};

export const defaultReducerStates: StateReducerProps = {
  toggleSidebar: true,
  toggleModal: false,
  toggleOptionEditOrDeleteBoard: false,
  toggleOptionEditOrDeleteTask: false,
  theme: "light",
  themeButton: false,
  isLoading: false,
  boards: [defaultBoards],
  columnInput: [{ name: "", c_id: "" }],
  checkBoxInput: [
    { s_id: "", isCompleted: false, s_title: "", c_id: "", t_id: "" },
  ],
  subtaskInput: [...defaultBoard.subtasks],
  dropdownInput: { name: "", c_id: "" },
  boardNameInput: "",
  taskNameInput: "",
  descriptionInput: "",
  currentBoard: { name: "", id: "", index: -1, data: defaultBoard },
  currentTask: {
    status: [{ name: "", c_id: "" }],
    tasks: { title: "", status: "", t_id: "", c_id: "", description: "" },

    subtasks: [
      { s_title: "", t_id: "", s_id: "", isCompleted: false, c_id: "" },
    ],
    index: -1,
  },
  modalTracker: [
    { name: "viewTask", value: false },
    { name: "addNewTask", value: false },
    { name: "editTask", value: false },
    { name: "addNewBoard", value: false },
    { name: "editBoard", value: false },
    { name: "deleteBoard", value: false },
    { name: "deleteTask", value: false },
  ],
};

export const defaultStateManagerCtxProps: StateManagerCtxProps = {
  state: defaultReducerStates,
  dispatch: () => {},
};
export const defaultSubTasksProps: SubTaskProps = {
  c_id: "",
  isCompleted: false,
  s_id: "",
  s_title: "",
  t_id: "",
};

export const actionValues: ActionReducerTypeProps = {
  SIDEBAR_TOGGLE: "SIDEBAR_TOGGLE",
  MODAL_TOGGLE: "MODAL_TOGGLE",
  THEME_TOGGLE: "THEME_TOGGLE",
  OPTION_EDIT_OR_DELETE_BOARD_TOGGLE: "OPTION_EDIT_OR_DELETE_BOARD_TOGGLE",
  OPTION_EDIT_OR_DELETE_TASK_TOGGLE: "OPTION_EDIT_OR_DELETE_TASK_TOGGLE",
  THEME_TOGGLE_BUTTON: "THEME_TOGGLE_BUTTON",
  BOARDS: "BOARDS",
  IS_LOADING: "IS_LOADING",
  COLUMN_INPUT: "COLUMN_INPUT",
  SUBTASK_INPUT: "SUBTASK_INPUT",
  DROPDOWN_INPUT: "DROPDOWN_INPUT",
  CHECKBOX_INPUT: "CHECKBOX_INPUT",
  BOARD_NAME_INPUT: "BOARD_NAME_INPUT",
  TASK_NAME_INPUT: "TASK_NAME_INPUT",
  DESCRIPTION_INPUT: "DESCRIPTION_INPUT",
  CURRENT_BOARD: "CURRENT_BOARD",
  CURRENT_TASK: "CURRENT_TASK",
  MODAL_TRACKER: "MODAL_TRACKER",
};

export const testValues: Options[] = [
  { name: "What", c_id: "1" },
  { name: "Alright", c_id: "2" },
  { name: "Hey", c_id: "3" },
  { name: "Yoo", c_id: "4" },
  { name: "Okay", c_id: "5" },
];
