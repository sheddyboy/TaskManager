import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { testValues } from "../defaultValues";
import useStateManager from "../hooks/useStateManager";
import Checkbox from "./UI/Checkbox";
import Dropdown from "./UI/Dropdown";
import { Card } from "./UI/styled/Card.styled";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
  }
  i {
    cursor: pointer;
    padding-left: 24px;
  }
`;
const Content = styled.div`
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
    margin-bottom: 24px;
  }

  label {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => (theme.theme === "light" ? "#828fa3" : "#FFFFFF")};
    display: block;
  }
`;

const ViewTask = () => {
  const { state } = useStateManager();
  const { currentTask } = state;
  const { tasks, subtasks } = currentTask;
  return (
    <Card>
      <TitleWrapper>
        <h2>{tasks.title}</h2>
        <i>
          <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
        </i>
      </TitleWrapper>
      <Content>
        <p>{tasks.description}</p>
        <label>Subtasks (2 of 3)</label>
        {subtasks.map((i) => (
          <Checkbox key={i.s_id} name={i.s_title} />
        ))}
      </Content>
      <Dropdown
        label="Current Status"
        options={testValues}
        value="Doing"
        marginTop="20px"
      />
    </Card>
  );
};

export default ViewTask;
