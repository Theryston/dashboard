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
