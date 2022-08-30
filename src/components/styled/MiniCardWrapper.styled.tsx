import styled from "styled-components";

export const MiniCardWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  width: 280px;
  padding: 23px 16px 23px 16px;
  background: ${({ theme }) =>
    theme.theme === "light" ? "#ffffff" : "#2B2C37"};
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;

  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
    margin-bottom: 8px;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #828fa3;
  }
`;
