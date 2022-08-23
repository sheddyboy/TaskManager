import React from "react";

export interface StateReducerProps {
  toggleSidebar: boolean;
  toggleModal: boolean;
  theme: string;
  themeButton: boolean;
  isLoading: boolean;
  boards: BoardsProps;
  boardNameInput: string;
  columnInput: { column: string }[];
}
export interface ActionReducerProps {
  type: string;
  boardsPayload?: BoardsProps;
  isLoadingPayload?: boolean;
  boaedNameInputPayload?: string;
  columnInputPayload?: {
    function: "delete" | "update";
    index: number;
    value?: string;
  };
}

export interface ActionReducerTypeProps {
  SIDEBAR_TOGGLE: string;
  MODAL_TOGGLE: string;
  THEME_TOGGLE: string;
  THEME_TOGGLE_BUTTON: string;
  BOARDS: string;
  IS_LOADING: string;
  COLUMN_INPUT: string;
  BOARD_NAME_INPUT: string;
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
  children: React.ReactNode;
}

export interface TaskManagerProps {
  state: StateReducerProps;
}
export interface BoardProps {
  name: string;
  status: string[];
  tasks: TaskProps[];
  subtasks: SubTaskProps[];
}

export interface BoardsProps {
  id: string;
  boards: BoardProps[];
}

export interface TaskProps {
  title: string;
  status: string;
  t_id: string;
  description: string;
}
export interface SubTaskProps {
  s_title: string;
  t_id: string;
  s_id: string;
  isCompleted: boolean;
}
export interface AddBoardProps {
  body: { name: string; status: string[] };
}
