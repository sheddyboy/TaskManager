// import axios from "axios";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button, DelButton } from "../components/UI/Button.styled";
import Checkbox from "../components/UI/Checkbox";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={{ theme }}>
      <Button state="primary" onClick={toggleTheme}>
        Click Me
      </Button>
      <DelButton>Delete</DelButton>
      <Checkbox name="Get" />
      <form>
        <h1>Add Board</h1>
        <label>Name</label>
        <input type="text" />
        <label>Columns</label>
      </form>
    </ThemeProvider>
  );
};

export default Index;
