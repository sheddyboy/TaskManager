import React from "react";

export interface StateReducerProps {
  toggleSidebar: boolean;
  toggleModal: boolean;
  toggleOptionEditOrDeleteBoard: boolean;
  toggleOptionEditOrDeleteTask: boolean;
  theme: string;
  themeButton: boolean;
  isLoading: boolean;
  boards: BoardsProps[];
  boardNameInput: string;
  taskNameInput: string;
  descriptionInput: string;
  dropdownInput: StatusProps;
  currentBoard: { name: string; id: string; index: number; data: BoardProps };
  currentTask: {
    tasks: TaskProps;
    subtasks: SubTaskProps[];
    index: number;
    status: StatusProps[];
  };
  columnInput: StatusProps[];
  checkBoxInput: SubTaskProps[];
  subtaskInput: SubTaskProps[];
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
export interface CurrentTaskProps {
  tasks: TaskProps;
  subtasks: SubTaskProps[];
  index: number;
  status: StatusProps[];
}
export interface CurrentBoardProps {
  name: string;
  id: string;
  index: number;
  data: BoardProps;
}
export interface ActionReducerProps {
  type: string;
  boardsPayload?: { data: any; function: "mount" | "add" | "update" };
  isLoadingPayload?: boolean;
  boardNameInputPayload?: string;
  checkBoxInputPayload?: { index: number; value: boolean };
  taskNameInputPayload?: string;
  descriptionInputPayload?: string;
  dropdownInputPayload?: StatusProps;
  currentBoardPayload?: CurrentBoardProps;
  currentTaskPayload?: CurrentTaskProps;

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
    function: "delete" | "update" | "reset" | "override";
    index?: number;
    name?: string;
    c_id?: string;
    value?: StatusProps[];
  };
  subtaskInputPayload?: {
    function: "delete" | "update" | "reset" | "override";
    index?: number;
    name?: string;
    value?: {
      s_title: string;
      t_id: string;
      s_id: string;
      isCompleted: boolean;
      c_id: string;
    }[];
  };
}

export interface ActionReducerTypeProps {
  SIDEBAR_TOGGLE: string;
  MODAL_TOGGLE: string;
  THEME_TOGGLE: string;
  OPTION_EDIT_OR_DELETE_BOARD_TOGGLE: string;
  OPTION_EDIT_OR_DELETE_TASK_TOGGLE: string;
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

export interface BoardsStateReducer {
  boards: BoardsProps[];
  currentBoard: CurrentBoardProps;
  currentTask: CurrentTaskProps;
  checkBoxInput: SubTaskProps[];
}
export interface InputsStateReducer {
  boardNameInput: string;
  taskNameInput: string;
  descriptionInput: string;
  dropdownInput: StatusProps;
  columnInput: StatusProps[];
  subtaskInput: SubTaskProps[];
}
export interface ToggleStateReducer {
  sidebarToggle: boolean;
  modalToggle: boolean;
  theme: "light" | "dark";
  themeToggle: boolean;
  optionEditOrDeleteBoard: boolean;
  optionEditOrDeleteTask: boolean;
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

export interface StateManagerCtxProps {
  state: StateReducerProps;
  dispatch: React.Dispatch<ActionReducerProps>;
}

export interface StateManagerProviderProps {
  children: React.ReactNode;
}
// export interface ModalProps {
//   onClick: () => void;
// }

export interface TaskManagerProps {
  sidebarToggle: boolean;
}
export interface BoardProps {
  name: string;
  status: StatusProps[];
  tasks: TaskProps[];
  subtasks: SubTaskProps[];
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
export interface StatusProps {
  name: string;
  c_id: string;
}
export interface AddBoardProps {
  name: string;
  status: StatusProps[];
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

export interface AddTaskProps {
  id: string;
  body: PostBoardBody;
}
