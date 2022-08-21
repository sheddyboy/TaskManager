import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { DropdownHeader } from "./styled/DropdownHeader.styled";
import { DropdownHeaderTitle } from "./styled/DropdownHeaderTitle.styled";
import { DropdownList } from "./styled/DropdownList.styled";
import { DropdownListItem } from "./styled/DropdownListItem.styled";
import { DropdownWrapper } from "./styled/DropdownWrapper.styled";

export interface Options {
  title: string;
  id: string;
  selected: boolean;
}

interface DropdownProps {
  options: Options[];
  onChange: ({}: Options) => void;
}

const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [items, setItems] = useState<Options[]>();

  const toggleDropdown = () => {
    setDropdownToggle((dropdownToggle) => !dropdownToggle);
  };
  const handleOption = (option: Options) => {
    if (items) {
      toggleDropdown();
      const tempItems = [...items];
      tempItems.map((i) => {
        i.selected = false;
        if (i.id === option.id) {
          i.selected = true;
        }
      });
      setItems(tempItems);
    }
  };
  const title = items?.find((i) => i.selected === true);

  useMemo(() => {
    title && onChange(title);
  }, [title]);

  useEffect(() => {
    setItems(options);
  }, [options]);

  return (
    <DropdownWrapper>
      <span>Status</span>
      <DropdownHeader onClick={toggleDropdown}>
        <Title title={title?.title}></Title>
        <i>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </i>
      </DropdownHeader>
      {dropdownToggle && (
        <DropdownList>
          {items?.map((i) => (
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

Title.defaultProps = {
  title: "Select...",
};

interface OptionProps {
  title: string;
  onClick: () => void;
}

const Option = ({ title, onClick }: OptionProps) => {
  <div></div>;
  return <DropdownListItem onClick={onClick}>{title}</DropdownListItem>;
};
