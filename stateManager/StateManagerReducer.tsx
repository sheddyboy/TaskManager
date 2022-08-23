import { useReducer } from "react";
import { ActionReducerProps, StateReducerProps } from "../types";
import { defaultReducerStates, actionValues } from "../defaultValues";

const {
  SIDEBAR_TOGGLE,
  THEME_TOGGLE,
  THEME_TOGGLE_BUTTON,
  BOARDS,
  IS_LOADING,
  MODAL_TOGGLE,
  COLUMN_INPUT,
  BOARD_NAME_INPUT,
} = actionValues;
const reducer = (state: StateReducerProps, action: ActionReducerProps) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return { ...state, toggleSidebar: !state.toggleSidebar };
    case MODAL_TOGGLE:
      return { ...state, toggleModal: !state.toggleModal };
    case THEME_TOGGLE:
      const theme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: theme };
    case THEME_TOGGLE_BUTTON:
      return { ...state, themeButton: !state.themeButton };
    case BOARDS:
      if (action.boardsPayload)
        return { ...state, boards: action.boardsPayload };
    case IS_LOADING:
      if (action.isLoadingPayload)
        return { ...state, isLoading: action.isLoadingPayload };
    case COLUMN_INPUT: {
      let dummyArray = [{ column: "" }];
      if (action.columnInputPayload?.function === "delete") {
        dummyArray = [...state.columnInput];
        dummyArray.splice(action.columnInputPayload.index, 1);
      } else if (action.columnInputPayload?.function === "update") {
        dummyArray = [...state.columnInput];
        if (action.columnInputPayload.value !== undefined) {
          dummyArray[action.columnInputPayload.index].column =
            action.columnInputPayload.value;
        }
      } else {
        dummyArray = [...state.columnInput, { column: "" }];
      }
      return { ...state, columnInput: dummyArray };
    }
    case BOARD_NAME_INPUT:
      if (action.boaedNameInputPayload !== undefined)
        return { ...state, boardNameInput: action.boaedNameInputPayload };
    default:
      return state;
  }
};

const StateManager = () => {
  const [state, dispatch] = useReducer(reducer, defaultReducerStates);
  return { state, dispatch };
};

export default StateManager;
