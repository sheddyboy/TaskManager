import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 480px;
  background: ${({ theme }) =>
    theme.theme === "light" ? "#FFFFFF" : "#2B2C37"};
  border-radius: 6px;
  padding: 32px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
  margin-bottom: 24px;
`;
export const DeleteTitle = styled(Title)`
  color: #ea5555;
`;
