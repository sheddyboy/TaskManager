import React from "react";
import { CheckboxWrapper } from "./styled/CheckboxWrapper.styled";

interface CheckboxProps {
  name: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox = ({ name, value, onChange }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <input checked={value} type="checkbox" onChange={onChange} />
      <span></span>
      <label>{name}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
