import Image from "next/image";
import styled from "styled-components";

export const UserAvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserImage = styled(Image)`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: 1440px) {
    width: 38px;
    height: 38px;
  }
`;

export const Circle = styled.div`
  height: 14px;
  width: 14px;
  background: #0060fd;
  border-radius: 50px;
  border: 2px solid #f2f2f4;
  position: absolute;
  bottom: -4px;
  right: -4px;

  @media (max-width: 1440px) {
    height: 10px;
    width: 10px;
    bottom: -2px;
    right: -2px;
  }
`;

export const NotificationFlag = styled.p<{ show?: boolean }>`
  white-space: nowrap;
  background: #0060fd;
  color: #fff;
  font-size: 16px;
  padding: 7px 20px;
  border-radius: 18px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.2s;
`;
