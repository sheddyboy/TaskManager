import Image from "next/image";
import React, { useContext } from "react";
import { actionValues } from "../../defaultValues";
import { StateManagerCtx } from "../../stateManager/StateManagerProvider";
import { SideBarToggleWrapper } from "./styled/SideBarToggleWrapper.styled";

const SideBarToggle = () => {
  const { dispatch } = useContext(StateManagerCtx);
  const { SIDEBAR_TOGGLE } = actionValues;

  return (
    <SideBarToggleWrapper
      onClick={() => {
        dispatch({ type: SIDEBAR_TOGGLE });
      }}
    >
      <i>
        <Image src="/eye.svg" width={16} height={11} />
      </i>
    </SideBarToggleWrapper>
  );
};

export default SideBarToggle;
