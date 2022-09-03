import React, { useEffect, useRef } from "react";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import useStateManager from "../hooks/useStateManager";
import Navbar from "../components/Navbar";
import Modal from "../components/UI/Modal";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ThemeProvider } from "styled-components";
import { useGetBoardsQuery } from "../features/boards/boardsAPI";
import { toggleModal } from "../features/toggle/toggleSlice";
import DataManager from "../dataManager";
import { updateBoard, setCurrentBoard } from "../features/boards/boardsSlice";

// import  from "../dataManager";
// import getBoards from "../dataManager/getBoards";

// const { getBoards } = DataManager();
const Index = () => {
  const { data, isSuccess } = useGetBoardsQuery();
  const dispatch = useAppDispatch();

  // const { getBoards } = DataManager();
  const { theme, sidebarToggle, modalToggle } = useAppSelector(
    (state) => state.toggle
  );
  // const {  } = DataManager();
  // const { state, dispatch, actionValues } = useStateManager();
  // const { MODAL_TOGGLE } = actionValues;
  // const { toggleSidebar } = state;

  // onMount Ref stops the useeffect from mounting twice
  // const onMount = useRef(true);
  // useEffect(() => {
  //   if (onMount.current) {
  //     onMount.current = false;
  //     console.log("mount");
  //   }
  // }, []);
  // console.log(modalToggle);

  return (
    <>
      <ThemeProvider theme={{ theme: theme }}>
        {modalToggle && <Modal />}
        <Taskmanager sidebarToggle={sidebarToggle}>
          {sidebarToggle && <Sidebar />}
          <Navbar />
          <Body />
        </Taskmanager>
      </ThemeProvider>
    </>
  );
};

export default Index;
