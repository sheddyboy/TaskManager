import React from "react";
import { ColumnWrapper } from "./styled/ColumnWrapper.styled";
import { MiniCardWrapper } from "./styled/MiniCardWrapper.styled";
import { StatusWrapper } from "./styled/StatusWrapper.styled";

const Column = () => {
  return (
    <>
      <ColumnWrapper>
        <StatusWrapper>
          <i></i>
          <p>TODO</p>
        </StatusWrapper>
        <MiniCardWrapper>
          <p>Build UI for onboarding flow</p>
          <span>0 of 6 substasks</span>
        </MiniCardWrapper>
      </ColumnWrapper>
    </>
  );
};

export default Column;
