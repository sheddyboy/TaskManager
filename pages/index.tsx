import React, { useEffect, useRef } from "react";
import { Taskmanager } from "../components/styled/Taskmanager.styled";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import DataManager from "../dataManager/DataManager";
import useStateManager from "../hooks/useStateManager";
import Navbar from "../components/Navbar";
import Modal from "../components/UI/Modal";

const Index = () => {
  const { getBoards } = DataManager();
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TOGGLE } = actionValues;
  const { toggleSidebar } = state;

  // onMount Ref stops the useeffect from mounting twice
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      onMount.current = false;
      getBoards();
    }
  }, []);

  return (
    <>
      {state.toggleModal && (
        <Modal
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
          }}
        />
      )}
      <Taskmanager state={state}>
        {toggleSidebar && <Sidebar />}
        <Navbar />
        <Body />
      </Taskmanager>
    </>
  );
};

export default Index;
