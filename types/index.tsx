import React from "react";

export interface StateReducerProps {
  toggleSidebar: boolean;
  toggleModal: boolean;
  toggleOptionEditOrDeleteBoard: boolean;
  theme: string;
  themeButton: boolean;
  isLoading: boolean;
  boards: BoardsProps[];
  boardNameInput: string;
  taskNameInput: string;
  descriptionInput: string;
  dropdownInput: { name: string; c_id: string };
  currentBoard: { name: string; id: string };
  currentTask: { tasks: TaskProps; subtasks: SubTaskProps[] };
  columnInput: { column: string }[];
  checkBoxInput: {
    s_id: string;
    s_title: string;
    isCompleted: boolean;
  }[];
  subtaskInput: { subtask: string }[];
  modalTracker: {
    name:
      | "viewTask"
      | "addNewTask"
      | "editTask"
      | "addNewBoard"
      | "editBoard"
      | "deleteBoard"
      | "deleteTask";
    value: boolean;
  }[];
}
export interface ActionReducerProps {
  type: string;
  boardsPayload?: BoardsProps[];
  isLoadingPayload?: boolean;
  boardNameInputPayload?: string;
  checkBoxInputPayload?: { index: number; value: boolean };
  taskNameInputPayload?: string;
  descriptionInputPayload?: string;
  dropdownInputPayload?: { name: string; c_id: string };
  currentBoardPayload?: { name: string; id: string };
  currentTaskPayload?: { tasks: TaskProps; subtasks: SubTaskProps[] };
  modalTrackerPayload?: {
    name:
      | "viewTask"
      | "addNewTask"
      | "editTask"
      | "addNewBoard"
      | "editBoard"
      | "deleteBoard"
      | "deleteTask";
    value: boolean;
  };
  columnInputPayload?: {
    function: "delete" | "update" | "reset";
    index?: number;
    value?: string;
  };
  subtaskInputPayload?: {
    function: "delete" | "update" | "reset";
    index?: number;
    value?: string;
  };
}

export interface ActionReducerTypeProps {
  SIDEBAR_TOGGLE: string;
  MODAL_TOGGLE: string;
  THEME_TOGGLE: string;
  OPTION_EDIT_OR_DELETE_BOARD_TOGGLE: string;
  THEME_TOGGLE_BUTTON: string;
  BOARDS: string;
  IS_LOADING: string;
  COLUMN_INPUT: string;
  TASK_NAME_INPUT: string;
  DESCRIPTION_INPUT: string;
  CHECKBOX_INPUT: string;
  SUBTASK_INPUT: string;
  DROPDOWN_INPUT: string;
  BOARD_NAME_INPUT: string;
  CURRENT_BOARD: string;
  CURRENT_TASK: string;
  MODAL_TRACKER: string;
}

export interface StateManagerCtxProps {
  state: StateReducerProps;
  dispatch: React.Dispatch<ActionReducerProps>;
}

export interface StateManagerProviderProps {
  children: React.ReactNode;
}
export interface ModalProps {
  onClick: () => void;
}

export interface TaskManagerProps {
  state: StateReducerProps;
}
export interface BoardProps {
  name: string;
  status: { name: string; c_id: string }[];
  tasks?: TaskProps[];
  subtasks?: SubTaskProps[];
}

export interface BoardsProps {
  id: string;
  data: BoardProps;
}

export interface TaskProps {
  title: string;
  status: string;
  t_id: string;
  c_id: string;
  description: string;
}
export interface SubTaskProps {
  s_title: string;
  t_id: string;
  c_id: string;
  s_id: string;
  isCompleted: boolean;
}
export interface AddBoardProps {
  name: string;
  status: { name: string; c_id: string }[];
}

export interface PostBoardBody {
  tasks: {
    t_id: string;
    c_id: string;
    description: string;
    status: string;
    title: string;
  };
  subtasks: {
    isCompleted: boolean;
    s_id: string;
    c_id: string;
    s_title: string;
    t_id: string;
  }[];
}
