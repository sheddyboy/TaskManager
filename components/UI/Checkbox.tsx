import React from "react";
import { CheckboxWrapper } from "./styled/CheckboxWrapper.styled";

interface CheckboxProps {
  name: string;
  // value: boolean;
}

const Checkbox = ({ name }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" />
      <span></span>
      <label>{name}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
