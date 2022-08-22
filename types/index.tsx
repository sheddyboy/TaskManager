import React from "react";

export interface StateReducerProps {
  toggleSidebar: boolean;
  theme: string;
  themeButton: boolean;
}
export interface ActionReducerProps {
  type: string;
}

export interface ActionReducerTypeProps {
  SIDEBAR_TOGGLE: string;
  THEME_TOGGLE: string;
  THEME_TOGGLE_BUTTON: string;
}

export interface StateManagerCtxProps {
  state: StateReducerProps;
  dispatch: React.Dispatch<ActionReducerProps>;
}

export interface StateManagerProviderProps {
  children: React.ReactNode;
}
export interface BodyProps {
  children: React.ReactNode;
}
export interface TaskManagerProps {
  state: StateReducerProps;
}
