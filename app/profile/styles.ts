import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  padding: 63px 193px 0px 350px;

  @media (max-width: 1440px) {
    padding: 47px 153px 0px 270px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserStatus = styled.p`
  font-size: 14px;
  padding: 7px 14px;
  color: #fff;
  background: #0360fd;
  border-radius: 16px;

  @media (max-width: 1440px) {
    font-size: 10px;
    padding: 6px 11px;
  }
`;

export const UserName = styled.p`
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 26px;
  }
`;
