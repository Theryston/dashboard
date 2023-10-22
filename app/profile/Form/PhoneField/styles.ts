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

export const WrapperPhone = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1440px) {
    gap: 3px;
  }
`;

export const CountryWrapper = styled.div`
  height: 100%;
  background: #f4f6fb;
  padding: 14px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1440px) {
    padding: 11px 10px;
    font-size: 15px;
    gap: 4px;
  }
`;

export const CountryFlag = styled(Image)``;

export const CountryCode = styled.div``;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
  background: #f4f6fb;
  box-sizing: border-box;
  padding: 19px 10px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 15px;
    padding: 13px 10px;
  }
`;
