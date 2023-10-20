import Image from "next/image";
import styled from "styled-components";

export const UserAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;

  @media (max-width: 1440px) {
    width: 38px;
    height: 38px;
  }
`;

export const UserImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
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
