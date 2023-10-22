import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 21px;

  @media (max-width: 1440px) {
    gap: 16px;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-size: 16px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  gap: 49px;

  @media (max-width: 1440px) {
    gap: 35px;
  }
`;
