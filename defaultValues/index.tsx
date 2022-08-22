import { Options } from "../components/UI/Dropdown";
import {
  ActionReducerTypeProps,
  StateManagerCtxProps,
  StateReducerProps,
} from "../types";

export const defaultReducerStates: StateReducerProps = {
  toggleSidebar: true,
  theme: "light",
  themeButton: false,
};

export const defaultStateManagerCtxProps: StateManagerCtxProps = {
  state: defaultReducerStates,
  dispatch: () => {},
};

export const actionValues: ActionReducerTypeProps = {
  SIDEBAR_TOGGLE: "SIDEBAR_TOGGLE",
  THEME_TOGGLE: "THEME_TOGGLE",
  THEME_TOGGLE_BUTTON: "THEME_TOGGLE_BUTTON",
};

export const testValues: Options[] = [
  { title: "What", id: "1" },
  { title: "Alright", id: "2" },
  { title: "Hey", id: "3" },
  { title: "Yoo", id: "4" },
  { title: "Okay", id: "5" },
];
