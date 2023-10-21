import Image from "next/image";
import styled, { css } from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .chart-title {
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 1440px) {
      font-size: 12px;
      gap: 13px;
    }
  }
`;

export const Card = styled.div<{
  hasFooter?: boolean;
  customPadding?: {
    large: string;
    small: string;
  };
}>`
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  padding: ${(props) =>
    props.customPadding
      ? props.customPadding.large
      : `32px 40px ${props.hasFooter ? "0px" : "32px"} 40px`};
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: ${(props) =>
      props.customPadding
        ? props.customPadding.small
        : `24px 28px ${props.hasFooter ? "0px" : "24px"} 28px`};
  }
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;

export const Line = styled.div`
  width: 100%;
  background: #b4b8c3;
  height: 1px;
`;

export const FooterItem = styled.div`
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1440px) {
    height: 42px;
  }

  p {
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 1440px) {
      font-size: 12px;
    }
  }
`;

export const FooterGoIcon = styled(Image)`
  width: 9px;

  @media (max-width: 1440px) {
    width: 7px;
  }
`;
