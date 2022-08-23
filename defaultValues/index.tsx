import { Options } from "../components/UI/Dropdown";
import {
  ActionReducerTypeProps,
  BoardProps,
  BoardsProps,
  StateManagerCtxProps,
  StateReducerProps,
} from "../types";

export const defaultBoard: BoardProps = {
  name: "",
  status: [""],
  tasks: [{ title: "", status: "", t_id: "", description: "" }],
  subtasks: [{ s_title: "", t_id: "", s_id: "", isCompleted: false }],
};

export const defaultBoards: BoardsProps = {
  id: "",
  boards: [defaultBoard],
};

export const defaultReducerStates: StateReducerProps = {
  toggleSidebar: true,
  toggleModal: false,
  theme: "light",
  themeButton: false,
  isLoading: false,
  boards: defaultBoards,
  columnInput: [{ column: "" }],
  boardNameInput: "",
};

export const defaultStateManagerCtxProps: StateManagerCtxProps = {
  state: defaultReducerStates,
  dispatch: () => {},
};

export const actionValues: ActionReducerTypeProps = {
  SIDEBAR_TOGGLE: "SIDEBAR_TOGGLE",
  MODAL_TOGGLE: "MODAL_TOGGLE",
  THEME_TOGGLE: "THEME_TOGGLE",
  THEME_TOGGLE_BUTTON: "THEME_TOGGLE_BUTTON",
  BOARDS: "BOARDS",
  IS_LOADING: "IS_LOADING",
  COLUMN_INPUT: "COLUMN_INPUT",
  BOARD_NAME_INPUT: "BOARD_NAME_INPUT",
};

export const testValues: Options[] = [
  { title: "What", id: "1" },
  { title: "Alright", id: "2" },
  { title: "Hey", id: "3" },
  { title: "Yoo", id: "4" },
  { title: "Okay", id: "5" },
];
