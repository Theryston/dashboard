import Image from "next/image";
import styled from "styled-components";

export const ExpectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TreeIcon = styled(Image)`
  height: 61px;

  @media (max-width: 1440px) {
    height: 54px;
  }
`;

export const ValueNumWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: 1440px) {
    gap: 5px;
  }

  .value-num {
    font-size: 40px;
    font-weight: bold;
    color: #0060fd;

    @media (max-width: 1440px) {
      font-size: 29px;
    }
  }

  .period {
    color: #bbc0cc;
    font-size: 15px;

    @media (max-width: 1440px) {
      font-size: 10px;
    }
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #939393;

  @media (max-width: 1440px) {
    font-size: 9px;
  }
`;
