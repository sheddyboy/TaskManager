import styled from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  i {
    display: block;
    margin-right: 12px;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #49c4e5;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #828fa3;
    text-transform: uppercase;
  }
`;
