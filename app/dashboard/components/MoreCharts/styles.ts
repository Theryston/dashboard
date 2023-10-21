import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const Card = styled.div<{ isHouver: boolean }>`
  height: 100%;
  width: 100%;
  background: #fff;
  position: relative;

  border: 1px solid ${(props) => (props.isHouver ? "#0160fd" : "#FFF")};
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardIcon = styled(Image)`
  margin-left: 15px;
  margin-bottom: 10px;
  height: 25px;

  @media (max-width: 1440px) {
    margin-bottom: 13px;
    margin-left: 11px;
    height: 19px;
  }
`;

export const CardText = styled.p`
  margin-left: 15px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;

  br {
    margin: 0px;
  }

  @media (max-width: 1440px) {
    margin-left: 11px;
    margin-bottom: 13px;
    font-size: 12px;
  }
`;

export const IconCardGo = styled(Image)<{ isHouver: boolean }>`
  position: absolute;
  top: ${(props) => (props.isHouver ? "10px" : "20px")};
  right: ${(props) => (props.isHouver ? "10px" : "20px")};
  width: 15px;
  transition: 0.2s;

  @media (max-width: 1440px) {
    top: ${(props) => (props.isHouver ? "10px" : "15px")};
    right: ${(props) => (props.isHouver ? "10px" : "15px")};
    width: 12px;
  }
`;
