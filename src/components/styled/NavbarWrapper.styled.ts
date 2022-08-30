import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => (theme.theme === "light" ? light.bg : dark.bg)};
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000112;
`;

export const Logo = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid
    ${({ theme }) =>
      theme.theme === "light" ? light.logoBorder : dark.logoBorder};
  width: 209px;
  height: 100%;

  @media (max-width: 580px) {
    display: none;
  }
`;
export const LogoMobile = styled(Logo)`
  border-right: none;
  width: auto;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  display: flex;
  color: ${({ theme }) =>
    theme.theme === "light" ? light.titleColor : dark.titleColor};
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 580px) {
    margin-left: 16px;
    margin-right: 8px;
  }
`;
export const Actions = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  i {
    padding-left: 24px;
    cursor: pointer;
  }
`;

const light = {
  bg: "#FFFFFF",
  titleColor: "#000112",
  logoBorder: "#E4EBFA",
};
const dark = {
  bg: "#2B2C37",
  titleColor: "#FFFFFF",
  logoBorder: "#3E3F4E",
};
