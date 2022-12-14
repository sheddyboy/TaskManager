import React from "react";
import DataManager from "../../dataManager/DataManager";
import useStateManager from "../../hooks/useStateManager";
import { ModalProps } from "../../types";
import AddNewBoard from "../AddNewBoard";
import AddNewTask from "../AddNewTask";
import DeleteBoard from "../DeleteBoard";
import DeleteTask from "../DeleteTask";
import EditBoard from "../EditBoard";
import EditTask from "../EditTask";
import ViewTask from "../ViewTask";
import { ModalWrapper, Overlay } from "./styled/ModalWrapper.styled";

const Modal = ({ onClick }: ModalProps) => {
  const { boardInputReset, taskInputReset } = DataManager();
  const { state } = useStateManager();
  const { modalTracker } = state;
  return (
    <ModalWrapper>
      <Overlay
        onClick={() => {
          onClick();
          boardInputReset();
          taskInputReset();
        }}
      />
      {modalTracker.map((i) => {
        let modal;
        if (i.name === "addNewBoard" && i.value) {
          modal = <AddNewBoard key={i.name} />;
        }
        if (i.name === "addNewTask" && i.value) {
          modal = <AddNewTask key={i.name} />;
        }
        if (i.name === "deleteBoard" && i.value) {
          modal = <DeleteBoard key={i.name} />;
        }
        if (i.name === "deleteTask" && i.value) {
          modal = <DeleteTask key={i.name} />;
        }
        if (i.name === "editBoard" && i.value) {
          modal = <EditBoard key={i.name} />;
        }
        if (i.name === "editTask" && i.value) {
          modal = <EditTask key={i.name} />;
        }
        if (i.name === "viewTask" && i.value) {
          modal = <ViewTask key={i.name} />;
        }
        return modal;
      })}
    </ModalWrapper>
  );
};

export default Modal;
