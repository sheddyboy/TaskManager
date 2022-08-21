import Image from "next/image";
import React, { useState } from "react";
import { DropdownHeader } from "./styled/DropdownHeader.styled";
import { DropdownHeaderTitle } from "./styled/DropdownHeaderTitle.styled";
import { DropdownList } from "./styled/DropdownList.styled";
import { DropdownListItem } from "./styled/DropdownListItem.styled";
import { DropdownWrapper } from "./styled/DropdownWrapper.styled";

export interface Options {
  title: string;
  id: string;
}

interface DropdownProps {
  options: Options[];
  onChange: ({}: Options) => void;
  value: string;
}

const Dropdown = ({ options, onChange, value }: DropdownProps) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const toggleDropdown = () => {
    setDropdownToggle((dropdownToggle) => !dropdownToggle);
  };
  const handleOption = (option: Options) => {
    toggleDropdown();
    onChange(option);
  };

  return (
    <DropdownWrapper>
      <span>Status</span>
      <DropdownHeader onClick={toggleDropdown}>
        <Title title={value}></Title>
        <i>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </i>
      </DropdownHeader>
      {dropdownToggle && (
        <DropdownList>
          {options?.map((i) => (
            <Option
              key={i.id}
              title={i.title}
              onClick={() => {
                handleOption(i);
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
