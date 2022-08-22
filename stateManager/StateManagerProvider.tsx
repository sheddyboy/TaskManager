import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { defaultStateManagerCtxProps } from "../defaultValues";
import { StateManagerCtxProps, StateManagerProviderProps } from "../types";
import StateManager from "./StateManagerReducer";

export const StateManagerCtx = createContext(defaultStateManagerCtxProps);

const StateManagerProvider = ({ children }: StateManagerProviderProps) => {
  const { state, dispatch } = StateManager();
  const { theme } = state;
  const value: StateManagerCtxProps = {
    state,
    dispatch,
  };
  return (
    <StateManagerCtx.Provider value={value}>
      <ThemeProvider theme={{ theme }}>{children}</ThemeProvider>
    </StateManagerCtx.Provider>
  );
};

export default StateManagerProvider;
