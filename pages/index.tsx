import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "../components/UI/styled/Button.styled";
import { Options } from "../components/UI/Dropdown";
const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  //   useEffect(() => {
  //     axios("/api/boards").then((data) => console.log(data));
  //   }, []);
  // const [ddVal, setDdVal] = useState<Options>();

  const testValues: Options[] = [
    { title: "What", id: "1", selected: false },
    { title: "Alright", id: "2", selected: false },
    { title: "Hey", id: "3", selected: false },
    { title: "Yoo", id: "4", selected: false },
    { title: "Okay", id: "5", selected: false },
  ];
  return (
    <ThemeProvider theme={{ theme }}>
      <Button state="primary" onClick={toggleTheme}>
        Click Me
      </Button>
    </ThemeProvider>
  );
};

export default Index;
