import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 193px;

  @media (max-width: 1440px) {
    margin-top: 37px;
    grid-column-gap: 153px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MultiInputsWrapper = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: 1440px) {
    gap: 27px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 8px;

  @media (max-width: 1440px) {
    margin-top: 20px;
    gap: 15px;
  }
`;

export const DirectorLinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const OpenDirectorLinkIcon = styled(Image)`
  width: 15px;
  height: 15px;
  margin-top: auto;

  @media (max-width: 1440px) {
    width: 13px;
    height: 13px;
  }
`;
