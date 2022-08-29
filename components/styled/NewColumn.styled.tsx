import styled from "styled-components";

export const NewColumn = styled.div`
  cursor: pointer;
  margin-top: 63px;
  margin-right: 24px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => (theme.theme === "light" ? light.bg : dark.bg)};
  border-radius: 6px;

  p {
    width: 280px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #828fa3;
  }
`;

const light = {
  bg: "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);",
};
const dark = {
  bg: "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%);",
};
