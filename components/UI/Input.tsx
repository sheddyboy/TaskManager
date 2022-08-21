import React, { useRef, useState } from "react";
import { InputWrapper } from "./styled/InputWrapper.styled";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
}

const Input = ({ name, ...att }: InputProps) => {
  const [validation, setValidation] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const valHandler = () => {
    inputRef.current?.value === "" && setValidation(true);
  };
  return (
    <InputWrapper>
      <label>{name}</label>
      <input
        style={{
          borderColor: validation ? "#EA5555" : "rgba(130, 143, 163, 0.25)",
        }}
        ref={inputRef}
        onBlur={valHandler}
        onFocus={() => {
          setValidation(false);
        }}
        {...att}
      />
      {validation && <span>Can&apos;t be empty</span>}
    </InputWrapper>
  );
};

export default Input;
