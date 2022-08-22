import { useReducer } from "react";
import { ActionReducerProps, StateReducerProps } from "../types";
import { defaultReducerStates, actionValues } from "../defaultValues";

const { SIDEBAR_TOGGLE, THEME_TOGGLE, THEME_TOGGLE_BUTTON } = actionValues;
const reducer = (state: StateReducerProps, action: ActionReducerProps) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return { ...state, toggleSidebar: !state.toggleSidebar };
    case THEME_TOGGLE:
      const theme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: theme };
    case THEME_TOGGLE_BUTTON:
      return { ...state, themeButton: !state.themeButton };
    default:
      return state;
  }
};

const StateManager = () => {
  const [state, dispatch] = useReducer(reducer, defaultReducerStates);
  return { state, dispatch };
};

export default StateManager;
