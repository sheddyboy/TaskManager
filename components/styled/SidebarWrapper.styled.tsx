import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 1/3;
  grid-column: 1/2;
  background-color: ${({ theme }) =>
    theme.theme === "light" ? "#FFFFFF" : "#2B2C37"};
  height: 100%;
  border-right: 1px solid
    ${({ theme }) => (theme.theme === "light" ? "#e4ebfa" : "#3E3F4E")};
  padding-right: 24px;
  @media (max-width: 580px) {
    position: absolute;
    right: 20px;
    top: 85px;
    width: 264px;
    height: 350px;
    border-radius: 8px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  margin-top: 32px;
  margin-left: 34px;

  @media (max-width: 580px) {
    display: none;
  }
`;
export const Board = styled.div`
  overflow: auto;
  max-height: 500px;

  @media (max-width: 580px) {
    max-height: 200px;
  }
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

    @media (max-width: 580px) {
      margin-top: 16px;
    }
  }
`;
interface AddedBoardProps {
  active?: boolean;
}
export const AddedBoard = styled.div<AddedBoardProps>`
  position: relative;
  background-color: ${({ active }) => (active ? "#635FC7" : "")};
  border-radius: 0px 100px 100px 0px;
  height: 48px;
  cursor: pointer;

  label {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 32px;
    border-radius: 0px 100px 100px 0px;
  }

  input {
    display: none;
  }

  input:checked ~ div {
    background-color: #635fc7;
  }

  input:checked ~ p {
    color: #ffffff;
  }

  i img {
    src: url("/icon-board.svg");
  }

  input:checked ~ i img {
    src: url("/icon-board-white.svg");
  }

  & div {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0px 100px 100px 0px;
    background-color: transparent;
  }

  i {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
  p {
    pointer-events: none;
    position: relative;
    font-size: 15px;
    line-height: 19px;
    color: ${({ active }) => (active ? "#FFFFFF" : "#828FA3")};
  }
`;

export const CreateBoard = styled.div`
  margin-left: 32px;
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
export const Bottom = styled.div`
  /* margin-top: 25px; */
`;
export const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.theme === "light" ? "#f4f7fd" : "#20212C"};
  border-radius: 6px;
  margin-top: 22px;
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

  @media (max-width: 580px) {
    /* display: none; */
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
`;

export const Active = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0px 100px 100px 0px;
  background-color: #635fc7;
`;
