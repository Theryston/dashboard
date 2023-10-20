import Image from "next/image";
import styled from "styled-components";

export const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .details {
    font-size: 14px;
    color: #98989a;

    @media (max-width: 1440px) {
      font-size: 10px;
    }
  }
`;

export const CurrentPriceText = styled.p`
  font-size: 30px !important;
  font-weight: bold;
  color: #0160fd;

  @media (max-width: 1440px) {
    font-size: 22px !important;
  }
`;

export const EyesIcon = styled(Image)`
  width: 25px;

  @media (max-width: 1440px) {
    width: 19px;
  }
`;

export const ProgressWrapper = styled.div`
  margin-top: 47px;

  @media (max-width: 1440px) {
    margin-top: 35px;
    font-size: 9px;
  }
`;

export const ProcessInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .details-progress {
    font-size: 14px;

    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }

  .value-num-wrapper {
    display: flex;
    gap: 10px;

    @media (max-width: 1440px) {
      gap: 5px;
    }
  }

  .value-num {
    font-size: 25px;
    font-weight: bold;
    color: #0060fd;

    @media (max-width: 1440px) {
      font-size: 20px;
    }
  }

  .period {
    color: #bbc0cc;
    font-size: 15px;

    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 15px;
  background: #e4e9f5;
  margin-top: 16px;

  @media (max-width: 1440px) {
    margin-top: 14px;
    height: 11px;
  }
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: 30%;
  background: #285ef3;
`;
