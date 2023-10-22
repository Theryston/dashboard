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

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
  background: #f4f6fb;
  box-sizing: border-box;
  padding: 19px 10px 19px 0px;
  font-weight: bold;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    display: none;
  }

  @media (max-width: 1440px) {
    font-size: 15px;
    padding: 13px 10px 13px 0px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #f4f6fb;
`;

export const CalendarIcon = styled(Image)`
  margin: 0px 10px;
  width: 22px;
  height: 22px;

  @media (max-width: 1440px) {
    width: 17px;
    height: 17px;
  }
`;

export const IconDown = styled(Image)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 16px;
  height: auto;
  z-index: 100;

  @media (max-width: 1440px) {
    width: 12px;
  }
`;
