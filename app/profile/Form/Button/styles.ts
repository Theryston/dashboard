import styled from "styled-components";

export const Button = styled.button<{ variant: "black" | "outline" }>`
  width: 200px;
  height: 50px;
  outline: none;
  border: 0.5px solid #000000;
  background: ${(props) =>
    props.variant === "black" ? "#000000" : "transparent"};
  color: ${(props) => (props.variant === "black" ? "#FFF" : "#000")};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    width: 150px;
    height: 38px;
    font-size: 11px;
  }
`;
