import React, { useRef, useState } from "react";
import { InputWrapper, Label } from "./styled/InputWrapper.styled";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  canDelete?: boolean;
  marginBottom?: string;
  marginTop?: string;
  height?: string;
  value?: string;
}

const Input = ({
  name,
  value,
  canDelete,
  marginBottom,
  marginTop,
  height,
  ...attr
}: InputProps) => {
  const [validation, setValidation] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const valHandler = () => {
    inputRef.current?.value === "" && setValidation(true);
  };
  return (
    <InputWrapper
      canDelete={canDelete as false}
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
    >
      <Label>{name}</Label>
      <input
        {...attr}
        value={value}
        style={{
          borderColor: validation ? "#EA5555" : "rgba(130, 143, 163, 0.25)",
        }}
        ref={inputRef}
        onBlur={valHandler}
        onFocus={() => {
          setValidation(false);
        }}
      />
      {validation && <span>Can&apos;t be empty</span>}
    </InputWrapper>
  );
};

export default Input;
