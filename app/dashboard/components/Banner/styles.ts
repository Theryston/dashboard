import Image from "next/image";
import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const BannerContentWrapper = styled.div`
  position: absolute;
  color: #fff;
  height: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 40px;
  gap: 10px;

  @media (max-width: 1440px) {
    max-width: 430px;
    gap: 8px;
  }
`;

export const BannerTitle = styled.h1`
  margin: 0;
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 25px;
  }
`;

export const BannerParagraph = styled.p`
  font-size: 16px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const ImageBanner = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CloseBannerIcon = styled(Image)<{ show: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.2s;

  @media (max-width: 1440px) {
    top: 7px;
    right: 7px;
    width: 23px;
    height: 23px;
  }
`;
