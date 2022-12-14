import Image from "next/image";
import React, { useState } from "react";
import useStateManager from "../../hooks/useStateManager";
import { DropdownHeader } from "./styled/DropdownHeader.styled";
import { DropdownHeaderTitle } from "./styled/DropdownHeaderTitle.styled";
import { DropdownList } from "./styled/DropdownList.styled";
import { DropdownListItem } from "./styled/DropdownListItem.styled";
import { DropdownWrapper } from "./styled/DropdownWrapper.styled";

export interface Options {
  name: string;
  c_id: string;
}

interface DropdownProps {
  options: Options[];
  value: string;
  onChange?: ({}: Options) => void;
  marginBottom?: string;
  marginTop?: string;
  label?: string;
}

const Dropdown = ({
  options,
  value,
  marginBottom,
  marginTop,
  label,
  onChange,
}: DropdownProps) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const toggleDropdown = () => {
    setDropdownToggle((dropdownToggle) => !dropdownToggle);
  };

  const { state, dispatch, actionValues } = useStateManager();
  const { dropdownInput } = state;
  const { DROPDOWN_INPUT } = actionValues;

  return (
    <DropdownWrapper
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
    >
      <span>{label}</span>
      <DropdownHeader onClick={toggleDropdown}>
        <Title title={value}></Title>
        <i>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </i>
      </DropdownHeader>
      {dropdownToggle && (
        <DropdownList>
          {options.map((option) => (
            <Option
              key={option.c_id}
              title={option.name}
              onClick={() => {
                toggleDropdown();
                dispatch({
                  type: DROPDOWN_INPUT,
                  dropdownInputPayload: option,
                });
                onChange && onChange(option);
              }}
            />
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

interface TitleProps {
  title?: string;
}

const Title = ({ title }: TitleProps) => {
  return <DropdownHeaderTitle>{title}</DropdownHeaderTitle>;
};

interface OptionProps {
  title: string;
  onClick: () => void;
}

const Option = ({ title, onClick }: OptionProps) => {
  <div></div>;
  return <DropdownListItem onClick={onClick}>{title}</DropdownListItem>;
};
