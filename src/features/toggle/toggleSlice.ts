import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { initialStateToggle } from "../../defaultValues";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialStateToggle,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    toggleModal: (state) => {
      state.modalToggle = !state.modalToggle;
    },
    toggleOptionEditOrDeleteTask: (state) => {
      state.optionEditOrDeleteTask = !state.optionEditOrDeleteTask;
    },
    toggleOptionEditOrDeleteBoard: (state) => {
      state.optionEditOrDeleteBoard = !state.optionEditOrDeleteBoard;
    },
    toggleThemeButton: (state) => {
      state.themeToggle = !state.themeToggle;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setModal: (
      state,
      action: PayloadAction<
        | "viewTask"
        | "addNewTask"
        | "editTask"
        | "addNewBoard"
        | "editBoard"
        | "deleteBoard"
        | "deleteTask"
      >
    ) => {
      state.modalTracker.forEach((i, index, array) => {
        i.value = false;
        if (action.payload === i.name) {
          array[index].value = true;
        }
      });
    },
  },
});

export const {
  setModal,
  toggleModal,
  toggleOptionEditOrDeleteBoard,
  toggleOptionEditOrDeleteTask,
  toggleSidebar,
  toggleTheme,
  toggleThemeButton,
} = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle;
export default toggleSlice.reducer;
