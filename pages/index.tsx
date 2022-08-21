import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "../components/UI/styled/Button.styled";
import Dropdown, { Options } from "../components/UI/Dropdown";
import Navbar from "../components/Navbar";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import { Body } from "../components/styled/Body.styled";
const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  //   useEffect(() => {
  //     axios("/api/boards").then((data) => console.log(data));
  //   }, []);
  const [ddVal, setDdVal] = useState<Options>({
    title: "Select...",
    id: "",
  });

  const handleChange = (selected: Options) => {
    setDdVal(selected);
  };

  const testValues: Options[] = [
    { title: "What", id: "1" },
    { title: "Alright", id: "2" },
    { title: "Hey", id: "3" },
    { title: "Yoo", id: "4" },
    { title: "Okay", id: "5" },
  ];
  return (
    <ThemeProvider theme={{ theme }}>
      <Taskmanager>
        <Sidebar />
        <Body>
          <Navbar />
          <Dropdown
            value={ddVal.title}
            onChange={handleChange}
            options={testValues}
          />
          <Button
            style={{ marginTop: "100px" }}
            state="primary"
            onClick={toggleTheme}
          >
            Click Me
          </Button>
        </Body>
      </Taskmanager>
    </ThemeProvider>
  );
};

export default Index;
