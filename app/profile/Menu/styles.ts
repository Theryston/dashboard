import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #707070;
  margin-top: 40px;

  @media (max-width: 1440px) {
    margin-top: 30px;
  }
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  padding: 10px 34px;
  margin-bottom: -1px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? "4px solid blue" : "4px solid transparent"};
  white-space: nowrap;
  font-size: 18px;
  font-weight: ${(props) => (props.isActive ? "bold" : "400")};
  color: ${(props) => (props.isActive ? "#000000" : "#C7C9CF")};

  @media (max-width: 1440px) {
    font-size: 13px;
    padding: 8px 12.5px;
  }
`;
