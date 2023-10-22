import Image from "next/image";
import styled from "styled-components";
import MotionFadeIn from "./MotionFadeIn";

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 100;
  top: 136px;
  left: 36px;
  width: ${(props) => (props.isOpen ? "360px" : "100px")};
  height: 700px;
  background: #f4f6fc;
  transition: 0.2s;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    top: 102px;
    width: ${(props) => (props.isOpen ? "268px" : "70px")};
    height: 525px;
  }
`;

export const BusinessSection = styled.div`
  padding: 47px 20px 0px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 35px 16px 0px 16px;
  }
`;

export const BusinessInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  gap: 10px;

  @media (max-width: 1440px) {
    font-size: 12px;
    gap: 5px;
  }
`;

export const BusinessLogo = styled(Image)`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;

  @media (max-width: 1440px) {
    width: 38px;
    height: 38px;
  }
`;

export const BusinessName = styled(MotionFadeIn)``;

export const LineWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    height: 60px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #e8e8e8;
`;

export const NavigationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 41px;

  @media (max-width: 1440px) {
    padding-left: 28px;
    gap: 30px;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  cursor: pointer;

  @media (max-width: 1440px) {
    gap: 13px;
  }
`;

export const NavigationItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavigationExpandIcon = styled(Image)`
  width: 10px;
  height: auto;
  margin-right: 41px;

  @media (max-width: 1440px) {
    margin-right: 28px;
    width: 8px;
  }
`;

export const NavigationText = styled.p`
  font-size: 18px;
  color: #b6b6b9;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const NavigationIcon = styled(Image)`
  width: 19px;

  @media (max-width: 1440px) {
    width: 14px;
  }
`;
