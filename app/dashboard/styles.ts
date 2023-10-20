import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  padding: 50px 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1440px) {
    padding: 37px 36px;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 1440px) {
      font-size: 12px;
    }
  }

  .user-name {
    font-size: 26px;
    font-weight: bold;

    @media (max-width: 1440px) {
      font-size: 17px;
    }
  }
`;
