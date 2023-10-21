import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: rgba(7, 10, 26, 0.8);
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled(motion.div)`
  color: #fff;
  background: #000000;
  box-sizing: border-box;
  padding: 110px 0px 0px 73px;
  height: 100%;
  width: 474px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media (max-width: 1440px) {
    width: 356px;
    padding: 83px 0px 0px 54px;
    gap: 41px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 1440px) {
    gap: 12px;
  }
`;

export const UserProfileImage = styled(Image)`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50px;

  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const UserName = styled.p`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const ListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;

  @media (max-width: 1440px) {
    gap: 31px;
  }
`;

export const ListPageItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 1440px) {
    gap: 21px;
  }
`;

export const ListPageIcon = styled(Image)`
  width: 18px;
  height: auto;

  @media (max-width: 1440px) {
    width: 13px;
  }
`;

export const ListPageText = styled.p`
  font-size: 19px;
  color: #bbbbc3;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: #0060fd;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 22px;
  box-sizing: border-box;
  padding: 8px;

  @media (max-width: 1440px) {
    width: 19px;
    height: 19px;
    margin-left: 19px;
    padding: 6px;
    font-size: 13px;
  }
`;
