import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px #dddfe4 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 36px;

  @media (max-width: 1440px) {
    height: 67px;
    padding-left: 35px;
  }
`;

export const WrapperNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const BackIcon = styled(Image)`
  width: 25px;
  height: auto;

  @media (max-width: 1440px) {
    width: 19px;
  }
`;

export const Logo = styled(Image)`
  width: 53px;
  height: auto;

  @media (max-width: 1440px) {
    width: 40px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 314px;
  height: 100%;
  border-left: 1px #dddfe4 solid;

  @media (max-width: 1440px) {
    width: 231px;
  }

  p {
    font-size: 18px;
    color: #1a1a1a;

    @media (max-width: 1440px) {
      font-size: 13px;
    }
  }
`;

export const ManIcon = styled(Image)`
  height: 20px;
  width: auto;
  margin-right: 15px;

  @media (max-width: 1440px) {
    height: 15px;
    margin-right: 11px;
  }
`;

export const ArrowDownIcon = styled(Image)`
  margin-left: 22px;
  height: auto;
  width: 14px;

  @media (max-width: 1440px) {
    margin-left: 14px;
    width: 11px;
  }
`;
