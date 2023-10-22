import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 16px;

  .small {
    color: #aaaeb7;
    margin-left: 4px;
  }

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
  padding: 19px 10px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 15px;
    padding: 13px 10px;
  }
`;
