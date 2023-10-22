import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;

  @media (max-width: 1440px) {
    font-size: 13px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const CustomRadioButton = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  border: 3px solid #fff;
  outline: 2px solid ${(props) => (props.isSelected ? "#0160FD" : "#ABAEB7")};
  margin-right: 10px;
  border-radius: 50px;
  background: ${(props) => (props.isSelected ? "#0160FD" : "transparent")};
  box-sizing: border-box;
  width: 24px;
  height: 24px;

  @media (max-width: 1440px) {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
`;
