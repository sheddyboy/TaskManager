import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { initialStateBoards } from "../../defaultValues";
import { BoardsProps, CurrentTaskProps } from "../../types";

export const boardsSlice = createSlice({
  name: "boards",
  initialState: initialStateBoards,
  reducers: {
    updateBoard: (state, action: PayloadAction<BoardsProps[]>) => {
      state.boards = action.payload;
    },
    addBoard: (state, action: PayloadAction<BoardsProps>) => {
      state.boards.push(action.payload);
    },
    setCurrentBoardIndex: (state, action: PayloadAction<number>) => {
      state.currentBoardIndex = action.payload;
    },
    setCurrentTask: (state, action: PayloadAction<CurrentTaskProps>) => {
      state.currentTask = action.payload;
    },
    showSubtasks: (state) => {
      state.checkBoxInput = state.currentTask.subtasks;
    },
    updateSubtask: (
      state,
      action: PayloadAction<{ index: number; value: boolean }>
    ) => {
      state.currentTask.subtasks[action.payload.index].isCompleted =
        action.payload.value;
    },
  },
});

export const {
  addBoard,
  setCurrentBoardIndex,
  setCurrentTask,
  updateBoard,
  showSubtasks,
  updateSubtask,
} = boardsSlice.actions;
export const selectBoard = (state: RootState) => state.boards;
export default boardsSlice.reducer;