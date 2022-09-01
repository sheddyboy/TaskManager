import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { initialStateInputs } from "../../defaultValues";
import { StatusProps, SubTaskProps } from "../../types";

export const inputsSlice = createSlice({
  name: "inputs",
  initialState: initialStateInputs,
  reducers: {
    setBoardNameInput: (state, action: PayloadAction<string>) => {
      state.boardNameInput = action.payload;
    },
    setTaskNameInput: (state, action: PayloadAction<string>) => {
      state.taskNameInput = action.payload;
    },
    setDescriptionInput: (state, action: PayloadAction<string>) => {
      state.descriptionInput = action.payload;
    },
    setDropdownInput: (state, action: PayloadAction<StatusProps>) => {
      state.dropdownInput = action.payload;
    },
    addColumnInput: (state) => {
      state.columnInput.push({
        name: "",
        c_id: "",
      });
    },
    deleteColumnInput: (state, action: PayloadAction<number>) => {
      state.columnInput.splice(action.payload, 1);
    },
    updateColumnInput: (
      state,
      action: PayloadAction<{ name: string; index: number }>
    ) => {
      state.columnInput[action.payload.index].name = action.payload.name;
    },
    resetColumnInput: (state) => {
      state.columnInput = [{ name: "", c_id: "" }];
    },
    overideColumnInput: (state, action: PayloadAction<StatusProps[]>) => {
      state.columnInput = action.payload;
    },
    addSubtaskInput: (state) => {
      state.subtaskInput.push({
        s_title: "",
        t_id: "",
        s_id: "",
        isCompleted: false,
        c_id: "",
      });
    },
    deleteSubtaskInput: (state, action: PayloadAction<number>) => {
      state.subtaskInput.splice(action.payload, 1);
    },
    updateSubtaskInput: (
      state,
      action: PayloadAction<{ name: string; index: number }>
    ) => {
      state.subtaskInput[action.payload.index].s_title = action.payload.name;
    },
    resetSubtaskInput: (state) => {
      state.subtaskInput = [
        { s_title: "", t_id: "", s_id: "", isCompleted: false, c_id: "" },
      ];
    },
    overideSubtaskInput: (state, action: PayloadAction<SubTaskProps[]>) => {
      state.subtaskInput = action.payload;
    },
  },
});

export const {
  addColumnInput,
  addSubtaskInput,
  deleteColumnInput,
  deleteSubtaskInput,
  overideColumnInput,
  overideSubtaskInput,
  resetColumnInput,
  resetSubtaskInput,
  setBoardNameInput,
  setDescriptionInput,
  setDropdownInput,
  setTaskNameInput,
  updateColumnInput,
  updateSubtaskInput,
} = inputsSlice.actions;
export const selectInputs = (state: RootState) => state.inputs;
export default inputsSlice.reducer;
