import React from "react";
import { ToggleWrapper } from "./styled/ToggleWrapper.styled";

interface ToggleProps {
  value: boolean;
  onToggle: () => void;
}

const Toggle = ({ onToggle, value }: ToggleProps) => {
  return (
    <ToggleWrapper>
      <input type="checkbox" checked={value} onChange={onToggle} />
      <span></span>
    </ToggleWrapper>
  );
};

export default Toggle;
