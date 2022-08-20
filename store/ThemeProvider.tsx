import React, { createContext, ReactNode, useState } from "react";

export interface ThemeCtxProps {
  theme: "light" | "dark";
  changeTheme: () => void;
}

const defaultThemeCtxProps: ThemeCtxProps = {
  theme: "light",
  changeTheme: () => {},
};

export const ThemeCtx = createContext<ThemeCtxProps>(defaultThemeCtxProps);
const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeCtx.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeProvider;
