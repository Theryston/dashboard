import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const ValueNumWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 1440px) {
    gap: 5px;
  }

  .value-num {
    font-size: 80px;
    font-weight: bold;
    color: #0060fd;

    @media (max-width: 1440px) {
      font-size: 59px;
    }
  }

  .period {
    color: #bbc0cc;
    font-size: 15px;
    margin-top: 15px;

    @media (max-width: 1440px) {
      font-size: 10px;
    }
  }
`;
