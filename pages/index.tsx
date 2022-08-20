import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button, DelButton } from "../components/UI/Button.styled";
import Checkbox from "../components/UI/Checkbox";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    axios("/api/boards").then((data) => console.log(data));
  }, []);
  console.log("Hey");
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
