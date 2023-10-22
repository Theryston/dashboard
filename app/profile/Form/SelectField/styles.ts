import Image from "next/image";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 16px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  font-size: 20px;
  width: 100%;
  outline: none;
  border: none;
  background: #f4f6fb;
  box-sizing: border-box;
  padding: 19px 10px;
  font-weight: bold;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  @media (max-width: 1440px) {
    font-size: 15px;
    padding: 13px 10px;
  }
`;

export const IconDown = styled(Image)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 16px;
  height: auto;

  @media (max-width: 1440px) {
    width: 12px;
  }
`;
