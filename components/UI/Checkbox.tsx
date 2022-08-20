import React from "react";
import { CheckboxWrapper } from "./CheckboxWrapper.styled";

interface CheckboxProps {
  name: string;
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
