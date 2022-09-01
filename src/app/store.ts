import { configureStore } from "@reduxjs/toolkit";
import { boardsApi } from "../features/boards/boardsAPI";
import boardsSlice from "../features/boards/boardsSlice";
import inputsSlice from "../features/inputs/inputsSlice";
import toggleSlice from "../features/toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    boards: boardsSlice,
    inputs: inputsSlice,
    toggle: toggleSlice,
    [boardsApi.reducerPath]: boardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
