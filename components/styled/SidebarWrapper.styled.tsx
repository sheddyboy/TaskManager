import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#FFFFFF" : "#2B2C37"};
  height: 100%;
  border-right: 1px solid
    ${({ theme }) => (theme.theme === "light" ? "#e4ebfa" : "#3E3F4E")};
  padding-right: 24px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  margin-top: 32px;
  margin-left: 34px;
`;
export const Board = styled.div`
  span {
    display: block;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #828fa3;
    margin-left: 32px;
    margin-top: 54px;
    margin-bottom: 19px;
  }
`;
interface AddedBoardProps {
  active?: boolean;
}
export const AddedBoard = styled.div<AddedBoardProps>`
  background-color: ${({ active }) => (active ? "#635FC7" : "")};
  border-radius: 0px 100px 100px 0px;
  padding-left: 32px;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  display: flex;
  i {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
  p {
    font-size: 15px;
    line-height: 19px;
    color: ${({ active }) => (active ? "#FFFFFF" : "#828FA3")};
  }
`;

export const CreateBoard = styled.div`
  margin-left: 32px;
  margin-top: 31px;
  display: flex;
  i {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
  p {
    margin: 0;
    font-style: normal;
    letter-spacing: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #635fc7;
    cursor: pointer;
  }
`;
export const Bottom = styled.div``;
export const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.theme === "light" ? "#f4f7fd" : "#20212C"};
  border-radius: 6px;
  margin-left: 24px;
  height: 48px;
`;
export const Sun = styled.i`
  margin-right: 24px;
`;
export const Moon = styled.i`
  margin-left: 24px;
`;

export const HideSidebar = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  margin-bottom: 47px;
  margin-left: 31px;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #828fa3;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
`;
