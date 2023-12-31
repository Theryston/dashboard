import Image from "next/image";
import styled from "styled-components";

export const SideBarContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  height: 100vh;
  width: 365px;
  padding: 50px 28px 0px 28px;
  border-right: 1px #dddfe4 solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1440px) {
    padding: 37px 19px 0px 19px;
    width: 281px;
  }
`;

export const ContentSideBar = styled.div``;

export const Logo = styled(Image)`
  width: 148px;

  @media (max-width: 1440px) {
    width: 111px;
  }
`;

export const WrapperNavigation = styled.div`
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (max-width: 1440px) {
    margin-top: 58px;
    gap: 34px;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 19px;

  @media (max-width: 1440px) {
    gap: 14px;
  }
`;

export const NavigationIcon = styled(Image)`
  width: 17px;

  @media (max-width: 1440px) {
    width: 13px;
  }
`;

export const NavigationText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  width: 100%;
  background: #b4b8c3;
  height: 0.4px;
`;

export const FooterItems = styled.div`
  margin-bottom: 62px;
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media (max-width: 1440px) {
    margin-bottom: 49px;
  }
  @media (max-width: 1400px) {
    margin-bottom: 20px;
  }
`;

export const FooterItem = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 1440px) {
    font-size: 10px;
  }
`;
