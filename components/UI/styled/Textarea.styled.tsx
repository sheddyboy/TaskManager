import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;
  padding: 8px 25px 8px 16px;
  width: 100%;
  height: 112px;
  background: transparent;
  color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: ${({ theme }) => (theme.theme === "light" ? "#000112" : "#FFFFFF")};
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;
