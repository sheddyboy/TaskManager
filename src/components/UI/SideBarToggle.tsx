import Image from "next/image";
import React from "react";
import useStateManager from "../../hooks/useStateManager";
import { SideBarToggleWrapper } from "./styled/SideBarToggleWrapper.styled";

const SideBarToggle = () => {
  const { dispatch, actionValues } = useStateManager();
  const { SIDEBAR_TOGGLE } = actionValues;

  return (
    <SideBarToggleWrapper
      onClick={() => {
        dispatch({ type: SIDEBAR_TOGGLE });
      }}
    >
      <i>
        <Image alt="" src="/eye.svg" width={16} height={11} />
      </i>
    </SideBarToggleWrapper>
  );
};

export default SideBarToggle;
